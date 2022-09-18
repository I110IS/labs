# I110IS Labs

[![Deploy](https://github.com/I110IS/labs/actions/workflows/deploy.yml/badge.svg)](https://github.com/I110IS/labs/actions/workflows/deploy.yml)

## ¿Cómo presentar?

Presentar usando la vista full screen del browser.

Presionar `s` para abrir la vista de speaker en una nueva ventana.

## TODO

- Agregar anexo para cargar archivos y PDFs (lab6)
- Agregar anexo para manejo de mapas y puntos geográficos (opcional) (lab6?)

## Deployment

El build script para deployment es:

```
npm install && ./build
```

El publish directory después de correr el build script es:

```
./dist
```

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
