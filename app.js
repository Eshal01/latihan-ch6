const express = require('express');
const web = require('./routers/web');
// const cors = require('cors');
const router = require('./routers/router')
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './src/views');

//built in middleware
app.use(express.static('./src/assets'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//middleware
// app.use(cors());

app.use(web);
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})