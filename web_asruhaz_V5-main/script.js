$(function () {
  //adatok beolvas
  let apiurl= "http://localhost:3000/termekek";
  const ajax2 = new Ajaxhivas();
  const kosar = new Kosar();
  console.log(apiurl);
  ajax2.getAjax(apiurl, kiir);


  //feliratkozun a kosar eseményre
  $(window).on("kosarba", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });

  
  function kiir(tomb) {
    const szuloelem = $(".termekek");
    const sablonelem = $(".termek");
   
    

    tomb.forEach(function (tombelem) {
      let ujelem = sablonelem.clone().appendTo(szuloelem);
      let ujobj = new TermekVasarlo(ujelem, tombelem);
  
    });
    sablonelem.remove();
  }
  function id() {
    //const eleresiut ="http://localhost:3000/termekek";

  //lekérdezések
    let felsorol = "?_start=1&_limit=7";
    let id = " ?id=1";
    let szerzokneve = "?_sort=nev=B";
    let szerzokid = "?id=1&id=6";
    let mettolMeddig = "?_start=16&_limit=133";
    

    let felsorolurl = eleresiut + felsorol;
    let idurl = eleresiut2 + id;
    let medtolurl = eleresiut2 + mettolMeddig;

  }
  
});
