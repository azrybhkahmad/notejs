const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log('first middleware');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second middleware');
//     res.send('<h1> section5 assignment</h1>');
// });

app.use('/users', (req, res, next) => {
    console.log('/ user middleware');
    res.send('<h1> The middleware for / users </h1>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<h1> The middleware for / </h1>');
});

app.listen(3123);