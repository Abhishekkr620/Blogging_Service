# Blogging_Service

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A scalable and modular blogging platform built using <a href="http://nodejs.org" target="_blank">Node.js</a> with <strong>NestJS</strong> microservices architecture.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
  <a href="https://github.com/nestjs/nest/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
  <a href="https://www.npmjs.com/package/@nestjs/core" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

---

## 📝 Description

This project is a **basic blogging platform** built using **NestJS microservices architecture**, with **MySQL + TypeORM** for database operations, **DTO validation**, and **Swagger** for API documentation. It includes:

- `UserService`: Handles user registration and retrieval
- `PostService`: Manages blog posts and associates them with users (via HTTP)

---

## 📦 Technologies Used

- **NestJS** — Modular Node.js framework
- **MySQL** — Relational database
- **TypeORM** — ORM for managing DB operations
- **Swagger** — API documentation (`@nestjs/swagger`)
- **Postman** — API testing
- **ValidationPipe** — Request data validation using `class-validator`

---

## 📁 Microservice Folder Structure

```
blogging-platform/
│
├── user-service/
│   ├── src/
│   │   ├── user/               # User module: controller, service, entity, DTOs
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
│
├── post-service/
│   ├── src/
│   │   ├── post/               # Post module: controller, service, entity, DTOs
│   │   ├── app.module.ts
│   │   └── main.ts
│   ├── .env
│   └── package.json
│
├       # (Optional) MySQL + Services orchestration
└── README.md
```

---

## 🚀 Project Setup

### ⬇️ Install Dependencies

```bash
npm install
```

(Repeat in both `user-service/` and `post-service/`)

---

## ▶️ Run the Services

### User Service

```bash
cd user-service
npm run start:dev
```

### Post Service

```bash
cd post-service
npm run start:dev
```

---

## 🔧 Environment Config (.env)

Example for `user-service/.env`:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=root
DB_NAME=blog_user
```

---

## 📬 Swagger Documentation

Once the service is running, visit:

```
http://localhost:3000/api        # UserService
http://localhost:3001/api        # PostService
```

You'll find interactive API documentation with all routes and DTOs.

---

## 🧪 Test Your APIs with Postman

Example workflow:

1. `POST /users` → Create a user
2. `POST /posts` → Create a post (userId required)
3. `GET /posts/user/:userId` → Fetch all posts by a specific user

Each post creation internally contacts UserService to validate user existence.

---

## 🎯 Result & Conclusion

The project demonstrates a scalable backend architecture using microservices with strict separation of concerns. Each service is independently deployable and communicates via HTTP. You’ve used validation, clean folder structure, environment configs, and Swagger for a production-ready base setup.

---

## 📚 Resources

- [NestJS Docs](https://docs.nestjs.com)
- [TypeORM Docs](https://typeorm.io)
- [Swagger Module](https://github.com/nestjs/swagger)
- [Postman](https://www.postman.com/)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is [MIT licensed](https://opensource.org/licenses/MIT).

---

> Built with ❤️ using NestJS
