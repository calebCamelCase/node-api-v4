const express = require('express')
const router = express.Router()
const con = require('../../config/dbconfig')

router.get('/', (req,res)=> {
    con.query(
        'select * from customer',
        (error, rows)=> {
            if(!error){
                if(rows.length === 1){
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('ERROR', error)
            }
        }
    )
})

router.get('/:id', (req, res)=> {
    const id = req.params.id
    
    con.query(
        `select * from customer where customer_id = ${id}`,
        (error, rows)=> {
            if(!error){
                if(rows.length === 1){
                    res.json(...rows)
                } else {
                    res.json(rows)
                }
            } else {
                console.log('ERROR', error)
            }
        }
    )
})

module.exports = router