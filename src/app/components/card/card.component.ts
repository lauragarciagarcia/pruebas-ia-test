import { Component } from '@angular/core';

/**
 * Reusable Card Component
 * 
 * A flexible card component that serves as a visual container for grouping content
 * such as titles, text, images, and actions. The component is fully customizable
 * and can be reused across different sections of the application.
 * 
 * @example
 * <app-card>
 *   <div card-header>
 *     <h3>Card Title</h3>
 *   </div>
 *   <div card-content>
 *     <p>This is the main content of the card.</p>
 *   </div>
 *   <div card-actions>
 *     <button>Action</button>
 *   </div>
 * </app-card>
 */
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  /**
   * Card component with projection slots for flexible content
   * No business logic required - purely presentational
   */
}
