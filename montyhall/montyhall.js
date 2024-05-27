        let dorbilderEl = document.querySelectorAll("img");
        let bilDor = Math.random(0, 2);
        let flipped = false;
        bilDor++;
        bilDor = Math.round(bilDor);
        

        // Går gjennom alle bildene og legger på samme lytter på hver av dem
        for (let i = 0; i < dorbilderEl.length; i++) {
            dorbilderEl[i].addEventListener("click", sjekkDor);
        }

        // Funksjon som sjekker hvilken dør som ble trykket
        function sjekkDor(e) {
            let trykketDor = e.target;
            console.log(trykketDor.id);
            // Bytter ut bilde av valgt dør med geit eller bil
            // Dumb solution that works, but is not good because I cannot think of anything else on the spot
            if (flipped){
              if (trykketDor.id === "dor" + bilDor.toString()){
                e.target.src = "./montyhall/img/bil.png";
              } else {
                e.target.src = "./montyhall/img/geit.png";
              }
            }
            for (let i = 0; i < dorbilderEl.length; i++){
                let number = i + 1;
                let currentImg = "dor" + number.toString();
                console.log(currentImg);
                if (currentImg != trykketDor.id && currentImg != "dor" + bilDor.toString() && !flipped){
                    document.getElementById(currentImg).src = "./montyhall/img/geit.png";
                    flipped = true;
                }
            }
            
            
        }