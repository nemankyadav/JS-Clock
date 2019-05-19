function setup() {
    date = new Date
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //second frame
    ctx.beginPath();
    ctx.arc(250,250,200,3*Math.PI/2,((date.getSeconds()-15))*6*Math.PI/180)
    ctx.lineWidth=3;
    ctx.strokeStyle="magenta";
    ctx.stroke();
    // second hand
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo((170*Math.cos((date.getSeconds()-15)*6*Math.PI/180))+250,(170*Math.sin((date.getSeconds()-15)*6*Math.PI/180))+250)
    ctx.lineWidth=3;
    ctx.stroke();
    // minute frame
    ctx.beginPath();
    ctx.arc(250,250,204,3*Math.PI/2,(date.getMinutes()-15)*6*Math.PI/180)
    ctx.lineWidth=4;
    ctx.strokeStyle="red";
    ctx.stroke();
    // minute hand
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo((190*Math.cos(((date.getMinutes()-15)*6)*Math.PI/180))+250,(190*Math.sin((date.getMinutes()-15)*6*Math.PI/180))+250)
    ctx.lineWidth=4;
    ctx.stroke();
    // hour frame
    ctx.beginPath();
    ctx.arc(250,250,209,3*Math.PI/2,((date.getHours()-3)*30)*Math.PI/180+(30*(date.getMinutes()-15)/60)*Math.PI/180)
    ctx.lineWidth=5;
    ctx.strokeStyle="blue";
    ctx.stroke();
    // hour hand
    ctx.beginPath();
    ctx.moveTo(250,250);
    ctx.lineTo(130*Math.cos((((date.getHours()-3)*30+(date.getMinutes()-15)/2)*Math.PI/180))+250,(130*Math.sin((((date.getHours()-3)*30)+(30*(date.getMinutes()-15)/60))*Math.PI/180))+250)
    ctx.lineWidth=5;
    ctx.stroke();
}

setInterval(setup, 1000);