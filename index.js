const http = require('http');
http.createServer(runserver).listen(5000);

let brandJSON = require('../Tarea1-Coches/brand.json');

function runserver(req,res) {
// ####aqui muestro el json
  // if( req.method === 'GET' ) {
  //   res.end(JSON.stringify(brandJSON));
  // } 
  // if( req.method === 'DELETE') {
  //   res.end(JSON.stringify(brandJSON));
  // }

// ############

// #######muestro la url
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
// #######muestro la url

// #######pasar a un formato csv
if(req.url === '/api/v1/cars/key') {
  let h = Object.keys(brandJSON[0]).join(',')+ "\n";
  let body = '';
  brandJSON.forEach(o => {
    body += Object.keys(0).map(k => o[k].join(',')+ "\n");
  });
  h += body;
  res.end(h);
};  

// ######pasar a un formato csv
  

}
// rest.setHeader('Access-Control-Allow-Origin','*');