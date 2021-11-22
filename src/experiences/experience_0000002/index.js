const { config } = require('envars')
config({ env: "experience_0000002" });
const { cleanEnv, str, email, json } = require('envalid')
const express = require('express')
const router = express.Router()

console.log(process.env)
const env = cleanEnv(process.env, {
  API_KEY: str(),
  ADMIN_EMAIL: email({ default: 'admin@example.com' }),
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging']}),
})

router.get('/', function(req, res){
    res.send({
      isTest: env.isTest,
      isProd: env.isProd,
      isDev: env.isDev,
      API_KEY: env.API_KEY,
      ADMIN_EMAIL: env.ADMIN_EMAIL,
      NODE_ENV: env.NODE_ENV,
    })
});

module.exports = router
