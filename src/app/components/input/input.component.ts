import { Component, Input, forwardRef, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search';
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outlined' | 'filled' | 'standard';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements ControlValueAccessor {
  // Configuration inputs (tokens)
  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() size: InputSize = 'medium';
  @Input() variant: InputVariant = 'outlined';
  @Input() errorMessage: string = '';
  @Input() helperText: string = '';
  @Input() ariaLabel: string = '';
  @Input() autocomplete: string = '';
  @Input() maxlength: number | null = null;
  @Input() minlength: number | null = null;
  @Input() pattern: string = '';
  @Input() step: string = '';
  @Input() min: string | number = '';
  @Input() max: string | number = '';

  // Internal state
  value: any = '';
  isFocused: boolean = false;
  isTouched: boolean = false;

  // ControlValueAccessor callbacks
  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  // Unique ID for accessibility
  inputId: string = `input-${Math.random().toString(36).substr(2, 9)}`;

  constructor(@Optional() @Self() public ngControl: NgControl) {
    // Replace the default ControlValueAccessor
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Event handlers
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    let newValue: any = target.value;

    // Convert to number for number input type
    if (this.type === 'number' && newValue !== '') {
      newValue = parseFloat(newValue);
    }

    this.value = newValue;
    this.onChange(newValue);
  }

  onInputFocus(): void {
    this.isFocused = true;
  }

  onInputBlur(): void {
    this.isFocused = false;
    this.isTouched = true;
    this.onTouched();
  }

  // Computed properties
  get hasError(): boolean {
    if (!this.ngControl) {
      return !!this.errorMessage;
    }
    return !!(this.ngControl.invalid && (this.ngControl.dirty || this.ngControl.touched));
  }

  get displayErrorMessage(): string {
    if (this.errorMessage) {
      return this.errorMessage;
    }

    if (!this.ngControl || !this.ngControl.errors) {
      return '';
    }

    const errors = this.ngControl.errors;
    
    if (errors['required']) {
      return 'Este campo es requerido';
    }
    if (errors['email']) {
      return 'Ingrese un email válido';
    }
    if (errors['minlength']) {
      return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
    }
    if (errors['maxlength']) {
      return `Máximo ${errors['maxlength'].requiredLength} caracteres`;
    }
    if (errors['pattern']) {
      return 'Formato inválido';
    }
    if (errors['min']) {
      return `El valor mínimo es ${errors['min'].min}`;
    }
    if (errors['max']) {
      return `El valor máximo es ${errors['max'].max}`;
    }

    return 'Campo inválido';
  }

  get containerClasses(): string {
    const classes = [
      'input-container',
      `input-container--${this.size}`,
      `input-container--${this.variant}`
    ];

    if (this.hasError) {
      classes.push('input-container--error');
    }
    if (this.disabled) {
      classes.push('input-container--disabled');
    }
    if (this.isFocused) {
      classes.push('input-container--focused');
    }
    if (this.value) {
      classes.push('input-container--filled');
    }

    return classes.join(' ');
  }
}
