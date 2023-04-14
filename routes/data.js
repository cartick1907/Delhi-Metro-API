var express = require('express');
var router = express.Router();


// router.get('/', async (req, res)=> {

//   try {
//     const response = await axios.get('https://api.dmrc.org.in/metroMapData.json');
//     const data = response.data;
//     res.send(data);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Error fetching DMRC map data');
//   }
// });
router.get('/',(req,res)=>{
  res.render('data', {title:'line data'})
})

module.exports = router;
