class Kosar {


    constructor() {


        this.kosarTomb = [];


    }
    setkosar(adat) {
        this.kosarTomb.push(adat);
        console.log(this.kosarTomb);
        this.megjelenit();
        this.kosartTorol();
    }
    megjelenit() {
        let txt;
        $("section").empty();
        $("section").append("<table>");
        txt = "<tr><th>Név</th><th>Leírás</th><th>ár</th><th>kep</th></tr>";
        this.kosarTomb.forEach((value, index) => {
            txt += "<tr" + index + "'>";
            // console.log(value);
            for (var item in value) {
                txt += "<td>" + value[item] + "</td>";



            }
            txt += "<tr><td><button type='sumbit' id='torol'>Töröl</button></td></tr>"
            txt += "</tr>";

        });
        $("section table").append(txt);
        $("section table").append("<button type='sumbit' id='osszesetTorol'>Töröli az Ősszeset</button>");
        //console.log(txt);


    }
    kosartEltarol() {
        let adatok = localStorage.getItem("kosaram");
        localStorage.setItem("kosaram", JSON);
        if (JSON =  JSON.stringify(this.kosarTomb)) {         
            this.kosarTomb +=  JSON.parse(localStorage.getItem("kosaram"));
            
        }
       

    }
    kosartTorol(){
        for (let i = 0; i < this.kosarTomb.length; i++) {
            if (this.kosarTomb[i]["#torol"]) {
                this.kosarTomb.forEach((value, index) => {
                    txt += "<tr" + index + "'>";
                    // console.log(value);
                    for (var item in value) {
                        txt += "<td>" + value[item] + "</td>";       
        
                    }
                    txt += "<tr><td><button type='sumbit' id='torol'>Töröl</button></td></tr>"
                    txt += "</tr>";
        
                });
                $("section table").remove(txt);
            } else {
                alert("Nem Sikerült Törölni!");
                
            }
            
        }
    }
}
