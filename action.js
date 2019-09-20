// EX di oggi
// NOME REPO= ajax-ex-calendar
// DESCRIZIONE=
// trovate qui: https://docs.google.com/document/d/1OcSGrT3Snh_DXrDZ82DVY59eqvzNb_Nh_Db5z3qq2_k/
// trovate tutto, anche endpoint API.
// NOTE=
// come sempre fate prima una chiamata all’API da postman o browser, così
// vedete se sta funzionando la API sul server (cosa non scontata) e avete
// sott’occhio cosa vi ritorna.
// STEP DA SEGUIRE (non specificato nel doc):
//    Fare solo gennaio stampando la lista senza aggiungere le festività
//    Aggiungere le festività a Gennaio
//    Dare la possibilità di cambiare il mese

// function giorni(mese) {
//   for (i = 0; i > mese.length; i++)
//
// };

var giorni = moment("01-2018", "MM-YYYY").daysInMonth();
console.log(giorni);



$(document).ready(function(){


for (var i=1; i < giorni + 1; i++){
  var data = moment("01-" + i + "-2018").format("Do MMMM");
  $(".boh").append("<li>" + data + "</li>");
  console.log(data);
};









$("#prev").click(function(){
  // $(".mese.active").removeClass("active");
  // $(".mese").prev().addClass("active");
  var selMese = $(".mese.active");
  selMese.removeClass("active");
  selMese.next().addClass("active");


});

$("#next").click(function(){
  $(".mese.active").removeClass("active");
  $(".mese").next().addClass("active");



});


});
