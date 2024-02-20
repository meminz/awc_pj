function closereg(){ // chiude il modal per registrarsi
    document.getElementById("buttons").style.display="flex";
    document.getElementById("reg").classList.remove("active");
    document.getElementById("cover").style.display="none";
    document.getElementById("user-register").value="";
    document.getElementById("username-errors").textContent=null;
    document.getElementById("email-register").value="";
    document.getElementById("email-errors").textContent=null;
    document.getElementById("password-errors").textContent=null;
    document.getElementById("label-bar").textContent=null;
    // document.getElementById("passowrd-register").value="";
    // document.getElementById("confirmPsw-register").value="";
    document.getElementById("choose-hero").classList.remove("active")
}
function closeacc(){ // chiude il modal per accedere
    document.getElementById("buttons").style.display="flex";
    document.getElementById("acc").classList.remove("active");
    document.getElementById("cover").style.display="none";
    document.getElementById("user-errors").textContent=null;
    document.getElementById("password-errors").textContent=null;
}
function goToReg(){ // apre il modal per registrarsi
    document.getElementById("buttons").style.display="none";
    document.getElementById("reg").classList.add("active");
    document.getElementById("cover").style.display="block";
}
function goToAcc(){ // apre il modal per accedere
    document.getElementById("buttons").style.display="none";
    document.getElementById("acc").classList.add("active");
    document.getElementById("cover").style.display="block";
}
function show_hide_acc(){ // mostra o nasconde la password nel modal per accedere
    x = document.getElementById("password-access");
    if (x.type == "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function show_hide_reg(){ // mostra o nasconde la password nel modal per registrarsi
    x = document.getElementById("password-register");
    y = document.getElementById("confirmPsw-register");
    if (x.type == "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }

    y.type = x.type
}

function show_hide_confirm(){
    x = document.getElementById("confirmPsw-register");
    y = document.getElementById("showpswconf");
    if (x.type == "password"){
        x.type = "text";
    } else {
        x.type = "password";
    }
}



//REGISTRAZIONE UTENTE
function registration(){
    users = localStorage.getItem('users');
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    if (controlChooseHero()){
        user = {
        username: document.getElementById("user-register").value,
        email: document.getElementById("email-register").value,
        password: document.getElementById("password-register").value,
        favHero: document.getElementById("hero-list")[index].value,
        crediti: 0
        }
    } else {
        user = {
        username: document.getElementById("user-register").value,
        email: document.getElementById("email-register").value,
        password: document.getElementById("password-register").value,
        favHero: "",
        crediti: 0
        }
    }
    
    users.push(user);
    localStorage.setItem('users',JSON.stringify(users))

    createAlbum(user.username)

    alert("Registrazione avvenuta con successo.");
    window.location.reload();
}




//CONTROLLO USERNAME REGISTRAZIONE
function ckUsername(){
    document.getElementById("user-register").style.borderColor="red";
    document.getElementById("username-errors").textContent=null;
    users = localStorage.getItem("users");
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    username = document.getElementById("user-register").value;
    if (users.some(u => u.username == username)){
        document.getElementById("username-errors").textContent = "⚠ Username esistente, riprova."
        document.getElementById("toReg").disabled = true;
    } else if (!minLen("user-register", 3)){
        document.getElementById("username-errors").textContent = "⚠ L'username deve contenere almeno 3 caratteri."
        document.getElementById("toReg").disabled = true;
    } else if (Space("user-register")){
        document.getElementById("username-errors").textContent = "⚠ L'username non puo' contenere spazi."
        document.getElementById("toReg").disabled = true;
    } else {
        document.getElementById("user-register").style.borderColor="green";
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





// CONTROLLO EMAIL REGISTRAZIONE
function ckEmail(){
    document.getElementById("email-register").style.borderColor="red";
    document.getElementById("email-errors").textContent=null;
    users = localStorage.getItem("users");
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    email = document.getElementById("email-register").value;
    if (users.some(u => u.email == email)){
        document.getElementById("email-errors").textContent = "⚠ Email già associata ad un account, riprova."
        document.getElementById("toReg").disabled = true;
    } else if (email=='') {
        document.getElementById("email-errors").textContent = "⚠ Indica un indirizzo email."
        document.getElementById("toReg").disabled = true;
    } else if (!emailValidator("email-register")){
        document.getElementById("email-errors").textContent = "⚠ Indirizzo email non valido, riprova."
        document.getElementById("toReg").disabled = true;
    } else {
        document.getElementById("email-register").style.borderColor="green";
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





//CONTROLLO PASSWORD REGISTRAZIONE
function ckPassword(){
    value = 100
    document.getElementById("password-errors").textContent=""
    document.getElementById("password-register").style.borderColor="red";
    password = document.getElementById("password-register").value

    if (password==="") return 0

    if (password.length < 7){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno 7 caratteri."
        document.getElementById("toReg").disabled = true;
    }
    if (!/[0-9]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno un numero."
        document.getElementById("toReg").disabled = true;
    }
    if (!/[a-z]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno una lettera minuscola."
        document.getElementById("toReg").disabled = true;
    }
    if (!/[A-Z]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno una lettera maiuscola."
        document.getElementById("toReg").disabled = true;
    }
    if (!/[$-/:-?{-~!"^_`\[\]]/.test(password)){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password deve contenere almeno un carattere speciale."
        document.getElementById("toReg").disabled = true;
    }
    if(Space("password-register")){
        value = value -20
        document.getElementById("password-errors").textContent = "⚠ La password non può contenere spazi."
        document.getElementById("toReg").disabled = true;
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
                document.getElementById("password-register").style.borderColor="green";
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


    
// ATTIVA PULSANTE REGISTRAZIONE
// function activeReg(){
//     if (ckUsername() && ckEmail() && ckPassword()==100 && confirmPsw()){
//         document.getElementById("toReg").disabled=false;
//     }
// }



// LOGOUT
function exit(){
    sessionStorage.clear()
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
function change(){
    heroList = document.getElementById("hero-list")
    if (heroList.selectedIndex != -1){
        document.getElementById("registration").disabled=false
        document.getElementById("registration").value="Registrati"
    }
}
function deleteSelection() {
    heroList = document.getElementById("hero-list")
    heroList.selectedIndex = -1
    document.getElementById("registration").disabled=true
    document.getElementById("registration").value="Scegli un Eroe"
}
function goBack(){
    document.getElementById("reg").classList.add("active")
    document.getElementById("choose-hero").classList.remove("active")
}


function chooseHero() {
    document.getElementById("choose-hero").classList.add("active")
    document.getElementById("reg").classList.remove("active")
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








// CARICAMENTO EROI
function caricaEroi(){
    characters = localStorage.getItem('heroes')

    if (characters == null){
        getFromMarvel('public/characters','limit=100').then(result => localStorage.setItem('heroes',JSON.stringify(result.data.results)))
        caricaDoppioni()
    } else {
        characters = JSON.parse(characters)
    }
}


function caricaDoppioni(){
    getFromMarvel('public/characters/1009610').then(result => localStorage.setItem('hero1',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009664').then(result => localStorage.setItem('hero2',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009351').then(result => localStorage.setItem('hero3',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009368').then(result => localStorage.setItem('hero4',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009417').then(result => localStorage.setItem('hero5',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009464').then(result => localStorage.setItem('hero6',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009515').then(result => localStorage.setItem('hero7',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009697').then(result => localStorage.setItem('hero8',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009718').then(result => localStorage.setItem('hero9',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009276').then(result => localStorage.setItem('hero10',JSON.stringify(result.data.results[0])))
    getFromMarvel('public/characters/1009287').then(result => localStorage.setItem('hero11',JSON.stringify(result.data.results[0])))
}





//CONTROLLO USERNAME ACCESSO
function ckUsernameAcc(){
    document.getElementById("user-access").style.borderColor="red";
    document.getElementById("user-errors").textContent=null;
    users = localStorage.getItem("users");
    if (users == null){
        users = [];
    } else {
        users = JSON.parse(users);
    }
    username = document.getElementById("user-register").value;
    if (users.some(u => u.username == username)){
        document.getElementById("user-errors").textContent = "⚠ Username esistente, riprova."
        document.getElementById("toReg").disabled = true;
    } else if (!minLen("user-register", 3)){
        document.getElementById("username-errors").textContent = "⚠ L'username deve contenere almeno 3 caratteri."
        document.getElementById("toReg").disabled = true;
    } else if (Space("user-register")){
        document.getElementById("username-errors").textContent = "⚠ L'username non puo' contenere spazi."
        document.getElementById("toReg").disabled = true;
    } else {
        document.getElementById("user-register").style.borderColor="green";
        return true
    }
    return false
}


//CREAZIONE ALBUM
function createAlbum(username){
    album = localStorage.getItem("album")
    if (album == null || album=="undefined"){
        album = []
    } else {
        album = JSON.parse(album)
    }

    raccolta = []
    newAlbum = {
        proprietario: username,
        figurine: raccolta
    }
    album.push(newAlbum)
    localStorage.setItem("album",JSON.stringify(album))
}

function loadAlbum(){
    username = sessionStorage.getItem("username")
    album = localStorage.getItem("album")

    if (album == null || album == "undefined"){
        album = []
    } else {
        album = JSON.parse(album)
    }

    if (!album.some(a => a.proprietario == username)){
        createAlbum()
    }

}




function AccessControl() {
    document.getElementById("user-errors").textContent="";
    document.getElementById("pass-errors").textContent="";

    users = localStorage.getItem("users")
    if (users == null){
        users = [];
        document.getElementById("user-errors").textContent="⚠ Nessun account registrato."
        return false
    } else {
        users = JSON.parse(users);
    }
    password = document.getElementById("password-access").value;
    username = document.getElementById("user-access").value;
    if (users.length == 0){
        document.getElementById("user-errors").textContent="⚠ Nessun account registrato."
        return false

    } else {
        for (let u of users){
            if(u.username == username){
                if(u.password == password) return true
                else {
                    document.getElementById("pass-errors").textContent="⚠ Password errata."
                    return false
                }
            }
        }
        document.getElementById("user-errors").textContent="⚠ Account inesistente."
        return false
    }

}

function access() {
    if(AccessControl()){
        sessionStorage.setItem("username",document.getElementById("user-access").value)
        sessionStorage.setItem("password",document.getElementById("password-access").value)

        loadAlbum()

        location.href = "profilo.html"
    }
}