---
published: false
---

## Ingeniería de Software 2022
Laboratorio 5 - Formularios y APIs externas

==

<div class="r-stack">
  <img src="/assets/forms-google.png" class="fragment fade-in-then-out">
  <img src="/assets/forms-google2.png" class="fragment fade-in-then-out">
  <img src="/assets/forms-facebook.png" class="fragment fade-in-then-out">
  <img src="/assets/forms-twitter.png" class="fragment">
</div>

==

Los formularios representan una sección—de un documento HTML—que contiene controles interactivos para enviar información.

--

```html
<form action="/users" method="post">
  <div class="form-control">
    <label for="name">Ingrese su nombre: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-control">
    <label for="email">Ingrese su email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-control">
    <input type="submit" value="Quiero suscribirme!">
  </div>
</form>
```

<%= preview_tags[:start] %>
<form action="#" method="get">
  <div class="form-control">
    <label for="name">Ingrese su nombre: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-control">
    <label for="email">Ingrese su email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-control" style="margin-top: 5px">
    <input type="submit" value="Quiero suscribirme!">
  </div>
</form>
<%= preview_tags[:end] %>

==

A medida que agregamos más inputs, escribir y mantener el markup se convierte tedioso.

Rails nos provee algunos helper methods para generar el markup.

```erb
<%%= form_with do |form| %>
  Contenido del form acá
<%% end %>
```

```html
<form accept-charset="UTF-8" action="/" method="post">
  <input name="authenticity_token" type="hidden" value="J7CBxfHalt49OSHp27hblqK20c9PgwJ108nDHX/8Cts=" />
  Contenido del form acá
</form>
```

Notas:
El input authenticity_token no se ve en el navegador porque es de tipo `hidden`.
Es parte de una característica de seguridad de rails para evitar que otras páginas puedan enviar información a nuestra aplicación haciéndose pasar por el formulario que escribimos.

==

Escribamos un formulario para buscar tweets.

```erb
<%%= form_with url: "/search", method: :get do |form| %>
  <%%= form.label :query, "Buscar tweets que contengan:" %>
  <%%= form.text_field :query %>

  <%%= form.submit "Buscar" %>
<%% end %>
```

```html
<form action="/search" method="get" accept-charset="UTF-8" >
  <label for="query">Buscar twwets que contengan:</label>
  <input id="query" name="query" type="text" />

  <input name="commit" type="submit" value="Buscar"
    data-disable-with="Search" />
</form>
```

Notas:
Al pasarle el argumento `url: "/search"` le decimos al formulario a donde tiene que enviar la información.
El verbo usado es GET porque más allá de que no se esté modificando ni guardando información en el servidor, esto les permite a los usuarios ver en la URL los parametros enviados y así poder guardar un bookmark en su navegador.

==

Escribamos el formulario para crear un tweet.

```erb
<%%= tweet = Tweet.new %>
<%%= form_with model: tweet do |f| %>
  <%%= f.text_area :content, placeholder: "¿Qué está pasando?",
    size: "60x10" %>

  <%%= f.submit "Twittear" %>
<%% end %>
```

```html
<form action="/tweets" method="post" accept-charset="UTF-8" >
  <input name="authenticity_token" type="hidden" value="..." />
  <textarea name="tweet[content]" id="tweet_content" cols="60"
            rows="10" placeholder="¿Qué está pasando?"></textarea>

  <input type="submit" name="commit" value="Twittear"
    data-disable-with="Twittear">
</form>
```

Notas:
El verbo acá usado es POST, porque el servidor debe crear un recurso (tweet) con esta información.
El verbo es asignado automáticamente por Rails, y es `GET` porque `tweet` es una instancia nueva no persistida en la DB.

--

¿Qué controlador y qué acción atenderá el pedido que envie el formulario anterior?

## tweets#create <!-- .element class="fragment" -->

--

<%= preview_tags[:start] %>
<form action="#" method="get" accept-charset="UTF-8" >
  <input name="authenticity_token" type="hidden" value="..." />
  <textarea name="tweet[content]" id="tweet_content" cols="60"
            rows="10" placeholder="¿Qué está pasando?"></textarea>

  <input type="submit" name="commit" value="Twittear"
    data-disable-with="Twittear">
</form>
<%= preview_tags[:end] %>

--

Configuremos la fecha de publicación

```erb [4]
<%%= form_with model: tweet do |f| %>
  <%%= f.text_area :content, placeholder: "¿Qué está pasando?",
    size: "60x10" %>
  <%%= f.datetime_local_field :publish_at %>

  <%%= f.submit "Twittear" %>
<%% end %>
```

```html
<!-- ... -->
<input type="datetime-local" name="tweet[publish_at]" id="tweet_publish_at" />
```

<%= preview_tags[:start] %>
  <input type="datetime-local" name="tweet[publish_at]" id="tweet_publish_at" />
<%= preview_tags[:end] %>

--

Configuremos el nivel de privacidad

```erb [4]
<%%= form_with model: tweet do |f| %>
  <%%= f.text_area :content, placeholder: "¿Qué está pasando?", size: "60x10" %>
  <%%= f.datetime_select :publish_at %>
  <%%= f.select :privacy_level, ["Público", "Solo seguidores", "Privado"] %>

  <%%= f.submit "Twittear" %>
<%% end %>
```

```html
<!-- ... -->
<select name="tweet[privacy_level]" id="tweet_privacy_level">
  <option value="Público">Público</option>
  <option value="Solo seguidores">Solo seguidores</option>
  <option value="Privado">Privado</option>
</select>
```

<%= preview_tags[:start] %>
<select name="tweet[privacy_level]" id="tweet_privacy_level">
  <option value="Público">Público</option>
  <option value="Solo seguidores">Solo seguidores</option>
  <option value="Privado">Privado</option>
</select>
<%= preview_tags[:end] %>

--

[Otros helpers de interés](https://guides.rubyonrails.org/form_helpers.html#other-helpers-of-interest)

==

## APIs externas

--

Nuestras aplicaiones no pueden resolver todos los problemas que se presentan.

Podemos buscar servicios externos que resuelvan esos problemas por nosotros.

--

Las APIs externas no son más que aplicaciones web servidas por terceros.

Nuestras aplicaciones se puden autenticar contra ellas—depende de la API—y consumirlas a través de pedidos HTTP.

==

Supongamos que nuestra aplicación requiere enviar emails de comunicación a nuestros usuarios de tal manera que los usuarios no podrían usar la aplicación de no ser por los emails que le enviamos.

Necesitamos verificar que los emails que ingresan los usuarios no solamente sean válidos sino que también no sean direcciones desechables.

¿Cómo lo hacemos?

--

Usamos una API externa. Para esta explicación usaremos https://www.abstractapi.com/api/email-verification-validation-api

==

La mayoría de las APIs externas requieren autenticación. Por ende el primer paso es crear una cuenta para poder usar su servicio.

[Crear una cuenta](https://app.abstractapi.com/users/signup?target=/api/email-validation/pricing/select)

<img src="/assets/abstract-api-sign-up.png">

--

Me guardo la API key en las credenciales de Rails.

La API key funciona como una contraseña e indentificador que le permite a AbstractAPI asociar el pedido con mi cuenta.

<img src="abstract-api-api-key.png">

--

Las credenciales de Rails es un archivo encriptado que permite guardar credenciales privadas y commitear el archivo encriptado con git.

[Más sobre las credenciales de Rails](https://guides.rubyonrails.org/security.html#environmental-security)

```bash
rails credentials:edit
```

```
secret_key_base: 3b7cd72...
abstractapi_api_key: ddff47...
```

--

Las APIs se consumen a través de pedidos HTTP. Nuestra aplicación envía un pedido y la API externa la recibe y nos responde con la información pertinente.

¿Cómo le enviamos pedidos HTTP a la API externa?

==

Podemos usar la librería provista por la standard library de Ruby, o podemos elegir otra librería. [https://www.ruby-toolbox.com/categories/http_clients](https://www.ruby-toolbox.com/categories/http_clients).

Usaremos [httparty](https://github.com/jnunemaker/httparty/tree/master/docs)

--

Primera paso es instalar la gema

```ruby
# Gemfile

gem "httparty"
```

```bash
bundle install
```

--

Creamos una clase para interactuar con la API de AbstractAPI.

```ruby
# app/models/email_validator.rb

class EmailValidator
end
```

--

El constructor deberá recibir un email para validar.

```ruby [2-4]
class EmailValidator
  def initialize(email)
    @email = email
  end
end

--

Incluyamos HTTParty y configuremos la URI base.

```ruby [2-4]
class EmailValidator
  include HTTParty

  base_uri "https://emailvalidation.abstractapi.com/v1/"

  def initialize(email)
    @email = email
  end
end
```

--

Escribamos el método que envía el pedido y realiza la validación. Recordemos que queremos validar que el email sea válido y no desechable.

```ruby [10|11-16|18]
class EmailValidator
  include HTTParty

  base_uri "https://emailvalidation.abstractapi.com/v1/"

  def initialize(email)
    @email = email
  end

  def valid?
    response = self.class.get("/", {
      query: {
        api_key: Rails.application.credentials.abstractapi_api_key,
        email: @email
      }
    })

    response["is_valid_format"]["value"] && !response["is_disposable_email"]["value"]
  end
end
```

--

Y finalmente lo agregamos como una validación en nuestro modelo.

```ruby
# app/models/user.rb

class User < ApplicationRecord
  validate :email_must_be_valid_and_not_disposable

  def email_must_be_valid_and_not_disposable
    if EmailValidator.new(email).valid?
      return
    else
      errors.add(:email, :invalid)
    end
  end
end

--

Para probarlo podemos abrir una consola de Rails e intentar validar una instancia de nuestro modelo o usar directamente el validador que creamos.

```ruby
EmailValidator.new("valid@gmail.com").valid? #=> true
EmailValidator.new("yeimunnodducei-4596@yopmail.com").valid? #=> false
```

==

## [Práctica](https://github.com/I110IS/lab5/blob/master/README.md)

> "A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment." -Robert Martin
