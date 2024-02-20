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

function apriProposte(){
    document.getElementById("cover").style.display="block"
    document.getElementById("scambi-disponibili").style.display="none"
    document.getElementById("proposte-fatte").classList.add("active")
    document.getElementById("button-proponi").style.display="none"
    scambia()
}

function chiudiProposte(){
    // document.getElementById("cover").style.display="none"
    // document.getElementById("proposte-fatte").classList.remove("active")
    // document.getElementById("button-proponi").style.display="block"
    // document.getElementById("scambi-disponibili").style.display="block"
    window.location.reload()
}

function apriOfferte(eroe){
    document.getElementById("cover").style.display="block"
    document.getElementById("offerte-ricevute").classList.add("active")
    document.getElementById("offerte-disponibili").style.display="none"
    visualizzaOfferte(eroe.slice(4))

}

function chiudiOfferte(){
    // document.getElementById("cover").style.display="none"
    // document.getElementById("offerte-ricevute").classList.remove("active")
    // document.getElementById("offerte-disponibili").style.display="block"
    // carteOfferte()
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
    document.getElementById("Proponi").disabled = true
    document.getElementById("Proponi").value = "Scegli una carta"
}

function deleteSelectionProposte() {
    heroList = document.getElementById("hero-list-proposte")
    heroList.selectedIndex = -1
    document.getElementById("scambia").disabled = true
    document.getElementById("scambia").value = "Scegli una carta"
}

function deleteSelectionOfferte() {
    heroList = document.getElementById("hero-list-offerte")
    heroList.selectedIndex = -1
    document.querySelector('[id^="accetta-"]').disabled = true
    document.querySelector('[id^="accetta-"]').value = "Scegli una carta"
}

function controlChoose(){
    hero_list = document.getElementById("hero-list")
    if (hero_list.selectedIndex != -1){
        document.getElementById("Proponi").disabled = false;
        document.getElementById("Proponi").value = "Proponi"
    }
}

function controlChooseProposte(){
    hero_list = document.getElementById("hero-list-proposte")
    if (hero_list.selectedIndex != -1){
        document.getElementById("scambia").disabled = false;
        document.getElementById("scambia").value = "Offri carta";
    }
}

function controlChooseOfferte(){
    hero_list = document.getElementById("hero-list-offerte")
    if (hero_list.selectedIndex != -1){
        document.querySelector('[id^="accetta-"]').disabled = false;
        document.querySelector('[id^="accetta-"]').value = "Accetta scambio";
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
                        cosa: j.nome,
                        offerte: []
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
                img = obtainimg(scambi[i].cosa)
                stampaAlbum(scambi[i].cosa,img)
            }
        }
    }
}


function carteOfferte(){
    scambi = JSON.parse(localStorage.getItem("scambi"))
    user = sessionStorage.getItem("username")

    for(let s of scambi){
        if(s.chi == user){
            let proposta = s.cosa


            // print supereroe proposto
            div = document.createElement("div") // crea la carta
            classeDiv = document.createAttribute("class")
            classeDiv.value = "carta"
            id = document.createAttribute("id")
            id.value = "offerte-"+proposta
            div.setAttributeNode(classeDiv)
            div.setAttributeNode(id)
            document.getElementById("offerte-disponibili").appendChild(div)


            img = document.createElement("img") // aggiunge l'immagine
            src = document.createAttribute("src")
            classeImg = document.createAttribute("class")
            classeImg.value="img"
            img.setAttributeNode(classeImg)
            src.value = obtainimg(proposta)
            img.setAttributeNode(src)
            document.getElementById(id.value).appendChild(img)


            eroe = document.createElement("div") //aggiunge il nome
            classeEroe = document.createAttribute("class")
            classeEroe.value = "heading"
            eroe.setAttributeNode(classeEroe)
            eroe.innerHTML = proposta
            document.getElementById(id.value).appendChild(eroe)
                

            btn = document.createElement("button")  //aggiunge il bottone
            btn.innerHTML="Scambia"
            btnId = document.createAttribute("id")
            btnId.value = "btn-"+proposta
            btn.setAttributeNode(btnId)
            classeBtn = document.createAttribute("class")
            classeBtn.value = "buttonScambia"
            funzioneBtn = document.createAttribute("onclick")
            funzioneBtn.value="apriOfferte(this.id)"
            btn.setAttributeNode(funzioneBtn)
            btn.setAttributeNode(classeBtn)
            document.getElementById(id.value).appendChild(btn)
        }
    }
}



function visualizzaOfferte(eroe){
            // console.log(eroe)

            // // scroll con le offerte (come selezione proposta)
            // // <select id="hero-list-proposte" onchange="controlChooseProposte()" size="5"></select><br>
            // select = document.createElement("select")
            // id = document.createAttribute("id")
            // id.value = "hero-list-offerte"
            // select.setAttributeNode(id)
            // select.addEventListener("change", function(){controlChooseOfferte()})
            // size = document.createAttribute("size")
            // size.value = "5"
            // select.setAttributeNode(size)
            user = sessionStorage.getItem("username")
            scambi = JSON.parse(localStorage.getItem("scambi"))
            for(let s of scambi){
                if(s.chi == user && s.cosa == eroe){
                    select = document.getElementById("hero-list-offerte") 
                    for(let o of s.offerte){
                        offerta = o.offerta + " <= " + o.offerente
                        select.add(new Option(offerta))
                    }

                }
            }

            button = document.getElementById("accetta-")
            button.id += eroe

            
            // document.getElementById(proposta).appendChild(select)

            // document.getElementById(proposta).appendChild(document.createElement("br"))


            // annulla select
            // <label class="annullaSel" onclick="deleteSelectionProposte()">Annulla Selezione</label><br><br>
            // label = document.createElement("label")
            // classe = document.createAttribute("class")
            // classe.value = "annullaSel"
            // label.setAttributeNode(classe)
            // label.addEventListener("click", function(){deleteSelectionOfferte()})
            // label.textContent = "Annulla selezione"
            // document.getElementById(proposta).appendChild(label)

            // document.getElementById(proposta).appendChild(document.createElement("br"))
            // document.getElementById(proposta).appendChild(document.createElement("br"))


            // button "accetta" onclick confermaScambio()
            // <input id="Proponi" class="submit" onclick="proponi()" type="submit" value="Scegli una carta" disabled>
                //confermaScambio deve anche togliere le altre offerte e riaggiungerle all'album del proprietario
            // input = document.createElement("input")
            // id = document.createAttribute("id")
            // id.value = "accetta"
            // input.setAttributeNode(id)
            // classe = document.createAttribute("class")
            // classe.value = "submit"
            // input.setAttributeNode(classe)
            // type = document.createAttribute("type")
            // type.value = "submit"
            // input.setAttributeNode(type)
            // value = document.createAttribute("value")
            // value.value = "Scegli una carta"
            // input.setAttributeNode(value)
            // disabled = document.createAttribute("disabled")
            // input.setAttributeNode(disabled)
            // input.addEventListener("click", function(){accetta()})
            // document.getElementById(proposta).appendChild(input)
    //     }
    // }
}



function stampaAlbum(nome,figura,chi){
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


    // desc = document.createElement("p") //aggiunge la descrizione
    // desc.innerHTML = descrizione
    // document.getElementById(nome).appendChild(desc)

    btn = document.createElement("button")  //aggiunge il bottone
    btn.innerHTML="Scambia"
    btnId = document.createAttribute("id")
    btnId.value = "btn"+nome
    btn.setAttributeNode(btnId)
    classeBtn = document.createAttribute("class")
    classeBtn.value = "buttonScambia"
    funzioneBtn = document.createAttribute("onclick")
    funzioneBtn.value="apriProposte()"
    btn.setAttributeNode(funzioneBtn)
    btn.setAttributeNode(classeBtn)
    
    // disabilita il bottone per lo scambio se l'utente ha già la carta
    user = sessionStorage.getItem("username")
    for (let i of album){ //controlliamo che la figurina che vogliamo non è nel nostro album
        if (i.proprietario == user){
            for (j=0;j<i.figurine.length;j++){
                if(i.figurine[j].nome == riceviId()){
                    btn.disabled = true
                }
            }
        }
    }

    document.getElementById(nome).appendChild(btn)

}
function scambia() {
    session_us = sessionStorage.getItem("username")

    richiesta = riceviId()

    // scambi = localStorage.getItem("scambi")
    // scambi = JSON.parse(scambi)
    // for (let i of scambi){
    //     if(i.chi == session_us){

    //         document.getElementById('hero-list-proposte').add(new Option(i.cosa))
    //     }
    // }


    for (let i of scambi){ //troviamo l'utente che ha proposto la figurina che vogliamo
        if(i.cosa == richiesta.value){
            altri = i.chi
        }
    }

    for (let i of album){
        if (i.proprietario == session_us){
            for(let j of i.figurine){
                if(j.quantita>1){
                    presente = false
                    // constrollo non sia presente nell'album dell'altro utente
                    for (let a of album){
                        if(a.proprietario==altri){
                            for(k=0;k<a.figurine.length;k++){
                                if(a.figurine[k].nome == j.nome){
                                    presente = true
                                }
                            }
                        }
                    }

                    if(!presente){ document.getElementById('hero-list-proposte').add(new Option(j.nome)) }
                }
            }
        }
    }

}

function riceviId(chi){
    return this.id
}



function offri(){
    idx = document.getElementById("hero-list-proposte").selectedIndex //la nostra proposta di scambio
    proposta = document.getElementById("hero-list-proposte")[idx].value
    user = sessionStorage.getItem("username")
    altri = ""

    richiesta = riceviId() //la figurina che vogliamo

    scambi = localStorage.getItem("scambi")
    album = localStorage.getItem("album")
    scambi = JSON.parse(scambi)
    album = JSON.parse(album)


    for(let s of scambi){
        if(s.cosa == richiesta.value){

            offerta = {
                offerente: user,
                offerta: proposta
            }

            s.offerte.push(offerta)

            // diminuisce quantità della carta offerta dall'utente
            for (let i of album){
                if(i.proprietario == user){
                    for (let j of i.figurine){
                        if(j.nome == proposta){
                            j.quantita = j.quantita-1
                            localStorage.setItem("album",JSON.stringify(album))
                        }
                    }
                }
            }


            break
        
            
        }
    }
    localStorage.setItem("scambi",JSON.stringify(scambi))
    window.location.reload()
    
}





function confermaScambio(proposta){
    user = sessionStorage.getItem("username")
    proposta = proposta.slice(8)

    idx = document.getElementById("hero-list-offerte").selectedIndex //la nostra proposta di scambio
    offerta = document.getElementById("hero-list-offerte")[idx].value
    offerente = offerta.split(" <= ")[1]
    cartaOfferta = offerta.split(" <= ")[0]
    console.log("diamo " + proposta)
    console.log("riceviamo " + cartaOfferta)
    console.log("da " + offerente)

    scambi = JSON.parse(localStorage.getItem("scambi"))
    album = JSON.parse(localStorage.getItem("album"))

    // SPOSTATO IN stampaAlbum()
    // for (let i of album){ //controlliamo che la figurina che vogliamo non è nel nostro album
    //     if (i.proprietario == noi){
    //         for (j=0;j<i.figurine.length;j++){
    //             if(i.figurine[j].nome == richiesta.value){
    //                 alert("Scambio annullato. La figurina è già nell'album.")
    //                 return false
    //             }
    //         }
    //     }
    // }

    // // SPOSTATO IN scambia()
    // // for (let i of album){ //controlliamo che la figurina proposta non sia nell'album dell'altro utente
    // //     if(i.proprietario==altri){
    // //         for(j=0;j<i.figurine.length;j++){
    // //             if(i.figurine[j].nome == proposta){
    // //                 alert("Scambio annullato. La figurina proposta è già nell'album dell'altro utente.")
    // //                 return false
    // //             }
    // //         }
    // //     }
    // // }




    // scambio
    for(let a of album){

        //aggiunta offerta al nostro album
        if(a.proprietario == user){
            if(a.figurine.some(f => f.name == cartaOfferta)){
                for(i=0;i<a.figurine.lenght;i++){
                    a.figurine[i].quantità += 1
                }
            }else{
                figurina = {
                    nome: cartaOfferta,
                    quantita: 1
                }
                a.figurine.push(figurina)    
            }
        }

        // aggiunta nostra proposta all'album dell'offerente
        if(a.proprietario == offerente){
            
            if(a.figurine.some(f => f.name == proposta)){
                for(i=0;i<a.figurine.lenght;i++){
                    a.figurine[i].quantità += 1
                }
            }else{
                figurina = {
                    nome: proposta,
                    quantita: 1
                }
                a.figurine.push(figurina)    
            }
        }
    }


    // restituzione carte proposte da altri utenti
    for(let i=0; i<scambi.length; i++){
        if(scambi[i].chi == user && scambi[i].cosa == proposta){
        
            for(let o of scambi[i].offerte){
                if(o.offerta == cartaOfferta && o.offerente == offerente){
                    continue
                }else{

                    for(let a of album){
                        if(a.proprietario == offerente){
                            for(let f of a.figurine){
                                if(f.nome==cartaOfferta){
                                    f.quantita +=1
                                }
                            }
                        }
                    }

                }
            }
        // rimozione scambio
        scambi.splice(i,1)
        }
    }

    
    alert("Scambio effettuato con successo!")
    localStorage.setItem("scambi",JSON.stringify(scambi))
    localStorage.setItem("album",JSON.stringify(album))
    window.location.reload()


    // for (i=0;i<scambi.length;i++){
    //     if(scambi[i].cosa == offerta && scambi[i].chi == offerente){ //elimina la nostra proposta di scambio
    //         tmp = scambi.splice(i,1)
    //         console.log(tmp, scambi)

    //         for (let j of album){ 
    //             if(j.proprietario==user){
    //                 figurina = {
    //                     nome: offerta,
    //                     quantita:1
    //                 }
    //                 console.log(figurina)
    //                 // j.figurine.push(figurina) //aggiunge la figurina richiesta al nostro album 

    //             }
    //         }
    //     }
    // }

    // for (i=0;i<scambi.length;i++){
    //     if(scambi[i].cosa == proposta && scambi[i].chi == user){ //elimina l'altra proposta di scambio
    //         tmp = scambi.splice(i,1)
    //         console.log("" + tmp)

    //         for (let j of album){
    //             if (j.proprietario==offerente){
    //                 figurina = {
    //                     nome: proposta,
    //                     quantita:1
    //                 }
    //                 console.log(figurina)
    //                 // j.figurine.push(figurina)

    //                 alert("scambio effettuato.")
    //                 // localStorage.setItem("scambi",JSON.stringify(scambi))
    //                 // localStorage.setItem("album",JSON.stringify(album))
    //                 window.location.reload()
    //             }
    //         }
    //     }
    // }

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
                image = i.thumbnail.path
                image += ".jpg"
            }
        }
    } else if (hero1.name == favHero){
            image = hero1.thumbnail.path
            image += ".jpg"
        } else if (hero2.name == favHero){
            image = hero2.thumbnail.path
            image += ".jpg"
        } else if (hero3.name == favHero){
            image = hero3.thumbnail.path
            image += ".jpg"
        } else if (hero4.name == favHero){
            image = hero4.thumbnail.path
            image += ".jpg"
        } else if (hero5.name == favHero){
            image = hero5.thumbnail.path
            image += ".jpg"
        } else if (hero6.name == favHero){
            image = hero6.thumbnail.path
            image += ".jpg"
        } else if (hero7.name == favHero){
            image = hero7.thumbnail.path
            image += ".jpg"
        } else if (hero8.name == favHero){
            image = hero8.thumbnail.path
            image += ".jpg"
        } else if (hero9.name == favHero){
            image = hero9.thumbnail.path
            image += ".jpg"
        } else if (hero10.name == favHero){
            image = hero10.thumbnail.path
            image += ".jpg"
        } else if (hero11.name == favHero){
            image = hero11.thumbnail.path
            image += ".jpg"
        } else {
            image = "images/noimg.jpeg"
        }
    return image
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