// const app = require('./app');
// const { PORT } = require('./config');


// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
/** Server for microblog. */

const app = require("./app");

app.listen(process.env.PORT || 5000, function () {
  console.log("Server is listening on port 5000");
});