# I110IS Labs

[![Netlify Status](https://api.netlify.com/api/v1/badges/16cf0f3f-f1a6-4aa8-8dba-4fdc60a07414/deploy-status)](https://app.netlify.com/sites/voluble-cat-16cf66/deploys)

## TODO

- Unir Modelos con Migraciones
- Agregar Controladores y Rutas
- Agregar laboratorio para manejo de mapas y puntos geográficos

## Development

Correr `./build` para crear las páginas finales en `./dist`.

Instalar `fswatch` para poder builder automáticamente después de hacer algún cambio.

```
fswatch -o labs assets | xargs -n1 -I{} ./build
```

Para levantar un servidor local de `./dist`

```
cd dist && python3 -m http.server
```
