# My Expo App

### Primera Parte: Navegación Stack y Estilos Globales

En esta sección trabajamos con los estilos globales y la estructura de aplicación que nos permite implementar una navegación tipo Stack o baraja de cartas.

#### Temas Puntuales

- **Nativewind**: Configuración y uso de Tailwind CSS en React Native
- **StackNavigation**: Implementación de navegación tipo Stack
- **Enviar argumentos entre páginas**: Paso de parámetros y datos entre pantallas
- **Botones personalizados**: Creación de componentes de botones reutilizables
- **Estructura de directorios**: Organización del proyecto y convenciones
- **Temas y fuentes personalizadas**: Configuración de fuentes y temas globales
- **Colores personalizados**: Sistema de colores y variables de tema
- **Múltiples layouts**: Implementación de diferentes layouts según la sección
- **Más**: Funcionalidades adicionales de navegación y estilos

Esta sección es importante para cualquier aplicación porque la navegación entre pantallas es una de las formas básicas de mostrar nuevo contenido en las aplicaciones móviles.

### Segunda Parte: Navegación Avanzada y Funcionalidades

En esta sección continuamos trabajando con nuestra aplicación de navegación, pero añadiendo funcionalidades nuevas y más complejas.

#### Temas Puntuales

- **Drawer**: Implementación de navegación tipo cajón lateral
- **Tabs**: Navegación mediante pestañas
- **Icons**: Integración y uso de iconos personalizados
- **Dispatch de acciones**: Manejo de acciones y eventos de navegación
- **Control de navegación**: Gestión avanzada del estado de navegación
- **Colores y personalización**: Personalización avanzada de temas y estilos
- **Control del App Directory**: Organización y estructura del directorio de la aplicación

Esta sección puede ser algo complicada por la estructura de directorios, pero el objetivo es enseñar a organizarlo de tal manera que sea legible dicha estructura.

## 📁 Estructura del Proyecto

```
my-expo-app/
├── app/                    # Directorio principal de rutas (Expo Router)
│   ├── (stack)/           # Grupo de navegación Stack
│   │   ├── home/          # Pantalla de inicio
│   │   ├── products/      # Pantalla de productos
│   │   ├── profile/       # Pantalla de perfil
│   │   └── settings/      # Pantalla de configuración
│   ├── _layout.tsx        # Layout principal
│   └── index.tsx          # Pantalla inicial
├── assets/                # Recursos estáticos (imágenes, fuentes)
├── components/            # Componentes reutilizables
│   └── shared/           # Componentes compartidos
├── store/                 # Estado global (Zustand)
├── tailwind.config.js     # Configuración de Tailwind
└── package.json          # Dependencias del proyecto
```

## 🎨 Estilos

El proyecto utiliza NativeWind (Tailwind CSS) para los estilos. La configuración se encuentra en `tailwind.config.js` y los estilos globales en `global.css`.

## 📝 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run android` - Ejecuta la app en Android
- `npm run ios` - Ejecuta la app en iOS
- `npm run web` - Ejecuta la app en web
- `npm run lint` - Ejecuta el linter
- `npm run format` - Formatea el código

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico de la aplicación.

### Fuentes Personalizadas

Las fuentes personalizadas se encuentran en `assets/fonts/` y se cargan mediante `expo-font` en el layout principal.

## 📖 Recursos Adicionales

- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de Expo Router](https://docs.expo.dev/router/introduction/)
- [Documentación de NativeWind](https://www.nativewind.dev/)
- [Documentación de React Native](https://reactnative.dev/)

## 📄 Licencia

Este proyecto es de uso educativo y personal.
