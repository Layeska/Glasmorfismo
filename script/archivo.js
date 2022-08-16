const contenedor = document.querySelector('.cuadro');
const color = document.querySelector('input[type="color"]');
const rango = document.querySelector('input[type="range"]');
const radio = document.querySelector('.radio');
const opacidad = document.querySelector('.opacity');
const saturado = document.querySelector('.sat');
const blur = document.querySelector('.bl');
const sombras = document.querySelector('.contrast');

let colorInicial;

//**************************************************************************************************

//-- Para insertar el codigo en la parte de abajo

const insertHTML = document.querySelector(".codigo");
const titulo = document.createElement("h3");
const insertarCodigo = document.createElement("pre");
const boton = document.createElement("a");

const listCodig = [];

titulo.textContent = 'Codigo CSS';

insertarCodigo.className = 'pre-codig';
insertarCodigo.textContent = 'nsdkvbzds';

boton.textContent = 'Copiar';
boton.classList = 'btn';

insertHTML.appendChild(titulo);
insertHTML.appendChild(insertarCodigo);
insertHTML.appendChild(boton);

function agregarCodigoArray(colorbase) {
    listCodig.push(`<p>Background: ${colorInicial}</p>`);
    const listE = listCodig.join("");

    cleanHTML(contenedor);
    insertarCodigo.innerHTML = listE;
    
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//let initColor = 'rgba(0, 0, 0, 0.5)';
let colorRGB = [];

let tama = rango;
let radios;
let transp;
let contras;
let blurs; 
let satura;



//-- Limpia el html
const cleanHTML = (element) => {
    element.innerHTML = "";
};

//-- Colorea el contenedor del color seleccionado 
color.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.background = e.target.value;

   // colorInicial = e.target.value;
   // console.log(cambiarRGB(colorInicial));
   // let c = `rgb(${aux[0]}, ${aux[1]}, ${aux[2]});`;
    //contenedor.style.background = c;
    

    //agregarCodigoArray(colorInicial);
    //console.log(cambiarRGB(colorInicial));
});


function cambiarRGB(c) {
    //let colorInici = '#7F948A';

    const splited = c.split('');
    const auxRgb = [];

    for(let i=1; i<splited.length; i+=2) {
        const unit = `${splited[i]}${splited[i+1]}`;
        auxRgb.push(parseInt(unit, 16));
    }

    return auxRgb;//.join(',');

   // console.log(`rgb(${auxRgb[0]}, ${auxRgb[1]}, ${auxRgb[2]})`);
}

//-- BLUR
blur.addEventListener('input', (e) => {
    console.log(e.target.value);
    cleanHTML(contenedor);
    //const aux = cambiarRGB(colorInicial);
    //console.log(aux);

   // contenedor.style.background = `rgb(${aux[0]}, ${aux[1]}, ${aux[2]})`;
   // contenedor.style.backdropFilter = `Blur(${e.target.value}px)`;
    
    contenedor.style.filter= `blur(${e.target.value}px)`;
});

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//-- Rango de la barra afecta el tamaño
rango.addEventListener('input', (e) => {
    console.log(e.target.value);
    cleanHTML(contenedor);

    contenedor.style.width = `${e.target.value}px`;
    contenedor.style.height = `${e.target.value}px`;
   //tama = e.target.value;
   
});


//-- Rango de la barra que afecta el borde
radio.addEventListener('input', (e) => {
    console.log(e.target.value);
    cleanHTML(contenedor);
    contenedor.style.borderRadius = `${e.target.value}px`;
});

//-- Rango de la barra que ofecta la opacidad - transparencia
opacidad.addEventListener('input', (e) => {
    console.log(e.target.value);    

    cleanHTML(contenedor);
    contenedor.style.background = color;
    contenedor.style.opacity = `${0.1 * e.target.value}`;

    console.log(0.1 * e.target.value);
    console.log(localStorage);
});


//-- Rango de la barra que afecta la sombra
sombras.addEventListener('input', (e) => {
    console.log(e.target.value);
    cleanHTML(contenedor);
    contenedor.style.filter = `contrast(${e.target.value}%)`;
    console.log(e.target.value);
});

//-- Saturacion
saturado.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    console.log(e.target.value);
    contenedor.style.filter = `Saturate(${e.target.value}%)`;
});