# Challenge-oracle-ONE-Encrypter

Encriptador realizado en html, css y js con ayuda de un diseño propuesto en figma.

## Solución

Se hizo uso de variables tipo objeto (estructura JSON) para guardar las llaves correspondiente a cada vocal con su respectivo valor de encriptación para acceder a este al momento de realizar el proceso de encriptado o decencriptado del mensaje del usuario.

### Encriptado

    Para el proceso de encriptado, se toma el mensaje redactado por el usuario en el campo de texto, allí se recorre mediante un ciclo for cada caracter del mensaje para validar si existe dentro de la variable que contiene las llaves, así que de existir, unicamente toma el valor de dicha llave y lo concatena a una variable que se retornará con el mensaje encriptado.

### Decencriptado

    De igual forma que en el proceso encriptación, se toma el mensaje del usuario del campo de texto y se recorre cada caracter, pero para este caso como la encriptación de cada vocal empieca con la misma, entonces se valida que la llave exista en la variable de llaves y de ser así, con el metodo de remplazar un patron de caracteres dentro de una cadena (String.replace()) se iba reemplazando el valor encriptado por la llave original dentro de la misma variable que contiene el mensaje.

### Función Boton Copiar

    Para copiar el texto generado por el algoritmo se hizo uso del objeto navigator.clipboard. Para más información sobre cómo usar navigator.clipboard, favor consultar la documentación en el siguiente enlace:

    * MDN: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard

#### **Para visualizar código con la lógica, favor hacer click [aquí](./js/encriptor.js)**
