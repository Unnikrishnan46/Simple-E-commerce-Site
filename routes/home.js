var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  let products=[{
    name:"Iphone 11",
    category:"mobile",
    description:"Every iPhone 11 (PRODUCT)RED purchase now contributes directly to the Global Fund to combat COVID‑19",
    image:"https://m.media-amazon.com/images/I/41TUs2Mms+L.jpg"
  },
  {
    name:"oneplus",
    category:"mobile",
    description:"Explore the latest version of OnePlus of Phones, Digital TVs, Wearables, Audios.",
    image:"https://m.media-amazon.com/images/I/617MPEZB5mL._SL1500_.jpg"
  },
  {
    name:"redmi",
    category:"mobile",
    description:"Xiaomi, a global company producing quality products at honest pricing.",
    image:"http://i01.appmifile.com/webfile/globalimg/Iris/redmi-10-blue.png"
  },
{
  name:"samsung",
  category:"mobile",
  description:"Samsung Moonrise Madness Sale Offers & Cash Back. Hot Deals Get upto 47% Off. Best Cash Back offers",
  image:"https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-ultra-s908-413037-sm-s908edrgmea-thumb-530970207"
}]

  if (req.session.login) {
    res.render('home', {products});
  } else {
    res.redirect("/");
    
  }


});




module.exports = router;
