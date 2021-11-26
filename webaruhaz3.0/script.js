$(function () {
  const kosar = new Kosar()
  const ajax = new AjaxHivas();
let apivegpont = "http://localhost:3000/termekek";
  myAjax(apivegpont, termekLista);

  function termekLista(termekek) {
    const szuloElem = $('.termekek')
    const sablonElem = $('.termek')

    termekek.forEach(function (elem) {
      let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new TermekAruhaz(node, elem)
    })
    sablonElem.remove() //sablonelem eltávolítása

    $(window).on('termekKosarba', (event) => {
      //itt hívjuk meg a kosarat és belepakoljuk a kosár tömbbe az
      //aktuális termék adatait
      kosar.setKosar(event.detail)
    })
  }
})
