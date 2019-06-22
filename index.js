const http = require('http');
http.createServer(runserver).listen(5000);

let brandJSON = require('../Tarea1-Coches/brand.json');

function runserver(req,res) {
  // if( req.method === 'GET' ) {
  //   res.end(JSON.stringify(brandJSON));
  // } 
  // if( req.method === 'DELETE') {
  //   res.end(JSON.stringify(brandJSON));
  // }
  if(req.url === '/api/v1/cars') {
    if(req.method === 'GET') {
      res.end(JSON.stringify({
        success: true,
        error: null,
        data: brandJSON
      }));
    } 
    }else res.end(JSON.stringify({
      success: false,
      error: 'Error',
      data: null
    }));

  
  console.log(req.url);
}