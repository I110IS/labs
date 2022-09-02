---
published: false
---

## Ingeniería de Software 2022
Laboratorio 4 - Rutas y controladores

==

MVC: Model View <span style="color: #efa">Controller</span>

==

Capas de la aplicación

## Controlador
Funciona de intermediario entre el modelo y las vistas

==

### Métodos y acciones

```ruby
class MonstersController < ApplicationController
  def new
    @monster = Monster.new
  end
end
```

1. Un controlador es una clase <!-- .element: class="fragment" -->
1. Nombre en plural <!-- .element: class="fragment" -->
1. Hereda de ApplicationController <!-- .element: class="fragment" -->
1. Tiene métodos públicos <!-- .element: class="fragment" -->
1. La aplicación recibe un pedido http y Rails se encarga de decidir qué controlador y qué acción ejecutar <!-- .element: class="fragment" -->

--

Por ejemplo, el usuario visita `/monsters/new`

¿Qué controlador instanciará Rails?

### MonstersController <!-- .element: class="fragment" -->

¿Qué método se ejecutará? <!-- .element: class="fragment" -->

### new <!-- .element: class="fragment" -->

==

### Params

```ruby [1-100]
class MonstersController < ApplicationController
  def index
    if params[:scariest]
      @monsters = Monster.where(scare_level: 10)
    else
      @monsters = Monster.all
    end
  end

  def create
    @monster = Monster.new(name: params[:monster][:name])

    if @monster.save
      redirect_to @monster
    else
      render :new
    end
  end
end
```

--

```ruby [3|11]
class MonstersController < ApplicationController
  def index
    if params[:scariest]
      @monsters = Monster.where(scare_level: 10)
    else
      @monsters = Monster.all
    end
  end

  def create
    @monster = Monster.new(name: params[:monster][:name])

    if @monster.save
      redirect_to @monster
    else
      render :new
    end
  end
end
```

--

### Sobre ruby

Un hash es una colección de pares clave-valor.

```ruby
monstruo = { name: "Mike", description: "Hola" }

monstruo[:name] #=> "Mike"
monstruo[:description] #=> "Hola"
```

--

### Strong parameters

Los paramétros del pedido son prohibidos de usarse para crear modelos. Primero se deben permitir.

```ruby
class MonstersController < ApplicationController
  def create
    @monster = Monster.new(monster_params)

    if @monster.save
      # ...
  end

  private

  def monster_params
    params.require(:monster).permit(:name, :description)
  end
end
```

==

## redirect_to

![302](https://http.cat/302)

--

```ruby [1-5]
def create
  @monster = Monster.new(monster_params)

  if @monster.save
    redirect_to @monster, notice: "Todo legal"
  else
    render :new
  end
end
```

```ruby [1]
redirect_to root_path, alert: "No se puede"
```

==

## render

No redirige al usuario a otra página, simplemente hace que la aplicación responda con el template de la acción pasada como argumento.

```ruby [6-8]
def create
  @monster = Monster.new(monster_params)

  if @monster.save
    redirect_to @monster, notice: "Todo legal"
  else
    render :new
  end
end
```

Renderiza el template `new.html.erb` para este controlador.

==

## Rutas

WIP

--
