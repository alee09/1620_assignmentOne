const lightBtn = document.querySelector(".theme");
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
    notesArray.title.push(lines[0])
    const title = lines.splice(0)
    let arraybody = lines.join('\n');
        for(let i = 0; lines.length(); i++){
            if(notesArray[i].title == title){
                notesArray[i].body = arraybody
            }
        }
    let notelist = document.querySelector(".noteList");
    let newli = document.createElement('li');
    li.textContent = title
    notelist.insertAfter(li, notelist.lastChild);
})

//shows textarea + save button + cancel button when pressed
newNoteBtn.addEventListener("click", () =>{
    notes.style.display = "block";
    document.querySelector(".textarea").value = "";
})
//hides textarea + save button + cancel butotn when pressed.
cancelButton.addEventListener("click", ()=> {
    notes.style.display = "none";
})

//to add an event where when the theme button is pressed it will change accordingly.
darkBtn.addEventListener("click", () =>{
    const body = document.querySelector(".body")
    const header = document.querySelector(".header")
    const sidebar = document.querySelector(".sidebar")
    const footer = document.querySelector(".footer")
    const buttons = document.querySelector(".button")
    const textarea = document.querySelector(".textarea")

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