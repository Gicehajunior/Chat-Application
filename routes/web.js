import express from 'express';

// initialize router object
let router = express.Router();


/*************************
 * Sets the routing methods of our application
 */
let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        return res.render('index.ejs');
    });

    router.get('/chatroom', (req, res) => {
        return res.render('chatroom.ejs');
    });

    return app.use('/', router);
}


module.exports = initWebRoutes;

