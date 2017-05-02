const a_canvas = document.getElementById("canvas");
const a_context = a_canvas.getContext("2d");
let btn = document.getElementById("btn");
let btnTrasladar = document.getElementById("btn-trasladar")
let btnRotar = document.getElementById("btn-rotar")
let btnEscalar = document.getElementById("btn-escalar")
let ancho = a_canvas.width;
let altura = a_canvas.height;
let x = 0;
let y = 0;
let posx = 0;
let posy = 0;
const tamx = 10;
const tamy = 20;

function convertirX(numero){
  var xm = ancho/2 + numero;
  return xm;
}

function convertirY(numero){
  var ym = altura/2 - numero;
  return ym;
}

btnEscalar.addEventListener("click",()=>{
  a_context.clearRect(x,y,tamx,tamy);
  let posxEsc = parseInt(document.getElementById("x-trasladar").value);
  let posyEsc = parseInt(document.getElementById("y-trasladar").value);
  a_context.translate(ancho/2,altura/2);
  a_context.scale(posxEsc,posyEsc);
  a_context.translate(-ancho/2,-altura/2);
  a_context.fillRect(x,y,tamx,tamy);
});

btnRotar.addEventListener("click",()=>{
  a_context.clearRect(x,y,tamx,tamy);
  let posxRot = parseInt(document.getElementById("x-trasladar").value);
  let posyRot = parseInt(document.getElementById("y-trasladar").value);
  a_context.translate(ancho/2,altura/2);
  a_context.rotate(posxRot * Math.PI / 180);
  a_context.translate(-ancho/2,-altura/2);
  a_context.fillRect(x,y,tamx,tamy);
});

btnTrasladar.addEventListener("click",()=>{
  a_context.clearRect(x,y,tamx,tamy);
  let xTras = x;
  let yTras = y;
  let posxTras = parseInt(document.getElementById("x-trasladar").value);
  let posyTras = parseInt(document.getElementById("y-trasladar").value);
  a_context.translate(posxTras,-posyTras);
  a_context.fillRect(xTras,yTras,tamx,tamy);
});

btn.addEventListener("click",()=>{
   posx = parseInt(document.getElementById("x-dibujar").value);
   posy = parseInt(document.getElementById("y-dibujar").value);
   x = convertirX(posx);
   y = convertirY(posy);
   a_context.fillRect(x,y,tamx,tamy);
});
