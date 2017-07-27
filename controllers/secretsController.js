var secrets = require('../models/secrets')

module.exports  = {
  getSecrets: function(req, res, next)  {
    if (req.params.username === "Jessie" && req.params.password === "Betty14")  {
      res.status(200).json(secrets)
    }
    else {
      return res.status(403).json("Wrong username or pin")
    }
  }

};
