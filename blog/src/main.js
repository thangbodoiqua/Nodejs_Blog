const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const e = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
//template engine
app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đảm bảo có thư mục views
app.get('/', (req, res) => {
  return res.render('home');
})

app.listen(port, () => {
  console.log(`Example app running at http://localhost:${port}`)
})