// get value of input_box
function getCount(){
  var nameField = document.getElementById('amount_box').value;
  if(Number.isInteger(Number(nameField)) == true){
    return nameField;
  }
  else{
    return null;
  }
}


// hand を捜す


function findHand(){
  var x = Math.random();
  if (x<1/3) {
    return "ぐー";
  }else if (x<2/3) {
    return "パー";
  }else {
    return "ちょうき";
  }
}

// winnerの処理

function getWinner_Hand(){
  const names = [];
  const hands = [];
  for (var i  = 0; i < Number(getCount()); i++ ){
    names.push(i);
  }
  for (var i  = 0; i < Number(getCount()); i++ ){
    hands.push(findHand());
  }
  console.log(names);
  console.log(hands);

  var goo = 0;
  var choki = 0;
  var paa = 0;

  for (var i = 0; i < hands.length ; i ++){
    if(hands[i] =="ぐー" ){
      goo = 1;
    }else if (hands[i] == "パー") {
      paa = 1;
    }else {
      choki =1 ;
    }
  };

  // if there are only 2 types

  if (goo + choki + paa !=2){
    return "";
  }else if (goo == 1) {
    if(choki==1){
      return  "Rock";
    }else{
      return "Paper";
    }
  }else {
    return "Scissors";
  }

}

// print reslut
function findReslut(){
  if(getCount() == null){
    alert("INPUT ERROR")
  }else {
    var result = getWinner_Hand();
    if (result ==""){
       console.log("Draw<br>");
       document.getElementById('result').innerHTML = "Draw";

    } else {
      document.getElementById('result').innerHTML =  "The winner "+ result +  " .Congratulations";
    }
  }

}


// 勝ちの人まで捜す
function findWinner(){
  while (true) {
    var finnal_winner = getWinner_Hand();
    console.log("debug",finnal_winner);
    if (finnal_winner != "") {
      document.getElementById('result').innerHTML =  "The winner "+ finnal_winner +" .Congratulations";
      break;
    }
  }
}

// handle when user input error value

function findWinner_main(){
  var n = null;
  if (Number(getCount()) == 0 || Number(getCount()) == 1 || getCount() == n ) {
      alert("I can't find with this number of people ");
  }else {
    findWinner();
  }
}
