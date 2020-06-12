const http = require('http');

const server = http.createServer((request, response) => {
  // request URL (whatever the user enter after 'localhost:3123')
    const url = request.url
    // if the url is localhost:3123/
        if (url === '/') {
          // then html start
        response.write('<html>');
        response.write('<head><title>Username Assignment</title></head>');
        // Creating of form in the website
        response.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button>');
        response.write('</html>');
    }
    if (url === '/users') {
        response.setHeader('Content-Type', 'text/html');
        response.write ('<html>');
        response.write ('<head>Username assignment</head>');
        response.write ('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        response.write ('</html>');
        // end request
        return response.end();
    }
    
    if (url === '/create-user') {
        const body = [];
        request.on('data', chunk => {
          body.push(chunk);        
        });
        
        request.on('end', () => {
          const parsedBody = Buffer.concat(body).toString();
          // username=(*data user entered)
          console.log(parsedBody.split('=')[1]); 
          
        });
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();
      }
});

server.listen(3123);
