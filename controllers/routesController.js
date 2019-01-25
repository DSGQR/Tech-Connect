const db = require('../models')


module.exports = app => {
    
    app.put('/organization/:id', (req, res) => {
        db.Company.findByIdAndUpdate(req.params.id, { $set: req.body })
    })
    app.get('/organizations', (req, res) => {
        db.Company.find({})
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })
    
    app.get('/organization/:id', (req, res) => {
        const id = req.params.id === "null" ? null : req.params.id;
        db.Company.findOne({_id:id})
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })

    app.post('/organization', (req, res) => {
        db.Company.create(req.body)
          .then(r => res.sendStatus(200))
          .catch()
      })

    app.delete('/organization/:id', (req, res) => {
        const id = req.params.id === "null" ? null : req.params.id;
        db.Company.deleteOne({ _id: id })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    // app.post('/users', (req, res) => {
    //     db.users.create(req.body)
    //         .then(() => res.sendStatus(200))
    //         .catch(e => console.log(e))
    // })

    // app.get('/users/:userName/', (req, res) => {
    //     console.log("find one");
    //     console.log(req.params.userName);
    //     db.users.findOne({ where: { userName: req.params.userName } })
    //         .then(r => res.json(r))
    //         .catch(e => console.log(e))
    // })

   
    // app.delete('/users/:userName', (req, res) => {
    //     db.users.deleteOne({
    //             where: {
    //                 userName: req.params.userName
    //             }
    //         })
    //         .then(() => res.sendStatus(200))
    //         .catch(e => console.log(e))
    // })

}