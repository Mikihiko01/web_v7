
//elérésiut
const eleresiut = "http://localhost:3000/termekek";


//lekérdezések
let felsorol = "?_start=1&_limit=7";
let id = " ?id=1";
let szerzokneve = "?_sort=nev=Ann";
let szerzokid = "?id=1&id=6";
let mettolMeddig = "?_start=16&_limit=133";

let felsorolurl = eleresiut + felsorol;
let idurl = eleresiut2 + id;

console.log(konyvek);
myAjax(eleresiut, konyvek, kiir);
function myAjax(eleresiut, tomb, myCallback) {
    tomb.splice(0,tomb.lenght);
    $.ajax(
        {
            url: eleresiut,
            type: "GET",
            success: function (result) {
                console.log(result);
                result.forEach((element) => {
                    tomb.push(element);

                });
               myCallback(tomb);
              
            }
        }

    );
}

//$(".admin").html(this.megjelenit);