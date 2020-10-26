const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
require('dotenv').config();
app.use(cookieParser());
app.use(cors());
// To use cookies, change the line app.use(cors()) to the one below:
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

require('./server/config/mongoose.cofig');
require('./server/routes/book.routes')(app);
require('./server/routes/user.routes')(app);
require('./server/routes/category.routes')(app);


app.listen(port, () => {
    console.log(`Listening on port: ${port}`) 
});
