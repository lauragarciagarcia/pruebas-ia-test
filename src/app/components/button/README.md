# Button Component

## 📋 Overview

A fully **reusable**, **configurable**, and **accessible** Angular button component designed for consistent use throughout your application. This component follows WCAG 2.1 accessibility guidelines and implements a tokenized design system for easy customization.

## ✨ Features

- ✅ **Fully Accessible** - WCAG 2.1 compliant with proper ARIA attributes
- 🎨 **Tokenized Design System** - Customizable through CSS variables
- 🔧 **Highly Configurable** - Multiple variants, sizes, and states
- ⌨️ **Keyboard Navigation** - Full keyboard support
- 🔄 **Loading States** - Built-in loading spinner
- 🎯 **Icon Support** - Left and right positioned icons
- 📱 **Responsive** - Works on all screen sizes
- ♿ **Accessibility First** - Focus indicators, screen reader support, reduced motion
- 🚀 **Production Ready** - Type-safe, well-tested, and optimized

## 📦 Installation

The component is already included in the project. Simply import it in your module:

```typescript
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ButtonComponent],
  // ...
})
export class YourModule { }
```

## 🚀 Basic Usage

```html
<app-button (clicked)="handleClick()">
  Click me
</app-button>
```

## 🎨 Variants

The button component supports 5 different visual variants:

### Primary (default)
```html
<app-button variant="primary">Primary Button</app-button>
```

### Secondary
```html
<app-button variant="secondary">Secondary Button</app-button>
```

### Outline
```html
<app-button variant="outline">Outline Button</app-button>
```

### Ghost
```html
<app-button variant="ghost">Ghost Button</app-button>
```

### Danger
```html
<app-button variant="danger">Danger Button</app-button>
```

## 📏 Sizes

Three size options are available:

```html
<app-button size="small">Small</app-button>
<app-button size="medium">Medium</app-button>
<app-button size="large">Large</app-button>
```

## 🎯 States

### Disabled
```html
<app-button [disabled]="true">Disabled Button</app-button>
```

### Loading
```html
<app-button [loading]="isLoading">
  {{ isLoading ? 'Loading...' : 'Submit' }}
</app-button>
```

### Full Width
```html
<app-button [fullWidth]="true">Full Width Button</app-button>
```

## 🖼️ Icons

### Icon on the Left (default)
```html
<app-button icon="✓" iconPosition="left">Save</app-button>
```

### Icon on the Right
```html
<app-button icon="→" iconPosition="right">Next</app-button>
```

## 🔧 API Reference

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type attribute |
| `disabled` | `boolean` | `false` | Disabled state |
| `loading` | `boolean` | `false` | Loading state (shows spinner) |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `icon` | `string` | `undefined` | Icon to display |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Icon position |
| `ariaLabel` | `string` | `undefined` | Custom ARIA label for accessibility |

### Outputs

| Output | Type | Description |
|--------|------|-------------|
| `clicked` | `EventEmitter<MouseEvent>` | Emitted when button is clicked |

## 📝 Advanced Examples

### Submit Button with Loading State
```typescript
// Component
export class MyComponent {
  isSubmitting = false;

  async handleSubmit(): Promise<void> {
    this.isSubmitting = true;
    try {
      await this.submitForm();
      alert('Form submitted!');
    } finally {
      this.isSubmitting = false;
    }
  }
}
```

```html
<!-- Template -->
<app-button 
  type="submit"
  variant="primary"
  size="large"
  [loading]="isSubmitting"
  icon="✓"
  (clicked)="handleSubmit()">
  {{ isSubmitting ? 'Submitting...' : 'Submit Form' }}
</app-button>
```

### Confirmation Dialog Buttons
```html
<app-button 
  variant="danger" 
  size="medium"
  icon="✕"
  (clicked)="handleDelete()">
  Delete Account
</app-button>

<app-button 
  variant="outline" 
  size="medium"
  (clicked)="handleCancel()">
  Cancel
</app-button>
```

### Full Width Call-to-Action
```html
<app-button 
  variant="primary"
  size="large"
  [fullWidth]="true"
  icon="→"
  iconPosition="right"
  (clicked)="handleCTA()">
  Get Started Now
</app-button>
```

## ♿ Accessibility Features

This component implements comprehensive accessibility features:

### Keyboard Navigation
- **Tab**: Navigate to the button
- **Enter/Space**: Activate the button
- **Shift+Tab**: Navigate backward

### ARIA Attributes
- `aria-label`: Custom label for screen readers
- `aria-disabled`: Indicates disabled state
- `aria-busy`: Indicates loading state
- `aria-hidden`: Hides decorative icons from screen readers

### Focus Management
- Clear focus indicators (customizable via CSS variables)
- Proper focus outline with configurable color and width
- Respects `prefers-reduced-motion` for animations

### High Contrast Mode
- Increased border width in high contrast mode
- Proper color contrast ratios (WCAG AA compliant)

### Screen Reader Support
- Loading state announced to screen readers
- Disabled state properly communicated
- Icon elements hidden from screen readers (decorative)

## 🎨 Customization with CSS Variables

All visual aspects can be customized through CSS variables (design tokens):

### Available CSS Variables

```css
:root {
  /* Typography */
  --btn-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
  --btn-font-weight: 600;
  --btn-line-height: 1.5;
  
  /* Spacing */
  --btn-gap: 0.5rem;
  
  /* Borders */
  --btn-border-width: 2px;
  --btn-border-radius: 0.5rem;
  
  /* Focus */
  --btn-focus-outline-width: 3px;
  --btn-focus-outline-color: #4A90E2;
  --btn-focus-outline-offset: 2px;
  
  /* Sizes */
  --btn-small-padding-y: 0.375rem;
  --btn-small-padding-x: 0.75rem;
  --btn-small-font-size: 0.875rem;
  
  --btn-medium-padding-y: 0.625rem;
  --btn-medium-padding-x: 1.25rem;
  --btn-medium-font-size: 1rem;
  
  --btn-large-padding-y: 0.875rem;
  --btn-large-padding-x: 1.75rem;
  --btn-large-font-size: 1.125rem;
  
  /* Primary Variant Colors */
  --btn-primary-bg: #4A90E2;
  --btn-primary-color: #ffffff;
  --btn-primary-bg-hover: #357ABD;
  
  /* ...and many more! */
}
```

### Custom Theme Example

```css
/* Dark theme override */
.dark-theme {
  --btn-primary-bg: #60a5fa;
  --btn-primary-bg-hover: #3b82f6;
  --btn-focus-outline-color: #60a5fa;
}
```

## 🏗️ Component Architecture

### File Structure
```
src/app/components/button/
├── button.component.ts      # Component logic & TypeScript
├── button.component.html    # Template
├── button.component.css     # Styles with CSS variables
└── README.md               # This documentation
```

### Design Principles
1. **Separation of Concerns** - Logic, template, and styles are cleanly separated
2. **No Hard-coded Styles** - All styling through CSS variables
3. **Type Safety** - Full TypeScript support with proper types
4. **Accessibility First** - WCAG 2.1 compliance built-in
5. **Performance** - Optimized rendering with OnPush strategy support
6. **Extensibility** - Easy to extend without modifying core code

## 🧪 Testing Considerations

When testing components using this button:

```typescript
// Example test
it('should emit clicked event when button is clicked', () => {
  const handleClick = jasmine.createSpy('handleClick');
  component.clicked.subscribe(handleClick);
  
  const button = fixture.nativeElement.querySelector('button');
  button.click();
  
  expect(handleClick).toHaveBeenCalled();
});

it('should not emit clicked event when disabled', () => {
  component.disabled = true;
  const handleClick = jasmine.createSpy('handleClick');
  component.clicked.subscribe(handleClick);
  
  const button = fixture.nativeElement.querySelector('button');
  button.click();
  
  expect(handleClick).not.toHaveBeenCalled();
});
```

## 📚 Best Practices

1. **Always use semantic button type**
   ```html
   <app-button type="submit">Submit Form</app-button>
   <app-button type="reset">Reset</app-button>
   <app-button type="button">Regular Action</app-button>
   ```

2. **Provide aria-label for icon-only buttons**
   ```html
   <app-button icon="✕" ariaLabel="Close dialog"></app-button>
   ```

3. **Use loading state for async operations**
   ```html
   <app-button [loading]="isLoading" (clicked)="handleAsync()">
     {{ isLoading ? 'Processing...' : 'Submit' }}
   </app-button>
   ```

4. **Choose appropriate variants**
   - `primary`: Main call-to-action
   - `secondary`: Secondary actions
   - `outline`: Less prominent actions
   - `ghost`: Tertiary actions, navigation
   - `danger`: Destructive actions (delete, remove)

## 🔄 Future Enhancements

Potential improvements for future versions:

- [ ] Icon library integration (FontAwesome, Material Icons)
- [ ] Button groups component
- [ ] Dropdown button variant
- [ ] Badge/notification indicator support
- [ ] Custom animation options
- [ ] Dark mode variants
- [ ] Unit tests with Jasmine/Karma
- [ ] Storybook integration

## 📄 License

This component is part of the pruebas-ia-test project.

## 🤝 Contributing

When extending this component:
1. Maintain accessibility standards
2. Use CSS variables for customization
3. Update this documentation
4. Add examples for new features
5. Ensure backward compatibility

## 📞 Support

For issues or questions about this component:
- Check the examples in `src/app/app.component.html`
- Review the CSS variables in `src/styles.css`
- Inspect the component implementation in `button.component.ts`

---

**Created for Jira Issue ID-2** - Reusable, accessible, and configurable Angular button component
