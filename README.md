# Prueba técnica de interfaz: Panel de resumen clínico

Este proyecto es una aplicacion frontend desarrollada con React, Vite, Tailwindcss y TypeScript, para ver y gestionar datos numericos de usuario, incluye componentes reutilizables y navegación por pestañas.

## Notificación importante

Quisiera destacar que este proyecto fue realizado bajo un marco de tiempo limitado considerando que no tenia conocimiento de las tecnologias excepto TypeScript, a pesar de la dificultad considero que pude desarrollarme de la mejor manera posible.
He priorizado la reutilización de componentes, aunque algunas áreas pueden mejorarse (tests, validaciones y estilos más avanzados).
La carpeta de assets contiene un grupo de archivos ".svg", no se utilizaron para disminuir la cantidad de archivos y mas descargas de librerias, por lo que se utilizo Lucide-react para manejar los iconos se mantienen alli como un ejemplo de visualización.

## Tecnologías utilizadas

- React 
- Vite 
- TypeScript
- Tailwind CSS 
- Lucide-react (iconos SVG)
- Vitest 
- React Testing Library

La estructura de carpetas utilizada para el desarrollo es la siguente: 
```
/src
│
├── /components
│   ├── DataItems.tsx
│   ├── Expands.tsx
│   ├── TabNav.tsx
│   ├── Widget.tsx
│   ├── tabs.ts
│
├── /data
│   ├── HistoryData.ts
│   ├── ParaClinicData.ts
│   ├── PlanData.ts
│   ├── TreatmentData.ts
│
├── /features
│   ├── AddHealdData.tsx
│   ├── AddHealthDataCards.tsx
│   ├── CurrentTreatment.tsx
│   ├── History.tsx
│   ├── ParaClinic.tsx
│   ├── Plan.tsx
│
├── App.tsx
├── main.tsx  
├── index.css 
├── setupTests.ts
```


## Objetivo de UI (Interfaz de usuario)
- Facilidad accesible al usuario
- correcto uso de Pestañas
- Retroalimentacion entre navegadores
- Descripcion escrita y grafica de acciones
- Minimizacion de carga informativa al usuario y ordenada

## Scripts disponibles
### `npm run dev`
Inicia la aplicación en modo desarrollo
### `npm run build`
Construye la app para producción.
### `npm run test`
Ejecuta los tests usando Vitest.




## Instalación
Clona este repositorio:


git clone https://github.com/EdJimenez12/Prueba_tecnica_de_interfa.git
