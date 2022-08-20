# I110IS Labs

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
