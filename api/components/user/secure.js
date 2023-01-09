const auth = require('../../../auth')

module.exports = (action) => {
    return (req, res, next) => {
        switch(action){
            case 'update':
                const owner = req.body.id;
                auth.check.own(req, owner);
                next();
                break;

            default:
                next();
        }
    }
}