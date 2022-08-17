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
rails generate
```
Genera archivos en base a parámetros, por ejemplo `rails generate model user email:string`

--

```bash
rails console
```
Abre una consola en la que podemos interactuar con la aplicación y su base de datos.

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

==

<section data-background-color="#FFF">

Nombre de la tabla: `tweets`

|id|content                     |monster_id |
|- |-                           |-          |
|1|¡Me voy a chupar tu sangre   |1          |
|2|¡Te voy a aplastar           |2          |
|3|¡Te voy a destripar          |3          |
|4|Feliz primavera              |4          |

</section>

==

¿Cómo obtener el tweet con ID 3?

--

<p class="fragment highlight-red">Iterar sobre la tabla hasta encontrar el tweet con ID=3</p>

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

```ruby [1-2|3-4|5-6|7-8]
# Retornar la cantidad de tweets
Tweet.count
# Retornar los tweets ordenados por fecha de creación
Tweet.order(:created_at)
# Retornar el monstruo cuyo nombre es igual a IPS
Monster.find_by(name: "Introducción al procesamiento de Señales")
# Retornar los tweets de dracula ordenados del más nuevo al más viejo
Tweet.where(monster: Monster.find_by(name: "Drácula")).order(created_at: :desc)
```

Se pueden combinar los métodos.

[Rails Guides](https://guides.rubyonrails.org/active_record_basics.html#read)

==

### Update

--

```ruby [3-6]
demogorgon = Monster.find(name: "Demogorgon")
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
