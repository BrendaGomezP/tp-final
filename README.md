# Sistema de Autenticación y Administración de Usuarios

La API permite el registro y gestión de usuarios, administración de clases a las que pueden asistir dichos usuarios y otras funcionalidades relacionadas como por ejemplo actualización de datos.


## Descripción del Proyecto

Este sistema permite:
- **Registro y Autenticación de Usuarios**: Crear una cuenta e iniciar sesión.
- **Gestión de Usuarios**: Actualización y eliminación de usuarios.
- **Visualización de Clases**: Visualización de todas las clases disponibles. 
- **Administración de Clases**: Inscripción y desvinculación de usuarios a las clases elegidas.
- **Registro y actualizacón de Clases**: Creación, actualización y eliminación de clases.  


## Documentación de la API

La documentación completa de la API, con ejemplos de uso y detalles de cada endpoint, está disponible en el siguiente enlace:

[Documentación en Postman](https://documenter.getpostman.com/view/37273228/2sAY518Kyg)

## Uso

### Endpoints Principales

- **Registro y Autenticación**:
  - `POST /auth/register`: Crear un nuevo usuario.
  - `POST /auth/login`: Inicio de sesión.
  
- **Gestión de Usuarios**:
  - `PUT /user/:id`: Actualizar datos de un usuario por ID.
  - `DELETE /user`: Eliminar un usuario por Username.

- **Administración de Clases**:
  - `POST /subjects`: Crear una clase.
  - `GET /subjects`: Visualizar todas las clases disponibles.
  - `PATCH /subjects`: Actualizar una clase.
  - `DELETE /subjects`: Eliminar una clase.
  - `POST /inscription/join`: Inscribir un usuario en una clase.
  - `DELETE /inscription/drop`: Desvincular un usuario de una clase.

- **Autenticación**:

Para acceder a la mayoría de las solicitudes de usuarios será necesario contar con un TOKEN que sera provisto al Iniciar Sesión como usuario.

## Autoras: GRUPO 3
-Karen
-Brenda
-Yanina

<img src=https://i.pinimg.com/originals/8b/19/fe/8b19feb0d9eec43509283e74917a7fe9.gif>
