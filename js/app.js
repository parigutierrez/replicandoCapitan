var api = {
  url: "https://laboratoria.cuadra.co/api/v1/students/"
  //"http://laboratoria.cuadra.co:9339/api/v1/students/"
};
  

var cargarPagina = function(){
  cargarAlumnas();
}

var cargarAlumnas = function(){
  $.getJSON(api.url , function(alumnas){
    //console.log(alumnas);
    alumnas.forEach(mostrarAlumna);
  });
}

var mostrarAlumna = function(alumna){
  var nombre = alumna.name;

  var apellidoMat = alumna.mLastName;
  var $contenedorAlumnas = $("#alumnas");
  var apellidoPat = alumna.pLastName;

  var $li = $("<li />");
  var $input = $("<input type='checkbox'/>");

 // $input.attr("type","checkbox");

  $li.append(nombre + " " + apellidoPat + " " + apellidoMat);

  $li.append($input);
  $contenedorAlumnas.append($li);

}
$(document).ready(cargarPagina);