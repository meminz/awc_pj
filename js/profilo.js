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
            document.getElementById("profile-container1").appendChild(num)
        }
    }
}

function carteMancanti(){
    user = sessionStorage.getItem("username")
    carteTot = JSON.parse(localStorage.getItem("heroes")).length
    albums = JSON.parse(localStorage.getItem("album"))
    

    for(var i = 0, length1 = albums.length; i < length1; i++){
        if(albums[i].proprietario == user){
            a = albums[i]
        }
    }

    document.getElementById("carteMancanti").textContent = "Carte trovate: "  + a.figurine.length + " / " + carteTot

}



function show_hide_mod(){ // mostra o nasconde la password nel modal per modificare
    x = document.getElementById("password-mod");
    y = document.getElementById("confirmPsw-mod");
    if (x.type == "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }

    y.type = x.type
}

function obtainName(){
    profile = document.getElementById("profile-container1")
    nome = document.createElement("p") 
    id = document.createAttribute("id")
    id.value = "nomeUtente"
    nome.setAttributeNode(id)
    profile.appendChild(nome)
    document.getElementById("nomeUtente").innerHTML=username
    document.getElementById("nomeUtente").setAttribute("class", "infoProfilo")
}

function obtainemail(){
    profile = document.getElementById("profile-container3")
    for (let i of users){
        if (i.username == username){
            email = document.createElement("p")
            id = document.createAttribute("id")
            id.value = "emailUtente"
            email.setAttributeNode(id)
            profile.appendChild(email)
            document.getElementById("emailUtente").innerHTML=i.email
            document.getElementById("emailUtente").setAttribute("class", "infoProfilo")
        }
    }
}

function obtainfavhero(){
    username = sessionStorage.getItem("username")
    password = sessionStorage.getItem("password")
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    profile = document.getElementById("profile-container2")
    img = document.createElement("img") 
    id = document.createAttribute("id")
    id.value = "immagine"
    img.setAttributeNode(id)
    profile.appendChild(img)
    for (let i of users){
        if (i.username == username && i.password == password){
            favHero = i.favHero
        }
    }
    for (let i of heroes){
        if (i.name == favHero){
            img = i.thumbnail.path
            img += ".jpg"
        } else if (hero1.name == favHero){
            img = hero1.thumbnail.path
            img += ".jpg"
        } else if (hero2.name == favHero){
            img = hero2.thumbnail.path
            img += ".jpg"
        } else if (hero3.name == favHero){
            img = hero3.thumbnail.path
            img += ".jpg"
        } else if (hero4.name == favHero){
            img = hero4.thumbnail.path
            img += ".jpg"
        } else if (hero5.name == favHero){
            img = hero5.thumbnail.path
            img += ".jpg"
        } else if (hero6.name == favHero){
            img = hero6.thumbnail.path
            img += ".jpg"
        } else if (hero7.name == favHero){
            img = hero7.thumbnail.path
            img += ".jpg"
        } else if (hero8.name == favHero){
            img = hero8.thumbnail.path
            img += ".jpg"
        } else if (hero9.name == favHero){
            img = hero9.thumbnail.path
            img += ".jpg"
        } else if (hero10.name == favHero){
            img = hero10.thumbnail.path
            img += ".jpg"
        } else if (hero11.name == favHero){
            img = hero11.thumbnail.path
            img += ".jpg"
        } else {
            img = "images/noimg.jpeg"
        }
    }
    document.getElementById("immagine").setAttribute("width", "200px")
    document.getElementById("immagine").setAttribute("src", img)
}

function goToMod(){ // apre il modal per modificare
    users = localStorage.getItem("users")
    users = JSON.parse(users)
    crt_us = sessionStorage.getItem("username")
    crt_psw = sessionStorage.getItem("password")
    document.getElementById("openMod").style.display="none"
    document.getElementById("deleteProfile").style.display="none"
    document.getElementById("nomeUtente").style.display="none"
    // document.getElementById("emailUtente").style.display="none"
    document.getElementById("mod").classList.add("active");
    document.getElementById("cover").style.display="block";
    document.getElementById("user-mod").value=crt_us
    document.getElementById("password-mod").value=crt_psw
    document.getElementById("confirmPsw-mod").value=crt_psw
    for (let i of users){
        if (i.username==crt_us && i.password== crt_psw){
            document.getElementById("email-mod").value=i.email
        }
    }

}


function closemod(){
    document.getElementById("deleteProfile").style.display="inline-block"
    document.getElementById("openMod").style.display="inline-block"
    document.getElementById("nomeUtente").style.display="block"
    // document.getElementById("emailUtente").style.display="block"
    document.getElementById("mod").classList.remove("active");
    document.getElementById("cover").style.display="none";
    document.getElementById("choose-hero").classList.remove("active")
}

function ckUsername(){
    document.getElementById("username-errors").textContent=null;
    users = localStorage.getItem('users');
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    session = sessionStorage.getItem("username")
    session_psw = sessionStorage.getItem("password")
    username = document.getElementById("user-mod").value;
    if (users.some(u => u.username == username && u.username != session)){
        document.getElementById("username-errors").textContent = "⚠ Username già associato ad un account, riprova."
        return false
        } else if (users.some(u => u.username == username && u.username == session)){
            return true
        } 
        if (!minLen("user-mod",3)){
        document.getElementById("username-errors").textContent = "⚠ L'username deve contenere almeno 3 caratteri."
        return false
        } else if (Space("user-mod")){
        document.getElementById("username-errors").textContent = "⚠ L'username non puo' contenere spazi."
        return false
        } else {
        document.getElementById("user-mod").style.borderColor="green";
        return true
        }
    return false
}
function minLen(id, n) {
    return document.getElementById(id).value.length >= n
}
function Space(id){
    if (document.getElementById(id).value.indexOf(" ") != -1){
        return true
    }
    return false
}
// CONTROLLO SULL'EMAIL PER LA REGISTRAZIONE
function ckEmail(){
    document.getElementById("email-errors").textContent=null;
    users = localStorage.getItem('users');
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    session = sessionStorage.getItem("username")
    session_psw = sessionStorage.getItem("password")
    email = document.getElementById("email-mod").value;
    if (users.some(u => u.email == email && u.username != session)){
        document.getElementById("email-errors").textContent = "⚠ Email già associata ad un account, riprova."
        return false
        } else if (users.some (u => u.email == email && u.username == session)) {
            return true
        }
        if (email=='') {
        document.getElementById("email-errors").textContent = "⚠ Indica un indirizzo email."
        return false 
        } else if (!emailValidator("email-mod")){
        document.getElementById("email-errors").textContent = "⚠ Indirizzo email non valido, riprova."
        return false
        } else {
        document.getElementById("email-mod").style.borderColor="green";
        return true
        }   
    return false
}
function emailValidator(id){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById(id).value)){
        return true
    }
    return false
}
//CONTROLLO SULLA PASSWORD PER LA REGISTRAZIONE
function ckPassword(){
    value = 100
    document.getElementById("password-errors").textContent=""
    password = document.getElementById("password-mod").value
    if (password.length < 7){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno 7 caratteri."
        document.getElementById("toMod").disabled = true;
    }
    if (!/[0-9]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno un numero."
        document.getElementById("toMod").disabled = true;
    }
    if (!/[a-z]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno una lettera minuscola."
        document.getElementById("toMod").disabled = true;
    }
    if (!/[A-Z]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno una lettera maiuscola."
        document.getElementById("toMod").disabled = true;
    }
    if (!/[$-/:-?{-~!"^_`\[\]]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno un carattere speciale."
        document.getElementById("toMod").disabled = true;
    }
    if(Space("password-mod")){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password non può contenere spazi."
        document.getElementById("toMod").disabled = true;
    }
    return value
} 


function passwordBar() {
    value = ckPassword();
        switch (value) {
            case 0:
                document.getElementById("bar").style.width="16.67%"
                document.getElementById("bar").style.background="darkred"
                document.getElementById("label-bar").textContent="Scarsa"
                break;
            case 20:
                document.getElementById("bar").style.width="33.33%"
                document.getElementById("bar").style.background="red"
                document.getElementById("label-bar").textContent="Debole"
                break;
            case 40:
                document.getElementById("bar").style.width="50%"
                document.getElementById("bar").style.background="orange"
                document.getElementById("label-bar").textContent="Mediocre"
                break;
            case 60:
                document.getElementById("bar").style.width="66,67%"
                document.getElementById("bar").style.background="yellow"
                document.getElementById("label-bar").textContent="Media"
                break;
            case 80:
                document.getElementById("bar").style.width="83.33%"
                document.getElementById("bar").style.background="green"
                document.getElementById("label-bar").textContent="Forte"
                break;
            case 100:
                document.getElementById("bar").style.width="100%"
                document.getElementById("bar").style.background="green"
                document.getElementById("label-bar").textContent="Molto forte"
                document.getElementById("password-mod").style.borderColor="green";
                break;
            default:
                break;
    }
}

function confirmPsw(){
    psw = document.getElementById("password-register").value
    confirm = document.getElementById("confirmPsw-register").value
    document.getElementById("confirmPsw-register").style.borderColor="red";

    if(confirm === psw){
        document.getElementById("confirmPsw-register").style.borderColor="green";
        document.getElementById("confirmPsw-errors").textContent = ""
        document.getElementById("toReg").disabled = false;
    } else {
        document.getElementById("confirmPsw-errors").textContent = "⚠ Le password devono essere uguali."
        document.getElementById("toReg").disabled = true;
    }

}



//CONTROLLO SCELTA SUPEREROE
function controlChooseHero() {
    index = document.getElementById("hero-list").selectedIndex
    if (index == -1){
        return false
    } else {
        return true
    }
}


function deleteSelection() {
    heroList = document.getElementById("hero-list")
    heroList.selectedIndex = -1
}

function goBack(){
    document.getElementById("mod").classList.add("active")
    document.getElementById("choose-hero").classList.remove("active")
}


function chooseHero() {
    document.getElementById("choose-hero").classList.add("active")
    document.getElementById("mod").classList.remove("active")
}

function realChoose(){
    characters = localStorage.getItem('heroes')
    hero1 = localStorage.getItem('hero1')
    hero2 = localStorage.getItem('hero2')
    hero3 = localStorage.getItem('hero3')
    hero4 = localStorage.getItem('hero4')
    hero5 = localStorage.getItem('hero5')
    hero6 = localStorage.getItem('hero6')
    hero7 = localStorage.getItem('hero7')
    hero8 = localStorage.getItem('hero8')
    hero9 = localStorage.getItem('hero9')
    hero10 = localStorage.getItem('hero10')
    hero11 = localStorage.getItem('hero11')

    characters = JSON.parse(characters)
    for (let i of characters){
        document.getElementById('hero-list').add(new Option(i.name))
    }

    hero1 = JSON.parse(hero1)
    document.getElementById('hero-list').add(new Option(hero1.name))
    hero2 = JSON.parse(hero2)
    document.getElementById('hero-list').add(new Option(hero2.name))
    hero3 = JSON.parse(hero3)
    document.getElementById('hero-list').add(new Option(hero3.name))
    hero4 = JSON.parse(hero4)
    document.getElementById('hero-list').add(new Option(hero4.name))
    hero5 = JSON.parse(hero5)
    document.getElementById('hero-list').add(new Option(hero5.name))
    hero6 = JSON.parse(hero6)
    document.getElementById('hero-list').add(new Option(hero6.name))
    hero7 = JSON.parse(hero7)
    document.getElementById('hero-list').add(new Option(hero7.name))
    hero8 = JSON.parse(hero8)
    document.getElementById('hero-list').add(new Option(hero8.name))
    hero9 = JSON.parse(hero9)
    document.getElementById('hero-list').add(new Option(hero9.name))
    hero10 = JSON.parse(hero10)
    document.getElementById('hero-list').add(new Option(hero10.name))
    hero11 = JSON.parse(hero11)
    document.getElementById('hero-list').add(new Option(hero11.name))

}




function modifica() {
    var username=window.sessionStorage.getItem('username')
    let us=window.localStorage.getItem('users');
    var users=JSON.parse(us);

    var newUsername=document.getElementById("user-mod").value;
    var newMail=document.getElementById("email-mod").value;
    var newPwd=document.getElementById("password-mod").value;
    var newHero=document.getElementById("hero-list").value;

    for(i=0; i < users.length; i++){
      if (users[i].username == username) {
        users[i].username=newUsername
        users[i].email=newMail
        users[i].password=newPwd
        users[i].favHero=newHero
        window.localStorage.removeItem('users')
        window.localStorage.setItem('users',JSON.stringify(users))
        window.sessionStorage.removeItem('username')
        window.sessionStorage.setItem('username',newUsername)
        sessionStorage.setItem("password",newPwd)
        alert("Dati aggiornati con successo")
        window.location.reload()
      }
    } 
}

function goToDelete(){
    document.getElementById("deleteProfile").style.display="none"
    document.getElementById("openMod").style.display="none"
    document.getElementById("nomeUtente").style.display="none"
    document.getElementById("emailUtente").style.display="none"
    document.getElementById("delete").classList.add("active");
    document.getElementById("cover").style.display="inline-block";
}

function closeDelete() {
    document.getElementById("deleteProfile").style.display="block"
    document.getElementById("openMod").style.display="block"
    document.getElementById("nomeUtente").style.display="block"
    document.getElementById("emailUtente").style.display="block"
    document.getElementById("delete").classList.remove("active");
    document.getElementById("cover").style.display="none";
}

function deleteProfile() {
    u = sessionStorage.getItem('username'); 
    p = sessionStorage.getItem("password")

    users = localStorage.getItem('users');
    users = JSON.parse(users);

    album = localStorage.getItem("album")
    album = JSON.parse(album)

    scambi = localStorage.getItem("scambi")
    scambi = JSON.parse(scambi)

    for(i=0; i < users.length; i++){
        if (users[i].username == u && users[i].password == p) {
          users.splice(i,1);
          localStorage.setItem('users',JSON.stringify(users))
        }
    }
    if(album!=null && album.some(a => a.proprietario == u)){
        for (i=0;i<album.length;i++){
            if (album[i].proprietario == u){
                album.splice(i,1)
                localStorage.setItem("album",JSON.stringify(album))
            }
        }
    }
    if(scambi!=null){
        for (let j of scambi){
            if (j.chi == u)
            for (i=0;i<scambi.length;i++){
                scambi.splice(i,1)
                localStorage.setItem("scambi",JSON.stringify(scambi))
            }
        }
    }
    alert("Account Eliminato")
    sessionStorage.clear()
    window.location.href="index.html"
}


function activeMod(){

    if (ckUsername() && ckEmail() && ckPassword()==100){
        document.getElementById("toMod").disabled=false;
    } else {
        document.getElementById("toMod").disabled=true;
    }
}



// ALBUM
function isCreate(){
    username = sessionStorage.getItem("username")
    album = localStorage.getItem("album")

    if (album == null || album == "undefined"){
        album = []
    } else {
        album = JSON.parse(album)
    }

    if(album.some(a => a.proprietario==username && a.figurine.length == 0)){
        empty = document.createElement("center")
        empty.innerHTML = "<label>Acquista pacchetti di figurine per iniziare la tua collezione!</label>"
        document.getElementById("creaAlbum").appendChild(empty)
    } else {

        // stampa album
        for (let i of album){
            if (i.proprietario == username){
                for (j=0;j<i.figurine.length;j++){
                    descrizione = obtainDesc(i.figurine[j].nome)
                    img = obtainimg(i.figurine[j].nome)
                    quantita = i.figurine[j].quantita
                    stampaAlbum(i.figurine[j].nome,img,descrizione,j,quantita)
                    hideInfo(i.figurine[j].nome)
                }
            }
        }


    }

    // } else {
    //     btn = document.createElement("button")
    //     btn.innerHTML = "Crea Album"
    //     classe = document.createAttribute("class")
    //     classe.value = "button"
    //     funzione = document.createAttribute("onclick")
    //     funzione.value = "createAlbum()"
    //     btn.setAttributeNode(funzione)
    //     btn.setAttributeNode(classe)
    //     document.getElementById("creaAlbum").appendChild(btn)
    // }
}

// function createAlbum(){
//     sessionUser = sessionStorage.getItem("username")
//     album = localStorage.getItem("album")
//     if (album == null || album=="undefined"){
//         album = []
//     } else {
//         album = JSON.parse(album)
//     }
//     raccolta = []
//     newAlbum = {
//         proprietario: sessionUser,
//         figurine: raccolta
//     }
//     album.push(newAlbum)
//     localStorage.setItem("album",JSON.stringify(album))
//     alert ("Album creato con successo")
//     sessionStorage.removeItem("album"+sessionUser)
//     window.location.reload()
// }


function stampaAlbum(nome,figura,descrizione,idx,quantita){
        div = document.createElement("div") // crea la carta
        classeDiv = document.createAttribute("class")
        classeDiv.value = "carta"
        id = document.createAttribute("id")
        id.value = nome
        div.setAttributeNode(classeDiv)
        div.setAttributeNode(id)
        document.getElementById("creaAlbum").appendChild(div)


        img = document.createElement("img") // aggiunge l'immagine
        src = document.createAttribute("src")
        classeImg = document.createAttribute("class")
        classeImg.value="img"
        img.setAttributeNode(classeImg)
        src.value = figura
        img.setAttributeNode(src)
        document.getElementById(nome).appendChild(img)


        eroe = document.createElement("div") //aggiunge il nome
        classeEroe = document.createAttribute("class")
        classeEroe.value = "heading"
        eroe.setAttributeNode(classeEroe)
        eroe.innerHTML = nome
        document.getElementById(nome).appendChild(eroe)


        doppioni = document.createElement("p") //aggiunge numero doppioni
        classeDopp = document.createAttribute("class")
        classeDopp.value = "desc"
        doppioni.setAttributeNode(classeDopp)
        doppioni.innerHTML = "Quantità: " + quantita
        document.getElementById(nome).appendChild(doppioni)


        desc = document.createElement("p") //aggiunge la descrizione
        classeDesc = document.createAttribute("class")
        classeDesc.value = "desc"
        desc.setAttributeNode(classeDesc)
        desc.innerHTML = descrizione
        document.getElementById(nome).appendChild(desc)

        mostraPiu(nome,idx)

        otherInfo(nome,idx)

}

function otherInfo(nome,j){
    comics = obtainComics(nome)
    series = obtainSeries(nome)
    events = obtainEvents(nome)

    divInfo = document.createElement("div")
    divId = document.createAttribute("id")
    divId.value = "info"+j
    divInfo.setAttributeNode(divId)
    document.getElementById(nome).appendChild(divInfo)
    
    titolo = document.createElement("div")
    classeDiv = document.createAttribute("class")
    classeDiv.value="heading"
    titolo.setAttributeNode(classeDiv)
    titolo.innerHTML="Compare nei seguenti fumetti: "
    document.getElementById("info"+j).appendChild(titolo)
    for (let y of comics){
        fumetto = document.createElement("p")
        fumetto.innerHTML = y.name
        document.getElementById("info"+j).appendChild(fumetto)
    }


    titolo = document.createElement("div")
    classeDiv = document.createAttribute("class")
    classeDiv.value="heading"
    titolo.setAttributeNode(classeDiv)
    titolo.innerHTML="Compare nelle seguenti serie: "
    document.getElementById("info"+j).appendChild(titolo)
    for (let y of series){
        serie = document.createElement("p")
        serie.innerHTML = y.name
        document.getElementById("info"+j).appendChild(serie)
    }


    titolo = document.createElement("div")
    classeDiv = document.createAttribute("class")
    classeDiv.value="heading"
    titolo.setAttributeNode(classeDiv)
    titolo.innerHTML="Compare nei seguenti eventi: "
    document.getElementById("info"+j).appendChild(titolo)
    for (let y of events){
        evento = document.createElement("p")
        evento.innerHTML = y.name
        document.getElementById("info"+j).appendChild(evento)
    }
    document.getElementById("mostra"+j).style.display="none"
    mostraMeno(nome,j)
}




function mostraPiu(nome,idx){
    mostra = document.createElement("center")
    click = document.createAttribute("onclick")
    idMostra = document.createAttribute("id")
    idMostra.value = "mostra"+idx
    click.value= "showInfo(\'" + nome + "\')"
    classeMostra = document.createAttribute("class")
    classeMostra.value = "mostraPiu"
    mostra.setAttributeNode(classeMostra)
    mostra.setAttributeNode(idMostra)
    mostra.setAttributeNode(click)
    mostra.innerHTML = "mostra di più"
    document.getElementById(nome).appendChild(mostra)
}

function mostraMeno(nome,idx){
    mostra_meno = document.createElement("center")
    click_meno = document.createAttribute("onclick")
    idMostra_meno = document.createAttribute("id")
    idMostra_meno.value = "mostraMeno"+idx
    click_meno.value= "hideInfo(\'"+nome+"\')"
    classeMostra_meno = document.createAttribute("class")
    classeMostra_meno.value = "mostraMeno"
    mostra_meno.setAttributeNode(classeMostra_meno)
    mostra_meno.setAttributeNode(idMostra_meno)
    mostra_meno.setAttributeNode(click_meno)
    mostra_meno.innerHTML = "mostra meno"
    document.getElementById(nome).appendChild(mostra_meno)
}

function hideInfo(nome) {
    album = localStorage.getItem("album")
    album = JSON.parse(album)
    collector = sessionStorage.getItem("username")
    for (let p of album){
        if(p.proprietario == collector){
            for(q=0;q<p.figurine.length;q++){
                if(p.figurine[q].nome == nome){
                    document.getElementById(nome).style.height=null
                    document.getElementById("info"+q).style.display="none"
                    document.getElementById("mostraMeno"+q).style.display="none"
                    document.getElementById("mostra"+q).style.display="block"
                    break
                }
            }
        }
    }
}

function showInfo(nome){
    album = localStorage.getItem("album")
    album = JSON.parse(album)
    collector = sessionStorage.getItem("username")

    for (let l of album) {

        if (l.proprietario == collector){

            for (u=0;u<l.figurine.length;u++){
                if(l.figurine[u].nome == nome){
                    console.log("A")
                    document.getElementById(nome).style.height="auto"
                    document.getElementById("mostra"+u).style.display="none"
                    document.getElementById("info"+u).style.display="block"
                    document.getElementById("mostraMeno"+u).style.display="block"
                    break
                }
            }
            
        }
    }
}




function obtainimg(favHero){
    heroes = localStorage.getItem('heroes')
    heroes = JSON.parse(heroes)
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

    if(heroes.some(h => h.name == favHero)){
        for (let i of heroes){
            if(i.name == favHero){
                img = i.thumbnail.path
                img += ".jpg"
            }
        }
    } else if (hero1.name == favHero){
            img = hero1.thumbnail.path
            img += ".jpg"
        } else if (hero2.name == favHero){
            img = hero2.thumbnail.path
            img += ".jpg"
        } else if (hero3.name == favHero){
            img = hero3.thumbnail.path
            img += ".jpg"
        } else if (hero4.name == favHero){
            img = hero4.thumbnail.path
            img += ".jpg"
        } else if (hero5.name == favHero){
            img = hero5.thumbnail.path
            img += ".jpg"
        } else if (hero6.name == favHero){
            img = hero6.thumbnail.path
            img += ".jpg"
        } else if (hero7.name == favHero){
            img = hero7.thumbnail.path
            img += ".jpg"
        } else if (hero8.name == favHero){
            img = hero8.thumbnail.path
            img += ".jpg"
        } else if (hero9.name == favHero){
            img = hero9.thumbnail.path
            img += ".jpg"
        } else if (hero10.name == favHero){
            img = hero10.thumbnail.path
            img += ".jpg"
        } else if (hero11.name == favHero){
            img = hero11.thumbnail.path
            img += ".jpg"
        } else {
            img = "images/noimg.jpeg"
        }
    return img
}

function obtainDesc(favHero){
    heroes = localStorage.getItem('heroes')
    heroes = JSON.parse(heroes)
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
   if (heroes.some(h => h.name == favHero)){
       for (let i of heroes){
           if(i.name == favHero){
               desc = i.description
           }
       }
   } else if (hero1.name == favHero){
            desc = hero1.description
            
        } else if (hero2.name == favHero){
            desc = hero2.description
            
        } else if (hero3.name == favHero){
            desc = hero3.description
            
        } else if (hero4.name == favHero){
            desc = hero4.description
            
        } else if (hero5.name == favHero){
            desc = hero5.description
            
        } else if (hero6.name == favHero){
            desc = hero6.description
            
        } else if (hero7.name == favHero){
            desc = hero7.description
            
        } else if (hero8.name == favHero){
            desc = hero8.description
            
        } else if (hero9.name == favHero){
            desc = hero9.description
            
        } else if (hero10.name == favHero){
            desc = hero10.description
            
        } else if (hero11.name == favHero){
            desc = hero11.description
            
        } else {
            desc = "nessuna descrizione disponibile."
        }
    return desc
}

function obtainComics(favHero){
    heroes = localStorage.getItem('heroes')
    heroes = JSON.parse(heroes)
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

    if(heroes.some(h => h.name == favHero)){
        for (let i of heroes){
            if(i.name == favHero){
                comics = i.comics.items
            }
        }
    } else if (hero1.name == favHero){
            comics = hero1.comics.items
        } else if (hero2.name == favHero){
            comics = hero2.comics.items
        } else if (hero3.name == favHero){
            comics = hero3.comics.items
        } else if (hero4.name == favHero){
            comics = hero4.comics.items
        } else if (hero5.name == favHero){
            comics = hero5.comics.items
        } else if (hero6.name == favHero){
            comics = hero6.comics.items
        } else if (hero7.name == favHero){
            comics = hero7.comics.items
        } else if (hero8.name == favHero){
            comics = hero8.comics.items
        } else if (hero9.name == favHero){
            comics = hero9.comics.items
        } else if (hero10.name == favHero){
            comics = hero10.comics.items
        } else if (hero11.name == favHero){
            comics = hero11.comics.items
        } else {
            comics = "nessuno"
        }
    return comics
}

function obtainSeries(favHero){
    heroes = localStorage.getItem('heroes')
    heroes = JSON.parse(heroes)
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

    if(heroes.some(h => h.name == favHero)){
        for (let i of heroes){
            if(i.name == favHero){
                series = i.series.items
            }
        }
    } else if (hero1.name == favHero){
        series = hero1.series.items
        } else if (hero2.name == favHero){
            series = hero2.series.items
        } else if (hero3.name == favHero){
            series = hero3.series.items
        } else if (hero4.name == favHero){
            series = hero4.series.items
        } else if (hero5.name == favHero){
            series = hero5.series.items
        } else if (hero6.name == favHero){
            series = hero6.series.items
        } else if (hero7.name == favHero){
            series = hero7.series.items
        } else if (hero8.name == favHero){
            series = hero8.series.items
        } else if (hero9.name == favHero){
            series = hero9.series.items
        } else if (hero10.name == favHero){
            series = hero10.series.items
        } else if (hero11.name == favHero){
            series = hero11.series.items
        } else {
            series = "nessuno"
        }
    return series
}

function obtainEvents(favHero){
    heroes = localStorage.getItem('heroes')
    heroes = JSON.parse(heroes)
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

    if(heroes.some(h => h.name == favHero)){
        for (let i of heroes){
            if(i.name == favHero){
                events = i.events.items
            }
        }
    } else if (hero1.name == favHero){
        events = hero1.events.items
        } else if (hero2.name == favHero){
            events = hero2.events.items
        } else if (hero3.name == favHero){
            events = hero3.events.items
        } else if (hero4.name == favHero){
            events = hero4.events.items
        } else if (hero5.name == favHero){
            events = hero5.events.items
        } else if (hero6.name == favHero){
            events = hero6.events.items
        } else if (hero7.name == favHero){
            events = hero7.events.items
        } else if (hero8.name == favHero){
            series = hero8.series.items
        } else if (hero9.name == favHero){
            events = hero9.events.items
        } else if (hero10.name == favHero){
            events = hero10.events.items
        } else if (hero11.name == favHero){
            events = hero11.events.items
        } else {
            events = "nessuno"
        }
    return events
}

