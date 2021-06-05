document.addEventListener('DOMContentLoaded', loadWindow, false)

function displayDeck(){
    deck.forEach((value, index) => {  
        document.getElementById('c' + index.toString()).src='./images/' + value + '.gif';
    })
}

function n(num, len = 2) {
    return `${num}`.padStart(len, '0');
}

let deck = []
function loadWindow (){
    for(i=0;i<4;i++){
        for(j=0;j<13;j++){
            //const imgnumber = n(i.toString()) + n(j.toString())
            //const num = (i + j).toString()
            deck.push(n(i.toString()) + n(j.toString()))
        } 
    }
    displayDeck()
}
