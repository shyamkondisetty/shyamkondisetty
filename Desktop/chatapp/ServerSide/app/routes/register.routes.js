module.exports = (app) => {
    const register = require('../../controllers/register.controller');
    // Create a new user
    app.post('/register', register.create);
}