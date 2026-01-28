# Range Component (Input Type Range / Slider)

Componente Angular accesible y reutilizable de tipo `input range` (slider) que cumple con los criterios de accesibilidad WCAG 2.1 AA.

## Características

- ✅ Totalmente accesible (WCAG 2.1 AA)
- ✅ Soporte completo de navegación por teclado
- ✅ Atributos ARIA correctos
- ✅ Integración con formularios reactivos (ControlValueAccessor)
- ✅ Tooltip con valor actual
- ✅ Marcas visuales (ticks) en min/max
- ✅ Etiquetas configurables
- ✅ Formateador de valores personalizable
- ✅ Soporte de moneda
- ✅ Estados de foco visibles
- ✅ Soporte para modo de alto contraste
- ✅ Soporte para preferencias de movimiento reducido
- ✅ Diseño responsive

## Uso Básico

```typescript
import { RangeComponent } from './components/range/range.component';

@Component({
  selector: 'app-example',
  template: `
    <app-range 
      [min]="0" 
      [max]="100" 
      [value]="50"
      (valueChange)="onValueChange($event)">
    </app-range>
  `
})
export class ExampleComponent {
  onValueChange(value: number) {
    console.log('New value:', value);
  }
}
```

## Ejemplo del Diseño de Figma

```html
<app-range
  [min]="650"
  [max]="2000"
  [value]="1100"
  [step]="50"
  [showCurrency]="true"
  currency="€"
  [showTooltip]="true"
  [showMinMaxLabels]="true"
  [showTicks]="true"
  ariaLabel="Choose an excess level">
</app-range>
```

## Propiedades (Inputs)

| Propiedad | Tipo | Por Defecto | Descripción |
|-----------|------|-------------|-------------|
| `min` | `number` | `0` | Valor mínimo |
| `max` | `number` | `100` | Valor máximo |
| `step` | `number` | `1` | Incremento del paso |
| `value` | `number` | `0` | Valor inicial/actual |
| `disabled` | `boolean` | `false` | Estado deshabilitado |
| `label` | `string` | `undefined` | Etiqueta del input |
| `showTooltip` | `boolean` | `true` | Mostrar tooltip con valor |
| `showMinMaxLabels` | `boolean` | `true` | Mostrar etiquetas min/max |
| `showTicks` | `boolean` | `true` | Mostrar marcas visuales |
| `currency` | `string` | `'€'` | Símbolo de moneda |
| `showCurrency` | `boolean` | `false` | Mostrar moneda en valores |
| `valueFormatter` | `function` | `undefined` | Función personalizada para formatear valores |
| `ariaLabel` | `string` | `undefined` | Etiqueta ARIA para accesibilidad |

## Eventos (Outputs)

| Evento | Tipo | Descripción |
|--------|------|-------------|
| `valueChange` | `EventEmitter<number>` | Se emite cuando cambia el valor |

## Formularios Reactivos

El componente implementa `ControlValueAccessor` para integrarse con formularios reactivos:

```typescript
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-example',
  template: `
    <app-range 
      [formControl]="rangeControl"
      [min]="0"
      [max]="100">
    </app-range>
  `
})
export class ExampleComponent {
  rangeControl = new FormControl(50);
}
```

## Formateador Personalizado

```typescript
customFormatter(value: number): string {
  return `$${value.toFixed(2)}`;
}
```

```html
<app-range
  [min]="0"
  [max]="1000"
  [valueFormatter]="customFormatter">
</app-range>
```

## Navegación por Teclado

- **Flecha Derecha / Flecha Arriba**: Incrementar valor
- **Flecha Izquierda / Flecha Abajo**: Decrementar valor
- **Home**: Ir al valor mínimo
- **End**: Ir al valor máximo
- **Page Up**: Incrementar en pasos grandes
- **Page Down**: Decrementar en pasos grandes

## Accesibilidad

El componente incluye:

- Atributos ARIA: `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-valuetext`, `aria-disabled`, `aria-label`
- Estado de foco visible con outline
- Asociación correcta con `label`
- Texto descriptivo del valor actual
- Anuncio de cambios con `aria-live="polite"`
- Soporte para lectores de pantalla
- Contraste de colores conforme a WCAG 2.1 AA

## Personalización con CSS Variables

```css
.custom-range {
  --range-track-height: 10px;
  --range-thumb-size: 28px;
  --range-progress-bg: #FF6B6B;
  --range-track-bg: #E5E7EB;
  --range-thumb-bg: #FFFFFF;
  --range-tooltip-bg: #1F2937;
  --range-tooltip-color: #FFFFFF;
}
```

## Tokens CSS Disponibles

- `--range-font-family`
- `--range-track-height`
- `--range-track-bg`
- `--range-track-border-radius`
- `--range-progress-bg`
- `--range-thumb-size`
- `--range-thumb-bg`
- `--range-thumb-border-width`
- `--range-thumb-border-color`
- `--range-thumb-shadow`
- `--range-tooltip-bg`
- `--range-tooltip-color`
- `--range-tooltip-font-size`
- `--range-focus-ring-width`
- `--range-focus-ring-color`
- `--range-transition-duration`
- Y muchos más...

## Testing

El componente puede ser probado con herramientas de accesibilidad como:

- Lighthouse
- axe DevTools
- WAVE
- Lectores de pantalla (NVDA, JAWS, VoiceOver)

## Notas Técnicas

- Sin dependencias externas
- Estilos encapsulados (ViewEncapsulation)
- Compatible con Angular 17+
- Implementa ControlValueAccessor para integración con formularios
- Responsive y mobile-friendly
