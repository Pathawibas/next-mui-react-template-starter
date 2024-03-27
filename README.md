## Project Template

This project template is built with [Next.js](https://nextjs.org/) and [Material-UI](https://mui.com/). It provides a starting point for developing web applications with a modern UI.

### Features

- Integration with Material-UI for beautiful and responsive UI components.
- Code formatting with Prettier. The following Prettier configuration is used:
  ```json
  {
    "trailingComma": "es5",
    "tabWidth": 2,
    "semi": false,
    "singleQuote": true
  }
  ```
- Pre-commit hook with Husky to run `npm run lint` before committing changes.
- ESLint configuration with the following rules:
  ```json
  {
    "extends": [
      "next/core-web-vitals",
      "plugin:@next/next/recommended",
      "prettier"
    ],
    "plugins": ["material-ui"],
    "parserOptions": {
      "project": "./tsconfig.json"
    },
    "rules": {
      "react/react-in-jsx-scope": "off",
      "import/extensions": "off",
      "semi": "off",
      "arrow-body-style": "off"
    }
  }
  ```

---

# VS Code Formatting Setup

Ensure consistent code formatting in your project with VS Code and Prettier. Follow these steps to configure your environment.

## Setup

1. **Ensure Prettier Extension Installed**: Install the [Prettier - Code formatter extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in VS Code.

2. **Create `.vscode/settings.json`**:

   - If not present, create a `.vscode` directory in your project root.
   - Inside `.vscode`, create a `settings.json` file.

3. **Add Configuration**:
   Paste the following settings into `settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

These settings apply Prettier formatting on save for JavaScript and TypeScript files.

or

### Formatting from the Command Line

**Using the Script**: - To format your project, run one of the following commands in your terminal: - If using Yarn, execute `yarn format`. - If using npm, execute `npm run format`.

## Code Conventions

To maintain consistency and readability in the codebase, please follow these conventions:

- Folder names for app routers should use kebab-case (e.g., `my-router`).
- Interfaces should start with the letter "I" and use PascalCase (e.g., `IUser`, `IProduct`).
- When dealing with arrays or lists, use plural names (e.g., `users`, `products`).
- Boolean variables should use verb or action first, followed by a noun (e.g., `isLoading`, `canSubmit`).
- Enums and constants should use UPPER_CASE with underscores (e.g., `DEFAULT_VALUE = 120`, `enum UserRole { ADMIN = 'admin' }`).
- Component files should use PascalCase (e.g., `CreateButton.tsx`).
- Utility files should use camelCase (e.g., `myUtilityFile.ts`).

## Clean Code JavaScript

For writing clean and maintainable JavaScript code, you can refer to the [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript) repository. It provides a set of guidelines and best practices for writing clean code in JavaScript.

The repository covers various aspects of code organization, naming conventions, functions, classes, comments, and more. It can be a valuable resource to improve the readability and maintainability of your codebase.

Make sure to check out the repository and apply the principles of clean code in your project.

## Getting Started

To get started with this project template, follow these steps:

1. Clone the repository.
2. Install the dependencies by running `npm install` or `yarn install`.
3. Start the development server by running `npm run dev` or `yarn dev`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
5. Start editing the page by modifying `app/page.tsx`. The page will auto-update as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can also check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) for more information. Your feedback and contributions are welcome!

## Enhanced Form Handling and Validation

This project leverages the powerful combination of `react-hook-form`, `zod`, `@tanstack/react-query`, and `@hookform/resolvers` to provide a developer-friendly experience for building forms with efficient validation and server-state management.

### react-hook-form

[`react-hook-form`](https://react-hook-form.com/) is a flexible library that enables you to manage forms with minimal re-renders. It provides hooks for managing form state, validating input data, and handling form submission.

- Use the `useForm` hook to create form instances with default values, custom validation, and submission handling.
- Utilize `register` to connect your input fields to the form instance.

### zod

[`zod`](https://github.com/colinhacks/zod) is a TypeScript-first schema validation library. It allows you to build complex data structures with validation rules.

- Define validation schemas with a simple and expressive syntax.
- Use these schemas to enforce the structure and content of form data.

### @hookform/resolvers

[`@hookform/resolvers`](https://github.com/react-hook-form/resolvers) works seamlessly with `react-hook-form` to enable Zod-based validation.

- Implement the `zodResolver` to integrate your Zod schema with `react-hook-form`.

### @tanstack/react-query

[`@tanstack/react-query`](https://tanstack.com/query/v4) is a library that manages server state in React applications.

- Fetch, cache, and update data with the `useQuery` and `useMutation` hooks.
- Handle asynchronous operations like form submissions to server endpoints.

### Usage Example

Below is a simplified example that illustrates how to set up a form with validation and server-state management:

```tsx
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

// Define your schema with Zod
const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
})

// Create your form with react-hook-form and integrate the Zod schema with zodResolver
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(schema),
})

// Setup a mutation with react-query
const { mutate } = useMutation(submitFormData)

// Handle form submission
const onSubmit = (data) => mutate(data)

// Render your form with validation feedback
;<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register('email')} />
  {errors.email && <p>{errors.email.message}</p>}
  <input type="password" {...register('password')} />
  {errors.password && <p>{errors.password.message}</p>}
  <input type="submit" />
</form>
```

### Getting Started with Form Handling

To integrate these form handling features in your project:

1. Define your form validation schemas using Zod.
2. Set up your forms using `react-hook-form` and apply the validation with `zodResolver`.
3. Manage server interactions with `@tanstack/react-query`, using `useQuery` for data fetching and `useMutation` for actions like form submission.

By following these steps, you can ensure robust validation and efficient server-state management for your forms.
