const darkBtn = document.querySelector(".theme");
const newNoteBtn = document.querySelector(".newNote");
const notes = document.querySelector(".note");
const cancel = document.querySelector(".cancel");
const save = document.querySelector(".save");
const textbox = document.querySelector(".text");
const noteList = document.querySelector(".noteList");

let notesArray = [{title:"note one", body:"some text"},
                  {title:"note two", body:"some text"}]

let islight = true


//save button is pressed. adds to the notearray.
save.addEventListener("click", () =>{
    const lines = document.querySelector('.textarea').innerHTML.split('\n');
    let temp = {}
    temp.title = lines[0].toLowerCase()
    temp.body = ''
    let title = lines[0] 
    lines.splice(0)
    let arraybody = lines.join('\n');
    for(let i = 0; lines.length; i++){
        temp.body += '${lines[i]}\n'
    }
    notesArray.push(temp)
    console.log(notesArray)

    //adds to sidebar
    let notelist = document.querySelector(".noteList");
    let newli = document.createElement('li');
    newli.innerHTML = title
    notelist.appendChild(newli)
})

//shows textarea + save button + cancel button when pressed
newNoteBtn.addEventListener("click", () =>{
    notes.style.display = "block";
    document.querySelector(".textarea").value = "";
})
//hides textarea + save button + cancel butotn when pressed.
cancel.addEventListener("click", ()=> {
    notes.style.display = "none";
})

//to add an event where when the theme button is pressed it will change accordingly.
darkBtn.addEventListener("click", () =>{
    const body = document.querySelector("body")
    const header = document.querySelector(".header")
    const sidebar = document.querySelector(".sidebar")
    const footer = document.querySelector("footer")
    const buttons = document.querySelector(".button")
    const textarea = document.querySelector("textarea")
    const main = document.querySelector(".main")

    body.classList.toggle("body_dark")
    header.classList.toggle("Head_Foot_dark")
    footer.classList.toggle("head_Foot_dark")
    sidebar.classList.toggle("sidebar_dark")
    main.classList.toggle("main_dark")
    textarea.classList.toggle("textarea_dark")
    buttons.classList.toggle("btn_dark")
    
    // for(button of button){
    //     buttons.classList.toggle("btn_dark")
    // }
    if(darkBtn.innerHTML == 'Dark Theme'){
        darkBtn.innerHTML = 'Light Theme'
    }
    else{
        darkBtn.innerHTML = 'Dark Theme'
    }
    if (islight == true){
        islight = false
    }
    else{
        islight = true
    }
    console.log('theme button clicked.')
})