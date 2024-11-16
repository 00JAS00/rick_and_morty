AGREGAR:
*   autenticacion
*   borrado logico
*   registro y login LOCAL
*   Deploy

Document API

/
# API Task Managment

## Description


## Technologys
- Node.js
- Express.js
- PostgreSQL

## URL Base
Todas las peticiones se realizan a la URL base: `https://localhost:3000/rickandmorty/`


---

## Autenticatión
La API utiliza autenticación basada en tokens JWT (JSON Web Tokens). Los usuarios deben autenticarse para realizar cualquier operación. 

1. **Registro:** Crea una cuenta en el endpoint `/auth/register`.
2. **Login:** Autentícate con tus credenciales en `/auth/login` para obtener el token JWT.
3. **Uso del Token:** Añade el token en los headers de cada petición:

## Characters
    Endpoints
    Get All Characters
    /rickandmorty/characters/
    Get Character by id
    /rickandmorty/characters/:id 
##Response
    {
        
    }

   ```http