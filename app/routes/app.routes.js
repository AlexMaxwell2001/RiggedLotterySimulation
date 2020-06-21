module.exports = (app) => {
    const App = require('../controllers/app.controllers.js');
    app.get('/', App.root); 
    app.post('/', App.create);
    app.get('/Lottery1/:s', App.searchLottoNum1); 
    app.get('/Lottery2/:s', App.searchLottoNum2); 
    app.get('/Lottery3/:s', App.searchLottoNum3);
    app.get('Lottery4/:s', App.searchLottoNum4);
    app.get('/Lottery5/:s', App.searchLottoNum5);
    app.get('/Lottery6/:s', App.searchLottoNum6); 
}