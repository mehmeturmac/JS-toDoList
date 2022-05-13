const inputDOM = document.querySelector("#task")
const listDOM = document.querySelector("#list")

function newElement() {
    if (inputDOM.value == ""){
        $('.error').toast('show')
    } else {
        let newItem = document.createElement("li")
        newItem.innerHTML = inputDOM.value + '<span onclick="removeElement(this)" class="close">&#215</span>';
        newItem.onclick = checked;
        listDOM.append(newItem);
        $('.success').toast('show')
    }
}

let listLength = document.querySelectorAll("#list li"); 

for ( let i = 0 ; i < listLength.length ; i++ ) { 
    listLength[i].innerHTML += ('<span onclick="removeElement(this)" class="close">&#215</span>'); 
    listLength[i].onclick = checked;
}

function checked(){
    if (this.classList.contains("checked")){
        this.classList.remove("checked");
    } else {
        this.classList.add("checked");
    }
}

function removeElement(event){
    event.parentNode.parentNode.removeChild(event.parentNode);
}