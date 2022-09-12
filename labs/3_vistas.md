---
published: false
---

## Ingeniería de Software 2022
Laboratorio 3 - Vistas

==

MVC: Model <span style="color: #efa">View</span> Controller

==

Capas de la aplicación

## Vistas
Presentación visual de la información (usuario final)

==

## Vistas en rails

--

<img data-src="../assets/views-folder.png" class="r-stretch">

--

<span class="">`index.html.erb` > Template para mostrar una colección de recursos</span>

<span class="fragment">`show.html.erb` > Template para mostrar la info detallada de un recurso</span>

<span class="fragment">`new.html.erb` > Template para crear un recurso</span>

<span class="fragment">`edit.html.erb` > Template para editar un recurso</span>

--

### ERB

> ERB provides an easy to use but powerful templating system for Ruby. Using ERB, actual Ruby code can be added to any plain text document for the purposes of generating document information details and/or flow control. [Documentation](https://rubyapi.org/3.1/o/erb)

```erb
<%% Ruby code -- inline with output %>
<%%= Ruby expression -- replace with result %>
<%%# comment -- ignored -- useful in testing %>
```

==

## HTML en rails

1. Templates
1. Partials
1. Layouts

==

## Templates

```erb
<%%# app/views/tweets/index.html.erb %>

<h1>Lista de tweets</h1>
<%% @tweets.each do |tweet| %>
  Tweet: <%%= tweet.content %>
<%% end %>
```

[Templates](https://guides.rubyonrails.org/action_view_overview.html#templates)

--

Otros ejemplos de templates son:

1. app/views/tweets/new.html.erb
1. app/views/tweets/edit.html.erb
1. app/views/tweets/show.html.erb

==

## Partials

```erb
<%%# app/views/tweets/new.html.erb %>

<h1>Nuevo tweet</h1>

<%%= render "form", tweet: @tweet %>
```

<div class="fragment">

```erb
<%%# app/views/tweets/edit.html.erb %>

<h1>Editar tweet</h1>

<%%= render "form", tweet: @tweet %>
```

</div>

<div class="fragment">

```erb
<%%# app/views/tweets/_form.html.erb %>

<%%= form_with model: @tweet do |form| %>
  <%%= form.text_field :content %>
  <%%= form.submit %>
<%% end %>
```

</div>

[Partials](https://guides.rubyonrails.org/action_view_overview.html#partials)

==

## Layouts

```erb
<%%# app/views/layouts/application.html.erb %>

<html>
  <head><title>LAB3</title></head>
  <body>
    <%%= yield %>
  </body>
</html>
```

`yield` identifica la sección donde se va a insertar un template.

[Layouts](https://guides.rubyonrails.org/action_view_overview.html#layouts)

==

## View helpers

¿Cómo insertar una imagen?

```erb
<%%# La imagen debe existir en app/assets/images %>

<%%= image_tag "lab3.png" %>
```

--

¿Cómo insertar un link?

```erb
<%%= link_to monster.name, monster %>

<%%= link_to "Inicio", monsters_path %>

<%%= link_to monsters_path do %>
  <%%= image_tag "home.svg" %>
<%% end %>
```

[Más view helpers](https://guides.rubyonrails.org/action_view_helpers.html)

==

- [¿Qué es HTML?](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [¿Qué es CSS?](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [¿Qué es bootstrap?](https://getbootstrap.com/)

==

## Anexo sobre Ruby

--

## Métodos

En ruby casi todo es un método.

Los métodos se define con `def` y se terminan con `end`.

```ruby
def add_fruit
end
```

--

## Argumentos

En ruby los argumentos se pasan siempre por referencia.

```ruby
fruits = ["pera", "manzana", "sandía"]

def add_fruit(collection, new_fruit)
  collection.push(new_fruit)
end

add_fruit(fruits, "naranja")

puts fruits #=> ["pera", "manzana", "sandía", "naranja"]
```

--

Para pasarlos por valor hay que duplicar el objeto.

```ruby [7]
fruits = ["pera", "manzana", "sandía"]

def add_fruit(collection, new_fruit)
  collection.push(new_fruit)
end

add_fruit(fruits.dup, "naranja")

puts fruits #=> ["pera", "manzana", "sandía"]
```

--

## Argumentos posicionales

Los métodos pueden recibir argumentos ordenados según su posición.

```ruby [5]
def add_fruit(collection, new_fruit)
end

frutas = ["manzana"]
add_fruit(frutas, "pera")
```

--

## Keyword arguments

Los métodos pueden recibir argumentos con nombre y sin orden.

```ruby [5]
def add_fruit(collection:, new_fruit:)
end

frutas = ["manzana"]
add_fruit(collection: frutas, new_fruit: "pera")
```

--

## Paréntesis opcionales

En la mayoría de los casos los paréntesis son opcionales al llamar a un método.

```ruby [5]
def add_fruit(collection, new_fruit)
end

frutas = ["manzana"]
add_fruit frutas, "pera"
```

--

## Variables de instancia

Se declaran usando un `@` por delante.

```ruby
@fruits = []
```

--

## Constructor de clases

Se declara creando un método con nombre `initialize`.

```ruby
class Salad
  def initialize(fruits)
    @fruits = fruits
  end
end

Salad.new(["manzana", "pera"])
```

--

## nil

`nil` es el tipo de dato `nulo` en ruby. Así como en C/C++/Javascript es `null`.

```ruby
monstruo = Monster.find_by(name: "Este monstruo no existe)

puts monstruo #=> nil
monstruo.nil? #=> true
```

--

## Símbolos

Un símbolo es un tipo de dato que se comporta como un string que no puede ser mutado. Empieza con dos puntos.

```ruby
frutas = [:manzana, :pera]

add_fruit frutas, :banana
```

--

## Hash

Un hash es una estructura de datos de tipo clave-valor.

```ruby
response = {
  email: "test@example.com",
  is_valid: true,
  is_disposable: false
}

puts response[:email] #=> "test@example.com"
puts response[:is_valid] #=> true
```

--

Los hashes pueden tener cualquier tipo de objeto como clave y como valor.

```ruby
dracula = Monster.find_by(name: "Dracula")
nahuelito = Monster.find_by(name: "Nahuelito)

tweets_por_monstruo = {
  dracula => dracula.tweets,
  nahuelito => nahuelito.tweets,
  nil => []
}
```

--

## Iteraciones

Hay muchas formas de iterar una colección, #each y #map son las más comunes.

En las vistas usaremos #each.

```erb
<%%= tweets.each do |tweet| %>
  <%%= tweet.content %>
<%% end %>
```

--

Fuera de las vistas, podemos usar cualquier forma. #map retorna un arreglo conformado por elementos cuyo valor es la evaluación del bloque para cada elemento iterado.

Sin embargo #each siempre retorna la misma colección recorrida.

```ruby
tweets = ["Hola que hace?", "Quien para etc?"]

result = tweets.each { |tweet| tweet.size }
puts result #=> ["Hola que hace?", "Quien para etc?"]

result = tweets.map { |tweet| tweet.size }
puts result #=> [14, 15]
```

--

## Bloques

Son pedazos de código ruby que se suelen pasar como argumento a un método.

Puede estar envuelto entre llaves `{` `}`.

```ruby
tweets.map { |tweet| tweet.size }
```

Puede estar envuelto entre un `do` y `end`.

```ruby
tweets.map do |tweet|
  tweet.size
end
```

--

Puede recibir o no variables.

Las variables, como vimos anteriormente, se envuelven en pipes `|`. `|variable_name|`

```ruby
tweets.each do
  puts "Voy a imprimir tantas veces como tweets haya"
end
```

==

## [Práctica](https://github.com/I110IS/lab3/blob/master/README.md)

> "A user interface is like a joke. If you have to explain it, it’s not that good." -[via Hackernoon](https://hackernoon.com/30-jokes-only-programmers-will-get-a901e1cea549)
