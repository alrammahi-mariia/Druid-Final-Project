# Workflow for Content Management and Database Synchronization

This guide outlines the steps for managing content types, configuration, and database synchronization in our Drupal environment.

We maintain a **single 'production' database** as our source of truth, which contains all live content. This database resides on **Mariia’s local environment** and is regularly updated to keep our development environments in sync.

## Configurations export

After you are done working on local branch and want to create a PR request, follow these steps:

### 1. Inform others in Teams before exporting configurations

- **Note**: If two teammates have exported configurations at the same time, it will cause merge conflicts.
- Inform other team members that you are going to export and push your configurations.

### 1. Exporting Configurations

- Export your configurations by running:
  ```bash
  lando drush cex
  ```
- This command will export the configurations, including newly created **content types**, which will be included when you commit and push your code changes.

- **Note**: Only **content types** are exported in this step. Actual **content** (e.g., nodes, blocks) is saved within the database, so it must be managed separately (see Content Management below).

### 2. Pushing Your Code

- After exporting configurations, commit and push your code to the repository:
  ```bash
  git add .
  git commit -m "Export configurations and push code"
  git push
  ```

### 3. Handling New Configurations from Pull Requests

- When a team member merges a pull request containing new configurations:

  - After pulling the latest changes from the main branch, import the new configurations by running:
    ```bash
    lando drush cim
    ```
  - This command will apply the new configuration updates to your local environment.

## Content Management

- When adding/modifying content in your local Drupal environment, you are creating **dummy content**, which is then added to production database manually.
- **Back up** text in a Word document or similar file, and save **images** in a separate folder to share with Mariia.

- **Important**: Mariia will manually add the finalized content to the production database based on the text content and other assets you provide. This ensures our source-of-truth database remains up-to-date with accurate content.

### 4. Syncing the Database

To keep everyone’s local database in sync with the latest production content:

- **Mariia** will periodically export the 'production' database.
- You can then import the latest production database by running:
  ```bash
  lando db-import database_production.sql --no-wipe
  ```
- Using the `--no-wipe` flag should prevent your own local database from being wiped out while syncing the content.

## Summary of Steps

1. Make Drupal changes locally.
2. Run `lando drush cex` to export configurations.
3. Commit and push code to the repository.
4. For any new content:
   - Save dummy content in a document and images in a separate folder.
   - Share these files with Mariia for manual addition to the production database.
5. Sync the database by importing the production database provided by Mariia.
6. Run `lando drush cim` after any pull request merges with new configurations.

Following these steps will help ensure our content types, configurations, and content are synchronized across environments while keeping our production content consistent.
