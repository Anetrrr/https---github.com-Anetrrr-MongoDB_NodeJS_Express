const express = require('express')
const router = express.Router()
const Subscriber = require('../model/subscriber')

//Getting all
router.get('/', async (req, res) => {
       try {
             const subscribers = await Subscriber.find()
             
            res.json(subscribers)
         }catch (err) {
        res.status(500).json({ message: err.message })
} })

//Get specific
router.get('/:id', getSubscriber, (req, res) => {
    res.send(res.subscriber)
        
    


})
//Create new
router.post('/', async (req, res) => {
   const subscriber = new Subscriber({
       brand: req.body.brand,
       origin: req.body.origin,

   })
   try{ 
       const newSubscriber = await subscriber.save()
       res.status(201).json(newSubscriber)

   } catch (err) {
        res.status(400).json({ message: err.message})
   }    
})
// Update specific
router.patch('/:id', getSubscriber, async (req, res) => {
    if (req.body.brand != null){
        res.subscriber.brand = req.body.brand
    }
    if (req.body.origin != null){
        res.subscriber.origin = req.body.origin
    }
    try {const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)

    }catch(err){
        res.status(400)
    }

    
})
//Delete specific
router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({ message: 'Deleted subscriber'})
    } catch(err){
        res.status(500).json({ message: err.message })
    }
})
async function getSubscriber(req, res, next){
    let subscriber
    try{
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber== null) {
            return res.status(404).json({ message: 'Cannot find subscriber'})
        } 
    } catch(err) {
        return res.status(500).json({ message: err.message})
    }
    res.subscriber = subscriber
    next()
}

module.exports = router