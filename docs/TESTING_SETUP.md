Here's a consolidated and improved setup for your GitHub workflows, `husky` hooks, and necessary configuration files for both your Node.js API and Angular app, considering the context and tasks you provided. I've refined the structure and provided clear steps for setting up each component.

### Node.js API

#### GitHub Workflows

1. **ci.yml**

```yaml
name: CI

on:
  push:
    branches:
      - development
      - staging
      - production
  pull_request:
    branches:
      - development
      - staging
      - production

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/production'

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Deploy to Production
        run: |
          # Add your deployment script here
```

2. **enforce_branch-naming.yml**

```yaml
name: Enforce Branch Naming

on:
  push:
    branches:
      - "*"

jobs:
  check-branch-name:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Enforce branch naming convention
        run: |
          BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
          PATTERN="^(feature|bugfix|hotfix|improvement)/NFG-[0-9]+-.+"
          if [[ ! $BRANCH_NAME =~ $PATTERN ]]; then
            echo "Error: Branch name '$BRANCH_NAME' does not follow the naming convention."
            exit 1
          fi
```

3. **node-test-coverage.yml**

```yaml
name: Node.js CI with Test Coverage

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests with coverage
        run: npm run coverage

      - name: Upload coverage report
        uses: actions/upload-artifact@v2
        with:
          name: coverage-report
          path: coverage/
```

4. **test.yml**

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run unit tests
        run: npm test

      - name: Run integration tests
        run: npm run integration-test

      - name: Run Cypress tests
        run: npm run cypress:run

      - name: Generate coverage report
        run: npm run coverage
```

#### Husky Hooks

1. **commit-msg**

```sh
#!/bin/sh

# Commit message file passed by Git
commit_msg_file="$1"

# Read the commit message
commit_msg=$(cat "$commit_msg_file")

# Define a regex pattern for the issue ID (adjust this pattern to match your issue IDs)
issue_id_pattern="NFG-[0-9]+"

# Check if the commit message matches the issue ID pattern
if ! echo "$commit_msg" | grep -qE "$issue_id_pattern"; then
  echo "Error: Commit message must contain a valid issue ID (e.g., NFG-123)."
  exit 1
fi
```

2. **pre-commit**

```sh
#!/bin/sh
# This hook checks that branches are named according to the convention.

current_branch=$(git rev-parse --abbrev-ref HEAD)
branch_regex="^(feature|bugfix|hotfix|release)/NFG-[0-9]+-.+$"

if ! echo "$current_branch" | grep -Eq "$branch_regex"; then
  echo "Error: Branch name '$current_branch' does not follow the naming convention."
  echo "Please rename your branch to follow the convention: (feature|bugfix|hotfix|release)/NFG-123-description."
  exit 1
fi

# Lint staged files
prettier $(git diff --cached --name-only --diff-filter=ACMR | sed 's| |\\ |g') --write --ignore-unknown
git update-index --again
```

3. **pre-push**

```sh
#!/bin/sh

# Do not allow push to protected branches
protected_branches='development|testing|staging|production'

current_branch=$(git rev-parse --abbrev-ref HEAD)

if echo "$current_branch" | grep -Eq "$protected_branches"; then
  echo "Error: Direct push to $current_branch is not allowed."
  echo "Please use pull requests for changes to this branch."
  exit 1
fi

# Do not allow push if missing Jira issue ID in commit message.
while read local_ref local_sha remote_ref remote_sha; do
  if [ "$local_sha" = "0000000000000000000000000000000000000000" ]; then
    # Branch is being deleted, ignore
    continue
  fi

  COMMITS=$(git rev-list $remote_sha..$local_sha)
  for COMMIT in $COMMITS; do
    MESSAGE=$(git log --format=%B -n 1 $COMMIT)
    if [[ ! $MESSAGE =~ NFG-[0-9]+ ]]; then
      echo "Error: Commit message '$MESSAGE' does not contain a Jira issue ID (NFG-<issue-number>)."
      exit 1
    fi
  done
done
```

#### `package.json` Scripts

```json
{
  "name": "node_nufacturing",
  "version": "1.0.0",
  "scripts": {
    "prepare": "husky install",
    "start": "cross-env NODE_ENV=local nodemon index.js",
    "start:dev": "cross-env NODE_ENV=development nodemon index.js",
    "start:staging": "cross-env NODE_ENV=staging nodemon index.js",
    "start:prod": "cross-env NODE_ENV=production node index.js",
    "docs": "node swagger.js",
    "openapi:generate": "openapi-generator-cli generate",
    "openapi:install": "openapi-generator-cli version-manager set 5.3.1",
    "test": "jest --config jest.config.js --coverage",
    "test:coverage": "nyc npm test",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
  "dependencies": {
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "express-async-errors": "^3.1.1",
    "helmet": "^7.1.0",
    "joi": "^17.13.3",
    "jsonwebtoken": "^9.0.2",
    "mongodb": "^6.8.0",
    "mongoose": "^8.5.1",
    "node-cron": "^3.0.3",
    "nodemailer": "^6.9.14",
    "nodemon": "^3.1.4",
    "swagger-autogen": "^2.23.7",
    "swagger-ui-express": "^5.0.1",
    "winston": "^3.13.1",
    "winston-mongodb": "^5.1.1"
  },
  "devDependencies": {
    "@openapitools/openapi-generator-cli": "^2.13.4",
    "@pact-foundation/pact": "^13.1.1",
    "@pact-foundation/pact-node": "^10.18.0",
    "cross-env": "^7.0.3",
    "cypress": "^13.13.2",
    "husky": "^9.1.4",
    "jest": "^26.6.3",
    "nyc": "^15.1.0",
    "supertest": "^7.0.0",
    "prettier": "^3.3.3"
  }
}
```

### Angular App

#### GitHub Workflows

1. **azure-static-web-apps-deploy.yml**

```yaml
name: Azure Static Web Apps CI/CD

on:
  push:
    branches:
      - main
  pull_request:
    types: [opened, synchronize, reopened, closed]
    branches:
      - main

jobs:
  build_and_deploy_job:
    if: github.event_name == 'push' || (github.event_name == 'pull_request' && github.event.action != 'closed')
    runs-on: ubuntu-latest
    name

: Build and Deploy Job
    steps:
      - uses: actions/checkout@v3
        with:
          submodules: true
          lfs: false
      - name: Build And Deploy
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_ORANGE_PLANT_0F4CEF90F }}
          repo_token: ${{ secrets.GITHUB_TOKEN }} # Used for Github integrations (i.e. PR comments)
          action: "upload"
          app_location: "/" # App source code path
          api_location: "" # Api source code path - optional
          output_location: "dist/nufacturing" # Built app content directory - optional

  close_pull_request_job:
    if: github.event_name == 'pull_request' && github.event.action == 'closed'
    runs-on: ubuntu-latest
    name: Close Pull Request Job
    steps:
      - name: Close Pull Request
        id: closepullrequest
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_ORANGE_PLANT_0F4CEF90F }}
          action: "close"
```

2. **angular-test-coverage.yml**

```yaml
name: Angular CI with Test Coverage

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests with coverage
        run: npm test

      - name: Upload coverage report
        uses: actions/upload-artifact@v2
        with:
          name: coverage-report
          path: coverage/
```

3. **ci.yml**

```yaml
name: CI

on:
  push:
    branches:
      - development
      - staging
      - production
  pull_request:
    branches:
      - development
      - staging
      - production

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "16"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

  deploy:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/production'

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Deploy to Production
        run: |
          # Add your deployment script here
```

4. **enforce-branch-naming.yml**

```yaml
name: Enforce Branch Naming

on:
  push:
    branches:
      - "*"

jobs:
  check-branch-name:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Enforce branch naming convention
        run: |
          BRANCH_NAME=$(git rev-parse --abbrev-ref HEAD)
          PATTERN="^(feature|bugfix|hotfix|improvement)/NFG-[0-9]+-.+"
          if [[ ! $BRANCH_NAME =~ $PATTERN ]]; then
            echo "Error: Branch name '$BRANCH_NAME' does not follow the naming convention."
            exit 1
          fi
```

5. **test.yml**

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14, 16]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}

      - name: Install dependencies
        run: npm install

      - name: Run unit tests
        run: npm test

      - name: Run integration tests
        run: npm run integration-test

      - name: Run Cypress tests
        run: npm run cypress:run

      - name: Generate coverage report
        run: npm run coverage
```

#### Husky Hooks

1. **commit-msg**

```sh
#!/bin/sh

# Commit message file passed by Git
commit_msg_file="$1"

# Read the commit message
commit_msg=$(cat "$commit_msg_file")

# Define a regex pattern for the issue ID (adjust this pattern to match your issue IDs)
issue_id_pattern="NFG-[0-9]+"

# Check if the commit message matches the issue ID pattern
if ! echo "$commit_msg" | grep -qE "$issue_id_pattern"; then
  echo "Error: Commit message must contain a valid issue ID (e.g., NFG-123)."
  exit 1
fi
```

2. **pre-commit**

```sh
#!/bin/sh
# This hook checks that branches are named according to the convention.

current_branch=$(git rev-parse --abbrev-ref HEAD)
branch_regex="^(feature|bugfix|hotfix|release)/NFG-[0-9]+-.+$"

if ! echo "$current_branch" | grep -Eq "$branch_regex"; then
  echo "Error: Branch name '$current_branch' does not follow the naming convention."
  echo "Please rename your branch to follow the convention: (feature|bugfix|hotfix|release)/NFG-123-description."
  exit 1
fi
```

3. **pre-push**

```sh
#!/bin/sh

# Do not allow push to protected branches
protected_branches='development|testing|staging|production'

current_branch=$(git rev-parse --abbrev-ref HEAD)

if echo "$current_branch" | grep -Eq "$protected_branches"; then
  echo "Error: Direct push to $current_branch is not allowed."
  echo "Please use pull requests for changes to this branch."
  exit 1
fi

# Do not allow push if missing Jira issue ID in commit message.
while read local_ref local_sha remote_ref remote_sha; do
  if [ "$local_sha" = "0000000000000000000000000000000000000000" ]; then
    # Branch is being deleted, ignore
    continue
  fi

  COMMITS=$(git rev-list $remote_sha..$local_sha)
  for COMMIT in $COMMITS; do
    MESSAGE=$(git log --format=%B -n 1 $COMMIT)
    if [[ ! $MESSAGE =~ NFG-[0-9]+ ]]; then
      echo "Error: Commit message '$MESSAGE' does not contain a Jira issue ID (NFG-<issue-number>)."
      exit 1
    fi
  done
done
```

#### `package.json` Scripts

```json
{
  "name": "nufacturing",
  "version": "1.0.0",
  "scripts": {
    "ng": "ng",
    "prepare": "husky install",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "jest --config jest.config.js --coverage",
    "test:coverage": "jest --config jest.config.js --coverage",
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^16.2.0",
    "@angular/cdk": "^16.2.14",
    "@angular/common": "^16.2.0",
    "@angular/compiler": "^16.2.0",
    "@angular/core": "^16.2.0",
    "@angular/flex-layout": "^15.0.0-beta.42",
    "@angular/forms": "^16.2.0",
    "@angular/material": "^16.2.14",
    "@angular/platform-browser": "^16.2.0",
    "@angular/platform-browser-dynamic": "^16.2.0",
    "@angular/router": "^16.2.0",
    "@apollo/client": "^3.0.0",
    "@testing-library/angular": "^14.5.1",
    "apollo-angular": "^5.0.2",
    "chart.js": "^4.4.3",
    "graphql": "^16.9.0",
    "graphql-tag": "^2.12.6",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.13.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^16.2.14",
    "@angular/cli": "^16.2.14",
    "@angular/compiler-cli": "^16.2.0",
    "@types/jasmine": "~4.3.0",
    "@types/jest": "^29.5.12",
    "@types/mocha": "^10.0.7",
    "cypress": "^13.13.2",
    "husky": "^9.1.4",
    "jasmine-core": "~4.6.0",
    "jasmine-spec-reporter": "^7.0.0",
    "jest": "^29.7.0",
    "jest-preset-angular": "^14.2.2",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "nyc": "^17.0.0",
    "prettier": "^3.3.3",
    "protractor": "^7.0.0",
    "typescript": "~5.1.3"
  },
  "engines": {
    "node": "20.x"
  }
}
```

### Additional Configuration for Testing

#### `jest.config.js` for Node.js

```js
module.exports = {
  testEnvironment: "node",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/"],
};
```

#### `jest.config.js` for Angular

```js
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/setup-jest.ts"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/e2e/"],
};
```

#### `karma.conf.js` for Angular

```js
module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [require("karma-jasmine"), require("karma-chrome-launcher"), require("karma-jasmine-html-reporter"), require("karma-coverage"), require("@angular-devkit/build-angular/plugins/karma")],
    client: {
      jasmine: {},
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/nufacturing"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};
```

#### Example Tests

1. **Unit Test (Angular)**

```ts
import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'nufacturing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("nufacturing");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain("nufacturing app is running!");
  });
});
```

2. **Integration Test (Node.js)**

```js
const request = require("supertest");
const app = require("../index"); // Your Express app

describe("GET /api/inventory", () => {
  it("should return all inventory items", async () => {
    const res = await request(app).get("/api/inventory");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("items");
  });
});
```

3. **E2E Test (Cypress)**

```js
describe("Inventory Page", () => {
  it("should display inventory items", () => {
    cy.visit("/inventory");
    cy.get(".inventory-item").should("have.length.greaterThan", 0);
  });
});
```

This setup ensures comprehensive testing and CI/CD workflows for both your Node.js API and Angular app, enhancing code quality and deployment efficiency.
