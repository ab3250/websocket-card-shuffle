//gets card and returns card or zero if no cards left
//card =high nibble = suit, low nibble = face 
//four digit bit mask for 4 suits and 13 cards per suit
var cards_used=[0,0,0,0,0,0,0,0,0,0,0,0,0];
//var cards_used=[15,15,15,15,15,15,15,15,15,15,15,15,15];

function getonecard(){

// new card face value integer
// new card suit value integer
var card=[0,0];
//count image number
//scan bitmasks for all 13 cards and returns 0 when all are full (==00001111)
//counter for loop
var totalcards;
var fin=1;
for(totalcards=0;totalcards<=12;totalcards++)
{
if(cards_used[totalcards]!=15){
 fin=0;
 break;
}
}
if(fin){
card[0]=128;
return card;
}
//get new card
while(1){
//get random number 0-3 for suit 0-12 for face value of card
card[0]=(Math.floor(Math.random()*13));
card[1]=(Math.floor(Math.random()*4));
//see if marked used if not mark it.
if(!(cards_used[card[0]]&(1<<card[1]))) 
{
cards_used[card[0]]=cards_used[card[0]]|(1<<card[1]);
return card;
}
}
}
//*************************************************************************************************
function getonecards(){
var card = new Array(2);
card=getonecard();
if(!(128&card[0])){
print(card);
}
else {
clearInterval(idnum);
alert('done');
}

}
//*************************************************************************************************
//if interval not already set then set it.
//setInterval ID number
var idnum=0;
function set_int(){
if(!idnum){
idnum=setInterval('getonecards()',10);
}
}

//*************************************************************************************************
//converts nextface and nextsuit to string and changes image for current card
var cardcount=0;
function print(card){
var nextfacestr;
var nextsuitstr;
var cardstr;
var cardstrgif;
var imgnum;
// convert to string and make two digit
nextfacestr=card[0].toString();
if(nextfacestr.length==1)nextfacestr='0'+nextfacestr;
nextsuitstr=card[1].toString();
if(nextsuitstr.length==1)nextsuitstr='0'+nextsuitstr;
imgnumber='c' + cardcount.toString();

//makes one string pointing to gif image for current card
//cardstr=nextsuitstr.substring(0,2)+nextfacestr.substring(0,2);
cardstr=nextsuitstr+nextfacestr;
cardstrgif='images/' + cardstr + '.gif';
//changes image for current card
document.getElementById(imgnumber).src=cardstrgif;
document.getElementById(imgnumber).style.display='inline';
cardcount++

}





