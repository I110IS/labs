---
published: true
---

<!-- %s/^##\{1\}\s/### /g -->
## Ingeniería de Software 2022
Laboratorio 1 - Primera app

==

## MVC: Model View Controller

Notas:
MVC es un patrón de diseño de aplicaciones.
Otros patrones son Model View Presenter, Model-View-ViewModel, etc.
MVC particularmente enfatiza la separación entre la implementación de la lógica de negocio y cómo se presenta visualmente al usuario final.

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
### 4. Acá tenés todos los usuarios
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

Notas:
Ruby on Rails es un framework para desarrollar aplicaciones web.
Ruby es el lenguaje de programación, Rails es el nombre del framework.

</section>

==

<section data-background-iframe="https://rubyonrails.org/" data-background-interactive="false">

Notas:
Mostrar empresas que usan Rails.
Mostrar optimizado para la felicidad.

</section>

==

## Comandos

--

```bash
bundle install
```
Instala las gemas (dependencias) requeridas por la aplicación. Se especifican en el archivo `Gemfile`.

Notas:
Bundler es una herramienta para manejar dependencias de software y se instala automáticamente al instalar ruby.
Bundler es el nombre pero el ejecutable es bundle.

--

```bash
gem install rails
```
Instala la gema `rails` en el sistema operativo

Notas:
`gem` es un ejecutable para administrar liberías/gemas de ruby.
Al ejecutar `gem install ALGO` la gema se instala a nivel del sistema operativo.
Sin embargo al agregar la gema al Gemfile, la gema si bien se instala en tu sistema operativo, solo está disponible dentro del directorio donde se encuentra el Gemfile.
No lo vamos a usar mucho.

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
rails generate
```
Genera archivos en base a parámetros, por ejemplo

```bash
rails generate model user email:string
```

--

```bash
rails console
```
Abre una consola en la que podemos interactuar con la aplicación y su base de datos.

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

## Source Code Manager

El control de versiones es un sistema que registra los cambios
realizados sobre un archivo o conjunto de archivos a lo largo
del tiempo, de modo que se puedan recuperar versiones
específicas más adelante.

==

<section data-background-color="#f0efe7">
  <img src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" width="300">
</section>

Notas:
Git fue creado el 2005 para administrar el código fuente del kernel de Linux.
Impulsado por Linus Torvalds y la necesidad del proyecto, luego de que BitKeeper—su versionador anterior—dejara de ofrecer el servicio gratuitamente y se viniera abajo.

==

## Comandos de git

```
git init
```
Para inicializar un repositorio git

--

```
git status
```
Ver el estado de los archivos

```
$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   labs/1_primera_app.md
	modified:   template.html.erb
	modified:   template.js.erb

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	labs/4_rutas_y_controladores.md

no changes added to commit (use "git add" and/or "git commit -a")
```

--

```
git checkout BRANCH
```
Para moverse a otra rama

Notas:
Una rama es una línea de tiempo del código fuente.
Los repositorios git siempre tienen una rama principal, `master` o `main`.

--

```
git checkout -b BRANCH
```
Para crear una nueva rama con nombre BRANCH

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

Notas:
Sirve para marcar o elegir qué archivos me interesan guardar en la línea de tiempo, la rama.

--

```
git commit
```
Para confirmar localmente los archivos

```bash
# Commiteando con mensaje
git commit -m "Guardando emails en minúsculas"
```

Notas:
Sirve para crear un nuevo punto en la línea de tiempo. Ese punto es un `commit`.
Una rama tiene muchos commits a lo largo del tiempo.
Cada commit contiene información del autor de los cambios, un mensaje, un identificador, un timestamp entre otras cosas.

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

Notas:
Un repositorio remoto es un repositorio de git que está en otra computadora y se accede a través de internet.

--

```
git pull REMOTE BRANCH
```
Para descargar los cambios realizados en el repositorio remoto

```
git pull origin master
```

--

```
git merge BRANCH
```
Junta dos o más ramas.

```
git checkout master
git merge downcased-emails
```

Notas:
El ejemplo es, hice commits en la rama `downcased-emails`, luego me paro en la rama `master`, y mergeo `downcased-emails` en la rama en la que estoy parado.
`master` ahora contiene los commits de `downcased-emails`.

--

```
git remote
```
Para revisar los repositorios remotos presentes en tu repositorio local

```
git remote
origin

git remote show origin
* remote origin
  Fetch URL: git@github.com:I110IS/labs.git
  Push  URL: git@github.com:I110IS/labs.git
  HEAD branch: master
  Remote branches:
    gh-pages tracked
    master   tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (local out of date)
```

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

==

<section data-background-color="#FFF">

Nombre de la tabla: `tweets`

|id|content                     |monster_id |
|- |-                           |-          |
|1|¡Me voy a chupar tu sangre   |1          |
|2|¡Te voy a aplastar!          |2          |
|3|Te voy a destripar!          |3          |
|4|Feliz primavera              |4          |

</section>

==

¿Cómo obtener el tweet con ID 3?

--

<p class="fragment highlight-red">Iterar sobre la tabla hasta encontrar el tweet con ID=3 ?¿</p>

Notas:
No!

--

El nombre de la tabla en singular y con mayúscula inicial para referenciar al modelo.

```ruby [1|2-7]
third_tweet = Tweet.find(3)
#<Tweet:0x00000001
  id: 3,
  content: "La mona lisa es la mona más fea",
  monster_id: 2,
  created_at: Sun, 14 Aug 2022 16:59:45.258329000 UTC +00:00,
  updated_at: Sun, 14 Aug 2022 16:59:45.258329000 UTC +00:00>
```

--

```ruby [1|2|3|4]
third_tweet = Tweet.find(3)
third_tweet.id #=> 3
third_tweet.content #=> "La mona lisa es la mona más fea"
third_tweet.monster #=> #<Monster:0x00000001 id: 2>
```

==

## CRUD

Create Read Update Destroy

==

### Create

--

```ruby [2|3|4|5]
mike = Monster.find_by(name: "Mike Wazowski")
t = Tweet.new
t.content = "Donde puedo comprar anteojos de un lente?"
t.monster = mike
t.save
```

El ID lo asigna la DB automáticamente.

[Rails Guides](https://guides.rubyonrails.org/active_record_basics.html#create)

==

### Read

--

```ruby [1-2|3-4|5-6|7-8|9-10]
# Retornar el tweet con ID 3
Tweet.find(3)
# Retornar los tweets con ID 3, 4 y 5
Tweet.where(id: [3, 4, 5])
# Retornar el primer tweet
Tweet.first
# Retornar el último tweet
Tweet.last
# Retornar una colección con todos los tweets
Tweet.all
```

--

```ruby [1-2|3-4|5-6|7-12]
# Retornar la cantidad de tweets
Tweet.count
# Retornar los tweets ordenados por fecha de creación
Tweet.order(:created_at)
# Retornar el monstruo cuyo nombre es igual a IPS
Monster.find_by(name: "Introducción al procesamiento de Señales")
# Retornar los tweets de dracula ordenados del más nuevo al más viejo
Tweet.where(
  monster: Monster.find_by(name: "Drácula")
).order(
  created_at: :desc
)
```

Se pueden combinar los métodos.

[Rails Guides](https://guides.rubyonrails.org/active_record_basics.html#read)

==

### Update

--

```ruby [3-6]
demogorgon = Monster.find_by(name: "Demogorgon")
t = Tweet.find(3)
t.update(
  content: "Encontré monolentes!",
  monster: demogorgon
)
```

[Rails Guides](https://guides.rubyonrails.org/active_record_basics.html#update)

==

### Delete

--

```ruby
t = Tweet.find(3)
t.destroy
```

[Rails Guides](https://guides.rubyonrails.org/active_record_basics.html#delete)

==

## [Práctica 🔗](https://github.com/I110IS/lab1/blob/master/README.md)

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." --Martin Fowler
