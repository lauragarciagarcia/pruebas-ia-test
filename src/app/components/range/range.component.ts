import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Reusable Range (Slider) Component
 * 
 * A fully accessible and customizable range slider component that supports
 * min/max values, step configuration, value formatting, and reactive forms integration.
 * 
 * @example
 * <app-range 
 *   [min]="0" 
 *   [max]="100" 
 *   [value]="50" 
 *   [step]="1"
 *   (valueChange)="handleChange($event)">
 * </app-range>
 */
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements ControlValueAccessor {
  /**
   * Minimum value
   * @default 0
   */
  @Input() min: number = 0;

  /**
   * Maximum value
   * @default 100
   */
  @Input() max: number = 100;

  /**
   * Step increment
   * @default 1
   */
  @Input() step: number = 1;

  /**
   * Current value
   * @default 0
   */
  @Input() value: number = 0;

  /**
   * Disabled state
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Label for the range input
   */
  @Input() label?: string;

  /**
   * Show value tooltip above slider
   * @default true
   */
  @Input() showTooltip: boolean = true;

  /**
   * Show min/max labels
   * @default true
   */
  @Input() showMinMaxLabels: boolean = true;

  /**
   * Show tick marks
   * @default true
   */
  @Input() showTicks: boolean = true;

  /**
   * Currency symbol for formatting
   * @default '€'
   */
  @Input() currency: string = '€';

  /**
   * Show currency in formatted value
   * @default false
   */
  @Input() showCurrency: boolean = false;

  /**
   * Custom value formatter function
   */
  @Input() valueFormatter?: (value: number) => string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<number>();

  /**
   * Internal value for ngModel
   */
  private innerValue: number = 0;

  /**
   * ControlValueAccessor callbacks
   */
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    // Initialize value
    if (this.value !== undefined && this.value !== null) {
      this.innerValue = this.value;
    } else {
      this.innerValue = this.min;
    }
  }

  /**
   * Get the current value
   */
  get currentValue(): number {
    return this.innerValue;
  }

  /**
   * Get formatted value for display
   */
  get formattedValue(): string {
    if (this.valueFormatter) {
      return this.valueFormatter(this.innerValue);
    }
    
    const formatted = this.innerValue.toLocaleString('es-ES');
    return this.showCurrency ? `${formatted} ${this.currency}` : formatted;
  }

  /**
   * Get formatted min value
   */
  get formattedMin(): string {
    const formatted = this.min.toLocaleString('es-ES');
    return this.showCurrency ? `${formatted} ${this.currency}` : formatted;
  }

  /**
   * Get formatted max value
   */
  get formattedMax(): string {
    const formatted = this.max.toLocaleString('es-ES');
    return this.showCurrency ? `${formatted} ${this.currency}` : formatted;
  }

  /**
   * Calculate percentage for progress bar
   */
  get progressPercentage(): number {
    if (this.max === this.min) return 0;
    return ((this.innerValue - this.min) / (this.max - this.min)) * 100;
  }

  /**
   * Handle value change from input
   */
  onValueChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    this.updateValue(newValue);
  }

  /**
   * Update value and emit events
   */
  private updateValue(newValue: number): void {
    this.innerValue = newValue;
    this.value = newValue;
    this.valueChange.emit(newValue);
    this.onChange(newValue);
  }

  /**
   * Handle input event for real-time updates
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    this.innerValue = newValue;
  }

  /**
   * Handle blur event
   */
  onBlur(): void {
    this.onTouched();
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: number): void {
    if (value !== undefined && value !== null) {
      this.innerValue = value;
      this.value = value;
    }
  }

  /**
   * ControlValueAccessor: Register onChange
   */
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  /**
   * ControlValueAccessor: Register onTouched
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * ControlValueAccessor: Set disabled state
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
