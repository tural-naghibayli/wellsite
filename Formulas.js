
console.log("Connected to Fomulas.js");
      //function that evaluates the digit and return result
function calculateReturnVolume()
  {
      console.log("Clicked calculate")
      var x = $("#slugWeight").value;
      var y = $("#mudWeight").value;
      var z = $("#slugVolume").value;
      var vol = (x/y-1)*z;
      console.log(vol);
      $("#result").innerHTML=vol;
}
