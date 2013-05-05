
/*
 * GET home page.
 */
var cnx = require('../mod/db').conexion;


exports.home = function(req, res){
	var objConexion = new cnx;
	objConexion.query('SELECT * from publicacion', function(error, resultados){
		objConexion.end();
		console.log(resultados);
		res.render('index', {title: "Publicaciones: ", publicaciones: resultados})
	});
};

exports.publicaciones = function(req, res){
	var objConexion = new cnx;
      objConexion.query('SELECT * FROM publicacion' , function(error, resultado){
    console.log(resultado);
    res.render('noticias', { title: 'Express para Ninjacode.tv', noticias: resultado })
  });
};