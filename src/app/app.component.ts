import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI Components Demo';
  isLoading = false;
  clickCount = 0;

  handleButtonClick(message: string): void {
    this.clickCount++;
    console.log(`${message} - Click count: ${this.clickCount}`);
    alert(`${message}\nTotal clicks: ${this.clickCount}`);
  }

  handleAsyncAction(): void {
    this.isLoading = true;
    console.log('Starting async action...');

    // Simulate async operation
    setTimeout(() => {
      this.isLoading = false;
      console.log('Async action completed!');
      alert('Action completed successfully!');
    }, 2000);
  }
}
