$(document).ready(function(){

  var users = [{
    "name":"Player1",
    "Score":0
  },{
    "name":"Player2",
    "Score":0
  }];

  console.log("users",users);


  var user1=prompt("Enter Player 1 name","Player1");
  var user2=prompt("Enter Player 2 name","Player2");


  var url = "https://tictactoe-502a.restdb.io/rest/tic-users?q={%22$or%22:%20[{%22name%22:%20%22"+user1+"%22},%20{%22name%22:%20%22"+user2+"%22}]}"
  var getusers = {
  "async": false,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "x-apikey": "5c5bc720f210985199db5461",
    "content-Type": "application/json; charset=utf-8",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": ""
}

  $.ajax(getusers).done(function (response) {
    // console.log(response);
    users = response;
  });

  if(users.length==0){
    var jsondata = {"name": user1,"Score": 0};
    var sendusers = {
      "async": false,
      "crossDomain": true,
      "url": "https://tictactoe-502a.restdb.io/rest/tic-users",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "5c5bc720f210985199db5461",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    $.ajax(sendusers).done(function (response) {
      console.log(response);
    });

    var jsondata = {"name": user2,"Score": 0};
    var sendusers = {
      "async": false,
      "crossDomain": true,
      "url": "https://tictactoe-502a.restdb.io/rest/tic-users",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "5c5bc720f210985199db5461",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    $.ajax(sendusers).done(function (response) {
      console.log(response);
    });
  }

  var url = "https://tictactoe-502a.restdb.io/rest/tic-users?q={%22$or%22:%20[{%22name%22:%20%22"+user1+"%22},%20{%22name%22:%20%22"+user2+"%22}]}"
  var getusers = {
  "async": false,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "x-apikey": "5c5bc720f210985199db5461",
    "content-Type": "application/json; charset=utf-8",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": ""
}

  $.ajax(getusers).done(function (response) {
    // console.log(response);
    users = response;
  });

  console.log(users);
  var p1 = document.getElementById('p1');
  p1.innerHTML = users[0].name;

  var p2 = document.getElementById('p2');
  p2.innerHTML = users[1].name;





  scorecardUpdate(users);

  console.log('hello');
  var tic = [["1","2","3"],["4","5","6"],["7","8","9"]];
  function ChangeInnerHTML() {
    var buttons = $('button');
    for(var i=0;i<buttons.length;i++){
      buttons[i].innerHTML= " ";
    }
}
  var flag = 0;

  $('button').click(function(e){
    // console.log(this.value);
    if(flag == 0){
      if(this.value < 4){
        tic[0][this.value-1]  = "X";
      }
      else if(this.value >3 && this.value <7){
        tic[1][((this.value)%4)]  = "X";
      }
      else{
        tic[2][((this.value)%6)-1]  = "X";
      }
      this.innerHTML  = "X";
      flag = 1;
      // for(var i=0;i<tic.length;i++){
      //   console.log(tic[i]);
      //   }
        check(tic);
    }
    else if(flag == 1){
      if(this.value < 4){
        tic[0][this.value-1]  = "O";
      }
      else if(this.value >3 && this.value <7){
        tic[1][((this.value)%4)]  = "O";
      }
      else{
        tic[2][((this.value)%6)-1]  = "O";
      }
      this.innerHTML  = "O";
      flag = 0;
      // for(var i=0;i<tic.length;i++){
      //   console.log(tic[i]);
      //   }

        check(tic);
    }

  });

  function check(tic){

    if(
      ((tic[0][0]==tic[0][1]) && (tic[0][1]==tic[0][2])) ||
      ((tic[1][0]==tic[1][1]) && (tic[1][1]==tic[1][2])) ||
      ((tic[2][0]==tic[2][1]) && (tic[2][1]==tic[2][2])) ||
      ((tic[0][0]==tic[1][0]) && (tic[1][0]==tic[2][0])) ||
      ((tic[0][1]==tic[1][1]) && (tic[1][1]==tic[2][1])) ||
      ((tic[0][2]==tic[1][2]) && (tic[1][2]==tic[2][2])) ||
      ((tic[0][0]==tic[1][1]) && (tic[1][1]==tic[2][2])) ||
      ((tic[0][2]==tic[1][1]) && (tic[1][1]==tic[2][0]))   )
      {
          setTimeout(function(){
            if(flag == 0){
              alert("0 won");
              users[1].Score = users[1].Score + 10;
              users[0].Score = users[0].Score -5;
              scorecardUpdate(users);
            }
            else if(flag == 1){
              alert("X won");
              users[0].Score = users[0].Score + 10;
              users[1].Score = users[1].Score - 5;
              scorecardUpdate(users);
            }
            reset();
          },125);
      }
      else if(draw())
      {
        setTimeout(function(){
          alert("draw");
          reset();
        },125);
      }
  }

  function draw(){
    var fl = 1;
    for(var i=0;i<tic.length;i++){
      for(var j=1;j<10;j++){
        if(tic[i].includes(j.toString())){
          fl = 0;
        }
      }
    }

      // console.log("draw",fl,tic);
    if(fl){
      return true;
    }
    else{
      return false;
    }
  }

  function reset(){
   tic = [["1","2","3"],["4","5","6"],["7","8","9"]];
    // console.log()
    ChangeInnerHTML();
    console.log("reset done");
    for(var i=0;i<tic.length;i++){
      console.log(tic[i]);
      }
  }

  function scorecardUpdate(users){


    var table = document.getElementById('tbody');
    $(".remove").remove();

    for(var j=0; j<users.length;j++){

      data = [users[j].name,users[j].Score];
      var row = document.createElement('tr');
      row.setAttribute('class','remove');
      for(var i=0;i<data.length;i++){
        var cell = document.createElement('td');
        var cellText = document.createTextNode(data[i]);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      table.appendChild(row);

    }
  }



});
