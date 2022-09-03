# I110IS Labs

[![Netlify Status](https://api.netlify.com/api/v1/badges/16cf0f3f-f1a6-4aa8-8dba-4fdc60a07414/deploy-status)](https://app.netlify.com/sites/voluble-cat-16cf66/deploys)

## ¿Cómo presentar?

Presentar usando la vista full screen del browser.

Presionar `s` para abrir la vista de speaker en una nueva ventana.

## TODO

- Agregar Controladores y Rutas (lab4)
- Agregar laboratorio para forms y APIs externas (lab5)
- Agregar anexo para cargar archivos y PDFs (lab6)
- Agregar anexo para manejo de mapas y puntos geográficos (opcional) (lab6?)


## Development

`./build` usa la instalación de ruby disponible en el sistema.

`npm install` para instalar reveal.js y sus dependencias por primera vez.

Correr `./build` para crear las páginas finales en `./dist`.

Instalar `fswatch` para poder builder automáticamente después de hacer algún cambio.

```
fswatch -o labs assets | xargs -n1 -I{} ./build
```

Para levantar un servidor local de `./dist`

```
cd dist && python3 -m http.server
```
