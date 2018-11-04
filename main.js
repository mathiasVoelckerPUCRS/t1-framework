var app = require('./app');
var config = require('./config.js');

const port = 3000;
app.listen(port, () => {
    console.info(`server started on port ${port}`);
});