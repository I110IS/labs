---
published: true
---

## Ingeniería de Software 2023
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

<span class="">`index.html.erb`</span>

<span class="fragment">Template para mostrar una colección de recursos</span>

<span class="fragment">`show.html.erb`</span>

<span class="fragment">Template para mostrar la info detallada de un recurso</span>

<span class="fragment">`new.html.erb`</span>

<span class="fragment">Template para crear un recurso</span>

<span class="fragment">`edit.html.erb`</span>

<span class="fragment">Template para editar un recurso</span>

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

## CSS

Es un lenguaje que se usa para describir cómo representar visualmente un documento HTML.

```css
h1 { color: red }
```

--

Un selector referencia a uno o más elementos en el documento HTML

```css
h1 { ... } /* Todos los <h1> */
p { ... } /* Todos los <p> */
.color-red { ... } /* Todos los elementos con la clase "color-red" */
#tweet_content { ... } /* El elemento con ID "tweet_content" */
```

--

Entonces dado el siguiente HTML

```html
<h1>James Sullivan</h1>
<p>Pon esa cosa horrorosa ahí o verás</p>
```

Colorear el título de color gris, darle más espacio vertical al párrafo, color blanco y fondo negro.

```css
h1 {
  color: gray
}

p {
  background: black;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
```

--

Aunque idealmente, para evitar que los estilos se apliquen en elementos donde no deberían, usamos clases

```html
<h1 class="title">James Sullivan</h1>
<p class="body">Pon esa cosa horrorosa ahí o verás</p>
```

Colorear el título de color gris y darle más espacio vertical al párrafo.

```css
.title {
  color: gray
}

.body {
  background: black;
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
```

--

<%= preview_tags[:start] %>
  <h1 style="color: gray">James Sullivan</h1>
  <p style="padding-top: 20px; padding-bottom: 20px; background: black; color: white">Pon esa cosa horrorosa ahí o verás</p>
<%= preview_tags[:end] %>

--

En Rails, los estilos se definen en `app/assets/stylesheets/`.

El archivo `application.bootstrap.scss` es creado por rails y se puede modificar para importar nuevos archivos que uno defina.

SCSS es un preprocesador de CSS, simplemente para simplificar el uso de CSS.

Para compilar SCSS en CSS se debe correr `yarn build:css --watch`.

==

- [¿Qué es HTML?](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [¿Qué es CSS?](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [¿Qué es bootstrap?](https://getbootstrap.com/)

==

## [Anexo sobre ruby🔗](./ruby.html)

==

## [Práctica 🔗](https://github.com/I110IS/lab3/blob/master/README.md)

> "A user interface is like a joke. If you have to explain it, it’s not that good." -[via Hackernoon](https://hackernoon.com/30-jokes-only-programmers-will-get-a901e1cea549)
