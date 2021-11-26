$(function () {
    //adatok beolvas
    let apiurl= "http://localhost:3000/termekek";
    const ajax2 = new Ajaxhivas();
    const termekek = [];
    
    ajax2.getAjax(apiurl, termekek, kiir);
    
    function admin_kiir(termek) {
      const szuloelem = $(".termekek");
    const sablonelem = $(".termek");
  termekek.forEach(function(elem) {
    let ujelem = sablonelem.clone().appendTo(szuloelem);
      let ujobj = new TermekAdmin(ujelem, elem);
  
  });
  sablonelem.remove(); 
    }
    
  //feliratkozun az eseménykezelore
  $(window).on("torles", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });

//feliratkozun az eseménykezelore
$(window).on("modositas", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });



  
   /* function getAjax(fajlnev, tomb, myCallback) {
      $.ajax({
        url: fajlnev,
        type: "GET",
        success: function (result) {
          result.termek.forEach((element) => {
            tomb.push(element);
          });
          myCallback(tomb);
          
        },
      });
    }*/
    function kiir(tomb) {
      const szuloelem = $(".termekek");
      const sablonelem = $(".termek");
  
      tomb.forEach(function (tombelem) {
        let ujelem = sablonelem.clone().appendTo(szuloelem);
        let ujobj = new TermekAdmin(ujelem, tombelem);
      });
      sablonelem.remove();
    }
  });
  class Admin extends TermekAdmin{
    constructor(elem,adat){
      super(elem,adat);
      this.kepElem = this.elem.children(".kep").children("img");
      this.setAdat(this.adat);
      this.torlesElem = this.elem.children("td").children(".torol");
      this.modositElem = this.elem.children("td").children(".modosit");
      this.torlesElem.on("click", () => {
      this.torolTriger();

    });
    this.modositElem.on("click", () => {
      this.modositTriger();

    });
    }

  }
  