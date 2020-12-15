function draw() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      
      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(10, 10, 50, 50);
  }
}


}
