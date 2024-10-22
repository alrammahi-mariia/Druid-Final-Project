
## Setup and Usage in Drupal site 

To get started, follow these steps:

### Step 1: Clone the Repository

```bash
git clone https://github.com/bishnu-suyel/Druid-Final-Project
```

### Step 2: Start the Lando Environment

Inside the project folder, run the following command to start Lando:

```bash
lando start
```

### Step 3: Install Dependencies

Make sure the necessary dependencies are installed:

```bash
lando composer install
```

### Step 4: Install Drupal and Configure the Database

Run the following command to install the Drupal site and configure the database:

```bash
lando drush site:install --db-url=mysql://drupal10:drupal10@database/drupal10 -y
```

### Step 5: Configure CORS Settings

Edit the services.yml file to manage CORS issues between the frontend and backend. Add the following:

services.yml

```bash
cors.config:
  enabled: true
  allowedHeaders: ["*"]
 allowedMethods: ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"]
  allowedOrigins: ["*"]
  supportsCredentials: true
```

### Step 6: Set Up JSON

To enable JSON
in Drupal, follow these steps:

### Step 7: Enable the JSON module:

```bash
lando drush en jsonapi -y
```

Access the content through the API at a URL like:

```bash
http://my-drupal-portfolio.lndo.site/jsonapi/node/home
```
 ## Setup and Usage in frontend

### Step 1: Install Dependencies

Navigate to the frontend folder and install the necessary dependencies:

```bash
npm install
```
### Step 2: Start the React App
To start the frontend React app, run the following command:

```bash
npm run dev
```
This will launch the React app on http://localhost:5173, fetching data from the Drupal backend. Make sure that the drupal app is up and running.

## Contributers
- Saurov
- Bishnu
- Arina
- Mariia
- Bimesh