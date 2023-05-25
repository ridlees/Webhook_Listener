const fs = require('fs');
const path = require('path')

exports.save = (req, res) => {
    const headers = req.headers
    const data = req.body
    console.log(data)
    fs.writeFileSync(path.join(__dirname, '../','data.json'), JSON. stringify(data), (err) => {
        console.log(err);
    });
    fs.writeFileSync(path.join(__dirname, '../','headers.json'), JSON. stringify(headers), (err) => {
        console.log(err);
    });
	res.status(201).send('Data Created');
};
exports.error = (req, res) => {
    res.status(400).send(req.body)
}