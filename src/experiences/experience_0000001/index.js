const express = require('express')
const router = express.Router()
const { config } = require('envars')
config({ env: "experience_0000001" });

/**
* Install the package envars : npm install envars --save-dev
* Add in the gitignore : *.override.env
* Add your new variable inside the env file with : yarn envars set <name> <value> --env=experience_0000001 --secret
* You will then enter a password after the command
* Get your data from the envars file with : yarn envars get <name> --env=prod
* You will then enter a password after the command
* name is the name of the value to show or encyrpt
**/
router.get('/', function(req, res){
    res.send(`Value decrypted : ${process.env.TEST}`)
});


module.exports = router
