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

  // Range Slider Properties
  excessValue = 1100;
  temperatureValue = 22;
  volumeValue = 50;
  priceValue = 150;
  disabledValue = 75;

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

  // Range Slider Handlers
  handleExcessChange(value: number): void {
    console.log(`Excess level changed to: ${value} €`);
  }

  handleTemperatureChange(value: number): void {
    console.log(`Temperature changed to: ${value}°C`);
  }

  handleVolumeChange(value: number): void {
    console.log(`Volume changed to: ${value}%`);
  }

  handlePriceChange(value: number): void {
    console.log(`Price changed to: $${value}`);
  }

  // Value Formatters
  formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  formatTemperature = (value: number): string => {
    return `${value}°C`;
  };

  formatPercentage = (value: number): string => {
    return `${value}%`;
  };

  formatPrice = (value: number): string => {
    return `$${value}`;
  };
}
