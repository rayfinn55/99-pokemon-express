const express = require('express')
const app = express()
const pokemon = require("./models/pokemon.json");
// console.log(pokemon[0]);


app.get("/", (req, res) => {
    res.send("Welcome 99 Pokemon")
});
app.get("/bugs", (req, res) => {
    res.send(`<h1>99 little bugs in the code</h1> <br/>
    <a href="/bugs/101">pull one down, patch it around</a>
    `)
});
app.get("/bugs/:numberOfBugs", (req, res) => {
    const { numberOfBugs } = req.params
    if (numberOfBugs >= 200) {
        res.send(`Too many bugs!! Start over!
          <a href="/bugs/">Start over </a>
        `);
      } else {
        res.send(`${numberOfBugs} little bugs in the code
          <a href="/bugs/${Number(numberOfBugs) + 2}">Pull one down, patch it around </a>`);
      }
    });

app.get("/pokemon", (req, res) => {
    res.send(pokemon)
})

app.get("/pokemon/:index", (req, res) => {
    const { index } = req.params
    if (pokemon[index]) {
        res.send(pokemon[index])
    } else {
        res.send(`Sorry, no pokemon found at ${index}`)
    }
});

app.get("/pokemon/search", (req, res) => {
    const { name } = req.query
    const ignore = pokemon.find(e => e.name.toLowerCase() === name.toLowerCase())
        if(!ignore){
        res.send ([]);
    }else {
        res.send([ignore])
    }
})

app.get("/run/runny/runner", (req, res) => {
    res.send(
"Congratulations on starting a new project called run-runny-runner")
});

module.exports = app