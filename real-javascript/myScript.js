console.log ('Hello World!')
window.alert('Aloha')

let myPElement= document.getElementById('myPTag');
console.log(myPElement)

function change(){
    let firstName = document.getElementById ('nameInput').value
    myPElement.innerHTML ='Hello '+ firstName+' !'
}