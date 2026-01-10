
# Índice de Componentes y Utilidades

A continuación se listan los componentes reutilizables y módulos de lógica disponibles en el proyecto.

### 1. Componentes de UI (Interfaz)

*   **Button**
    *   *Qué hace:* Botón estándar con estilos predefinidos.
    *   *Props clave:* `variant` ('primary'|'secondary'), `onClick`.
    *   *Nota:* Requiere definir variante obligatoriamente.

*   **Card**
    *   *Qué hace:* Contenedor estilo tarjeta con bordes y fondo.
    *   *Props clave:* `children`, `className`.
    *   *Nota:* Su ancho se ajusta al contenido (`min-content`) por defecto.

*   **Href**
    *   *Qué hace:* Enlace de navegación interna (wrapper de `Link`).
    *   *Props clave:* `to`, `variant_color` ('blue'|'white'), `have_decoration`.
    *   *Nota:* Debe usarse dentro de un Router.

*   **Input**
    *   *Qué hace:* Campo de formulario avanzado (texto, password, emails).
    *   *Props clave:* `label`, `error`, `type` (password tiene "ojo" automático), `inputIcon`.
    *   *Nota:* Gestiona visualización de errores y visibilidad de contraseña.

*   **Loader**
    *   *Qué hace:* Spinner animado circular.
    *   *Props clave:* `className`.
    *   *Nota:* El tamaño se define vía CSS externo en la prop `className`.

### 2. Lógica y Estado (Contexts & Hooks)

*   **AuthContext / useAuth**  ⚠️ *[En Desarrollo]*
    *   *Qué hace:* Gestiona la sesión del usuario, login, logout y persistencia de token.
    *   *Métodos:* `logint(userData, token)`, `logOut()`, `isAuthenticated`, `user`.

### 3. Requisitos Globales

Para que estos componentes funcionen correctamente, el proyecto debe incluir:

1.  **Variables CSS Globales:** Archivo `.css` raíz con las paletas de colores (ej: `--primary-button-color`, `--error-message-color`, `--loader-color`).
2.  **Librería de Iconos:** `@tabler/icons-react` (Usada en *Input*).
3.  **Routing:** `react-router-dom` (Usado en *Href*).

***

# Button

Componente de botón estándar que utiliza variantes de estilo predefinidas (CSS) y admite personalización extra.

### Descripción
Este componente renderiza una etiqueta HTML `<button>`. Es necesario especificar una variante para que cargue los colores correctos definidos en la hoja de estilos.

### Tabla de Props

| Propiedad | Tipo | Requerido | Valor por defecto | Descripción / Valores aceptados |
| :--- | :--- | :---: | :---: | :--- |
| **children** | `node` | **Sí** | - | El texto, icono o elementos dentro del botón. |
| **variant** | `string` | **Sí** | - | Define el color y estilo. Valores aceptados: `'primary'`, `'secondary'`. <br>*(Si no se envía, el botón no tendrá estilos base)*. |
| **onClick** | `func` | No | - | Función que se ejecuta al hacer click. |
| **type** | `string` | No | `'submit'` | Atributo `type` del HTML. Valores: `'button'`, `'submit'`, `'reset'`. |
| **className** | `string` | No | `''` | Clases CSS adicionales. |
| **styles** | `object` | No | `{}` | Estilos en línea para casos muy específicos. |

### Ejemplos de Uso

**1. Botón Principal (Primary)**
Se usa para la acción más importante de la vista.
```jsx
<Button variant="primary" onClick={handleSubmit}>
  Confirmar Compra
</Button>
```

**2. Botón Secundario (Secondary)**
Se usa para acciones alternativas o de cancelación.
```jsx
<Button variant="secondary" type="button" onClick={closeModal}>
  Cancelar
</Button>
```

**3. Botón con estilo personalizado**
Uso de `className` para márgenes y `styles` para ancho específico.
```jsx
<Button 
  variant="primary" 
  className="mb-4" 
  styles={{ width: '100%', textTransform: 'uppercase' }}
>
  Ingresar
</Button>
```

***
# Card

Componente contenedor estilizado que agrupa contenido. Tiene bordes redondeados y utiliza colores de fondo definidos por variables globales.

**Nota importante de diseño:** Este componente tiene definida la propiedad CSS `width: min-content`, lo que significa que **la tarjeta se encogerá hasta ajustarse al tamaño de su contenido**, en lugar de expandirse al 100% del ancho disponible.

### Tabla de Props

| Propiedad | Tipo | Requerido | Valor por defecto | Descripción / Valores aceptados |
| :--- | :--- | :---: | :---: | :--- |
| **children** | `node` | **Sí** | - | El contenido (texto, formulario, imágenes, etc.) que irá dentro de la tarjeta. |
| **className** | `string` | No | `''` | Clases CSS adicionales para sobreescribir estilos o añadir márgenes (ej: `m-4`, `w-100`). |

### Ejemplos de Uso

**1. Tarjeta Básica**
El ancho de la tarjeta se ajustará al texto "Hola Mundo".
```jsx
<Card>
  <h2>Hola Mundo</h2>
  <p>Este es el contenido de la tarjeta.</p>
</Card>
```

**2. Tarjeta con márgenes y ancho forzado**
Como la tarjeta tiene `min-content` por defecto, usamos una clase utilitaria (si existe en tu CSS global) o estilo personalizado para expandirla.
```jsx
<Card className="margin-top-20 full-width">
  <LoginForm />
</Card>
```
***
# Href

Componente para navegación interna que envuelve el componente `<Link>` de `react-router-dom`. Incluye estilos predefinidos de color y opciones de subrayado al pasar el mouse.

**Requisito:** Este componente debe usarse dentro de un contexto de Router (ej: `BrowserRouter`), ya que utiliza `Link`.

### Tabla de Props

| Propiedad | Tipo | Requerido | Valor por defecto | Descripción / Valores aceptados |
| :--- | :--- | :---: | :---: | :--- |
| **to** | `string` | **Sí** | - | La ruta de destino (ej: `"/home"`, `"/profile"`). |
| **children** | `node` | **Sí** | - | El texto o elemento sobre el que se hará click. |
| **variant_color** | `string` | No | - | Define el color del texto. Valores aceptados (según CSS): `'blue'`, `'white'`. <br>*(Si se omite, usa el color por defecto del navegador o el heredado)*. |
| **have_decoration** | `boolean` | No | `false` | Si es `true`, añade un subrayado al texto cuando el usuario pasa el mouse por encima (hover). |
| **className** | `string` | No | `undefined` | Clases CSS adicionales que se aplican directamente a la etiqueta `<a>` generada. |

### Ejemplos de Uso

**1. Enlace Azul Estándar**
Enlace básico color azul sin subrayado en hover (a menos que se active `have_decoration`).
```jsx
<Href to="/dashboard" variant_color="blue">
  Ir al Dashboard
</Href>
```

**2. Enlace Blanco con Subrayado**
Ideal para fondos oscuros o pies de página. El texto se subraya al pasar el mouse.
```jsx
<Href 
  to="/contacto" 
  variant_color="white" 
  have_decoration={true}
>
  Contáctanos
</Href>
```

**3. Enlace con estilos extra**
Uso de `className` para añadir peso a la fuente (bold) o márgenes.
```jsx
<Href 
  to="/recuperar-password" 
  variant_color="blue" 
  className="font-bold ml-2"
>
  ¿Olvidaste tu contraseña?
</Href>
```

***

**Notas Técnicas:**
*   Este componente envuelve el enlace en un `div` con clase `Href`. Tenlo en cuenta si estás usando `display: flex` en el contenedor padre, ya que el elemento directo será el `div`, no el enlace `a`.
***
# Loader

Componente visual de carga (spinner) circular animado. Utiliza variables CSS globales para sus colores y mantiene una relación de aspecto 1:1 (cuadrado/círculo).

### Tabla de Props

| Propiedad | Tipo | Requerido | Valor por defecto | Descripción / Valores aceptados |
| :--- | :--- | :---: | :---: | :--- |
| **className** | `string` | No | `''` | Clases CSS adicionales. **Fundamental para definir el tamaño** (ancho/alto) o la posición del loader. |

### Ejemplos de Uso

**1. Loader Básico**
Se renderizará con el tamaño que herede o por defecto (según contexto), girando infinitamente.
```jsx
<Loader />
```

**2. Loader con Tamaño Definido**
Como el componente tiene `aspect-ratio: 1`, basta con definir el `width` mediante una clase o estilo en línea (vía className si usas utility classes) para controlar su tamaño total.
```jsx
/* Asumiendo que 'w-10' define un width específico en tu CSS */
<Loader className="w-10" />
```

**3. Centrado en un contenedor**
Ejemplo de cómo centrar el loader dentro de una tarjeta o pantalla de carga.
```jsx
<div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
  <Loader className="my-loader-class" />
</div>
```

***

**Notas Técnicas:**
*   **Tamaño:** El componente no tiene una prop `size`. Debes controlar el tamaño mediante CSS externo pasando una clase en `className` (ej: `width: 50px`).

***
# Input

Componente de campo de texto completo. Maneja automáticamente etiquetas (labels), iconos internos, visualización de contraseñas y estados de error.

### Descripción
Este componente envuelve el input nativo de HTML y le añade lógica de interfaz.
**Características principales:**
1.  **Modo Password:** Si `type="password"`, aparece automáticamente un botón (ojo) para mostrar/ocultar la contraseña.
2.  **Manejo de Errores:** Si recibe la prop `error`, cambia el borde a rojo y muestra el mensaje de error debajo.
3.  **Iconos:** Permite colocar un icono a la izquierda dentro del input.

### Tabla de Props

| Propiedad | Tipo | Requerido | Valor por defecto | Descripción / Valores aceptados |
| :--- | :--- | :---: | :---: | :--- |
| **name** | `string` | **Recomendado** | - | Identificador del input. Se usa para vincular el `label` con el `input` (accesibilidad). |
| **label** | `string` | No | `null` | Texto que aparece encima del input. |
| **type** | `string` | No | `'text'` | Tipo de input HTML (`text`, `email`, `password`, `number`, etc.). |
| **error** | `string` \| `object` | No | `null` | Mensaje de error. Acepta un string directo o un objeto con propiedad `message` (compatible con React Hook Form). |
| **inputIcon** | `node` | No | `null` | Componente de icono (React Node) que se mostrará a la izquierda dentro del campo. |
| **className** | `string` | No | `''` | Clases CSS para el **contenedor** externo (wrapper). |
| **inputClassName** | `string` | No | `''` | Clases CSS para el **elemento input** interno. |
| **ref** | `ref` | No | - | Referencia de React para acceder al elemento DOM del input. |
| **...inputProps** | `any` | No | - | Resto de propiedades nativas (`placeholder`, `value`, `onChange`, `onBlur`, etc.). |

### Ejemplos de Uso

**1. Input de Texto Simple**
Input básico con etiqueta y placeholder.
```jsx
<Input 
  name="username" 
  label="Nombre de Usuario" 
  placeholder="Escribe tu usuario" 
/>
```

**2. Input de Contraseña (Automático)**
Al definir `type="password"`, el botón de "ver contraseña" aparece solo.
```jsx
<Input 
  name="password" 
  label="Contraseña" 
  type="password" 
/>
```

**3. Input con Icono y Error**
Ejemplo visualizando un estado de error y un icono decorativo (usando Tabler Icons o similar).
```jsx
import { IconMail } from '@tabler/icons-react';

<Input 
  name="email"
  label="Correo Electrónico"
  type="email"
  inputIcon={<IconMail size={18} />}
  error="El formato del correo es inválido"
/>
```

***

**Notas Técnicas:**
*   **Dependencias:** Este componente utiliza iconos de `@tabler/icons-react` (`IconExclamationCircle`, `IconEye`, `IconEyeOff`). Asegúrate de tener esta librería instalada.
*   **Posicionamiento:** El CSS utiliza `position: absolute` para los iconos. Si cambias el tamaño de fuente o padding del input (`.input-field`), es posible que debas ajustar los valores `top` y `left` de `.input-icon` y `.eyePass` en el CSS.
*   **Variables de Color:** Requiere definir colores como `--error-message-color`, `--dark-mode-input-color`, `--secondary-text-color`, etc.

***
# AuthProvider / useAuth

Sistema de gestión de estado global para la autenticación de usuarios. Maneja la sesión, persistencia de datos (localStorage) y métodos de acceso (Login/Logout).

### ⚠️ ESTADO: PENDIENTE DE ACTUALIZACIÓN
**Nota importante:** Este módulo se encuentra actualmente en desarrollo activo.

### Descripción
Este contexto envuelve la aplicación para proveer el estado del usuario (`user`, `token`, `isAuthenticated`) a cualquier componente. Al iniciar la aplicación, intenta recuperar la sesión automáticamente leyendo el `localStorage`.

### Cómo implementar (Setup)

Debes envolver tu aplicación (generalmente en `App.jsx` o `main.jsx`) con el `AuthProvider`:

```jsx
import AuthProvider from './context/AuthProvider'; // Ajusta la ruta

function App() {
  return (
    <AuthProvider>
      <MisRutas />
    </AuthProvider>
  );
}
```

### Hook de Consumo: `useAuth()`

Para utilizar los valores o funciones, importa el hook personalizado. Este hook incluye validación para asegurar que se usa dentro del Provider.

```javascript
import { useAuth } from './hooks/useAuth'; // Ajusta la ruta
const { user, logOut } = useAuth();
```

### Valores y Funciones Expuestas

El contexto expone el siguiente objeto:

| Propiedad / Función | Tipo | Descripción |
| :--- | :---: | :--- |
| **user** | `object` \| `null` | Objeto con los datos del usuario logueado. `null` si no hay sesión. |
| **token** | `string` | Token de autenticación (JWT) actual. |
| **isAuthenticated** | `boolean` | `true` si existe un usuario y token válidos; de lo contrario `false`. |
| **logOut()** | `func` | Cierra la sesión. Limpia el estado y borra `token` y `userData` del LocalStorage. |
| **login(data, token)** | `func` | *Uso interno/manual.* Fuerza el estado de autenticación sin llamar a la API. Útil si recibes los datos de otra fuente. |

### Ejemplos de Uso

**1. Ruta Protegida (Private Route)**
Ejemplo de cómo usar `isAuthenticated` para bloquear acceso a vistas.

```jsx
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};
```

**2. Botón de Cerrar Sesión**
```jsx
const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <nav>
      <span>Hola, {user?.username}</span>
      <button onClick={logOut}>Salir</button>
    </nav>
  );
}
```