# Nufacturing App

## Overview

The Nufacturing App employs a comprehensive multi-environment setup to facilitate streamlined development, rigorous testing, and seamless deployment. The environments include Local, Development, Testing, Staging, and Production. This structured setup, combined with a well-defined branching strategy and continuous integration processes, ensures robust and efficient development cycles.

# Nufacturing App

[![Coverage Status](https://coveralls.io/repos/github/gallimore-software/nufacturing-api/badge.svg?branch=main)](https://coveralls.io/github/gallimore-software/nufacturing-api?branch=main)

## Table of Contents

- [Nufacturing App](#nufacturing-app)
  - [Overview](#overview)
- [Nufacturing App](#nufacturing-app-1)
  - [Table of Contents](#table-of-contents)
  - [Environments](#environments)
    - [Local Environment](#local-environment)
    - [Development Environment](#development-environment)
    - [Testing Environment](#testing-environment)
    - [Staging Environment](#staging-environment)
    - [Production Environment](#production-environment)
  - [Angular App](#angular-app)
    - [Development Server](#development-server)
    - [Code Scaffolding](#code-scaffolding)
    - [Build](#build)
    - [Running Unit Tests](#running-unit-tests)
    - [Running End-to-End Tests](#running-end-to-end-tests)
    - [Linting](#linting)
    - [Further Help](#further-help)
  - [Node.js API](#nodejs-api)
    - [Setup](#setup)
    - [Running the Server](#running-the-server)
    - [Database Configuration](#database-configuration)
    - [API Documentation](#api-documentation)
  - [Branching Strategy](#branching-strategy)
    - [Branch Types](#branch-types)
    - [Tags](#tags)
    - [Branching Rules](#branching-rules)
  - [Workflow Diagram](#workflow-diagram)
  - [Additional Resources](#additional-resources)

## Environments

### Local Environment

- **Purpose:** Provides an isolated space for developers to work on new features and fixes.
- **Setup:**
  - Local MongoDB
  - Local Node.js API
  - Local Angular App
- **Branching Strategy:** Developers create branches from each epic with the epic key ID in the branch name, ensuring organized and traceable changes.
- **Advantages:**
  - **Development Isolation:** Prevents local changes from affecting the shared development environment.
  - **Fast Iteration:** Quick testing and debugging on local machines speed up development cycles.

### Development Environment

- **Purpose:** Integrates all individual feature branches to test their interaction.
- **Setup:**
  - Development MongoDB
  - Development API
- **Branching Strategy:** Development branches in API and frontend repositories.
- **Advantages:**
  - **Integration Testing:** Ensures new code interacts correctly with the existing codebase.
  - **Continuous Integration:** Utilizes GitHub Actions for automatic deployment, ensuring prompt testing of new changes.
  - **Collaborative Development:** Shared environment helps detect integration issues early.

### Testing Environment

- **Purpose:** Runs a full suite of automated tests to catch bugs before code reaches staging or production.
- **Setup:**
  - Testing MongoDB
  - Testing API
- **Branching Strategy:** Testing branches in API and frontend repositories.
- **Advantages:**
  - **Automated Testing:** Ensures comprehensive testing to catch bugs and issues early.
  - **Quality Assurance:** QA teams perform extensive manual and exploratory testing.
  - **Stability Verification:** Tests application behavior with real-world data scenarios.

### Staging Environment

- **Purpose:** Simulates the production environment for final validation before deployment.
- **Setup:**
  - Staging MongoDB
  - Staging API
- **Branching Strategy:** Staging branches in API and frontend repositories.
- **Advantages:**
  - **Pre-Production Validation:** Ensures the application is ready for production.
  - **User Acceptance Testing (UAT):** Stakeholders and end-users validate the application.
  - **Deployment Rehearsal:** Tests the deployment process to ensure a smooth transition to production.

### Production Environment

- **Purpose:** The live environment where the application is available to end-users.
- **Setup:**
  - Production MongoDB
  - Production API
- **Branching Strategy:** Production branches in API and frontend repositories.
- **Advantages:**
  - **Live Environment:** The final environment for end-user access.
  - **Performance Monitoring:** Real-time monitoring of application performance and user activity.
  - **High Availability and Scalability:** Ensures the application can handle the required load and provides uninterrupted service.

## Angular App

### Development Server

To start a development server, run the following command:

```sh
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

### Code Scaffolding

To generate a new component, directive, pipe, service, class, guard, interface, enum, or module, use the following Angular CLI command:

```sh
ng generate component component-name
# or
ng generate directive|pipe|service|class|guard|interface|enum|module name
```

### Build

To build the project, run:

```sh
ng build
```

The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running Unit Tests

To execute the unit tests via [Karma](https://karma-runner.github.io), run:

```sh
ng test
```

### Running End-to-End Tests

To execute the end-to-end tests via a platform of your choice, first, you need to add a package that implements end-to-end testing capabilities. For example, you can use [Protractor](http://www.protractortest.org/).

To add Protractor, run:

```sh
ng add @angular/pwa
```

Then, to execute the end-to-end tests, run:

```sh
ng e2e
```

### Linting

To analyze and fix code style issues, run:

```sh
ng lint
```

This will use TSLint to lint your project's code according to the defined configuration.

### Further Help

To get more help on the Angular CLI, use:

```sh
ng help
```

For detailed documentation and further assistance, check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Node.js API

### Setup

To install the necessary dependencies, run:

```sh
npm install
```

### Running the Server

To start the server, run:

```sh
npm start
```

The server will start on the port defined in your environment configuration.

### Database Configuration

Ensure your MongoDB instance is running and accessible. Configure your MongoDB connection string in the `.env` file for different environments (development, testing, staging, production).

### API Documentation

Swagger documentation is available for the API. To view the documentation, start the server and navigate to `http://localhost:3000/api-docs`.

## Branching Strategy

### Branch Types

- **Feature Branches:** For new features or enhancements. Named as `feature/NFG-<issue-number>-<short-description>`.
- **Hotfix Branches:** For urgent fixes in the production environment. Named as `hotfix/NFG-<issue-number>-<short-description>`.
- **Staging Branch:** For pre-production testing. Named as `staging`.
- **Production Branch:** For production deployment. Named as `main`.

### Tags

Use tags for marking significant releases or milestones. For example, `v1.0.0`.

### Branching Rules

- **Enforce Branch Naming Policies:** Using Git hooks and GitHub Actions, enforce the naming conventions for branches.
- **Commit Message Pattern:** Ensure commit messages follow conventional commit standards.
- **Pull Requests:** Require pull requests for merging into development, staging, and main branches.

## Workflow Diagram

![Workflow Diagram][def]

## Additional Resources

- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Protractor](http://www.protractortest.org/)
- [Karma](https://karma-runner.github.io)
- [Swagger](https://swagger.io/)

By maintaining these five environments, Gallimore Software ensures a robust, reliable, and efficient development and deployment process for the Nufacturing app. This approach leads to higher quality software and improved user satisfaction, aligning with our goals of delivering innovative and customer-centric solutions.

[def]: ./docs/WORKFLOW.png
