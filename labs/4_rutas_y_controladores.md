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

```ruby [1-19]
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

### Sobre hashes en ruby

Un hash es una colección de pares clave-valor.

```ruby
monstruo = { name: "Mike", description: "Hola" }

monstruo[:name] #=> "Mike"
monstruo[:description] #=> "Hola"
```

--

### Strong parameters

Los paramétros del pedido son prohibidos de usarse para crear modelos. Primero se deben permitir.

```ruby [3|11-13]
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

```ruby [5]
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

Notas:
Las acciones `#create`, `#update` y `#destroy` no tienen templates porque la respuesta del controlador siempre es un `redirect_to` o un `render`.
`redirect_to` le dice al navegador que vaya a otro lugar.

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

<section data-background-image="../assets/ruta.jpg">

## Rutas

</section>

==

### Conectan URLs con el código


La aplicación recibe:
```
GET /accounts/23
```

La aplicación le pide al router que le busque una acción de controlador que satisfaga el pedido:

```ruby
# config/routes.rb

get '/accounts/:id', to: 'accounts#show'
```

Y el pedido se envía a la acción `show` del controlador de `accounts` con `{ id: '23' }` en los params.

==

### Paths y URLs en el código

Acutalizando la ruta anterior:

```ruby
get '/accounts/:id', to: 'accounts#show', as: 'account'
```

En la vista podríamos escribir el siguiente enlace:
```erb
<%%= link_to 'Cuenta', account_path(@account) %>
```

Asumiendo que `@account` es una variable definida en el controlador que contiene una instancia de `Account`.

==

### HTTP y sus verbos

HTTP es un protocolo de la capa de aplicación para transmitir documentos, por ejemplo documentos HTML.

Sirve como medio de comunicación entre un navegador y un servidor web.

HTTP no guarda información entre un request y otro, es _stateless_.

--

HTTP define un grupo de verbos que indican la acción que se desea realizar.

1. `GET` pide información sobre un recurso
1. `POST` envía información sobre un recurso, comúnmente para crear un modelo
1. `PUT`/`PATCH` envía información para reemplazar un recurso, comúnmente actualizar un modelo
1. `DELETE` para eliminar el recurso especificado

--

```ruby
get '/accounts/:id', to: 'accounts#show'
get '/accounts/new', to: 'accounts#new'
post '/accounts', to: 'accounts#create'
put '/accounts/:id', to: 'accounts#update'
delete '/accounts/:id', to: 'accounts#destroy'
```

==

### The rails way

```ruby
resources :accounts
```

Es equivalente a:

```ruby
get '/accounts', to: 'accounts#index'
get '/accounts/new', to: 'accounts#new'
post '/accounts', to: 'accounts#create'
get '/accounts/:id', to: 'accounts#show'
get '/accounts/:id/edit', to: 'accounts#edit'
put '/accounts/:id', to: 'accounts#update'
patch '/accounts/:id', to: 'accounts#update'
delete '/accounts/:id', to: 'accounts#destroy'
```

==

## Root path

```ruby
root 'accounts#index'
```

Al visitar la ruta `/`, la aplicación matchea el pedido con la acción index del controlador de accounts.

==

- [Documentación oficial sobre controladores](https://guides.rubyonrails.org/action_controller_overview.html)
- [Documentación oficial sobre rutas](https://guides.rubyonrails.org/routing.html)

==

## [Práctica](https://github.com/I110IS/lab4/blob/master/README.md)

> "Before software can be reusable it first has to be usable." -Ralph Johnson
