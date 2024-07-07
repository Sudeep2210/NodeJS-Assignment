const requestHandler = (req,res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.write('<html>');
        res.write('<head><title>Assignment 1</title></head>');
        res.write('<body><h3>Welcome to Node JS Assignment 1</h3><br/><form action = "/create-user" method = "POST"><input type="text" name="user"/><button type = "submit">Submit User</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>Users</title></head>');
        res.write('<body><h3>List of Users</h3><br/><ul><li>User1</li><li>User2</li><li>User3</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    else if(url === '/create-user' && method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            body.push(chunk);
        });
        req.on('end' , () => {
            const parsedBody = Buffer.concat(body).toString();
            const user_name = parsedBody.split('=')[1];
            console.log(user_name);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });
    }
    else{
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Error</title></head>');
        res.write('<body><h3>Oops Something Went Wrong</h3></body>');
        res.write('</html>');
        return res.end();
    }
};

//To pass single module
module.exports = requestHandler;