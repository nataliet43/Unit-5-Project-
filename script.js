let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let button = document.querySelector('.submit')

 
button.onclick =function() {
    let Input1 = document.querySelector(".input1").value;
    let Input2 = document.querySelector(".input2").value;
    let message = document.querySelector(".result");

  if ( Input1 > 1 && Input1<=60 && Input2 =="bored" ){
      message.innerHTML ='Lazy cat'
    }
    else if ( Input1 > 1 && Input1<=60 && Input2 =="happy" ){
     message.innerHTML ='Sad cat'
      }
      
    else if(Input1 > 60 && Input1<=100 && Input2 =="bored"){
     message.innerHTML ='Happy cat'
    }

    else if (Input1 > 60 && Input1<=100 && Input2 =="happy"){
     message.innerHTML ='Creepy cat'
    }

};