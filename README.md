# UX-handmade

This is the **UX** repository for **handmade**, a modern web application built using a monorepo setup with **Turborepo**, **pnpm**, and a modular architecture.

## Technologies Used

- **TypeScript**: Strongly typed JavaScript
- **Next.js**: React framework for server-side rendering and static site generation
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **shadcn**: Prebuilt, customizable components
- **Nodemailer**: Email service for sending emails
- **Zod**: Schema validation and form handling
- **Lottie**: JSON-based animations
- **ESLint**: Enforces code quality
- **Prettier**: Code formatting

## Installation

To install the dependencies, run:

```bash
pnpm install
```

## Usage

To start the development server, run:

```bash
pnpm dev
```

To build the project for production, run:

```bash
pnpm build
```

To lint the project using ESLint, run:

```bash
pnpm lint
```

To format the codebase using Prettier, run:

```bash
pnpm format
```

## Packages

This project is structured using a **monorepo** with the following packages:

- **eslint-config**: Shared ESLint configuration across the monorepo.
- **prettier-config**: Shared Prettier configuration for consistent code formatting.
- **tailwind-config**: Shared Tailwind CSS configuration for styling.
- **typescript-config**: Shared TypeScript configuration for type safety across packages.
- **ui**: UI components built with **shadcn** and **Tailwind CSS** for reusability across the app.

## Environment Variables

Copy `.env.example` to `.env` and configure it based on your local environment:

```bash
cp .env.example .env
```

Make sure to update your email configurations, API keys, and other necessary environment variables.

## Folder Structure

```
/apps
  /website      # The Next.js web application
/packages
  /eslint-config       # Shared ESLint configuration
  /prettier-config     # Shared Prettier configuration
  /tailwind-config     # Shared Tailwind configuration
  /typescript-config   # Shared TypeScript configuration
  /ui                  # Shared UI components built with shadcn and Tailwind
```

## Scripts

- **pnpm dev**: Starts the development server on `http://localhost:3000`.
- **pnpm build**: Builds all apps and packages for production.
- **pnpm lint**: Lints the codebase using the shared ESLint config.
- **pnpm format**: Formats code using the shared Prettier config.

## License

This project is licensed under the MIT License.
