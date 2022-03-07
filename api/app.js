// Imports
const { sequelize } = require('./utils/database');
const { todosRouter } = require('./routes/todos.routes');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

// Main Endpoint
app.use('/api/v1/todos', todosRouter);

// Authenticate with the Database
sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((error) => console.error(error));

// Sync with the Database
sequelize
  .sync()
  .then(() => console.log('Database sync'))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
