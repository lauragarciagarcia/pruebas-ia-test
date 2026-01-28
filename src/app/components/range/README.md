# Range Slider Component (app-range)

An accessible and customizable range slider component built for Angular, following the Figma design specification and WCAG 2.1 AA accessibility standards.

## Features

- ✅ Fully accessible with ARIA attributes
- ✅ Complete keyboard navigation support
- ✅ Screen reader friendly
- ✅ Customizable min/max values and step increments
- ✅ Value formatting support
- ✅ Disabled state handling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Touch-friendly on mobile devices
- ✅ High contrast mode support
- ✅ Reduced motion preferences respected
- ✅ Reactive Forms compatible (ControlValueAccessor)

## Usage

### Basic Example

```html
<app-range
  [min]="0"
  [max]="100"
  [value]="50"
  label="Select a value"
  minLabel="0"
  maxLabel="100">
</app-range>
```

### Advanced Example (Figma Design)

```html
<app-range
  [min]="650"
  [max]="2000"
  [step]="50"
  [(value)]="excessValue"
  label="Choose an excess level that suits you. Choosing a higher excess can lower your premium."
  minLabel="650 €"
  maxLabel="2,000 €"
  [valueFormatter]="formatCurrency"
  (valueChange)="handleValueChange($event)">
</app-range>
```

### With Reactive Forms

```typescript
import { FormControl } from '@angular/forms';

// In your component
priceControl = new FormControl(100);

// In your template
<app-range
  [min]="0"
  [max]="500"
  [formControl]="priceControl"
  label="Select price">
</app-range>
```

## API

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `min` | `number` | `0` | Minimum value of the range |
| `max` | `number` | `100` | Maximum value of the range |
| `value` | `number` | `0` | Current value of the slider |
| `step` | `number` | `1` | Step increment for the slider |
| `disabled` | `boolean` | `false` | Disabled state |
| `label` | `string` | `undefined` | Label/description text displayed above the slider |
| `minLabel` | `string` | `undefined` | Label for minimum value (defaults to min value) |
| `maxLabel` | `string` | `undefined` | Label for maximum value (defaults to max value) |
| `showValueTooltip` | `boolean` | `true` | Show value tooltip above thumb |
| `valueFormatter` | `(value: number) => string` | `undefined` | Custom value formatter function |
| `ariaLabel` | `string` | `undefined` | ARIA label for accessibility |

### Outputs

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<number>` | Emitted when the value changes |

### Methods

The component implements `ControlValueAccessor` for seamless integration with Angular Reactive Forms.

## Value Formatters

You can provide custom value formatters to display values in different formats:

```typescript
// Currency formatter
formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Temperature formatter
formatTemperature = (value: number): string => {
  return `${value}°C`;
};

// Percentage formatter
formatPercentage = (value: number): string => {
  return `${value}%`;
};
```

## Accessibility

### WCAG 2.1 AA Compliance

This component is fully compliant with WCAG 2.1 Level AA standards:

#### ✅ Perceivable
- **1.4.3 Contrast (Minimum)**: All colors meet minimum contrast ratios (4.5:1 for text, 3:1 for UI components)
- **1.4.11 Non-text Contrast**: The slider track, thumb, and focus indicators meet the 3:1 contrast requirement
- **1.4.13 Content on Hover or Focus**: Tooltip remains visible and doesn't obscure content

#### ✅ Operable
- **2.1.1 Keyboard**: Fully operable via keyboard (see Keyboard Navigation below)
- **2.1.2 No Keyboard Trap**: Users can navigate away from the slider
- **2.4.7 Focus Visible**: Clear focus indicators on all interactive elements
- **2.5.5 Target Size**: Touch targets are at least 24x24px (meets enhanced AAA criteria)

#### ✅ Understandable
- **3.2.2 On Input**: Changing the slider value doesn't cause unexpected context changes
- **3.3.2 Labels or Instructions**: Clear labels and instructions provided

#### ✅ Robust
- **4.1.2 Name, Role, Value**: Proper ARIA attributes communicate state to assistive technologies

### ARIA Attributes

The component includes comprehensive ARIA attributes:

```html
<input 
  type="range"
  role="slider"
  aria-label="Range slider"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="50"
  aria-valuetext="50 €"
  aria-disabled="false"
/>
```

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `←` / `→` | Decrease / Increase by step |
| `↓` / `↑` | Decrease / Increase by step |
| `Home` | Set to minimum value |
| `End` | Set to maximum value |
| `Page Down` | Decrease by 10% of range |
| `Page Up` | Increase by 10% of range |
| `Tab` | Move focus to/from slider |

### Screen Reader Support

The component provides full screen reader support:

- **Value announcements**: Current value is announced with `aria-valuenow`
- **Formatted values**: `aria-valuetext` provides human-readable value (e.g., "1,100 €")
- **Range information**: `aria-valuemin` and `aria-valuemax` communicate the valid range
- **Label association**: `aria-label` or `aria-labelledby` provides context
- **State changes**: Screen readers announce when the value changes

### Testing Accessibility

#### Manual Testing with Keyboard

1. **Tab Navigation**
   - Press `Tab` to focus the slider
   - Verify a clear focus indicator appears

2. **Arrow Keys**
   - Press `←` / `→` or `↓` / `↑` to change the value
   - Verify the thumb moves and tooltip updates
   - Verify the value changes by the step amount

3. **Home/End Keys**
   - Press `Home` to jump to minimum value
   - Press `End` to jump to maximum value
   - Verify the slider responds correctly

4. **Page Up/Down**
   - Press `Page Up` to increase by 10% of the range
   - Press `Page Down` to decrease by 10% of the range
   - Verify larger incremental changes

#### Testing with Screen Readers

##### NVDA (Windows)

1. Start NVDA (Insert+N to open menu)
2. Navigate to the slider with `Tab`
3. NVDA should announce:
   - "Range slider, slider, [current value]"
   - Min and max values
4. Use arrow keys to change value
5. NVDA should announce each value change
6. Verify `aria-valuetext` is read (formatted value)

##### JAWS (Windows)

1. Start JAWS
2. Navigate to the slider with `Tab`
3. JAWS should announce:
   - "Range slider, slider, [current value] of [max value]"
4. Use arrow keys to change value
5. JAWS should announce each value change
6. Press `Insert+Tab` to read current value

##### VoiceOver (macOS)

1. Enable VoiceOver (Cmd+F5)
2. Navigate to slider with `Tab` or `VO+→`
3. VoiceOver should announce:
   - "Range slider, slider, [current value], minimum [min], maximum [max]"
4. Use arrow keys or `VO+↑↓` to change value
5. VoiceOver should announce each value change

##### TalkBack (Android)

1. Enable TalkBack in Settings
2. Swipe to the slider
3. TalkBack should announce the slider and current value
4. Swipe up/down to change value
5. TalkBack should announce each value change

#### Automated Testing

Use automated accessibility testing tools:

##### Lighthouse Audit

```bash
# Run Lighthouse accessibility audit
npm run build
npx serve -s dist
# Open Chrome DevTools > Lighthouse > Accessibility
```

Expected results:
- ✅ Accessibility score: 100
- ✅ No accessibility violations

##### axe DevTools

1. Install [axe DevTools Chrome Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
2. Open the component page
3. Run axe scan
4. Expected: No violations

##### WAVE

1. Install [WAVE Chrome Extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh)
2. Open the component page
3. Run WAVE evaluation
4. Expected: No errors

#### Testing Checklist

- [ ] Keyboard navigation works correctly
- [ ] Focus indicators are visible
- [ ] Screen reader announces values correctly
- [ ] `aria-valuetext` provides formatted values
- [ ] Disabled state is communicated
- [ ] High contrast mode works
- [ ] Reduced motion is respected
- [ ] Touch targets are large enough (24x24px minimum)
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] No keyboard traps
- [ ] Works with zoom up to 200%

## Responsive Design

The component is fully responsive and adapts to different screen sizes:

- **Desktop** (>768px): Full size with 16px font
- **Tablet** (≤768px): Slightly smaller with 15px font
- **Mobile** (≤480px): Compact with 14px font and larger touch targets

### Breakpoints

```css
/* Tablets and smaller */
@media (max-width: 768px) {
  /* Reduced font size and spacing */
}

/* Mobile */
@media (max-width: 480px) {
  /* Further reduced font size, larger touch targets */
}

/* Touch devices */
@media (hover: none) and (pointer: coarse) {
  /* Larger hit areas for touch input */
}
```

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## Design Tokens

The component uses CSS custom properties for easy theming:

```css
:host {
  /* Colors */
  --range-primary-500: #007AB3;
  --range-primary-600: #006192;
  --range-greyscale-500: #414141;
  --range-greyscale-200: #C2C2C2;
  --range-greyscale-white: #FFF;

  /* Spacing */
  --range-gap: 2rem;
  --range-track-height: 0.25rem;
  --range-thumb-size: 1.5rem;

  /* Typography */
  --range-font-family: 'Allianz Neo', -apple-system, Roboto, Helvetica, sans-serif;
  --range-font-size: 1rem;
}
```

## Customization

You can override the design tokens by providing custom CSS:

```css
app-range {
  --range-primary-500: #0066CC;
  --range-track-height: 0.5rem;
  --range-thumb-size: 2rem;
  --range-font-family: 'Your Custom Font', sans-serif;
}
```

## Performance

- **Lightweight**: No external dependencies
- **Efficient**: Uses CSS transforms for smooth animations
- **Optimized**: Respects `prefers-reduced-motion` for better performance
- **Fast**: Native `<input type="range">` for optimal browser performance

## License

This component is part of the project's component library.

## Support

For issues or questions, please contact the development team or open an issue in the project repository.
