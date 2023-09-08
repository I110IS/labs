---
published: true
---

## Ingeniería de Software 2023
Anexo sobre Ruby

==

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

==

## Paréntesis opcionales

En la mayoría de los casos los paréntesis son opcionales al llamar a un método.

```ruby [5]
def add_fruit(collection, new_fruit)
end

frutas = ["manzana"]
add_fruit frutas, "pera"
```

==

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

==

## nil

`nil` es el tipo de dato `nulo` en ruby. Así como en C/C++/Javascript es `null`.

```ruby
monstruo = Monster.find_by(name: "Este monstruo no existe)

puts monstruo #=> nil
monstruo.nil? #=> true
```

==

## Símbolos

Un símbolo es un tipo de dato que se comporta como un string que no puede ser mutado. Empieza con dos puntos.

```ruby
frutas = [:manzana, :pera]

add_fruit frutas, :banana
```

==

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

==

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

==

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

## [Explorar la documentación de Ruby 🔗](https://rubyapi.org/)
