const express = require('express')
const server = express()
// import helmet
const helmet = require('helmet')
// import router
const router = require('./app/routes/router')
const PORT = process.env.PORT || 3000

// increase security using helmet
server.use(helmet())
server.use(express.json())
server.use('/api', router)

// Root route
server.get('/', (req,res)=>{
    res.json({
        'All Films': `http://localhost:${PORT}/api/film`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Customers': `http://localhost:${PORT}/api/customer`
    })
})

server.set('view engine', 'ejs')

server.listen(PORT, ()=> console.log(`Server on port: ${PORT}`))