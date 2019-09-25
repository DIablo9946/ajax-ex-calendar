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

var mese = 1;
var giorni = moment("1-2018", "MM-YYYY").daysInMonth();
console.log(giorni);
var url = "https://flynn.boolean.careers/exercises/api/holidays"

function carousel(){
$("#prev").click(function(){
  // $(".mese.active").removeClass("active");
  // $(".mese").prev().addClass("active");

  if ($(".gennaio").hasClass("active")){
      $(".gennaio").removeClass("active");
      $(".dicembre").addClass("active");
  } else {
    var selMese = $(".mese.active");
    selMese.removeClass("active");
    selMese.prev().addClass("active");
  };
});

$("#next").click(function(){
  if ($(".dicembre").hasClass("active")){
      $(".dicembre").removeClass("active");
      $(".gennaio").addClass("active");
} else {
      var selMese = $(".mese.active");
      selMese.removeClass("active");
      selMese.next().addClass("active");
  }
});
};


$(document).ready(function(){

carousel();

for (var i=1; i < giorni + 1; i++){
  var data = moment("2018" + "-1-" + i).format("Do MMMM");
  var datarif = moment("2018" + "-1-" + i).format("YYYY-MM-DD");
  $(".gennaio").append("<li dataref =" +  datarif + ">" + data + "</li>");
  console.log(data);
};


$.ajax ({
  url : url,
  data : {"year": "2018", "month": "0"},
  method : "GET",
  success : function(data) {
    var calData = data.response;
    for (i = 0; i < calData.length; i++){
      var feste = calData[i];
      console.log(feste.name, feste.date);

      var dayFest = $("li[dataref='" + feste.date + "']");
      if (dayFest){
        dayFest.append(" " + feste.name).addClass("red");

      }
    };
  },
  error : function (){
    console.log("Errore della pagina");
  }

});








});
