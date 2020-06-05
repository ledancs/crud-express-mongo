# crud-express-mongo
This project is taken from the tutorial by Zell from [zellwk.com](https://zellwk.com/blog/crud-express-mongodb/) with some modifications in the server structure.

This project uses [Express Handlebars](https://www.npmjs.com/package/express-handlebars) instead of ejs.

## Instructions
Simply create a file named config.js and write the following code:
```sh
exports.connStr = 'mongodb+srv://<your-server-connection-string>';
```
Replace the <your-server-connection-string> for your own connection string from your MongoDB instance.
Then install the dependencies with npm:
```sh
npm install
```
For a development server, run the following command:
```sh
npm run dev
```
