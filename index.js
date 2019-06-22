const http = require('http');
http.createServer(runserver).listen(5000);

function runserver(req,res) {
  if( req.method === 'GET' ) {
    res.end('GET');
  } 
  if( req.method === 'POST') {
    res.end('POST');
  }
}