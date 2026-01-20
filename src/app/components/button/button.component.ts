import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Reusable Button Component
 * 
 * A fully accessible and customizable button component that supports
 * multiple variants, sizes, states, and icons.
 * 
 * @example
 * <app-button variant="primary" size="medium" (click)="handleClick()">
 *   Click me
 * </app-button>
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  /**
   * Button variant/style type
   * @default 'primary'
   */
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' = 'primary';

  /**
   * Button size
   * @default 'medium'
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Button type attribute
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Disabled state
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Loading state - shows spinner and disables interaction
   * @default false
   */
  @Input() loading: boolean = false;

  /**
   * Full width button
   * @default false
   */
  @Input() fullWidth: boolean = false;

  /**
   * Icon to display (left side)
   * Uses simple text icons, can be extended to support icon libraries
   */
  @Input() icon?: string;

  /**
   * Icon position
   * @default 'left'
   */
  @Input() iconPosition: 'left' | 'right' = 'left';

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel?: string;

  /**
   * Click event emitter
   */
  @Output() clicked = new EventEmitter<MouseEvent>();

  /**
   * Get computed CSS classes for the button
   */
  get buttonClasses(): string {
    const classes = [
      'btn',
      `btn-${this.variant}`,
      `btn-${this.size}`,
    ];

    if (this.fullWidth) {
      classes.push('btn-full-width');
    }

    if (this.loading) {
      classes.push('btn-loading');
    }

    return classes.join(' ');
  }

  /**
   * Check if button should be disabled
   */
  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  /**
   * Handle button click
   */
  onClick(event: MouseEvent): void {
    if (!this.isDisabled) {
      this.clicked.emit(event);
    }
  }
}
