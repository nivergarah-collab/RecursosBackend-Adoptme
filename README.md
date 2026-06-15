# RecursosBackend-Adoptme

> [!NOTE]
> Entrega final de Backend III. Proyecto backend para gestion de usuarios, mascotas, sesiones y adopciones, con pruebas funcionales y ejecucion en Docker.

---

## Enlaces Oficiales

| Plataforma | Recurso |
| :-- | :-- |
| GitHub | [nivergarah-collab/RecursosBackend-Adoptme](https://github.com/nivergarah-collab/RecursosBackend-Adoptme) |
| Docker Hub | [nivergara/adoptme-back](https://hub.docker.com/repository/docker/nivergara/adoptme-back/general) |
| Imagen publica | `nivergara/adoptme-back:1.0` |

---

## Stack Tecnologico

| Componente | Uso |
| :-- | :-- |
| Node.js 24 | Runtime |
| Express 4 | API HTTP |
| MongoDB Atlas + Mongoose | Persistencia |
| JWT + cookies | Sesiones |
| Multer | Carga de imagenes |
| pnpm | Gestor de paquetes |
| Mocha + Chai + Supertest | Tests funcionales |
| Docker | Empaquetado y ejecucion aislada |

---

## Estructura del Proyecto

```text
.
|-- .dockerignore
|-- .env.example
|-- .gitignore
|-- CHANGELOG.md
|-- Dockerfile
|-- Dockerfile.test
|-- Dockerfile.test.dockerignore
|-- README.md
|-- package-lock.json
|-- package.json
|-- pnpm-lock.yaml
|-- src
|   |-- app.js
|   |-- config
|   |   `-- mongo.js
|   |-- controllers
|   |   |-- adoptions.controller.js
|   |   |-- pets.controller.js
|   |   |-- sessions.controller.js
|   |   `-- users.controller.js
|   |-- dao
|   |   |-- Adoption.js
|   |   |-- Pets.dao.js
|   |   |-- Users.dao.js
|   |   `-- models
|   |       |-- Adoption.js
|   |       |-- Pet.js
|   |       `-- User.js
|   |-- dto
|   |   |-- Pet.dto.js
|   |   `-- User.dto.js
|   |-- middlewares
|   |   |-- asyncHandler.js
|   |   |-- errorHandler.js
|   |   `-- validateObjectId.js
|   |-- public
|   |   `-- img
|   |       `-- 1671549990926-coderDog.jpg
|   |-- repository
|   |   |-- AdoptionRepository.js
|   |   |-- GenericRepository.js
|   |   |-- PetRepository.js
|   |   `-- UserRepository.js
|   |-- routes
|   |   |-- adoption.router.js
|   |   |-- pets.router.js
|   |   |-- sessions.router.js
|   |   `-- users.router.js
|   |-- seed.js
|   |-- server.js
|   |-- services
|   |   `-- index.js
|   `-- utils
|       |-- index.js
|       `-- uploader.js
|-- test
|   `-- supertest.test.js
`-- test.md
```

---

## Clonacion e Instalacion

```bash
git clone https://github.com/nivergarah-collab/RecursosBackend-Adoptme.git
cd RecursosBackend-Adoptme
corepack enable
corepack pnpm install
```

## Variables de Entorno

```env
MONGO_URL=mongodb+srv://USUARIO:PASSWORD@cluster.mongodb.net/test_entrega_backend3?retryWrites=true&w=majority
PORT=3000
JWT_SECRET=changeme_jwt_secret
```

> [!IMPORTANT]
> La base usada por el proyecto quedo alineada a `test_entrega_backend3`.

---

## Ejecucion Local

```bash
corepack pnpm run dev
```

## Tests Locales

```bash
corepack pnpm test
```

---

## Produccion en Docker

### Build

```bash
docker build -t adoptme-back:1.0 .
```

### Run

```bash
docker run --env-file .env -p 3000:3000 adoptme-back:1.0
```

> [!IMPORTANT]
> Logs esperados:
>
> ```text
> Conexion a MongoDB establecida con exito.
> Listening on 3000
> ```

### Imagen publica

```bash
docker pull nivergara/adoptme-back:1.0
docker run --env-file .env -p 3000:3000 nivergara/adoptme-back:1.0
```

---

## Testing Efimero en Docker

### Build de imagen de test

```bash
docker build -f Dockerfile.test -t adoptme-back-test:1.0 .
```

### Run de tests

```bash
docker run --rm adoptme-back-test:1.0
```

> [!IMPORTANT]
> Salida esperada:
>
> ```text
> 8 passing
> ```

---

## Endpoints

### Sesiones - `/api/sessions`

| Metodo | Endpoint | Descripcion |
| :-- | :-- | :-- |
| `POST` | `/register` | Registro de usuario |
| `POST` | `/login` | Login tradicional |
| `POST` | `/unprotectedLogin` | Login de prueba |
| `GET` | `/current` | Usuario autenticado desde `coderCookie` |
| `GET` | `/unprotectedCurrent` | Usuario autenticado desde `unprotectedCookie` |

### Usuarios - `/api/users`

| Metodo | Endpoint | Descripcion |
| :-- | :-- | :-- |
| `GET` | `/` | Lista de usuarios |
| `GET` | `/:uid` | Usuario por ID |
| `PUT` | `/:uid` | Actualizacion de usuario |
| `DELETE` | `/:uid` | Eliminacion de usuario |

### Mascotas - `/api/pets`

| Metodo | Endpoint | Descripcion |
| :-- | :-- | :-- |
| `GET` | `/` | Lista de mascotas |
| `POST` | `/` | Alta de mascota |
| `POST` | `/withimage` | Alta de mascota con imagen |
| `PUT` | `/:pid` | Actualizacion de mascota |
| `DELETE` | `/:pid` | Eliminacion de mascota |

### Adopciones - `/api/adoptions`

| Metodo | Endpoint | Descripcion |
| :-- | :-- | :-- |
| `GET` | `/` | Lista de adopciones |
| `GET` | `/:aid` | Adopcion por ID |
| `POST` | `/:uid/:pid` | Crear adopcion |
