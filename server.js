const express = require('express');
//require cors
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

//use cors
app.use(cors());

//wake up 
app.get('/wake', (req, res) => {
    res.json({ status: 'awake', time: new Date().toISOString() });
});

//dice  roll
app.get('/roll', (req, res) => {
    const count = parseInt(req.query.count) || 5;
    const rolls = Array.from({ length: count}, () => Math.floor(Math.random()* 6)+ 1);
    res.json({rolls});
});

app.listen(PORT, () => {
    console.log(`API running on port ${PORT}`);
});''