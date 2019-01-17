const express = require(`express`)
const router = express.Router()
const Users = require('../model/schema')


router.get('/clients', function (req, res) {
    Users.find({}, function (err, response) {
        res.send(response)
    })
})
router.get('/actions', function (req, res) {
    Users.find({}, 'name owner emailType', function (err, response) {
        res.send(response)
    })
})
router.get('/analytics', function (req, res) {
    Users.find({}, function (err, response) {
        res.send(response)
    })
})

router.post(`/actions`, async function (req, res) {
    let newUser = await new Users(req.body)
    newUser.save()
    res.end()
})

router.put(`/clients/:clientId`, function (req, res) {
    let client = req.params.clientId
    Users.findByIdAndUpdate(client, {
        name: `${req.body.Name} ${req.body.Surname}`,
        country: req.body.Country
    },
        { new: true },
        function (err, res) {
            console.log(res)
        })
    res.end()
})
router.put(`/actions/:client`, function (req, res) {
    let client = req.params.client
    let value = Object.keys(req.body)
    Users.findOneAndUpdate({ name: client },
        {
            $set:
            {
                [value[0]]: req.body[value],
            }
        }, { new: true },
        function (err, doc) {
            console.log(doc)
        })
    res.end()
})



module.exports = router