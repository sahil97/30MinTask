$(document).ready(function(){
  console.log('hello');
  var tic = [["1","2","3"],["4","5","6"],["7","8","9"]];
  $('button').innerHTML = " ";
  var flag = 0;
  $('button').click(function(e){
    console.log(this.value);
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
      for(var i=0;i<tic.length;i++){
        console.log(tic[i]);
        }
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
      for(var i=0;i<tic.length;i++){
        console.log(tic[i]);
        }

        check(tic);
    }

  });

  function check(tic){
    if(
      ((tic[0][0]==tic[0][1]) && (tic[0][1]==tic[0][2]) && (tic[0][0]==tic[0][2]))){
      alert("win");
    }
    else if(
      ((tic[1][0]==tic[1][1]) && (tic[1][1]==tic[1][2]) && (tic[1][0]==tic[1][2]))){
      alert("win");
    }
    else if(
      ((tic[2][0]==tic[2][1]) && (tic[2][1]==tic[2][2]) && (tic[2][0]==tic[2][2]))){
      alert("win");
    }
    else if(
      ((tic[0][0]==tic[1][0]) && (tic[1][0]==tic[2][0]) && (tic[0][0]==tic[2][0]))){
      alert("win");
    }
    else if(
      ((tic[0][1]==tic[1][1]) && (tic[1][1]==tic[2][1]) && (tic[0][1]==tic[2][1]))){
      alert("win");
    }
    else if(
      ((tic[0][2]==tic[1][2]) && (tic[1][2]==tic[2][2]) && (tic[0][2]==tic[2][2]))){
      alert("win");
    }

  }


  for(var i=0;i<tic.length;i++){
    console.log(tic[i]);
    }
});
