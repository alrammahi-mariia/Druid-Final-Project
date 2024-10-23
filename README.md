# Druid-Final-Project

The Druid-Final-Project integrates Drupal as the backend and React.js as the frontend, developed in collaboration with Druid Oy to meet their specific requirements. This project demonstrates a seamless interaction between these technologies, where Drupal handles content management, and React provides a dynamic front-end interface using JSON. The communication between the two platforms is facilitated through JSON:API, with the React app managing all frontend presentation. Additionally, CORS issues between the two were resolved by implementing a services.yml file in the Drupal configuration.

## Technologies Used
### In Drupal site
- **Drupal 10**: For managing and storing the backend content.
- **JSON:API**: Used for managing API requests between Drupal and the React app.
- **Lando**: A local development environment for setting up and managing the Drupal project.
- **YAML**: For configuring the `services.yml` file, solving CORS issues between the frontend and backend.

### In React site
- **React.js**: Create a frondend folder for building the frontend UI.
- **Node.js & NPM**: Required to manage the React environment.
- **Axios**: For making HTTP requests.
- **React Router DOM**: For routing within your React application.
- **React Bootstrap**: For using Bootstrap components in React.

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
http://Druid-Final-Project.lndo.site/jsonapi/node/home
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

## Live Page

  *Not yet available.*

## Screenshot

  *Not yet available.*

## Sources

- [GitHub Guides - Mastering Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [Make a README](https://www.makeareadme.com/)
- [Drupal JSON Documentation](https://www.drupal.org/docs/core-modules-and-themes/core-modules/jsonapi-module)
- [Lando Documentation](https://docs.lando.dev/getting-started/)
- [React Documentation](https://react.dev/learn)

## Authors and Acknowledgments

This project was developed with contributions from the following individuals:
- **[Mariia](https://github.com/alrammahi-mariia)**  
- **[Arina](https://github.com/Nanao907)**  
- **[Saurov](https://github.com/saurov-paul)**  
- **[Bimesh](https://github.com/Bimesh-1)**  
- **[Bishnu](https://github.com/bishnu-suyel)**  

We as a team appreciate each others efforts and collaboration in making this project a success!
