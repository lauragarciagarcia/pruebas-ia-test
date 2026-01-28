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
  rangeChangeCount = 0;

  // Range component values
  rangeValue = 1100;
  basicRangeValue = 50;
  customStepValue = 50;

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

  handleRangeChange(value: number): void {
    this.rangeValue = value;
    this.rangeChangeCount++;
    console.log(`Excess level changed to: ${value} €`);
  }

  handleBasicRangeChange(value: number): void {
    this.basicRangeValue = value;
    this.rangeChangeCount++;
    console.log(`Volume changed to: ${value}`);
  }

  handleCustomStepChange(value: number): void {
    this.customStepValue = value;
    this.rangeChangeCount++;
    console.log(`Quality level changed to: ${value}%`);
  }
}
