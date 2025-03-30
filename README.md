## Description
System Design Overview

Your AI Physics Tutor system should have a structured flow to ensure students can learn, practice, and track their progress efficiently. Below is the best way to structure the system:
1. User Roles

    Admin: Manages topics, exams, and monitors student activity.

    Student: Learns, attempts exams, explores topics, queries AI, and tracks history.

2. System Flow

    Authentication & Role Management

        Users (admins & students) register/login.

        Admins manage the system while students interact with learning content.

    Sidebar Features (Main Modules)

        Topics: List of all physics topics (e.g., Motion, Electricity).

        Learn: AI tutor explains the topic interactively.

        Exam: Displays questions for students to attempt.

        Explore: Students browse topics and choose one to learn.

        History: Tracks student progress, queries, and exams taken.

    AI Interaction

        When a student selects a topic, an AI tutor responds to their questions based on that topic.

    Exam & Progress Tracking

        Students attempt quizzes.

        Their performance and history are recorded.



## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.


## Stay in touch

- Author - [Reaganz-Wat](https://twitter.com/kammysliwiec)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).