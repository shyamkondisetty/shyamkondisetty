module.exports = (app) => {
    const login = require('../../controllers/login.controller');

    // Retrieve a single Note with noteId
    app.get('/login/:username', login.findOne);

}