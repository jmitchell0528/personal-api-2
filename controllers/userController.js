////// This section is your mainCtrl
var user = require('../models/user')

module.exports  = {
  getName: function(req, res, next) {
    res.status(200).json(user[0].name);
  },

  getLocation: function(req, res, next) {
    res.status(200).json(user[0].location)
  },

  getOccupations: function(req, res, next)  {
      var occupations = user[0].occupations.slice(); //<--- Makes a copy of the array/ no change to the original array
      if (req.query.order === "asc")  {
        occupations = occupations.sort()
      } else if (req.query.order === 'desc') {
        occupations = occupations.reverse()
      }
      return res.status(200).json(occupations)

  },

  getLatestOccupation: function(req, res, next)  {
    res.status(200).json(user[0].occupations.slice(-1))
  },

  getHobbies: function(req, res, next)  {
    res.status(200).json(user[0].hobbies)
  },

  getHobbiesByType: function(req, res, next)  {
    res.status(200).json(user[0].hobbies.filter(function(hobby) {
      if (req.params.type.toLowerCase() === hobby.type.toLowerCase()) {
        return true
      }
      else {
        return false
      }
    }))
  },

  getFamily: function(req, res, next) {
    res.status(200).json(user[0].family)
  },

  getFamilyByGender: function(req, res, next) {
    res.status(200).json(user[0].family.filter(function(person) {
      if (person.gender === req.params.gender) {
      return true
      }
      else {
        return false
      }
    }))
  },

  getRestaurants: function(req, res, next) {
    var restaurants;
    if (req.query.rating) {
      restaurants = user[0].restaurants.filter(function(restaurant) {
        if (restaurant.rating >= req.query.rating) {
          return true
        }
      })
    } else {
      restaurants = user[0].restaurants
    }
    res.status(200).json(restaurants)

  },

  getRestaurantsByName: function(req, res, next)  {
    res.status(200).json(user[0].restaurants.filter(function(restaurant) {
      if (req.params.name.toLowerCase() === restaurant.name.toLowerCase()) {
        return true
      }
      else {
        return false
      }
    }))
  },

  putName: function(req, res, next) {
    user[0].name = req.body.name;
    res.status(200).json({ name: user[0].name});
  },

  putLocation: function(req, res, next) {
    user[0].location = req.body.location;
    res.status(200).json({ location: user[0].location });
  },

  postHobbies: function(req, res, next) {
    user[0].hobbies.push({ name: req.body.name, type: req.body.type });
    res.status(200).json({ hobbies: user[0].hobbies });
  },

  postOccupations: function(req, res, next) {
    user[0].occupations.push(req.body.occupations);
    res.status(200).json({ occupations: user[0].occupations });
  },

  postFamily: function(req, res, next) {
    user[0].family.push({ name: req.body.name, relation: req.body.relation, gender: req.body.gender });
    res.status(200).json({ family: user[0].family });
  },

  // postRestaurants: function(req, res, next) {
  //   user[0].restaurants.push({ name: req.body.name, type: req.body.type, req.body.rating });
  //   res.status(200).json({ restaurants: user[0].restaurants });
  // },

};
