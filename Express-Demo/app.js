const debug = require('debug')('app:startup');
const config = require('config')
const helmet = require('helmet');
const morgan = require('morgan')
const Joi = require("@hapi/joi");
const express = require("express");
const app = express();
const courses = require('./routers/courses');
const home =require('./routers/Home')
const port = process.env.PORT || 3000;
const logger = require('./middleware/logger');


app.set('view engine','pug');
app.set('views','./views')

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static('private'))
app.use(helmet());
app.use('/api/courses',courses);
app.use('/',home);
app.use(logger);
// console.log('application name ' + config.get('name'));
// console.log('application mail ' + config.get('mail.host'))
// console.log('application Pass ' + config.get('mail.password'))
if(app.get('env') === 'development'){
app.use(morgan("tiny"));
debug('the morgan is enable')
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
