module.exports ={
    create: async (req, res) => {
      const {course_id, score, round_date } = req.body;
      req.app.get('db').create_round([course_id, req.session.user.id, score, round_date,])
      .then((rounds) => {res.status(200).send(rounds)})
      .catch(err => { res.status(500).send('error creating round')
      console.log(err)})
      
    },
    edit: async (req, res) => {
      const {id, course_id} = req.params;
      const {id:user_id} = req.session.user;
      const {score, round_date} = req.body;
      console.log(id, course_id, user_id, score, round_date)
      await req.app.get('db').edit_round([id, course_id, user_id, score, round_date ])
      .then((result) => res.status(200).send(result))
      .catch(err => { res.status(500).send('error while editing')
      console.log(err)})
    },
    delete: (req, res) => {
      const {id, course_id} = req.params;
      const {id:user_id} = req.session.user;
      req.app.get('db').delete_round(id, course_id, user_id)
      .then((rounds) => {res.status(200).send(rounds)})
      
    }, 
    roundsData: async (req, res) => {
      const {course_id} = req.params;
      req.app.get('db').get_rounds([course_id, req.session.user.id])
      // if (!round[0]) {
      //   return res.status(200).send({message: 'You have no rounds for this course'})
      // }else return rounds => res.status(200).send(rounds)
      .then(rounds => res.status(200).send(rounds))
      .catch(err => { res.status(500).send('error ')
      console.log(err)})
    },
    getCourses(req, res) {
      req.app.get('db').get_courses()
      .then(courses => res.status(200).send(courses))
      .catch(err => { res.status(500).send('error ')
      console.log(err)})
    },
    getHandicap(req, res) {
      req.app.get('db').get_handicap([req.session.user.id])
      .then(handicap => res.status(200).send(handicap))
      .catch(err => { res.status(500).send('error ')
      console.log(err)})
    }
}