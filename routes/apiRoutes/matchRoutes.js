const router  =require ('express').Router();
const matchController = require('./../../controllers/matchController');
const passportService = require('./../../services/passport');
const authMiddleware = require('./../../middlewares/authMiddlewares');

router.route('/')
    .get(matchController.getMatch)

module.exports = router