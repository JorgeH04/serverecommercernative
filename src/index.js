if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  } 

const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();

const destacados = require('./routes/index');
const MainProductos = require('./routes/indexdos');
 
 

//bbdd
const { mongoose } = require('./database');



//mongoose.set('strictQuery', false);

//settings
app.set('port', process.env.PORT || 4000);
 


//middlewares
app.use(express.json());
//app.use(cors({origin: 'https://foodappr.netlify.app'}));
app.use(cors());
 



 

app.use('/', MainProductos);
app.use('/', destacados);
 



// server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

