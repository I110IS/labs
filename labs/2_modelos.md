---
published: true
---

## Ingeniería de Software 2023
Laboratorio 2 - Modelos

==

MVC: <span style="color: #efa">Model</span> View Controller

==

Capas de la aplicación

## Modelo
Accesos a la DB

Notas:
Es la capa del sistema responsable de representar los datos y lógica de negocios

==

## Modelos en Rails
ActiveRecord

Notas:
ActiveRecord es la gema/librería que facilita la creación y el uso de objetos de negocios que requieren ser guardados en la DB.

--

<!-- Add image to models-folder.png from assets folder -->
<img data-src="../assets/modelos-folder.png" class="r-stretch">

Notas:
Supongamos que queremos crear un sistema de recomendación de películas.

--

Podemos crear el archivo manualmente o usando el comando:

```bash
rails generate model movie title:string imbd_url:string
```

```ruby
class Movie < ApplicationRecord
end
```

[Más sobre el comando rails generate](https://guides.rubyonrails.org/command_line.html#bin-rails-generate)

--

`ApplicationRecord` es la clase padre de todos los modelos.

Se encarga, entre otras cosas, de mapear un modelo con una tabla en la base de datos.

```ruby
class Movie < ApplicationRecord    #=> Tabla: movies
end

class Director < ApplicationRecord #=> Tabla: directors
end
```

[Más sobre ActiveRecord, la librería detrás del mapeo entre modelos y tablas](https://guides.rubyonrails.org/active_record_basics.html)

Notas:
No deberíamos permitir películas sin título en nuestro sistema, porque no tienen sentido.

==

## Validaciones

--

```ruby
movie = Movie.new
movie.save
```

<div class="fragment">

|id|title|imdb_url|
|- |-                           |-          |
|1|Wild Tales|https://www.imdb.com/title/tt3011894/|
|2|The Secret in Their Eyes|https://www.imdb.com/title/tt1305806/|
|3|The Motorcycle Diaries|https://www.imdb.com/title/tt0318462/|
|4| | |

</div>

--

```ruby
# app/models/movie.rb

class Movie < ApplicationRecord
  validates :title, presence: true
end
```

```ruby [2-3|4|5-6]
# rails console
movie = Movie.new
movie.save
#=> false
movie.errors.messages
#=> {title: ["can't be blank"]}
```

[Otras validaciones](https://guides.rubyonrails.org/active_record_validations.html#validation-helpers)

--

Las películas creadas después de las 10 de la noche si o sí tienen que tener un `imdb_url` asignado

```ruby [4|6|7|8|1-11]
# app/model/movie.rb

class Movie < ApplicationRecord
  validate :must_have_imdb_url_when_past_ten_pm

  def must_have_imdb_url_when_past_ten_pm
    if created_at.hour >= 22 && title.blank?
      errors.add(:imdb_url, :blank, message: "must be set when current time is past 10 pm")
    end
  end
end
```

[Más sobre validaciones custom](https://guides.rubyonrails.org/active_record_validations.html#custom-methods)

==

## Relaciones

--

`movies`
|id|title|imdb_url|
|- |-                           |-          |
|1|Wild Tales|https://www.imdb.com/title/tt3011894/|
|2|The Secret in Their Eyes|https://www.imdb.com/title/tt1305806/|
|3|The Motorcycle Diaries|https://www.imdb.com/title/tt0318462/|


`reviews`
|id|content|movie_id|
|-|-|-|
|1|Una de las mejores películas del año|1|
|2|La obra maestra del siglo XXI, no ahí con qué darle|1|
|3|Amor y odio en el mejor drama moderno de la pantalla grande|2|

--

```ruby
# app/models/review.rb

class Review < ApplicationRecord
  belongs_to :movie
end
```

```ruby [1-3|5-7]
review = Review.first
review.movie
#=> Retorna una instancia de Movie

movie = Movie.first
review = Review.new(content: "Obvñzfhnhxds", movie: movie)
#=> Inicializa un Review asociado a la primera película
```

Un review pertenece a una película

--

```ruby
# app/models/movie.rb

class Movie < ApplicationRecord
  has_many :reviews
end
```

```ruby
movie = Movie.first
movie.reviews
#=> Retorna una colección de Reviews
```

Una película tiene muchos reviews.

--

```ruby
# app/models/movie.rb

class Movie < ApplicationRecord
  has_many :reviews, dependent: :destroy
end
```

```ruby [1-3|5-7]
m = Movie.first
m.reviews
#=> [#<Review id: 1, ...>, #<Review id: 2, ...>]

m.destroy
Review.where(id: [1, 2])
#=> [] colección vacía, se borraron los reviews junto a la película
```

[Más sobre relaciones](https://guides.rubyonrails.org/association_basics.html)

==

## Migraciones

--

Permiten modificar el esquema de la base de datos.

```ruby
class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :imdb_url

      t.timestamps
    end
  end
end
```

--

¿Cómo crear una migración?

```bash
rails g migration add_details_to_movies
```

<div class="fragment semi-fade-out">

```ruby
class AddDetailsToMovies < ActiveRecord::Migration[7.0]
end
```

</div>

<div class="fragment">

```ruby
class AddDetailsToMovies < ActiveRecord::Migration[7.0]
  def change
    add_column :movies, :release_date, :datetime
    add_column :movies, :duration_seconds, :integer
  end
end
```

</div>

--

¿Cómo correr las migraciones creadas?

```bash
rails db:migrate
```

¿Cómo revertir la última migración?

```bash
rails db:rollback
```

[Más sobre migraciones](https://guides.rubyonrails.org/active_record_migrations.html)

==

## Seeds

--

Sirve para agregar datos iniciales luego de crear la base de datos.

```ruby
# db/seeds.rb

5.times do |index|
  Movie.create(title: "Movie #{index}", imdb_url: "https://example.com/#{index}")
end
```

--

¿Cómo correr el archivo de seeds?

```bash
rails db:seed
```

==

## [Práctica 🔗](https://github.com/I110IS/lab2/blob/master/README.md)

> "Software and cathedrals are much the same; first we build them, then we pray." --Anonymous

==

## Ping pong sobre Modelos

--

1. ¿Qué es ActiveRecord?

Notas:
ActiveRecord es la gema/librería provista por Rails que facilita la creación y el uso de objetos de negocios que requieren ser guardados en la DB.

--

2. ¿Cuál es la diferencia entre un modelo y una tabla?

Notas:
Un modelo es una clase en Ruby y una tabla es un lugar físico para guardar filas en la base de datos.

--

3. ¿Qué tipos de validadores existen?

Notas:
Presencia, numericalidad, formato, customs, ...

--

4. ¿De qué formas puedo asociar modelos entre sí?

Notas:
Con belongs_to y has_many

--

5. ¿Para qué sirve una migración?

Notas:
Para modificar el esquema de la base de datos.
