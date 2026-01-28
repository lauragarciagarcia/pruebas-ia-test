import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Reusable Range Slider Component
 * 
 * An accessible and customizable range slider component that supports
 * min/max values, step increments, disabled state, and custom formatting.
 * Fully compliant with WCAG 2.1 AA accessibility standards.
 * 
 * @example
 * <app-range 
 *   [min]="650" 
 *   [max]="2000" 
 *   [value]="1100" 
 *   [step]="50"
 *   label="Choose an excess level"
 *   minLabel="650 €"
 *   maxLabel="2,000 €"
 *   [valueFormatter]="formatCurrency"
 *   (valueChange)="handleValueChange($event)">
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
   * Minimum value of the range
   * @default 0
   */
  @Input() min: number = 0;

  /**
   * Maximum value of the range
   * @default 100
   */
  @Input() max: number = 100;

  /**
   * Current value of the slider
   */
  @Input() 
  set value(val: number) {
    if (val !== this._value) {
      this._value = val;
      this.onChange(val);
      this.onTouched();
    }
  }
  get value(): number {
    return this._value;
  }
  private _value: number = 0;

  /**
   * Step increment for the slider
   * @default 1
   */
  @Input() step: number = 1;

  /**
   * Disabled state
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Label/description text displayed above the slider
   */
  @Input() label?: string;

  /**
   * Label for minimum value
   */
  @Input() minLabel?: string;

  /**
   * Label for maximum value
   */
  @Input() maxLabel?: string;

  /**
   * Show value tooltip above thumb
   * @default true
   */
  @Input() showValueTooltip: boolean = true;

  /**
   * Custom value formatter function
   * @example (value) => `${value} €`
   */
  @Input() valueFormatter?: (value: number) => string;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Show tick marks on the track
   * @default true
   */
  @Input() showTicks: boolean = true;

  /**
   * Number of tick marks to display
   * @default 5
   */
  @Input() tickCount: number = 5;

  /**
   * Value change event emitter
   */
  @Output() valueChange = new EventEmitter<number>();

  /**
   * ControlValueAccessor implementation
   */
  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  /**
   * Get array of tick positions for display
   */
  get ticks(): number[] {
    if (!this.showTicks || this.tickCount < 2) {
      return [];
    }

    const ticks: number[] = [];
    for (let i = 0; i < this.tickCount; i++) {
      const percentage = (i / (this.tickCount - 1)) * 100;
      ticks.push(percentage);
    }
    return ticks;
  }

  /**
   * Get formatted value for display
   */
  get formattedValue(): string {
    if (this.valueFormatter) {
      return this.valueFormatter(this.value);
    }
    return this.value.toString();
  }

  /**
   * Get the percentage position of the current value
   */
  get percentage(): number {
    if (this.max === this.min) return 0;
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  /**
   * Get computed ARIA label
   */
  get computedAriaLabel(): string {
    if (this.ariaLabel) {
      return this.ariaLabel;
    }
    return this.label || 'Range slider';
  }

  /**
   * Handle input change
   */
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = parseFloat(target.value);
    
    if (!isNaN(newValue)) {
      this.value = newValue;
      this.valueChange.emit(newValue);
    }
  }

  /**
   * Handle keyboard navigation
   */
  onKeyDown(event: KeyboardEvent): void {
    let newValue = this.value;
    const largeStep = (this.max - this.min) / 10;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        newValue = Math.max(this.min, this.value - this.step);
        break;
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        newValue = Math.min(this.max, this.value + this.step);
        break;
      case 'Home':
        event.preventDefault();
        newValue = this.min;
        break;
      case 'End':
        event.preventDefault();
        newValue = this.max;
        break;
      case 'PageDown':
        event.preventDefault();
        newValue = Math.max(this.min, this.value - largeStep);
        break;
      case 'PageUp':
        event.preventDefault();
        newValue = Math.min(this.max, this.value + largeStep);
        break;
      default:
        return;
    }

    if (newValue !== this.value) {
      this.value = newValue;
      this.valueChange.emit(newValue);
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: number): void {
    if (value !== undefined && value !== null) {
      this._value = value;
    }
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
