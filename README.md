# React + TypeScript + Vite

# Challenge

## Prueba para Casa de desarrollo Full-Stack

El propósito de esta prueba es evaluar tus habilidades en desarrollo Backend y Frontend. Debes construir una aplicación web que permita a los usuarios cargar un archivo CSV con datos preformateados y mostrar esos datos como tarjetas en el sitio web, pudiendo filtrar los datos.

### Instrucciones:

- Tienes 48 horas para completar la prueba. NO subas ningún código después de entregario en este sistema.
- Tu solución **DEBE incluir pruebas automatizadas** tanto para el frontend como para el backend. Tener una buena covertura y probar todas las funciones es parte de la prueba.
- NO crees 2 repositorios, asegúrate de incluir todo el código en el mismo repositorio de GitHub. Crea una carpeta "frontend* y "backend” dentro de tu repositorio y codifica directamente dentro de ellas.
- El Frontend y el Backend deben funcionar simplemente ejecutando "npm install* seguido de *npm run dev" (para ejecutar la aplicación) o "npm run test" (para ejecutar todas las pruebas).
- NO agregues instrucciones adicionales o comandos de Docker en el readme, si algo más necesita ser ejecutado antes de iniciar la aplicacion, asegurate de incuirlo en tu script de desarrollo.
- Los archivos JavaScript solo están permitidos en archivos de configuración de lib, todo tu código DEBE estar en TypeScript y completamente **tipado**.

Cuando termines, despliega tu codigo en un servicio de hosting como Render o Vercel. 


### Caracteristicas del Frontend

- Debe ejecutarse en el puerto **4000**, y todo debe estar en la ruta "/" como una aplicación de una sola página (SPA) usando **React**.
- Un botón para seleccionar un archivo CSV desde la máquina local y otro botón para cargar el archivo seleccionado.
- Una barra de búsqueda que permita a los usuarios buscar datos denrto del archivo **CSV** cargado.
- La barra de búsqueda debe acctualiar las tarjetas para mostrar solo los resultados coincidentes.
- Los datos **CSV** cargados deben mostrarse como tarjetas en el sitio web, con cada tarjeta mostrando todos los datos de una sola fila del archivo CSV.
- Un **diseño responsivo** que funcione bien tanto en dispositivos de escritorio como móviles.
- Manejo de errores claro y amigable para el usuario.

### Caracteristicas del Backend

- Debe ejecutarse en el puerto **3000**.
- El backend debe implemmentarse como una API RESTful utilizando Node, (NO uses ningún framework con opiniones como Adonis o Nest).
- El backend debe inluir los siguientes ndpoints:
  - [POST / api/files]
    - Un endpoint que acepta la carga de un archivo CSV desde el frontend y almacena los datos en una base de datos o una estructura de datos. Debes usar la clave "file" en la solicitud del cuerpo.
    - Esta ruta debe devolver el estado 200 y un objeto con la clave "message" con el valor "El archivo se cargó correctamente".
    - O esta ruta debe devolver el estado 5000 y unobjecto con la clase "message" con un mensaje de error en el valor.
  - [GET / api/users]
    - Debe incluir un endpoint que permita al frontend buscar a través de lo datos CSV cargados. Esta ruta debe aceptar un parámetro de consulta ?q= para términos de búsquedad y debe buscar en CADA columna del CSV.
    - El filtro debe buscar coincidencias parciales y también ser insensible a mayúsculas y minúsculas.
    - Esta ruta debe deolver el estado 200 y un objeto con la clave "data" con un array de objetos dentro de él.
    - O esta ruta debe devolver el estado 500 y un objeto con la clave "message" con un mensaje de error en el valor.

## Puntos de evaluacion

- Evaluaremos t solución en función de los siguientes criterios:
  - Completitud de todas las caracteristicas y funcionalidades requeridas.
  - Calidad y organización del código.
  - Calidad y cobertura de las pruebas automatizadas.
  - Amigabilidad y capacidad de respuesta del frontend.
  - Rendimiento y eficiencia del backend.
- Entender los requisitos también es parte de la prueba.
