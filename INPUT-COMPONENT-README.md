# Componente Input Reutilizable para Angular

Componente de input altamente configurable, accesible y reutilizable diseñado para Angular 17+. Implementa las mejores prácticas de accesibilidad (WCAG 2.1) y es totalmente compatible con Angular Forms (Reactive Forms y Template-driven Forms).

## 📋 Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso Básico](#uso-básico)
- [API Reference](#api-reference)
- [Ejemplos](#ejemplos)
- [Accesibilidad](#accesibilidad)
- [Personalización](#personalización)
- [Buenas Prácticas](#buenas-prácticas)

## ✨ Características

- ✅ **Totalmente Accesible**: Cumple con WCAG 2.1 Level AA
- ✅ **ControlValueAccessor**: Compatible con Angular Forms (Reactive y Template-driven)
- ✅ **Múltiples Tipos**: text, number, email, password, tel, url, search
- ✅ **Tres Tamaños**: small, medium, large
- ✅ **Tres Variantes**: outlined, filled, standard
- ✅ **Validación Integrada**: Mensajes de error automáticos y personalizables
- ✅ **Totalmente Tipado**: TypeScript con tipos completos
- ✅ **Tokens CSS**: Fácilmente personalizable mediante variables CSS
- ✅ **Estados Visuales**: Focus, hover, error, disabled, readonly
- ✅ **Responsive**: Adaptado para móviles y tablets
- ✅ **Soporte ARIA**: Atributos ARIA completos para lectores de pantalla

## 🚀 Instalación

El componente ya está incluido en este proyecto. Para usarlo en tu aplicación:

### 1. Asegúrate de tener FormsModule y ReactiveFormsModule importados

```typescript
// app.module.ts
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    InputComponent,
    // ... otros componentes
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // ... otros módulos
  ]
})
export class AppModule { }
```

## 💡 Uso Básico

### Template-driven Forms

```html
<app-input
  type="text"
  label="Nombre"
  placeholder="Ingrese su nombre"
  [(ngModel)]="nombre"
  [required]="true">
</app-input>
```

### Reactive Forms

```typescript
// component.ts
userForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]]
});
```

```html
<!-- template.html -->
<form [formGroup]="userForm">
  <app-input
    type="email"
    label="Email"
    placeholder="ejemplo@correo.com"
    formControlName="email"
    [required]="true">
  </app-input>
</form>
```

## 📖 API Reference

### Inputs (Propiedades Configurables)

| Propiedad | Tipo | Default | Descripción |
|-----------|------|---------|-------------|
| `type` | `InputType` | `'text'` | Tipo de input: 'text', 'number', 'email', 'password', 'tel', 'url', 'search' |
| `label` | `string` | `''` | Etiqueta del input |
| `placeholder` | `string` | `''` | Texto placeholder |
| `required` | `boolean` | `false` | Si el campo es requerido |
| `disabled` | `boolean` | `false` | Si el campo está deshabilitado |
| `readonly` | `boolean` | `false` | Si el campo es solo lectura |
| `size` | `InputSize` | `'medium'` | Tamaño: 'small', 'medium', 'large' |
| `variant` | `InputVariant` | `'outlined'` | Variante visual: 'outlined', 'filled', 'standard' |
| `errorMessage` | `string` | `''` | Mensaje de error personalizado |
| `helperText` | `string` | `''` | Texto de ayuda |
| `ariaLabel` | `string` | `''` | Label ARIA personalizado |
| `autocomplete` | `string` | `''` | Atributo autocomplete HTML |
| `maxlength` | `number \| null` | `null` | Longitud máxima |
| `minlength` | `number \| null` | `null` | Longitud mínima |
| `pattern` | `string` | `''` | Patrón regex de validación |
| `step` | `string` | `''` | Step para inputs numéricos |
| `min` | `string \| number` | `''` | Valor mínimo |
| `max` | `string \| number` | `''` | Valor máximo |

### Tipos Exportados

```typescript
export type InputType = 'text' | 'number' | 'email' | 'password' | 'tel' | 'url' | 'search';
export type InputSize = 'small' | 'medium' | 'large';
export type InputVariant = 'outlined' | 'filled' | 'standard';
```

## 📚 Ejemplos

### 1. Input de Texto Básico

```html
<app-input
  type="text"
  label="Nombre Completo"
  placeholder="Juan Pérez"
  helperText="Ingrese su nombre y apellido">
</app-input>
```

### 2. Input de Email con Validación

```html
<app-input
  type="email"
  label="Correo Electrónico"
  placeholder="ejemplo@correo.com"
  formControlName="email"
  [required]="true"
  autocomplete="email">
</app-input>
```

### 3. Input de Número con Límites

```html
<app-input
  type="number"
  label="Edad"
  placeholder="25"
  formControlName="edad"
  [min]="18"
  [max]="100"
  helperText="Debe ser mayor de 18 años">
</app-input>
```

### 4. Input de Contraseña

```html
<app-input
  type="password"
  label="Contraseña"
  placeholder="********"
  formControlName="password"
  [required]="true"
  [minlength]="8"
  helperText="Mínimo 8 caracteres"
  autocomplete="new-password">
</app-input>
```

### 5. Input con Tamaños Diferentes

```html
<!-- Pequeño -->
<app-input
  type="text"
  label="Input Pequeño"
  size="small">
</app-input>

<!-- Mediano (default) -->
<app-input
  type="text"
  label="Input Mediano"
  size="medium">
</app-input>

<!-- Grande -->
<app-input
  type="text"
  label="Input Grande"
  size="large">
</app-input>
```

### 6. Input con Variantes de Estilo

```html
<!-- Outlined (default) -->
<app-input
  type="text"
  label="Outlined"
  variant="outlined">
</app-input>

<!-- Filled -->
<app-input
  type="text"
  label="Filled"
  variant="filled">
</app-input>

<!-- Standard -->
<app-input
  type="text"
  label="Standard"
  variant="standard">
</app-input>
```

### 7. Input con Estados

```html
<!-- Deshabilitado -->
<app-input
  type="text"
  label="Deshabilitado"
  [disabled]="true"
  [value]="'No editable'">
</app-input>

<!-- Solo lectura -->
<app-input
  type="text"
  label="Solo Lectura"
  [readonly]="true"
  [value]="'Solo lectura'">
</app-input>

<!-- Con error personalizado -->
<app-input
  type="text"
  label="Con Error"
  errorMessage="Este campo tiene un error">
</app-input>
```

### 8. Formulario Reactivo Completo

```typescript
// component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html'
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.pattern(/^\d{10}$/)]],
      edad: ['', [Validators.min(18), Validators.max(100)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log(this.registroForm.value);
    }
  }
}
```

```html
<!-- registro.component.html -->
<form [formGroup]="registroForm" (ngSubmit)="onSubmit()">
  <app-input
    type="text"
    label="Nombre"
    placeholder="Juan Pérez"
    formControlName="nombre"
    [required]="true"
    helperText="Mínimo 3 caracteres">
  </app-input>

  <app-input
    type="email"
    label="Email"
    placeholder="ejemplo@correo.com"
    formControlName="email"
    [required]="true">
  </app-input>

  <app-input
    type="tel"
    label="Teléfono"
    placeholder="1234567890"
    formControlName="telefono"
    [maxlength]="10"
    helperText="10 dígitos">
  </app-input>

  <app-input
    type="number"
    label="Edad"
    placeholder="25"
    formControlName="edad"
    [min]="18"
    [max]="100">
  </app-input>

  <app-input
    type="password"
    label="Contraseña"
    placeholder="********"
    formControlName="password"
    [required]="true"
    helperText="Mínimo 8 caracteres">
  </app-input>

  <button type="submit" [disabled]="!registroForm.valid">
    Registrarse
  </button>
</form>
```

## ♿ Accesibilidad

El componente implementa las siguientes características de accesibilidad:

### Atributos ARIA

- `aria-label`: Etiqueta accesible para lectores de pantalla
- `aria-describedby`: Asocia el input con textos de ayuda y errores
- `aria-invalid`: Indica cuando el campo tiene errores
- `aria-required`: Indica campos obligatorios
- `role="alert"`: Para mensajes de error
- `aria-live="polite"`: Para actualizaciones dinámicas

### Asociación Label-Input

Cada input tiene una asociación correcta con su label mediante los atributos `for` e `id`:

```html
<label for="input-abc123">Nombre</label>
<input id="input-abc123" type="text">
```

### Navegación por Teclado

- **Tab**: Navega al siguiente campo
- **Shift + Tab**: Navega al campo anterior
- **Enter**: Envía el formulario (si está en un form)
- **Escape**: (puede ser implementado para limpiar el campo)

### Estados Visuales Claros

- Focus visible con outline y shadow
- Estados de hover diferenciados
- Estados de error con color y icono
- Estados disabled con opacidad reducida

### Modo Alto Contraste

El componente soporta el modo de alto contraste del sistema:

```css
@media (prefers-contrast: high) {
  .input-field {
    border-width: 2px;
  }
}
```

### Reducción de Movimiento

Respeta las preferencias de movimiento reducido del usuario:

```css
@media (prefers-reduced-motion: reduce) {
  .input-field {
    transition: none;
  }
}
```

### Tamaño de Fuente en Móviles

En dispositivos móviles, el tamaño de fuente es de al menos 16px para prevenir el zoom automático en iOS:

```css
@media (max-width: 768px) {
  .input-field {
    font-size: 16px;
  }
}
```

## 🎨 Personalización

### Variables CSS (Tokens)

El componente utiliza variables CSS que puedes sobrescribir:

```css
app-input {
  /* Colores */
  --input-color-primary: #1976d2;
  --input-color-error: #d32f2f;
  --input-color-text: #212121;
  --input-color-border: #bdbdbd;
  
  /* Espaciado */
  --input-spacing-sm: 8px;
  --input-spacing-md: 12px;
  --input-spacing-lg: 16px;
  
  /* Tamaños de fuente */
  --input-font-size-small: 12px;
  --input-font-size-medium: 14px;
  --input-font-size-large: 16px;
  
  /* Alturas */
  --input-height-small: 32px;
  --input-height-medium: 40px;
  --input-height-large: 48px;
  
  /* Border radius */
  --input-border-radius: 4px;
}
```

### Ejemplo de Personalización Global

```css
/* styles.css (global) */
:root {
  --input-color-primary: #9c27b0; /* Morado */
  --input-border-radius: 8px; /* Más redondeado */
  --input-height-medium: 48px; /* Inputs más altos */
}
```

### Personalización por Instancia

```html
<app-input
  type="text"
  label="Input Personalizado"
  style="--input-color-primary: #ff5722; --input-border-radius: 20px;">
</app-input>
```

## 🔧 Validación de Errores

### Mensajes Automáticos

El componente proporciona mensajes de error automáticos para validaciones comunes:

- `required`: "Este campo es requerido"
- `email`: "Ingrese un email válido"
- `minlength`: "Mínimo X caracteres"
- `maxlength`: "Máximo X caracteres"
- `pattern`: "Formato inválido"
- `min`: "El valor mínimo es X"
- `max`: "El valor máximo es X"

### Mensajes Personalizados

Puedes sobrescribir los mensajes con la propiedad `errorMessage`:

```html
<app-input
  type="email"
  label="Email"
  formControlName="email"
  errorMessage="Por favor, ingrese un correo electrónico válido de la empresa">
</app-input>
```

## ✅ Buenas Prácticas

### 1. Usa Labels Descriptivos

```html
<!-- ✅ Bueno -->
<app-input
  type="email"
  label="Correo Electrónico Corporativo"
  placeholder="nombre@empresa.com">
</app-input>

<!-- ❌ Malo -->
<app-input
  type="email"
  placeholder="Email">
</app-input>
```

### 2. Proporciona Texto de Ayuda

```html
<app-input
  type="password"
  label="Nueva Contraseña"
  helperText="Debe contener al menos 8 caracteres, una mayúscula y un número">
</app-input>
```

### 3. Usa Autocomplete Apropiado

```html
<app-input
  type="email"
  label="Email"
  autocomplete="email">
</app-input>

<app-input
  type="password"
  label="Contraseña"
  autocomplete="current-password">
</app-input>
```

### 4. Validaciones Claras

```typescript
// Reactive Forms
this.form = this.fb.group({
  email: ['', [
    Validators.required,
    Validators.email
  ]],
  telefono: ['', [
    Validators.pattern(/^\d{10}$/)
  ]],
  edad: ['', [
    Validators.min(18),
    Validators.max(100)
  ]]
});
```

### 5. Responsive Design

El componente es responsive por defecto, pero asegúrate de que tu layout también lo sea:

```css
.form-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
```

## 🧪 Testing

### Ejemplo de Test Unitario

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display label', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.input-label').textContent).toContain('Test Label');
  });

  it('should handle value changes', () => {
    const testValue = 'test value';
    component.writeValue(testValue);
    expect(component.value).toBe(testValue);
  });
});
```

## 📄 Licencia

Este componente es parte del proyecto y puede ser utilizado libremente dentro del mismo.

## 🤝 Contribuciones

Para contribuir al componente:

1. Asegúrate de que los cambios mantienen la accesibilidad
2. Actualiza la documentación si es necesario
3. Añade tests para nuevas funcionalidades
4. Respeta las convenciones de código del proyecto

## 📞 Soporte

Para problemas o preguntas sobre el componente, consulta la documentación o abre un issue en el repositorio del proyecto.

---

**Creado con ❤️ siguiendo las mejores prácticas de accesibilidad y diseño de sistemas**
