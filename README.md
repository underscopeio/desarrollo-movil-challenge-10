## Challenge 10 del curso de Desarrollo Móvil de Coderhouse

Para poder resolver este challenge seguir los siguientes pasos

1. Hacer un **fork** este repositorio
1. Una vez hecho el **fork**, hacer un clon copiando la URL (en el botón verde) y corriendo `git clone <URL>` en la consola
1. Una vez clonado, moverse dentro de la carpeta del proyecto y correr `npm install` (o `yarn`) para instalar las dependencias necesarias
1. Hacer un **nuevo branch** con tu nombre y apellido para identificarte (ej. `git checkout -b gonzalo-aguirre`)
1. Correr el proyecto usando `expo start`
1. Resolver el enunciado, **haciendo un nuevo commit al resolver cada parte**
1. Hacer un **push** del nuevo branch
1. Desde **github.com** crear un nuevo **pull request** desde ese branch hacia master

### Enunciado

Para este challenge vamos a usar la cuenta de **Firebase** que creamos para el challenge anterior.
Vamos a obtener un token de usuario usando Expo que nos servirá para enviarle notificaciones a ese usuario en particular.

#### Integrando notificaciones en Expo
1. Crear un archivo `notifications.js` donde pondremos la lógica encargada de obtener el token de Expo, usando como referencia su [documentación](https://docs.expo.io/versions/latest/guides/push-notifications#1-save-the-users-expo-push-token-145) 
1. En lugar de enviar el token a un backend propio, guardaremos ese **token** del usuario en nuestra DB en Firebase, en una colección llamada `tokens` y usando el **uid** del usuario como key.
1. Importar el archivo `notifications.js` desde `App.js` y verificar que el token se guarda correctamente en la DB

#### Probando las notificaciones con la tool de Expo
1. Ingresar a la [**_tool_ de Expo**](https://expo.io/dashboard/notifications) para enviar notificaciones
1. Obtener el **token** de la DB de Firebase
1. Hacer una prueba de una notificación, antes cerrando la app de Expo en el dispositivo

**IMPORTANTE**: las notificaciones **no funcionan en simuladores**, por lo que la prueba debe ser con un dispositivo real

#### Manejando las notificaciones
Para poder hacer algo ante una notificación (incluso si la aplicación ya se encuentra abierta) podemos definir un _handler_.

1. Seguir la [guía de Expo](https://docs.expo.io/versions/latest/guides/push-notifications#3-handle-receiving-andor-selecting-the-notification-145)
1. Usar un `alert` para mostrar el mensaje de la notificación, sin importar en qué parte de la aplicación estemos