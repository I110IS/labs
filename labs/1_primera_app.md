---
published: true
---

<!-- %s/^##\{1\}\s/### /g -->
## Ingeniería de Software 2022
Laboratorio 1 - Primera app

==

## MVC: Model View Controller

==

## Capas de la aplicación

--

### Modelo
Accesos a la DB

--

### Controlador
Funciona de intermediario entre el modelo y las vistas

--

### Vista
Representación visual de la información (usuario final)

==

## Pasos en una aplicación MVC

--

Navegador
### 1. Quiero ver el listado de usuarios
Controlador

--

Controlador
### 2. Traeme todos los usuarios cargados en la BD
Modelo

--

Modelo
### 3. Dame todos los usuarios
Base de datos

--

Base de datos
### 4. Devuelve todos los usuarios
Modelo

--

Modelo
### 5. Ahí van todos los usuarios
Controlador

--

Controlador
### 6. Te paso los usuarios y armá una tabla con borde rojo con todos los datos
Vista

--

Vista
### 7. Ahí va la tabla lista para mostrar al usuario
Controlador

--

Controlador
### 8. Ahí va el listado de usuarios mostrado en la tabla
Navegador

==

<section data-background-color="#D30001">
  <img src="https://rubyonrails.org/assets/images/logo.svg" width="300">
</section>

==

## Sobre rails

--

```bash
bundle install
```
Instala las gemas (dependencias) requeridas por la aplicación. Se especifican en el archivo `Gemfile`.

--

```bash
rails new lab1
```
Crea un nuevo proyecto de rails con `lab1` como nombre

--

```bash
rails server
```
Corre la aplicación

--

```bash
rails console
```
Abre una consola en la que podemos interactuar con la aplicación y su base de datos.

--

```bash
rails generate
```
Genera archivos en base a parámetros, por ejemplo `rails generate model user email:string`

==

<section data-background-color="#f0efe7">
  <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" width="300">
</section>

==

## Manteniendo versiones de los archivos

El método de control de versiones usado por mucha gente es
copiar los archivos a otro directorio (quizás indicando la fecha
y hora en que lo hicieron).

--

```
/Documentos/IDL/Entrega 1.docx
/Documentos/IDL/Entrega 1 ok.docx
/Documentos/IDL/Entrega 1 okok.docx
/Documentos/IDL/Entrega 1 final.docx
/Documentos/IDL/Entrega 1 final v2.docx
/Documentos/IDL/Entrega 1 final v2 2022-05-23.docx
```

==

## Sistema de control de versiones

El control de versiones es un sistema que registra los cambios
realizados sobre un archivo o conjunto de archivos a lo largo
del tiempo, de modo que se puedan recuperar versiones
específicas más adelante.

==

## GIT

```
git init
```
Para inicializar un repositorio git

--

```
git status
```
Ver el estado de los archivos

--

```
git add FILES
```
Para agregar los archivos para el próximo commit

```bash
# Agrega todos los archivos del directorio actual
git add .

# Agrega los archivos Gemfile y Gemfile.lock
git add Gemfile Gemfile.lock
```

--

```
git commit
```
Para confirmar localmente los archivos

```bash
# Commiteando con mensaje
git commit -m "Gurdando emails en minúsculas"
```


--

```
git pull
```
Para descargar los cambios realizados en el repositorio remoto

--

```
git push REMOTE BRANCH
```
Para enviar los cambios al repositorio remoto

```
# Para enviar la rama local 'downcased-emails'
# al repositorio remoto llamado 'origin'
git push origin downcased-emails
```

--

```
git checkout BRANCH
```
Para moverse a otra rama

--

```
git checkout -b BRANCH
```
Para crear una nueva rama con nombre BRANCH

--

```
git remote
```
Para revisar los repositorios remotos presentes en tu repositorio local

--

```
git remote add REMOTE_NAME REMOTE_URL
```
Para agregar un repositorio remoto en tu repositorio git local

```
git remote add origin git@github.com:i110is/lab1.git
```

==

## Twitter para monstruos

<small>Tenemos un 33-12</small>
