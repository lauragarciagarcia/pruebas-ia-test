import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Componente Input Reutilizable - Demo';

  // Template-driven form values
  textValue: string = '';
  emailValue: string = '';
  numberValue: number | null = null;
  passwordValue: string = '';

  // Demo values for states
  disabledValue: string = 'Valor deshabilitado';
  readonlyValue: string = 'Solo lectura';

  // Reactive form
  userForm: FormGroup;

  // Form submission state
  formSubmitted: boolean = false;
  formData: any = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^\d{10}$/)]],
      age: ['', [Validators.min(18), Validators.max(100)]],
      website: ['', [Validators.pattern(/^https?:\/\/.+/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Subscribe to form changes for demo purposes
    this.userForm.valueChanges.subscribe(values => {
      console.log('Form values:', values);
    });
  }

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.userForm.valid) {
      this.formData = this.userForm.value;
      console.log('Form submitted successfully:', this.formData);
      alert('Formulario enviado con éxito! Revisa la consola.');
    } else {
      console.log('Form is invalid');
      alert('Por favor, complete todos los campos requeridos correctamente.');
    }
  }

  resetForm(): void {
    this.userForm.reset();
    this.formSubmitted = false;
    this.formData = null;
  }

  // Template-driven form submit
  onTemplateDrivenSubmit(): void {
    console.log('Template-driven values:', {
      text: this.textValue,
      email: this.emailValue,
      number: this.numberValue,
      password: this.passwordValue
    });
    alert('Template-driven form submitted! Revisa la consola.');
  }
}
