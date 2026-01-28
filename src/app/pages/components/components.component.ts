import { Component } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent {
  title = 'Componentes Creados';
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

    setTimeout(() => {
      this.isLoading = false;
      console.log('Async action completed!');
      alert('Action completed successfully!');
    }, 2000);
  }
}
