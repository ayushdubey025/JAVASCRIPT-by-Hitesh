// const clock = document.querySelector('#clock');
const clock = document.getElementById('clock');

// setInterval(function(){},1000) ==> it use for get result for parrticular time interval (we get result in every 1 sec)

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000);