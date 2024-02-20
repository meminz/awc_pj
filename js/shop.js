function exit(){
    sessionStorage.clear()
}

function start(){
    heroes = localStorage.getItem('heroes')
    users = localStorage.getItem('users')
    users = JSON.parse(users)

    hero1 = localStorage.getItem('hero1')
    hero1 = JSON.parse(hero1)
    hero2 = localStorage.getItem('hero2')
    hero2 = JSON.parse(hero2)
    hero3 = localStorage.getItem('hero3')
    hero3 = JSON.parse(hero3)
    hero4 = localStorage.getItem('hero4')
    hero4 = JSON.parse(hero4)
    hero5 = localStorage.getItem('hero5')
    hero5 = JSON.parse(hero5)
    hero6 = localStorage.getItem('hero6')
    hero6 = JSON.parse(hero6)
    hero7 = localStorage.getItem('hero7')
    hero7 = JSON.parse(hero7)
    hero8 = localStorage.getItem('hero8')
    hero8 = JSON.parse(hero8)
    hero9 = localStorage.getItem('hero9')
    hero9 = JSON.parse(hero9)
    hero10 = localStorage.getItem('hero10')
    hero10 = JSON.parse(hero10)
    hero11 = localStorage.getItem('hero11')
    hero11 = JSON.parse(hero11)
}

function numeroCrediti(){
    sessionUs = sessionStorage.getItem("username")
    sessionPws = sessionStorage.getItem("password")
    users = localStorage.getItem("users")
    users = JSON.parse(users) 
    
    for (let i of users){
        if (i.username == sessionUs && i.password == sessionPws){
            num = document.createElement("label")
            num.innerHTML = i.crediti  
            style = document.createAttribute("style")
            style.value="color:white;font-size:1em;"
            num.setAttributeNode(style)
            document.getElementById("crediti").appendChild(num)            
        }
    }
    
}

function acquista1() {
    document.getElementById("img").style.display="none"
    document.getElementById("btn_acquista").style.display="none"
    document.getElementById("cover").style.display="block"
    document.getElementById("acquisto1").classList.add("active")
}

function acquista10() {
    document.getElementById("img").style.display="none"
    document.getElementById("btn_acquista").style.display="none"
    document.getElementById("cover").style.display="block"
    document.getElementById("acquisto10").classList.add("active")
}

function acquista100() {
    document.getElementById("img").style.display="none"
    document.getElementById("btn_acquista").style.display="none"
    document.getElementById("cover").style.display="block"
    document.getElementById("acquisto100").classList.add("active")
}

function closebuy1(){
    document.getElementById("img").style.display="block"
    document.getElementById("btn_acquista").style.display="block"
    document.getElementById("cover").style.display="none"
    document.getElementById("acquisto1").classList.remove("active")
}

function closebuy10(){
    document.getElementById("img").style.display="block"
    document.getElementById("btn_acquista").style.display="block"
    document.getElementById("cover").style.display="none"
    document.getElementById("acquisto10").classList.remove("active")
}

function closebuy100(){
    document.getElementById("img").style.display="block"
    document.getElementById("btn_acquista").style.display="block"
    document.getElementById("cover").style.display="none"
    document.getElementById("acquisto100").classList.remove("active")
}

function ckIntestatario10(){
    document.getElementById("Intestatario-errors10").textContent=" "
    intestatario = document.getElementById("Intestatario10").value
    if (intestatario != "" && Spazio(intestatario)){
        intestatario = soloLettereQui(intestatario)
        if (Spazio(intestatario)){
            return true
        } else {
            document.getElementById("Intestatario-errors10").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
        }
    } else {
        document.getElementById("Intestatario-errors10").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
    }
}

function ckCard10(){
    document.getElementById("cardNum-errors10").textContent=" "
    numeroCarta = document.getElementById("numeroCarta10").value
    if(numeroCarta != "" && !Spazio(numeroCarta)){
        numeroCarta = soloNumeriQui(numeroCarta)
        if (numeroCarta.length < 19 || numeroCarta.length > 19){
            document.getElementById("cardNum-errors10").textContent="⚠ Il numero della carta non può essere inferiore alle 16 cifre. Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else if (numeroCarta[4] != "-" || numeroCarta[9] != "-" || numeroCarta[14] != "-"){
            document.getElementById("cardNum-errors10").textContent="⚠ Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else {
            return true
        }
    } else {
        document.getElementById("cardNum-errors10").textContent="⚠ Inserire un numero di carta senza spazi separando le cifre a gruppi di 4 con dei trattini."
        return false
    }
}

function ckDate10(){
    document.getElementById("scad-errors10").textContent=" "
    date = new Date()
    minDate = date.getFullYear() + "-" + (parseInt(date.getMonth())+1).toString()
    scad = document.getElementById("scad10").value
    minYear = parseInt(minDate)
    minMonth = parseInt(minDate[5]+minDate[6])
    year = parseInt(scad)
    month = parseInt(scad[5]+scad[6])
    if(year <= minYear && month <= minMonth){
        document.getElementById("scad-errors10").textContent="⚠ La carta è scaduta."
        return false
    } else {
        return true
    }
}

function ckCVV10(){
    document.getElementById("cvv-errors10").textContent=" "
    cvv = document.getElementById("cvv10").value
    if (cvv > 999){
        document.getElementById("cvv-errors10").textContent="⚠ Il cvv non può essere composta da più di tre cifre."
        return false
    } else {
        return true
    }
}

function activeBuy10() {
    if (ckCVV10() && ckIntestatario10() && ckCard10() && ckDate10()){
        document.getElementById("toBuy10").disabled=false;
    }
}

function ckIntestatario1(){
    document.getElementById("Intestatario-errors1").textContent=" "
    intestatario = document.getElementById("Intestatario1").value
    if (intestatario != "" && Spazio(intestatario)){
        intestatario = soloLettereQui(intestatario)
        if (Spazio(intestatario)){
            return true
        } else {
            document.getElementById("Intestatario-errors1").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
            return false
        }
    } else {
        document.getElementById("Intestatario-errors1").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
        return false
    }
}

function ckCard1(){
    document.getElementById("cardNum-errors1").textContent=" "
    numeroCarta = document.getElementById("numeroCarta1").value
    if(numeroCarta != "" && !Spazio(numeroCarta)){
        numeroCarta = soloNumeriQui(numeroCarta)
        if (numeroCarta.length < 19 || numeroCarta.length > 19){
            document.getElementById("cardNum-errors1").textContent="⚠ Il numero della carta non può essere inferiore alle 16 cifre. Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else if (numeroCarta[4] != "-" || numeroCarta[9] != "-" || numeroCarta[14] != "-"){
            document.getElementById("cardNum-errors1").textContent="⚠ Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else {
            return true
        }
    } else {
        document.getElementById("cardNum-errors1").textContent="⚠ Inserire un numero di carta senza spazi separando le cifre a gruppi di 4 con dei trattini."
        return false
    }
}

function ckDate1(){
    document.getElementById("scad-errors1").textContent=" "
    date = new Date()
    minDate = date.getFullYear() + "-" + (parseInt(date.getMonth())+1).toString()
    scad = document.getElementById("scad1").value
    minYear = parseInt(minDate)
    minMonth = parseInt(minDate[5]+minDate[6])
    year = parseInt(scad)
    month = parseInt(scad[5]+scad[6])
    if(year <= minYear && month <= minMonth){
        document.getElementById("scad-errors1").textContent="⚠ La carta è scaduta."
        return false
    } else {
        return true
    }
}

function ckCVV1(){
    document.getElementById("cvv-errors1").textContent=" "
    cvv = document.getElementById("cvv1").value
    if (cvv > 999){
        document.getElementById("cvv-errors1").textContent="⚠ Il cvv non può essere composta da più di tre cifre."
        return false
    } else {
        return true
    }
}

function activeBuy1() {
    if (ckCVV1() && ckIntestatario1() && ckCard1() && ckDate1()){
        document.getElementById("toBuy1").disabled=false;
    }
}


function ckIntestatario100(){
    document.getElementById("Intestatario-errors100").textContent=" "
    intestatario = document.getElementById("Intestatario100").value
    if (intestatario != "" && Spazio(intestatario)){
        intestatario = soloLettereQui(intestatario)
        if (Spazio(intestatario)){
            return true
        } else {
            document.getElementById("Intestatario-errors100").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
            return false
        }
    } else {
        document.getElementById("Intestatario-errors100").textContent="⚠ Indicare un intestario inserendo uno spazio tra nome e cognome."
        return false
    }
}

function ckCard100(){
    document.getElementById("cardNum-errors100").textContent=" "
    numeroCarta = document.getElementById("numeroCarta100").value
    if(numeroCarta != "" && !Spazio(numeroCarta)){
        numeroCarta = soloNumeriQui(numeroCarta)
        if (numeroCarta.length < 19 || numeroCarta.length > 19){
            document.getElementById("cardNum-errors100").textContent="⚠ Il numero della carta non può essere inferiore alle 16 cifre. Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else if (numeroCarta[4] != "-" || numeroCarta[9] != "-" || numeroCarta[14] != "-"){
            document.getElementById("cardNum-errors100").textContent="⚠ Separa le cifre a gruppi di 4 con dei trattini."
            return false
        } else {
            return true
        }
    } else {
        document.getElementById("cardNum-errors100").textContent="⚠ Inserire un numero di carta senza spazi separando le cifre a gruppi di 4 con dei trattini."
        return false
    }
}

function ckDate100(){
    document.getElementById("scad-errors100").textContent=" "
    date = new Date()
    minDate = date.getFullYear() + "-" + (parseInt(date.getMonth())+1).toString()
    scad = document.getElementById("scad100").value
    minYear = parseInt(minDate)
    minMonth = parseInt(minDate[5]+minDate[6])
    year = parseInt(scad)
    month = parseInt(scad[5]+scad[6])
    if(year <= minYear && month <= minMonth){
        document.getElementById("scad-errors100").textContent="⚠ La carta è scaduta."
        return false
    } else {
        return true
    }
}

function ckCVV100(){
    document.getElementById("cvv-errors100").textContent=" "
    cvv = document.getElementById("cvv100").value
    if (cvv > 999){
        document.getElementById("cvv-errors100").textContent="⚠ Il cvv non può essere composta da più di tre cifre."
        return false
    } else {
        return true
    }
}

function activeBuy100() {
    if (ckCVV100() && ckIntestatario100() && ckCard100() && ckDate100()){
        document.getElementById("toBuy100").disabled=false;
    }
}

function toBuy1() {
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    sessionUS = sessionStorage.getItem("username")
    sessionPWS = sessionStorage.getItem("password")
    for (let i of users){
        if (i.username == sessionUS && i.password == sessionPWS){
            i.crediti = i.crediti+1
            localStorage.setItem("users",JSON.stringify(users))
            alert("crediti aggiunti")
        }
    }
    window.location.reload()
}

function toBuy10() {
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    sessionUS = sessionStorage.getItem("username")
    sessionPWS = sessionStorage.getItem("password")
    for (let i of users){
        if (i.username == sessionUS && i.password == sessionPWS){
            i.crediti = i.crediti+10
            localStorage.setItem("users",JSON.stringify(users))
            alert("crediti aggiunti")
        }
    }
    window.location.reload()
}

function toBuy100() {
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    sessionUS = sessionStorage.getItem("username")
    sessionPWS = sessionStorage.getItem("password")
    for (let i of users){
        if (i.username == sessionUS && i.password == sessionPWS){
            i.crediti = i.crediti+100
            localStorage.setItem("users",JSON.stringify(users))
            alert("crediti aggiunti")
        }
    }
    window.location.reload()
}

function pacchetto1(){
    album = localStorage.getItem("album")
    if (album == null || album=="undefined"){
        album = []
    } else {
        album = JSON.parse(album)
    }
    doppie=[]
    nuove=[]
    eroi = localStorage.getItem("heroes")
    eroi = JSON.parse(eroi)
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    session_us = sessionStorage.getItem("username")
    session_psw = sessionStorage.getItem("password")
    for (let i of users){
        if (i.username == session_us && i.password == session_psw){
            if (i.crediti<1){
                alert("Devi acquistare dei crediti prima di comprare un pacchetto.")
                break
            }
        }
    }
    for (let j of users){
        if (j.username == session_us && j.password == session_psw){
            if (j.crediti>0){
                 for (let i of album){
                    if (i.proprietario == session_us && i.proprietario != ""){
                        for (j=0;j<4;j++){
                            scelta = getRandomInt(0,99)
                            eroe = eroi[scelta].name
                            if (i.figurine.length == 0){
                                figurina = {
                                    nome: eroe,
                                    quantita: 1
                                }
                                i.figurine.push(figurina)
                                nuove.push(eroe)

                            } else if (i.figurine.some(a => a.nome == eroe)){

                                for (let j of i.figurine){
                                    if(j.nome == eroe){
                                        j.quantita = j.quantita+1
                                    }
                                }
                                doppie.push(eroe)

                            } else {
                                // scelta = getRandomInt(0,99)
                                // eroe = eroi[scelta].name
                                figurina = {
                                    nome: eroe,
                                    quantita: 1
                                }
                                i.figurine.push(figurina)
                                nuove.push(eroe)
                            }
                        }

        speciale = getRandomInt(1,11)
        eroe_speciale = localStorage.getItem("hero"+speciale)
        eroe_speciale = JSON.parse(eroe_speciale)
        for (let i of album){
            if (i.proprietario == session_us){
            if(i.figurine.some( a => a.nome == eroe_speciale.name)){
                doppie.push(eroe_speciale.name)
                for (let j of i.figurine){
                    if(j.nome == eroe_speciale.name){
                        j.quantita = j.quantita+1
                        doppie.push(doppie)
                    }
                }
            } else {
                figurina = {
                    nome: eroe_speciale.name,
                    quantita: 1
                }
                i.figurine.push(figurina)
                nuove.push(eroe_speciale.name)
            }
        }
    }
        for (let i of users){
        if (i.username == session_us && i.password == session_psw){
            i.crediti = i.crediti - 1
        }
    }
    }
}
            }
        }
    }

    // TODO FORMAT
    if(nuove.length != 0){
    alert("HAI TROVATO "+nuove.length+" NUOVI EROI!\n" + nuove)
    }

    if (doppie.length != 0){
    alert("Hai trovato "+doppie.length+" doppioni:\n"+doppie)
    }

    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("album",JSON.stringify(album))
    // window.location.reload()
}


function pacchetto10(){
    album = localStorage.getItem("album")
    if (album == null || album=="undefined"){
        album = []
    } else {
        album = JSON.parse(album)
    }
    nuove = []
    doppie = []
    eroi = localStorage.getItem("heroes")
    eroi = JSON.parse(eroi)
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    session_us = sessionStorage.getItem("username")
    session_psw = sessionStorage.getItem("password")
    for (let i of users){
        if (i.username == session_us && i.password == session_psw){
            if (i.crediti<10){
                alert("Devi acquistare i crediti prima di comprare un pacchetto.")
                break
            }
        }
    }
    for (let j of users){
        if (j.username == session_us && j.password == session_psw){
            if (j.crediti>0){
                 for (let i of album){
        if (i.proprietario == session_us && i.proprietario != ""){
            for (j =0;j<40;j++){
                scelta = getRandomInt(0,99)
                eroe = eroi[scelta].name
            if (i.figurine.length == 0){
                figurina = {
                    nome: eroe,
                    quantita: 1
                    }
                    i.figurine.push(figurina)
                    nuove.push(eroe)
            } else if (i.figurine.some(a => a.nome == eroe)){
                doppie.push(eroe)
                for (let j of i.figurine){
                    if(j.nome == eroe){
                        j.quantita = j.quantita+1
                    }
                }
            } else {
                scelta = getRandomInt(0,99)
                eroe = eroi[scelta].name
                figurina = {
                    nome: eroe,
                    quantita: 1
                    }
                    i.figurine.push(figurina)
                    nuove.push(eroe)
            }
        }
        for (i=0;i<10;i++){
        speciale = getRandomInt(1,11)
        eroe_speciale = localStorage.getItem("hero"+speciale)
        eroe_speciale = JSON.parse(eroe_speciale)
        for (let i of album){
            if (i.proprietario == session_us){
            if(i.figurine.some( a => a.nome == eroe_speciale.name)){
                for (let j of i.figurine){
                    if(j.nome == eroe_speciale.name){
                        j.quantita = j.quantita+1
                    }
                }
                doppie.push(eroe_speciale.name)
            } else {
                figurina = {
                    nome: eroe_speciale.name,
                    quantita: 1
                }
                i.figurine.push(figurina)
                nuove.push(eroe_speciale.name)
            }
        }
    }
}
        for (let i of users){
        if (i.username == session_us && i.password == session_psw){
            i.crediti = i.crediti - 10
        }
    }
    }
}
            }
        }
    }

    if (nuove.length != 0){
    alert("HAI TROVATO "+nuove.length+" NUOVI EROI!\n"+nuove)
    }
    if (doppie.length != 0){
    alert("Hai trovato "+doppie.length+" doppioni.\n"+doppie)
    }
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("album",JSON.stringify(album))
    albumSenzaCopie = removeCopy()
    for (let i of album){
        if(i.proprietario == session_us){
            i.figurine = albumSenzaCopie
        }
    }
    localStorage.setItem("album",JSON.stringify(album))
    window.location.reload()
}

function Spazio(id){
    if (id.indexOf(" ") != -1){
        return true
    }
    return false
}

function soloNumeriQui(q) {
        q = q.toString().replace(/[^0-9-]/g,'');
        return q
}

function soloLettereQui(q) {
    q = q.toString().replace(/[^a-zA-Z ']/gi,'');
    return q
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }

 function removeCopy(){
    album = localStorage.getItem("album")
    album = JSON.parse(album)
    utente = sessionStorage.getItem("username")
    aggiunti = []
    newAlbum = []
    for (let i of album){
        if(i.proprietario == utente){
            for (j=0;j<i.figurine.length;j++){
        if (!aggiunti.some(x => x == i.figurine[j].nome)){
        aggiunti.push(i.figurine[j].nome)
        newAlbum.push(i.figurine[j])
        }   
            }
        }
    }
    return newAlbum
}