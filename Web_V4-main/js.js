$(function(){


    const szuloElem = $("article");
    const sablonElem = $(".aruhaz");
     
    var termekTomb = [];

    $.ajax(
        {
            url: "termekek.json",
            success: function (result) {
            
                result.termekek.forEach((value)=>{termekTomb.push(value)});  
                megjelenit();        
            }
        }

      );

   function megjelenit(){
    
    for (let index = 0; index < termekTomb.length; index++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);
            const adat = termekTomb[index];
            const galeria = new Termek(adat, ujElem);
    }

    sablonElem.remove();

    const szuloElem2 = $("section");
    const szuloElem3 = $("section");

    const sablonElem2 = $(".kosar");
    const sablonElem3 = $(".admin");

   // sablonElem2.remove();
    sablonElem3.remove();
    var osszeg = 0;
    $(window).on("kosarKattintas", (event)=>{
        
        const ujElem = sablonElem2.clone().appendTo(szuloElem2);
        osszeg += event.detail.ar
        const ujTermek = new Kosar(event.detail.nev, event.detail.ar, osszeg, ujElem);
    });
    $(window).on("admin_esemeny", (event)=>{
        
        const ujElem = sablonElem3.clone().appendTo(szuloElem3);
        osszeg += event.detail.ar
        const ujTermek = new Kosar(event.detail.nev, event.detail.ar, osszeg, ujElem);
    });
    $(window).on("termekTorles", (event)=>{
        
       sablonElem2.remove();
    });
   }

});    
    