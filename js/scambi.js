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
            num.setAttributeNode(style)
            document.getElementById("crediti").appendChild(num)
        }
    }
}

function apriScambiabili(){
    document.getElementById("cover").style.display="block"
    document.getElementById("choose-hero").classList.add("active")
    document.getElementById("button-proponi").style.display="none"
}

function chiudiScambiabili(){
    document.getElementById("cover").style.display="none"
    document.getElementById("choose-hero").classList.remove("active")
    document.getElementById("button-proponi").style.display="block"
}

function chiudiProposte(){
    document.getElementById("cover").style.display="none"
    document.getElementById("proposte-fatte").classList.remove("active")
    document.getElementById("button-proponi").style.display="block"
    document.getElementById("scambi-disponibili").style.display="block"
    window.location.reload()
}

function eroiScambiabili() {
    album = localStorage.getItem("album")
    if (album == null){
        album = []
    } else {
        album = JSON.parse(album)
    }
    utente = sessionStorage.getItem("username")
    for (let i of album){
        if (i.proprietario == utente){
            for(let j of i.figurine){
                if(j.quantita>1){
                    document.getElementById('hero-list').add(new Option(j.nome))
                }
            }
        }
    }
}

function deleteSelection() {
    heroList = document.getElementById("hero-list")
    heroList.selectedIndex = -1
}

function deleteSelectionProposte() {
    heroList = document.getElementById("hero-list-proposte")
    heroList.selectedIndex = -1
}

function controlChoose(){
    hero_list = document.getElementById("hero-list")
    if (hero_list.selectedIndex != -1){
        document.getElementById("Proponi").disabled = false;
    }
}

function controlChooseProposte(){
    hero_list = document.getElementById("hero-list-proposte")
    if (hero_list.selectedIndex != -1){
        document.getElementById("scambia").disabled = false;
    }
}

function proponi(){
    scambi = localStorage.getItem("scambi")
    if(scambi == null){
        scambi = []
    } else {
        scambi = JSON.parse(scambi)
    }
    listaEroi = document.getElementById("hero-list")
    idx = listaEroi.selectedIndex
    eroeScelto = listaEroi[idx].value
    album = localStorage.getItem("album")
    album = JSON.parse(album)
    proprietario = sessionStorage.getItem("username")
    for (let i of album){
        if(i.proprietario == proprietario){
            for (let j of i.figurine){
                if(j.nome == eroeScelto){
                    j.quantita = j.quantita-1
                    scambio = {
                        chi: proprietario,
                        cosa: j.nome
                    }
                    scambi.push(scambio)
                    localStorage.setItem("scambi",JSON.stringify(scambi))
                    localStorage.setItem("album",JSON.stringify(album))
                }
            }
        }
    }
    window.location.reload()
}

function visualizzaScambi(){
    heroes = localStorage.getItem('heroes')
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




    scambi = localStorage.getItem("scambi")
    current_user = sessionStorage.getItem("username")
    if(scambi == null){
        avviso = document.createElement("center")
        avviso.style.color = "lightgoldenrodyellow"
        avviso.innerHTML = "Al momento non ci sono scambi disponibili."
        document.getElementById("scambi-disponibili").appendChild(avviso)
    } else {
        scambi = JSON.parse(scambi)
        for (i=0;i<scambi.length;i++){
            if(scambi[i].chi != current_user){
                descrizione = obtainDesc(scambi[i].cosa)
                img = obtainimg(scambi[i].cosa)
                stampaAlbum(scambi[i].cosa,img,descrizione)
            }
        }
    }
}

function stampaAlbum(nome,figura,descrizione,chi){
    div = document.createElement("div") // crea la carta
    classeDiv = document.createAttribute("class")
    classeDiv.value = "carta"
    id = document.createAttribute("id")
    id.value = nome
    div.setAttributeNode(classeDiv)
    div.setAttributeNode(id)
    document.getElementById("scambi-disponibili").appendChild(div)


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


    desc = document.createElement("p") //aggiunge la descrizione
    desc.innerHTML = descrizione
    document.getElementById(nome).appendChild(desc)

    btn = document.createElement("button")  //aggiunge il bottone
    btn.innerHTML="Scambia"
    btnId = document.createAttribute("id")
    btnId.value = "btn"+nome
    btn.setAttributeNode(btnId)
    classeBtn = document.createAttribute("class")
    classeBtn.value = "buttonScambia"
    funzioneBtn = document.createAttribute("onclick")
    funzioneBtn.value="scambia();riceviId()"
    btn.setAttributeNode(funzioneBtn)
    btn.setAttributeNode(classeBtn)
    document.getElementById(nome).appendChild(btn)
}

function scambia() {
    document.getElementById("cover").style.display="block"
    document.getElementById("scambi-disponibili").style.display="none"
    document.getElementById("proposte-fatte").classList.add("active")
    document.getElementById("button-proponi").style.display="none"
    session_us = sessionStorage.getItem("username")
    scambi = localStorage.getItem("scambi")
    scambi = JSON.parse(scambi)
    for (let i of scambi){
        if(i.chi == session_us){
            document.getElementById('hero-list-proposte').add(new Option(i.cosa))
        }
    }
}

function riceviId(chi){
    return this.id
}

function confermaScambio(){
    idx = document.getElementById("hero-list-proposte").selectedIndex //la nostra proposta di scambio
    proposta = document.getElementById("hero-list-proposte")[idx].value
    noi = sessionStorage.getItem("username")
    altri = ""

    richiesta = riceviId() //la figurina che vogliamo

    scambi = localStorage.getItem("scambi")
    album = localStorage.getItem("album")
    scambi = JSON.parse(scambi)
    album = JSON.parse(album)

    for (let i of album){ //controlliamo che la figurina che vogliamo non è nel nostro album
        if (i.proprietario == noi){
            for (j=0;j<i.figurine.length;j++){
                if(i.figurine[j].nome == richiesta.value){
                    alert("Scambio annullato. La figurina è già nell'album.")
                    return false
                }
            }
        }
    }

    for (let i of scambi){ //troviamo l'utente che ha proposto la figurina che vogliamo
        if(i.cosa == richiesta.value){
            altri = i.chi
        }
    }

    for (let i of album){ //controlliamo che la figurina proposta non sia nell'album dell'altro utente
        if(i.proprietario==altri){
            for(j=0;j<i.figurine.length;j++){
                if(i.figurine[j].nome == proposta){
                    alert("Scambio annullato. La figurina proposta è già nell'album dell'altro utente.")
                    return false
                }
            }
        }
    }

    for (i=0;i<scambi.length;i++){
        if(scambi[i].cosa == proposta && scambi[i].chi == noi){ //elimina la nostra proposta di scambio
            scambi.splice(i,1)

            for (let j of album){ 
                if(j.proprietario==noi){
                    figurina = {
                        nome: richiesta.value,
                        quantita:1
                    }
                    j.figurine.push(figurina) //aggiunge la figurina richiesta al nostro album 

                }
            }
        }
    }

    for (i=0;i<scambi.length;i++){
        if(scambi[i].cosa == richiesta.value && scambi[i].chi == altri){ //elimina l'altra proposta di scambio
            scambi.splice(i,1)

            for (let j of album){
                if (j.proprietario==altri){
                    figurina = {
                        nome: proposta,
                        quantita:1
                    }
                    j.figurine.push(figurina)





                    alert("scambio effettuato.")
                    localStorage.setItem("scambi",JSON.stringify(scambi))
                    localStorage.setItem("album",JSON.stringify(album))
                    window.location.reload()
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