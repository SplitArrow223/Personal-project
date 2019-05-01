const bcrypt = require('bcryptjs')
require('dotenv').config();
const {REACT_APP_REDIRECT} = process.env;

module.exports = {
    register: async (req, res) => {
        const {username, email, password} = req.body;
        const db = req.app.get('db');
        const accArr = await db.find_acc_by_email([username, email])
        if (accArr[0]){
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newAcc = await db.create_acc([username, email, hash]);
        req.session.user = {
            username: newAcc[0].username,
            email: newAcc[0].users_email, 
            id: newAcc[0].users_id};
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        }) 
    },
    async login(req, res) {
      const {username, email, password} = req.body;
      const db = req.app.get('db');
      const accArr = await db.find_acc_by_email([username, email])
      if (!accArr[0]) {
          return res.status(200).send({message: 'account not found'})
      }
      const result = bcrypt.compareSync(password, accArr[0].users_hash);
      if(!result) {
          return res.status(401).send({message: 'Incorrect password'})
      }
      req.session.user = {
          username: accArr[0].username,
          email: accArr[0].users_email, 
          id: accArr[0].users_id};
      res.status(200).send({
          message: 'login successful',
          loggedIn: true
      })
    },
    logout:  (req, res) => {
        req.session.destroy()
        res.redirect(REACT_APP_REDIRECT)
    },
    userData(req, res) {
        if(req.session.user) res.status(200).send(req.session.user)
        else res.status(401).send('please login')
    }
}