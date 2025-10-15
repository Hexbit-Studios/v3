# Contributing to v3

First off, thank you for considering contributing to v3! It's people like you that make this library better for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps to reproduce the problem**
* **Provide specific examples** - Include code snippets or links to the code
* **Describe the behavior you observed and what you expected to see**
* **Include screenshots if relevant**
* **Note your environment** - Vue version, browser, OS, etc.

### Suggesting Features

Feature suggestions are welcome! When suggesting a feature:

* **Use a clear and descriptive title**
* **Provide a detailed description of the suggested feature**
* **Explain why this feature would be useful** to most users
* **Provide examples** of how the feature would work

### Pull Requests

We actively welcome your pull requests! Here's how to contribute code:

## Getting Started

### Prerequisites

* Node.js (v20+)
* npm
* Git

### Setup Development Environment

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/YOUR-USERNAME/vue-d3-components.git
   cd vue-d3-components
   ```

3. **Install dependencies**:

   ```bash
   npm install
   # or
   pnpm install
   ```

4. **Create a branch** for your changes:

   ```bash
   git checkout -b feature/your-feature-name
   ```

### Development Workflow

1. **Run the development server**:

   ```bash
   npm run dev
   ```

   This starts the demo app where you can test your changes.

2. **Make your changes** in the `src/` directory

3. **Test your changes** thoroughly:
   * Test in the demo app
   * Check different data scenarios
   * Verify responsive behavior
   * Test in different browsers if possible

4. **Build the library** to ensure no errors:

   ```bash
   npm run build
   ```

## Code Style Guidelines

* **Use TypeScript** - All new code should be properly typed
* **Follow Vue 3 Composition API patterns** - Use `<script setup>` syntax
* **Use composables** for reusable logic
* **Comment complex logic** - Help future contributors understand your code
* **Keep components focused** - Each component should have a single responsibility
* **Write clear commit messages** - Use present tense ("Add feature" not "Added feature")

### Code Formatting

We use ESLint and Prettier for code formatting. Run before committing:

```bash
npm run lint
```

## Commit Message Guidelines

Use clear, descriptive commit messages:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Code style changes (formatting, semicolons, etc.)
* **refactor**: Code changes that neither fix bugs nor add features
* **test**: Adding or updating tests
* **chore**: Maintenance tasks

Examples:

```bash
feat: add scatter plot component
fix: correct axis scaling in bar chart
docs: update README with new examples
```

## Pull Request Process

1. **Update documentation** - If you've added features, update the README
2. **Add examples** - Show how your feature works in the demo app
3. **Test thoroughly** - Make sure everything works as expected
4. **Create the PR** with a clear title and description
5. **Link any related issues** - Use "Fixes #123" or "Closes #456"
6. **Respond to feedback** - Be open to suggestions and improvements

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe how you tested your changes

## Screenshots (if applicable)
Add screenshots or GIFs showing the changes
```

## Component Guidelines

When creating new chart components:

1. **Use the composable pattern** - Follow the structure in existing components
2. **Accept flexible data formats** - Make it easy for users to use their data
3. **Provide sensible defaults** - But allow customization
4. **Handle edge cases** - Empty data, invalid data, etc.
5. **Make it responsive** - Components should work at different sizes
6. **Document props** - Use JSDoc comments for all props

## Questions?

Feel free to open an issue with the "question" label or reach out to the maintainers.

## Recognition

Contributors will be acknowledged in our README and release notes. Thank you for helping make v3 better!

---

By contributing, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).