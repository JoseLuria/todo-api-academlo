# 🤖Academlo Todos API

A simple API that allows you to create tasks(Todos), usign Node, Express and Postgres

## 🚀 Usage

First clone the repository form GitHub:

```shell
git clone https://github.com/JoseLuria/todo-api-academlo.git
```

## Installation of the Backend

Move to the api folder and type the command

```shell
npm install
```

You need to configure the conection with postgres using the database.js file on the utils folder, for that you need to create a config.env file using the next variables:

```shell
DB_HOST=your host of postgres
DB_USER=user name of postgres
DB_PASSWORD=your postgres password
DB_NAME=the name of your database
```

Then start the API to be able to start making requests with the next command:

```shell
npm start
```

The service starts in the port 4000 (You can change this value in app.js)

### Installation of the Frontend

Move to the frontend folder and type the command

```shell
npm install
```

Finally, start the server with the following command

```shell
npm start
```

## Endpoints

Get All the Todos

```js
"http://localhost:4000/api/v1/todos/";
```

You can get a individual todo adding the todo ID on the Endpoind

```js
`http://localhost:4000/api/v1/todos/${individualTodoId}`;
```

You can change a todo property using the todo ID (Only title and completed status can be changed)

Example object with the new properties

```json
{
  "title": "New title",
  "completed": false
}
```

You can only change one property if you need it
Example object with only one propertie

```json
{
  "title": "Updated title"
}
```

To delete a Todo you only need to add the Todo ID on the Endpoint

```js
`http://localhost:4000/api/v1/todos/${eliminateTodoId}`;
```

## Built with

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)

## License

[MIT](https://opensource.org/licenses/MIT)
