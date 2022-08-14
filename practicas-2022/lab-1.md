---
theme: serif
published: true
---

# Laboratorio 1 IS2022

Los comandos deben ejecutarse en la consola.
Para salir de la consola de Rails se debe ejecutar `exit`.
La base de datos tiene monstruos y tweets.

==

## Pasos previos

1. Abrir la consola
2. `rails new lab1`
3. Descargar el archivo _fuentes.zip_
4. Descomprimir _fuentes.zip_ en la carpeta del proyecto (reemplazar los repetidos)
5. Agregar la línea `gem 'hirb'` al final del archivo _Gemfile_
6. Ingresar al directorio del proyecto con `cd lab1`

--

7. `bundle install`
8. `rails db:setup`
9. `rails db:seed`
10. `rails c`
11. `require 'hirb'`
12. `Hirb.enable`
