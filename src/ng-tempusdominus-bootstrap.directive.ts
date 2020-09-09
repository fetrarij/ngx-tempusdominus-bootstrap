import {
    Directive,
    ElementRef,
    Input,
    OnInit,
    EventEmitter,
    Output,
    forwardRef,
    ChangeDetectorRef,
    KeyValueDiffer,
    KeyValueDiffers,
    DoCheck,
    OnDestroy,
    HostListener,
    HostBinding,
    Inject,
    ContentChild
} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

declare var $: any;
import * as moment from 'moment';

const _moment = moment;


@Directive({
    selector: '[NgTempusdominusBootstrapInput]',
    exportAs: 'NgTempusdominusBootstrapInput',
    providers: [
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgTempusdominusBootstrapInputDirective), multi: true}
    ]
})
export class NgTempusdominusBootstrapInputDirective implements OnInit, OnDestroy, DoCheck {

    _value: moment.Moment;
    private _options: any = {};
    @Input() set options(value) {
        if (value !== null) {
            this._options = value;
        }
    }

    get options(): any {
        return this._options;
    }

    @Output() click: EventEmitter<any> = new EventEmitter<any>();
    private dpinitialized: boolean;
    private inputOnly: boolean;

    dpElement;
    private optionsDiffer: KeyValueDiffer<string, any>;
    private _onTouched: any = () => {
    }
    private _onChange: any = () => {
    }

    constructor(
        private changeDetector: ChangeDetectorRef,
        protected el: ElementRef,
        private differs: KeyValueDiffers
    ) {
        this.dpinitialized = false;
        const $parent = $(el.nativeElement.parentNode);
        this.inputOnly = !$parent.hasClass('input-group');
        this.dpElement = $parent.hasClass('input-group') ? $parent : $(el.nativeElement);
    }

    @HostListener('blur') onBlur() {
        this._onTouched();
    }

    @HostListener('focus') onFocus() {
        if (this.inputOnly) {
            this.dpElement.datetimepicker('toggle');
        }
    }

    /**
     * For click outside of input, for input only
     * @param event event object
     */
    @HostListener('document:click', ['$event'])
    outsideClick(event): void {
        const targetElement: HTMLElement = event?.target;
        if (!targetElement || !this.inputOnly || this.options.inline) {
            return;
        }
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.dpElement.datetimepicker('hide');
        }
    }

    get value() {
        return this._value || null;
    }

    set value(val) {
        this._value = val;
        this._onChange(val);
        if (val) {
            this._onTouched();
        }
        this.changeDetector.markForCheck();
    }

    writeValue(value) {
        // if we have a previous value and current value is falsy
        // clear the picker
        if (this._value && !value) {
            this.value = null;
            this.dpElement.datetimepicker('clear');
        }
        this.value = value;
        this.setDpValue(value);
    }

    registerOnChange(fn) {
        this._onChange = fn;
    }

    registerOnTouched(fn: () => any): void {
        this._onTouched = fn;
    }

    private setDpValue(val) {
        if (!this.dpinitialized) {
            return;
        }
        if (val) {
            this.dpElement.datetimepicker('date', this.value);
        }
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.dpElement.datetimepicker('disable');
            return;
        }
        this.dpElement.datetimepicker('enable');
    }

    ngOnInit(): void {
        this.dpinitialized = true;
        this.dpElement.datetimepicker(this.options);
        this.dpElement.on('change.datetimepicker', (e) => {
            if (e.date && e.date !== this.value) {
                this.value = e.date || null;
            } else {
                const date = _moment(e.target.value, this.options.format);
                if (date.isValid()) {
                    this.value = date;
                }
            }
        });

        this.dpElement.on('click', () => {
            this.click.emit();
        });
        this.optionsDiffer = this.differs.find(this.options).create();
    }

    ngDoCheck() {
        if (this.dpinitialized) {
            const changes = this.optionsDiffer.diff(this.options);
            if (changes) {
                $.map(this.options, (value, key) => {
                    this.dpElement.datetimepicker(key, value);
                });
            }
        }
    }

    ngOnDestroy(): void {
        this.dpElement.datetimepicker('destroy');
    }

    toggle(): void {
        this.dpElement.datetimepicker('toggle');
    }
}

/**
 * Allows the datepicker to be toggled via click.
 *  */
@Directive({
    selector: '[NgTempusdominusBootstrapToggle]'
})
export class NgTempusdominusBootstrapToggleDirective {
    @HostBinding('style.cursor') cursor: String = 'pointer';

    @HostListener('click') click() {
        this.toggleOpen();
    }

    constructor(
        @Inject(forwardRef(() => NgTempusdominusBootstrapDirective)) public tempusDominus,
        elementRef: ElementRef
    ) {
    }

    toggleOpen() {
        this.tempusDominus.toggle();
    }
}

/**
 * Container
 *  */
@Directive({
    selector: '[NgTempusdominusBootstrap]'
})
export class NgTempusdominusBootstrapDirective {
    @ContentChild(NgTempusdominusBootstrapInputDirective) private _input: NgTempusdominusBootstrapInputDirective;

    /**
     * For click outside of container,
     * @param event event object
     * @param targetElement target element object
     */
    @HostListener('document:click', ['$event', '$event.target'])
    outsideClick(event, targetElement: HTMLElement): void {
        if (!targetElement) {
            return;
        }
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this._input.dpElement.datetimepicker('hide');
        }
    }


    constructor(private el: ElementRef) {
    }

    toggle() {
        this._input.toggle();
    }
}

