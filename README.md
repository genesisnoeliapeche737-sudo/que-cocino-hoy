# ¿Qué Cocino Hoy?

## Descripción del proyecto

¿Qué Cocino Hoy? es una aplicación web que recomienda recetas a partir de los ingredientes disponibles en casa. Fue desarrollada como trabajo final de Desarrollo de Aplicaciones de quinto año de secundaria y se puede utilizar desde una computadora o un celular.

## Problema que resuelve

Cuando llega la hora de cocinar, puede ser difícil pensar en una comida que aproveche lo que ya hay en la despensa o en la heladera. Revisar varias recetas y comparar sus ingredientes lleva tiempo. Eso dificulta decidir qué preparar y saber qué hace falta comprar.

## Objetivo

Facilitar la elección de comidas cotidianas y ayudar a aprovechar los alimentos disponibles en casa.

## Funcionalidades

- **Despensa.** Permite buscar ingredientes, marcar los que hay en casa y quitarlos cuando se acaban.
- **Catálogo de 18 recetas.** Cada receta incluye ingredientes con sus cantidades, porciones, tiempos de preparación y cocción, e instrucciones paso a paso.
- **Recomendaciones automáticas.** Cada tarjeta muestra el porcentaje de coincidencia y señala si la receta se puede preparar o cuántos ingredientes faltan.
- **Filtros.** Permiten combinar categoría, dificultad y tiempo máximo de preparación. El tiempo de cocción se muestra por separado.
- **Favoritos.** El botón con forma de corazón permite guardar recetas en la sección **Favoritos** y quitarlas cuando se desee.
- **Lista de compras.** Al agregar los faltantes desde el detalle de una receta, cada ingrediente se incorpora una sola vez aunque haga falta para varias recetas. Los productos se pueden marcar como comprados o eliminar.

## Funcionamiento de la aplicación

Cada vez que cambia la despensa, JavaScript compara los ingredientes seleccionados con los de cada receta. Cuenta los que están disponibles, divide ese número por el total de ingredientes de la receta, multiplica el resultado por 100 y lo redondea al entero más cercano. La comparación se basa en la presencia de cada ingrediente. Las cantidades necesarias se consultan en el detalle de la receta.

Por ejemplo, la **tortilla de papas** requiere papa, huevo, cebolla, aceite y sal. Con los primeros cuatro ingredientes, la coincidencia es del **80 %** y la sal figura como faltante. Al agregar la sal a la despensa, la coincidencia llega al **100 %** y la tarjeta indica **Podés prepararla**.

Entre las recetas que cumplen los filtros activos, aparecen primero las que tienen más ingredientes disponibles. Si dos tienen la misma cantidad, se prioriza la de mayor porcentaje. Si ambos valores coinciden, se conserva el orden del catálogo.

## Tecnologías utilizadas

| Tecnología | Uso en la aplicación |
| --- | --- |
| HTML5 | Define la estructura de la página, la navegación y los controles. |
| CSS3 | Define el diseño visual y adapta la distribución a distintos tamaños de pantalla. |
| JavaScript puro | Calcula las coincidencias, ordena y filtra las recetas, y actualiza la interfaz cuando cambia la selección. |
| `localStorage` | Conserva la despensa, los favoritos, la lista de compras y las marcas de comprado en el navegador entre visitas. |

## Estructura del proyecto

| Archivo o carpeta | Contenido |
| --- | --- |
| [`index.html`](index.html) | Estructura de la interfaz y de las secciones de la aplicación. |
| [`styles.css`](styles.css) | Estilos y reglas para adaptar la interfaz a distintos tamaños de pantalla. |
| [`script.js`](script.js) | Catálogo de recetas, lógica de coincidencias y gestión de los datos guardados. |
| [`README.md`](README.md) | Documentación del proyecto. |
| [`assets/recipes/`](assets/recipes/) | Imágenes locales de la portada y de las recetas. |

## Cómo utilizar la aplicación

1. En **Mi despensa**, buscá y seleccioná los ingredientes que tenés en casa.
2. Revisá las coincidencias en **Recetas** y usá los filtros para acotar las opciones.
3. Elegí **Ver receta** para consultar las cantidades, los pasos y los ingredientes que faltan.
4. Tocá el corazón de una receta para guardarla en **Favoritos**. Volvé a tocarlo para quitarla.
5. Si te falta algún ingrediente, elegí **Agregar faltantes a compras**. Entrá en **Compras** para marcar los productos comprados o eliminarlos.
