const express = require('express');
const app = express();  
const getContent = require('./template.js');
const usersData = require('./data.js');
const PORT = 3000;

const specialtyFilter = (specialty) => usersData.filter(user => user.specialty === specialty);


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/developers', (req, res) => {
    const specialty = 'developers';
    const users = specialtyFilter(specialty);
  res.send(getContent(specialty, users));
});

app.get('/marketing', (req, res) => {
    const specialty = 'marketing';
    const users = specialtyFilter(specialty);
  res.send(getContent(specialty, users));
});

app.get('/ventas', (req, res) => {
    const specialty = 'ventas';
    const users = specialtyFilter(specialty);
  res.send(getContent(specialty, users));
});

app.get('/qas', (req, res) => {
    const specialty = 'QAs';
    const users = specialtyFilter(specialty);
  res.send(getContent(specialty, users));
});

app.use((req,res) => {
    res.status(404).send ('404 Not Found');
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});








