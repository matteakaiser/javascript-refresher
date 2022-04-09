function change(){
    let animal = document.getElementById('animal').value
    let person = document.getElementById('name').value
document.getElementById('message').innerHTML="Hello "+person+", don't you wish you were a "+ animal +"?"
}

function colorChange(){
    document.getElementById('name').style.backgroundColor = getRandomColor()
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
