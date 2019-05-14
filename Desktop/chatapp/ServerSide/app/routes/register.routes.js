module.exports = (app) => {
    const register = require('../../controllers/register.controller');

    // Create a new Note
    app.post('/register', register.create);
}