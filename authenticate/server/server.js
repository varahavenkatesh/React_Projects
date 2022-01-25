const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3001;

const mongoURI = 'mongodb+srv://garage:garage@cluster0.eurki.mongodb.net/authApp?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex',true);

app.use(bodyParser.json());

const { User } = require('../models/user');

app.post('/api/user', (req, res) => {
    const user = new User({
        email: req.body.email,
        password: req.body.password
    });

    user.save((err, doc) => {
        if (err) res.status(400).send(err)
        else res.setStatus(200).send(doc)
    });

})
app.listen(port, () => {
    console.log(`Strated on port ${port}`);
})