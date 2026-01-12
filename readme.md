# MERN Boilerplate

## Getting Started

### Prerequisites

- Node.js
- MySQL
- VSCode

### Installation

1. Clone the repository
2. Run `npm install` in the root directory
3. Run `npm run dev` to start the development server
4. Open `http://localhost:3000` in your browser
5. Run `npm run db:setup` to setup the database
6. Run `npm run db:migrate` to create the database tables
7. Run `npm run db:seed` to populate the database with sample data
8. Run `npm run db:status` to check the database status
9. Run `npm run db:reset` to reset the database
10. Run `npm run env:setup` to setup the environment variables
11. Run `npm run start` to start the production server
12. Open `http://localhost:3000` in your browser

## Usage

### Database

The database is managed using Sequelize. The database schema is defined in the `database/models` directory. The database migrations are defined in the `database/migrations` directory.

To create a new migration, run the following command:

```bash
npm run db:migrate
```

To undo the last migration, run the following command:

```bash
npm run db:migrate:undo
```

To check the status of the database migrations, run the following command:

```bash
npm run db:status
```

To reset the database, run the following command:

```bash
npm run db:reset
```

### Environment Variables

The environment variables are defined in the `.env` file. To setup the environment variables, run the following command:

```bash
npm run env:setup
```

### Server

The server is built using Node.js and Express. The server code is defined in the `server` directory.

To start the server in development mode, run the following command:

```bash
npm run dev
```

To start the server in production mode, run the following command:

```bash
npm run start
```

### Client

The client is built using React and Vite. The client code is defined in the `client` directory.

To start the client in development mode, run the following command:

```bash
npm run dev
```

To start the client in production mode, run the following command:

```bash
npm run start
```

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [license file](LICENSE) for more information.   