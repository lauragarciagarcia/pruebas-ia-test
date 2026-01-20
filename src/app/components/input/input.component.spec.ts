import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component Initialization', () => {
    it('should have default values', () => {
      expect(component.type).toBe('text');
      expect(component.size).toBe('medium');
      expect(component.variant).toBe('outlined');
      expect(component.disabled).toBe(false);
      expect(component.required).toBe(false);
      expect(component.readonly).toBe(false);
    });

    it('should generate unique input ID', () => {
      expect(component.inputId).toContain('input-');
      expect(component.inputId.length).toBeGreaterThan(6);
    });
  });

  describe('Label', () => {
    it('should display label when provided', () => {
      component.label = 'Test Label';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const label = compiled.querySelector('.input-label');
      expect(label).toBeTruthy();
      expect(label.textContent).toContain('Test Label');
    });

    it('should not display label when not provided', () => {
      component.label = '';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const label = compiled.querySelector('.input-label');
      expect(label).toBeFalsy();
    });

    it('should show required indicator when required is true', () => {
      component.label = 'Required Field';
      component.required = true;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const requiredIndicator = compiled.querySelector('.input-label-required');
      expect(requiredIndicator).toBeTruthy();
      expect(requiredIndicator.textContent).toContain('*');
    });
  });

  describe('Input Element', () => {
    it('should render input element', () => {
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input).toBeTruthy();
    });

    it('should set correct input type', () => {
      component.type = 'email';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('type')).toBe('email');
    });

    it('should set placeholder', () => {
      component.placeholder = 'Enter text here';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('placeholder')).toBe('Enter text here');
    });

    it('should set disabled state', () => {
      component.disabled = true;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.hasAttribute('disabled')).toBe(true);
    });

    it('should set readonly state', () => {
      component.readonly = true;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.hasAttribute('readonly')).toBe(true);
    });
  });

  describe('ControlValueAccessor', () => {
    it('should write value', () => {
      const testValue = 'test value';
      component.writeValue(testValue);
      expect(component.value).toBe(testValue);
    });

    it('should register onChange callback', () => {
      const callback = jasmine.createSpy('onChange');
      component.registerOnChange(callback);
      
      const event = new Event('input');
      const input = fixture.nativeElement.querySelector('.input-field');
      input.value = 'new value';
      component.onInputChange(event);
      
      expect(callback).toHaveBeenCalled();
    });

    it('should register onTouched callback', () => {
      const callback = jasmine.createSpy('onTouched');
      component.registerOnTouched(callback);
      
      component.onInputBlur();
      
      expect(callback).toHaveBeenCalled();
    });

    it('should set disabled state through ControlValueAccessor', () => {
      component.setDisabledState(true);
      expect(component.disabled).toBe(true);
      
      component.setDisabledState(false);
      expect(component.disabled).toBe(false);
    });

    it('should convert number input to number type', () => {
      component.type = 'number';
      const event = { target: { value: '42' } } as any;
      component.onInputChange(event);
      
      expect(component.value).toBe(42);
      expect(typeof component.value).toBe('number');
    });
  });

  describe('States', () => {
    it('should set focused state on focus', () => {
      expect(component.isFocused).toBe(false);
      component.onInputFocus();
      expect(component.isFocused).toBe(true);
    });

    it('should remove focused state on blur', () => {
      component.isFocused = true;
      component.onInputBlur();
      expect(component.isFocused).toBe(false);
    });

    it('should set touched state on blur', () => {
      expect(component.isTouched).toBe(false);
      component.onInputBlur();
      expect(component.isTouched).toBe(true);
    });
  });

  describe('CSS Classes', () => {
    it('should include size class', () => {
      component.size = 'large';
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--large');
    });

    it('should include variant class', () => {
      component.variant = 'filled';
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--filled');
    });

    it('should include disabled class when disabled', () => {
      component.disabled = true;
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--disabled');
    });

    it('should include focused class when focused', () => {
      component.isFocused = true;
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--focused');
    });

    it('should include filled class when value exists', () => {
      component.value = 'some value';
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--filled');
    });

    it('should include error class when has error', () => {
      component.errorMessage = 'Error message';
      const classes = component.containerClasses;
      expect(classes).toContain('input-container--error');
    });
  });

  describe('Error Handling', () => {
    it('should display custom error message', () => {
      component.errorMessage = 'Custom error';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const errorElement = compiled.querySelector('.input-error-message');
      expect(errorElement).toBeTruthy();
      expect(errorElement.textContent).toContain('Custom error');
    });

    it('should display helper text when no error', () => {
      component.helperText = 'Helper text';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const helperElement = compiled.querySelector('.input-helper-text');
      expect(helperElement).toBeTruthy();
      expect(helperElement.textContent).toContain('Helper text');
    });

    it('should hide helper text when error exists', () => {
      component.helperText = 'Helper text';
      component.errorMessage = 'Error';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const helperElement = compiled.querySelector('.input-helper-text');
      expect(helperElement).toBeFalsy();
    });

    it('should return correct error message for required validator', () => {
      const control = new FormControl('', []);
      component.ngControl = { errors: { required: true } } as any;
      
      const errorMessage = component.displayErrorMessage;
      expect(errorMessage).toBe('Este campo es requerido');
    });

    it('should return correct error message for email validator', () => {
      component.ngControl = { errors: { email: true } } as any;
      
      const errorMessage = component.displayErrorMessage;
      expect(errorMessage).toBe('Ingrese un email válido');
    });

    it('should return correct error message for minlength validator', () => {
      component.ngControl = { 
        errors: { 
          minlength: { requiredLength: 8, actualLength: 5 } 
        } 
      } as any;
      
      const errorMessage = component.displayErrorMessage;
      expect(errorMessage).toBe('Mínimo 8 caracteres');
    });
  });

  describe('Accessibility', () => {
    it('should have proper aria-label', () => {
      component.ariaLabel = 'Custom ARIA label';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('aria-label')).toBe('Custom ARIA label');
    });

    it('should use label as aria-label when ariaLabel not provided', () => {
      component.label = 'Field Label';
      component.ariaLabel = '';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('aria-label')).toBe('Field Label');
    });

    it('should set aria-required when required', () => {
      component.required = true;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('aria-required')).toBe('true');
    });

    it('should set aria-invalid when has error', () => {
      component.errorMessage = 'Error';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('aria-invalid')).toBe('true');
    });

    it('should set aria-describedby for error message', () => {
      component.errorMessage = 'Error message';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      const describedBy = input.getAttribute('aria-describedby');
      expect(describedBy).toContain('-error');
    });

    it('should set aria-describedby for helper text', () => {
      component.helperText = 'Helper text';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      const describedBy = input.getAttribute('aria-describedby');
      expect(describedBy).toContain('-helper');
    });

    it('should have role="alert" on error message', () => {
      component.errorMessage = 'Error';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const errorElement = compiled.querySelector('.input-error-message');
      expect(errorElement.getAttribute('role')).toBe('alert');
    });

    it('should have aria-live="polite" on error message', () => {
      component.errorMessage = 'Error';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const errorElement = compiled.querySelector('.input-error-message');
      expect(errorElement.getAttribute('aria-live')).toBe('polite');
    });

    it('should associate label with input via for/id', () => {
      component.label = 'Test Label';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const label = compiled.querySelector('.input-label');
      const input = compiled.querySelector('.input-field');
      
      expect(label.getAttribute('for')).toBe(component.inputId);
      expect(input.getAttribute('id')).toBe(component.inputId);
    });
  });

  describe('HTML Attributes', () => {
    it('should set maxlength attribute', () => {
      component.maxlength = 10;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('maxlength')).toBe('10');
    });

    it('should set minlength attribute', () => {
      component.minlength = 5;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('minlength')).toBe('5');
    });

    it('should set pattern attribute', () => {
      component.pattern = '[0-9]*';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('pattern')).toBe('[0-9]*');
    });

    it('should set min attribute for number inputs', () => {
      component.type = 'number';
      component.min = 0;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('min')).toBe('0');
    });

    it('should set max attribute for number inputs', () => {
      component.type = 'number';
      component.max = 100;
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('max')).toBe('100');
    });

    it('should set step attribute for number inputs', () => {
      component.type = 'number';
      component.step = '0.01';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('step')).toBe('0.01');
    });

    it('should set autocomplete attribute', () => {
      component.autocomplete = 'email';
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      const input = compiled.querySelector('.input-field');
      expect(input.getAttribute('autocomplete')).toBe('email');
    });
  });
});
