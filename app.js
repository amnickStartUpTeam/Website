const express = require('express');
const path = require('path');
const citiesRouter = require('./routes/cities');
const countriesRouter = require('./routes/countries');
const cvTemplatesRouter = require('./routes/cvTemplates');
const gendersRouter = require('./routes/genders');
const languagesRouter = require('./routes/languages');
const professionsRouter = require('./routes/professions');
const purchasesRouter = require('./routes/purchases');
const statesRouter = require('./routes/states');
const subscriptionsRouter = require('./routes/subscriptions');
const usersRouter = require('./routes/users');
const userTypesRouter = require('./routes/userTypes');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use('/cities', citiesRouter);
app.use('/countries', countriesRouter);
app.use('/cvTemplates', cvTemplatesRouter);
app.use('/genders', gendersRouter);
app.use('/languages', languagesRouter);
app.use('/professions', professionsRouter);
app.use('/purchases', purchasesRouter);
app.use('/states', statesRouter);
app.use('/subscriptions', subscriptionsRouter);
app.use('/users', usersRouter);
app.use('/userTypes', userTypesRouter);

app.listen(8080); 

console.log("Server running at port 8080");

module.exports = app;