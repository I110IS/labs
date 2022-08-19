---
published: true
---

## Ingeniería de Software 2022
Laboratorio 2 - Modelos

==

MVC: <span style="color: #efa">Model</span> View Controller

==

Capas de la aplicación

## Modelo
Accesos a la DB

==

## Modelos en Rails

--

<!-- Add image to models-folder.png from assets folder -->
<img data-src="../assets/modelos-folder.png" class="r-stretch">

--

Podemos crear el archivo manualmente o usando el comando:

```bash
rails generate model tweet content:text monster:references
```

```ruby
class Tweet < ApplicationRecord
end
```

[Más sobre el comando rails generate](https://guides.rubyonrails.org/command_line.html#bin-rails-generate)

--

`ApplicationRecord` es la clase padre de todos los modelos.

Se encarga, entre otras cosas, de mapear un modelo con una tabla en la base de datos.

```ruby
class Tweet < ApplicationRecord   #=> Tabla: tweets
end

class Monster < ApplicationRecord #=> Tabla: monsters
end
```

[Más sobre ActiveRecord, la librería detrás del mapeo entre modelos y tablas](https://guides.rubyonrails.org/active_record_basics.html)

==

## Validaciones

Work in progress
