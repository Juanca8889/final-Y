El objetivo del proyecto es crear una aplicación web que permita a los usuarios crear y gestionar sus propias listas de tareas.
La aplicación debe permitir a los usuarios crear nuevas listas, agregar tareas a las listas, marcar tareas como completadas y eliminar listas y tareas.
Además, la aplicación debe ser responsive y adaptable a diferentes dispositivos.


funcionalidades del proyecto:

1. Crear una nueva lista de tareas
2. Agregar tareas a una lista existente
3. Marcar tareas como completadas
4. Eliminar listas y tareas
5. Filtrar tareas por estado (completadas o pendientes)
6. Ordenar tareas por fecha de creación
7. Guardar y cargar listas de tareas en localStorage

instalaciones necesarias:
1. npm create vite@latest nombre_proyecto -- --template react 
2. cd nombre_proyecto  
3. npm install 
-creacion de proyecto react-
1. npm i -D tailwindcss @tailwindcss/postcss @tailwindcss/cli
-instalacion de tailwindcss-

Dependecias necesarias:
 1. "eslint:recommended",
 2. "plugin:react/recommended",
 3. "plugin:react-hooks/recommended",
 4. "prettier"



Orden de proyecto y/o carpetas:
1. inicialmente debemos tener el repositorio local actualizado completamente.
2. las carpetas que debemos de tener son:
   - public
   - src
3. dentro de src tenemos:
   - components
   - pages
   - routes
4. dentro de components tenemos:
   - Task.jsx
   - TaskList.jsx
   - TaskForm.jsx
   - SearchBar.jsx
5. dentro de pages tenemos:
   - login.jsx
   - register.jsx
6. dentro de routes tenemos:
   - privatesroutes.jsx
