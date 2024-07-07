const express = require('express');

const app = express();

app.use('/users',(req , res, next) => {
    res.send('<h3>User List</h3><br/><ul><li>User1</li><li>User2</li><li>User3</li></ul>');
}); 

app.use('/',(req , res, next) => {
    res.send('<h3>I am Express JS</h3><br/><h3>This is Home Page</h3>');
});

app.listen(3000);