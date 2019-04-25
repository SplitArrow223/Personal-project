module.exports ={
    create: async (req, res) => {
      const {course_id, score, round_date } = req.body;
      req.app.get('db').create_round([course_id, req.session.user.id, score, round_date,])
      .then((rounds) => {res.status(200).send(rounds)})
      .catch(err => { res.status(500).send('error creating round')
      console.log(err)})
      
    },
    edit: async (req, res) => {
      const {id} = req.params;
      const {score, round_date} = req.body;
      await req.app.get('db').edit_round([id, score, round_date])
      .then(() => res.sendStatus(200))
      .catch(err => { res.status(500).send('error while editing')
      console.log(err)})
    },
    delete: (req, res) => {
      const {id} = req.params;
      req.app.get('db').delete_round(id)
      .then(() => {res.status(200).send('round deleted')})
      
    }, 
    roundsData(req, res) {
      req.app.get('db').get_rounds()
      .then(rounds => res.status(200).send(rounds))
      .catch(err => { res.status(500).send('error ')
      console.log(err)})
    },
    getCourses(req, res) {
      req.app.get('db').get_courses()
      .then(courses => res.status(200).send(courses))
      .catch(err => { res.status(500).send('error ')
      console.log(err)})
    }
}