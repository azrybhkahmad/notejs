const http = require('http');

const server =http.createServer((req, res) => {
  // request URL (whatever the user enter after 'localhost:3123')
    const url = req.url
    // example below (localhost:3123/)
        if (url === '/') {
          // start of html
        res.write('<html>');
        res.write('<head>Username assignment</head>');
        // Creating of form in the website
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button>');
        res.write('</html>');
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        // start of html
        res.write ('<html>');
        res.write ('<head>Username assignment</head>');
        res.write ('<body><ul><li>User 1<li><li>User 2</li></ul></body>');
        res.write ('</html>');
        // end request
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
          body.push(chunk);        
        });
        
        req.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          // username=(*data user entered)
          console.log(parsedBody.split('=')[1]); 
          
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
      }
});

server.listen(3123);
