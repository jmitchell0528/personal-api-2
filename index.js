var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js')
var userController = require('./controllers/userController.js')
var skillzController = require('./controllers/skillzController.js')
var secretsController = require('./controllers/secretsController.js')

var app = express();

var port = 3000;

app.use(bodyParser.json());
app.use(middleware.addHeaders);


app.get('/name', userController.getName)
app.get('/location', userController.getLocation)
app.get('/occupations', userController.getOccupations)
app.get('/occupations/latest', userController.getLatestOccupation)
app.get('/hobbies', userController.getHobbies)
app.get('/hobbies/:type', userController.getHobbiesByType)
app.get('/family', userController.getFamily)
app.get('/family/:gender', userController.getFamilyByGender)
app.get('/restaurants', userController.getRestaurants)
app.get('/restaurants/:name', userController.getRestaurantsByName)

// app.get('/skillz', skillzController.getSkillz)
// app.get('/skillz/:experience', skillzController.getSkillzByExperience)

app.get('/secrets/:username/:pin', secretsController.getSecrets);

app.put('/name', userController.putName)
app.put('/location', userController.putLocation)

app.post('/hobbies', userController.postHobbies)
app.post('/occupations', userController.postOccupations)
app.post('/family', userController.postFamily)
// app.post('/restaurants', userController.postRestaurants)

// app.post('/skillz', middleware.generateId, skillzController.postSkillz)

app.listen(port, function() {
  console.log("listening on port", port);
});



// app.get('/user', userController.index);
// app.get('/user/:id', userController.show);
// app.post('/user', userController.create);
// app.put('/user/:id', userController.update);
// app.delete('/user/:id', userController.destroy);
