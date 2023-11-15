const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const db = require('./config/db')
const User = require('./models/Users')
const rootRoute = require('./routes')
const Todos = require('./models/Todos')

app.listen(PORT, ()=>{
    console.log(`server running in ${PORT}`)
})

app.use(express.json())
app.use(rootRoute)

async function testConection(){
    try {
        await db.authenticate();
        // await User.sync({force : true})
        // await Todos.sync({force: true})
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConection()