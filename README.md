# UltimateNFTChampionship-

<p align="center">
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Logo-Logo.svg" width="320" alt="Repo Logo" /></a>
</p>

*[A brief description of the front-end repo]*

- [*[Project Name]*](#project-name)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
      - [Environment Variables](#environment-variables)
    - [Running the App](#running-the-app)
    - [Common Problems](#common-problems)
      - [Common Problem #1](#common-problem-1)
      - [Common Problem #2](#common-problem-2)
      - [Common Problem #3](#common-problem-3)
  - [Best Practices](#best-practices)
    - [Pull Requests](#pull-requests)
    - [Branch Naming Conventions](#branch-naming-conventions)
    - [Coding Style Conventions](#coding-style-conventions)
    - [Styling](#styling)
    - [Common Components](#common-components)
    - [Functions](#functions)
    - [Optimization](#optimization)
    - [Global States](#global-states)
    - [Issues/Bugs](#issuesbugs)
  - [Components](#components)
  - [Deployment](#deployment)
  - [Service #1](#service-1)
  - [Service #2](#service-2)
  - [Insane VS Code Shortcuts for the Very Cool](#insane-vs-code-shortcuts-for-the-very-cool)

## Getting Started

### Prerequisites

<!-- Do not list node packages -->
- *[Name]* *[Version]* (e.g. Node.js (^16.14.2))

### Setup

 1. Install Node.js dependencies by running `{{install command}}`.
 2. Fill in `.env` file.
 3. *[Other steps]*

#### Environment Variables

| Field        | Description     |
| ------------ | --------------- |
| `VARIABLE#1` | *[Description]* |
| `VARIABLE#2` | *[Description]* |

### Running the App

*[Steps for running the app]*

### Common Problems

#### Common Problem #1

*[Fix for common problem #1]*

#### Common Problem #2

*[Fix for common problem #2]*

#### Common Problem #3

*[Fix for common problem #3]*

For any problems during setup, please contact *[person]*.

## Best Practices

### Pull Requests

1. Before submitting a PR
   - *[Steps before submitting a PR, lint, auto tests etc.]*
2. PR description template *(Example template below)*

       # Pull request title

       * [ ] Were there any dependencies added?
       * [ ] Sufficient testing for this fix/feature?

       ### Changes
       * List all changes that were made.

       ### Testing
       * If applicable, list the commands to run the automated tests or steps on how to manually test this feature.

       ### Blockers
       * If applicable, list any PRs that need to be merged first before merging this one.

3. Link the PR with *[issue-tracking software e.g. ZenHub]*
4. Send a review invitation to *[person]*
5. Autotasks that need to pass before merging
   - *[Task 1]*
   - *[Task 2]*
   - *[Task 3]*
   - ...

### Branch Naming Conventions

- `main`: Stable branch
- `epic/...`: Big user story/epic
- `feature/...`: Implementing a feature (usually smaller than an epic/story)
- `fix/...`: Bug fix
- `test/...`: Testing
- `deployment/v{{version number}}`: Special deployment

### Coding Style Conventions

Please follow [this](https://www.w3schools.com/js/js_conventions.asp) Javascript style guide.

### Styling

- *[Styling rules]*
- ...

### Common Components

When creating buttons and/or other comoponents including, tabs, modals etc. refer to the [components](##Components) that have already been created before developing your own.

### Functions

*[Description of helper functions]*

### Optimization

*[Description of common code optimizations]*

### Global States

*[Description of how app stores state]*

### Issues/Bugs

If you find any issues/bugs please raise an issue in the [Issues](https://www.google.ca/) section with any steps required to recreate the bug and any screenshots if it is of visual nature.

## Components

*[Example component list below]*

<Details>
  <Summary>
  Component List
  </Summary>

- [ScreenHeader](documentation/ScreenHeader.md): Title header for a screen
- [WalletCard](documentation/WalletCard.md): Wallet card

</Details>

## Deployment

1. *[Deployment step 1]*
2. *[Deployment step 2]*
3. *[Deployment step 3]*
4. ...

*Put any links or auto-generated documentation for important services below if needed.*

## Service #1

[Link to service #1 documentation](https://www.google.ca/)

For example, if the project makes heavy use of Firebase Firestore, include links and tips under this section.

## Service #2

*[Auto-generated documentation for service #2]*

For example, if the project uses NestJS, a bunch of auto-generated documentation will be created in a `README.md` at the root folder. Since we also have a custom `README.md` at the root folder, we can put that documentation under this section instead.

## Insane VS Code Shortcuts for the Very Cool

Credit: [jkolyakov](https://github.com/jkolyakov)

- `alt` + `shift` + `O` auto-formats and sorts your file imports, deleting unused imports
- `ctrl` + `e` or `ctrl` + `p` opens file search
- `alt` + &uarr;/&darr; moves the line your cursor is on up/down
- `alt` + `click` adds another cursor, meaning you could edit multiple lines at once. Clicking multiple times while holding `alt` means you will have even more cursors.
- `ctrl` + `K` `P` to copy path of active file
- `ctrl` + `/` to comment. Do again to uncomment
- `ctrl` + `shift` + `enter` to jump to matching bracket
- `ctrl` + `Shift` + `[` to fold (collapse) selected region
- `ctrl` + `Shift` + `]` to unfold (uncollapse) selected region
