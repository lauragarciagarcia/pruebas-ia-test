# Card Component

## 📋 Overview

A **reusable**, **flexible**, and **accessible** Angular card component that serves as a visual container for grouping content. This component is designed to display titles, text, images, actions, and other content in a consistent and visually appealing way throughout your application.

## ✨ Features

- ✅ **Fully Flexible** - Use `ng-content` for complete content customization
- 🎨 **Tokenized Design System** - Customizable through CSS variables
- 🔧 **Modular Structure** - Optional header, content, and actions sections
- 📦 **Encapsulated Styles** - Scoped styles with shadow, border, and padding
- 📱 **Responsive** - Adapts to all screen sizes
- ♿ **Accessible** - Semantic HTML with accessibility enhancements
- 🌓 **Dark Mode Support** - Built-in dark mode styles
- 🚀 **Production Ready** - No business logic, purely presentational

## 📦 Installation

The component is already included in the project. Simply import it in your module:

```typescript
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [CardComponent],
  // ...
})
export class YourModule { }
```

## 🚀 Basic Usage

```html
<app-card>
  <div card-header>
    <h3>Card Title</h3>
  </div>
  <div card-content>
    <p>This is the main content of the card.</p>
  </div>
  <div card-actions>
    <button>Action 1</button>
    <button>Action 2</button>
  </div>
</app-card>
```

## 📝 Content Sections

The card component uses `ng-content` with select attributes to organize content into three optional sections:

### Header Section (Optional)
Use the `card-header` attribute for titles and header content:

```html
<app-card>
  <div card-header>
    <h2>Product Details</h2>
  </div>
</app-card>
```

### Content Section (Main)
Use the `card-content` attribute for the main content, or omit it to use default projection:

```html
<app-card>
  <div card-content>
    <p>Product description goes here...</p>
    <img src="product.jpg" alt="Product">
  </div>
</app-card>
```

Or without the attribute:
```html
<app-card>
  <p>This content will appear in the content section by default.</p>
</app-card>
```

### Actions Section (Optional)
Use the `card-actions` attribute for buttons and action elements:

```html
<app-card>
  <div card-actions>
    <app-button variant="primary">Buy Now</app-button>
    <app-button variant="outline">Add to Cart</app-button>
  </div>
</app-card>
```

## 💡 Practical Examples

### Simple Information Card
```html
<app-card>
  <div card-header>
    <h3>Welcome!</h3>
  </div>
  <div card-content>
    <p>Thank you for joining our platform. Get started by exploring the features.</p>
  </div>
</app-card>
```

### Product Card with Actions
```html
<app-card>
  <div card-header>
    <h3>Premium Subscription</h3>
    <span class="badge">Popular</span>
  </div>
  <div card-content>
    <p class="price">$29.99/month</p>
    <ul>
      <li>Unlimited access</li>
      <li>Priority support</li>
      <li>Advanced features</li>
    </ul>
  </div>
  <div card-actions>
    <app-button variant="primary" fullWidth="true">Subscribe Now</app-button>
  </div>
</app-card>
```

### User Profile Card
```html
<app-card>
  <div card-header>
    <img src="avatar.jpg" alt="User Avatar" class="avatar">
    <h3>John Doe</h3>
    <p>Software Developer</p>
  </div>
  <div card-content>
    <p>Passionate about building great user experiences with Angular and modern web technologies.</p>
  </div>
  <div card-actions>
    <app-button variant="outline" icon="✉">Message</app-button>
    <app-button variant="ghost" icon="👤">View Profile</app-button>
  </div>
</app-card>
```

### Article Card
```html
<app-card>
  <div card-content>
    <img src="article-banner.jpg" alt="Article" class="article-image">
  </div>
  <div card-header>
    <h2>10 Tips for Better Angular Development</h2>
    <small>Published on January 27, 2024</small>
  </div>
  <div card-content>
    <p>Learn the best practices and techniques to improve your Angular applications...</p>
  </div>
  <div card-actions>
    <app-button variant="ghost" icon="→" iconPosition="right">Read More</app-button>
  </div>
</app-card>
```

### Notification Card
```html
<app-card>
  <div card-header>
    <span class="icon">🔔</span>
    <h4>New Message</h4>
  </div>
  <div card-content>
    <p>You have received a new message from the support team.</p>
    <small>2 minutes ago</small>
  </div>
  <div card-actions>
    <app-button variant="primary" size="small">View Message</app-button>
    <app-button variant="ghost" size="small">Dismiss</app-button>
  </div>
</app-card>
```

### Statistics Card
```html
<app-card>
  <div card-header>
    <h3>Total Sales</h3>
  </div>
  <div card-content>
    <p class="stat-value">$45,231</p>
    <p class="stat-change positive">+12.5% from last month</p>
  </div>
</app-card>
```

### Form Card
```html
<app-card>
  <div card-header>
    <h2>Contact Us</h2>
  </div>
  <div card-content>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
    </form>
  </div>
  <div card-actions>
    <app-button type="submit" variant="primary">Send Message</app-button>
    <app-button type="reset" variant="outline">Clear</app-button>
  </div>
</app-card>
```

## 🎨 Customization with CSS Variables

All visual aspects can be customized through CSS variables (design tokens):

### Available CSS Variables

```css
:root {
  /* Layout */
  --card-padding: 1.5rem;
  --card-padding-mobile: 1rem;
  --card-padding-small: 0.875rem;
  --card-max-width: 100%;
  --card-overflow: hidden;
  
  /* Background */
  --card-bg: #ffffff;
  --card-bg-dark: #2d3748;
  
  /* Border */
  --card-border-width: 1px;
  --card-border-color: #e0e0e0;
  --card-border-radius: 0.75rem;
  
  /* Shadow */
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --card-shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --card-transition-duration: 0.3s;
  --card-transition-timing: ease-in-out;
  --card-hover-transform: translateY(-2px);
  
  /* Header */
  --card-header-margin-bottom: 1rem;
  --card-header-padding-bottom: 0.75rem;
  --card-header-border-color: #f0f0f0;
  --card-header-font-weight: 600;
  --card-header-color: #2c3e50;
  
  /* Content */
  --card-content-font-size: 1rem;
  --card-content-line-height: 1.6;
  --card-content-color: #4a5568;
  
  /* Actions */
  --card-actions-gap: 0.75rem;
  --card-actions-padding-top: 0.75rem;
  --card-actions-border-color: #f0f0f0;
}
```

### Custom Theme Example

```css
/* Customize card appearance */
.featured-card {
  --card-bg: #f8f9fa;
  --card-border-color: #4A90E2;
  --card-border-width: 2px;
  --card-shadow: 0 4px 16px rgba(74, 144, 226, 0.2);
}

/* Compact card variant */
.compact-card {
  --card-padding: 1rem;
  --card-header-margin-bottom: 0.5rem;
  --card-actions-gap: 0.5rem;
}

/* Elevated card */
.elevated-card {
  --card-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  --card-shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.2);
  --card-hover-transform: translateY(-4px);
}
```

## 🏗️ Component Architecture

### File Structure
```
src/app/components/card/
├── card.component.ts      # Component logic (minimal)
├── card.component.html    # Template with ng-content slots
├── card.component.css     # Encapsulated styles
└── README.md             # This documentation
```

### Design Principles
1. **Content Projection** - Uses `ng-content` for maximum flexibility
2. **Separation of Concerns** - Structure, presentation, and behavior are decoupled
3. **No Business Logic** - Purely presentational component
4. **CSS Variables** - All styling through design tokens
5. **Responsive First** - Mobile-friendly with breakpoints
6. **Accessibility** - Semantic HTML structure
7. **Encapsulation** - Styles scoped to component

## ♿ Accessibility Features

### Semantic HTML
- Proper heading hierarchy in card headers
- Semantic structure with clear sections
- Support for ARIA attributes when needed

### Responsive Design
- Mobile-first approach
- Touch-friendly action buttons on mobile
- Adaptive spacing and sizing

### Visual Accessibility
- High contrast mode support
- Reduced motion support for animations
- Proper color contrast ratios
- Dark mode support

## 📱 Responsive Behavior

### Desktop (> 768px)
- Full padding and spacing
- Horizontal action buttons
- Hover effects enabled

### Tablet (481px - 768px)
- Reduced padding
- Maintained horizontal layout
- Adjusted gap spacing

### Mobile (≤ 480px)
- Compact padding
- Stacked action buttons (full width)
- Smaller border radius
- Touch-optimized spacing

## 🧪 Usage Patterns

### Grid Layout of Cards
```html
<div class="card-grid">
  <app-card *ngFor="let item of items">
    <div card-header>
      <h3>{{ item.title }}</h3>
    </div>
    <div card-content>
      <p>{{ item.description }}</p>
    </div>
    <div card-actions>
      <app-button (clicked)="viewDetails(item)">View</app-button>
    </div>
  </app-card>
</div>
```

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}
```

### Conditional Sections
```html
<app-card>
  <div card-header *ngIf="showHeader">
    <h3>{{ title }}</h3>
  </div>
  <div card-content>
    <p>{{ content }}</p>
  </div>
  <div card-actions *ngIf="hasActions">
    <app-button>Action</app-button>
  </div>
</app-card>
```

### Complex Content Composition
```html
<app-card>
  <div card-header>
    <div class="header-content">
      <img [src]="user.avatar" alt="Avatar">
      <div>
        <h3>{{ user.name }}</h3>
        <p class="subtitle">{{ user.role }}</p>
      </div>
    </div>
  </div>
  <div card-content>
    <app-user-stats [stats]="user.stats"></app-user-stats>
  </div>
  <div card-actions>
    <app-button icon="✉">Message</app-button>
    <app-button variant="outline" icon="👤">Profile</app-button>
  </div>
</app-card>
```

## 📚 Best Practices

1. **Use semantic headings in card-header**
   ```html
   <div card-header>
     <h3>Card Title</h3> <!-- Use appropriate heading level -->
   </div>
   ```

2. **Keep content focused and concise**
   - Cards work best with focused, scannable content
   - Avoid overwhelming users with too much information

3. **Use actions sparingly**
   - Limit to 1-3 primary actions
   - Place most important action first

4. **Maintain consistent card heights in grids**
   ```css
   app-card {
     height: 100%;
   }
   ```

5. **Provide visual hierarchy**
   - Use headers for titles
   - Clear content sections
   - Prominent actions

## 🔧 Integration with Other Components

### With Button Component
```html
<app-card>
  <div card-actions>
    <app-button variant="primary" size="medium">Primary</app-button>
    <app-button variant="outline" size="medium">Secondary</app-button>
  </div>
</app-card>
```

### With Forms
```html
<app-card>
  <form [formGroup]="myForm">
    <div card-header>
      <h2>Login</h2>
    </div>
    <div card-content>
      <!-- Form fields here -->
    </div>
    <div card-actions>
      <app-button type="submit" [disabled]="!myForm.valid">Login</app-button>
    </div>
  </form>
</app-card>
```

## 🎯 Use Cases

Perfect for:
- Product listings
- User profiles
- Dashboard widgets
- Article previews
- Notification displays
- Form containers
- Settings panels
- Pricing tables
- Feature highlights
- Call-to-action sections

## 🔄 Future Enhancements

Potential improvements for future versions:

- [ ] Clickable card variant (entire card is interactive)
- [ ] Image header variant
- [ ] Card footer section
- [ ] Collapsible/expandable cards
- [ ] Loading skeleton state
- [ ] Card carousel/slider integration
- [ ] Drag and drop support
- [ ] Unit tests with Jasmine/Karma

## 📄 License

This component is part of the pruebas-ia-test project.

## 🤝 Contributing

When extending this component:
1. Maintain the flexible content projection pattern
2. Use CSS variables for customization
3. Update this documentation
4. Ensure responsive behavior
5. Test across different screen sizes
6. Maintain accessibility standards

## 📞 Support

For issues or questions about this component:
- Review the examples in this README
- Check the CSS variables in `src/styles.css`
- Inspect the component implementation in `card.component.ts`

---

**Created for Jira Issue ID-5** - Reusable, flexible card component for content grouping
