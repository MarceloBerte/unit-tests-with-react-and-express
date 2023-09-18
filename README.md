# Jest and @testing-library/react | Test project

Project created to study unit tests in a React applications that consumes a Express API.

### Covered tests:
- Express routes;
- React Components;
- React custom hooks;

## Running the project

### Docker:
- $ `docker-compose build --no-cache`
- $ `docker-compose up`

Development mode:
In another terminal window run:
- $ `docker exec -it app npm run dev`

Run the tests:
- $ `docker exec -it app npm run test` 
- $ `docker exec -it app npm run testWatch`

## Connect to database
- $ `docker exec -it db psql -d node_test_db -h db -U root`

### Migrations
- $ `docker exec -it app npx sequelize-cli migration:generate --name <migration name>`
- $ `docker exec -it app npx sequelize-cli db:migrate`

### Seeds
- $ `docker exec -it app npx sequelize-cli seed:generate --name <seed-name>`
- $ `docker exec -it app npx sequelize-cli db:seed:all`
