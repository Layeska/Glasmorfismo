//-- Declaración de variables --

const contenedor = document.querySelector('.cuadro');
const color = document.querySelector('input[type="color"]');
const rango = document.querySelector('input[type="range"]');
const radio = document.querySelector('.radio');
const opacidad = document.querySelector('.opacity');
const saturado = document.querySelector('.sat');
const blur = document.querySelector('.bl');
const sombras = document.querySelector('.contrast');

let colorInicial;

//****************************************************************************************************

//-- Para insertar el codigo en la parte de abajo

const insertHTML = document.querySelector(".codigo");
const titulo = document.createElement("h3");
const insertarCodigo = document.createElement("pre");
const boton = document.createElement("a");
const listCodig = [];

titulo.textContent = 'Codigo CSS';
insertarCodigo.className = 'pre-codig';

boton.textContent = 'Generar';
boton.classList = 'btn';
boton.style.marginTop = '5.5rem';

insertHTML.appendChild(titulo);
insertHTML.appendChild(insertarCodigo);
insertHTML.appendChild(boton);

function agregarCodigoArray() {
    listCodig.push(`<p>    Background: ${contenedor.style.background},
    Border-radius: ${contenedor.style.borderRadius},
    Backdrop-Filter: blur(${contenedor.style.backdropFilter}),
                     saturate(${contenedor.style.backdropFilter})</p>`);
    
    boton.style.visibility = 'hidden';
    const listE = listCodig.join("");

    insertarCodigo.innerHTML = listE;
}

boton.addEventListener('click', (e) => {
    agregarCodigoArray();
});

//****************************************************************************************************

//-- Limpia el html
const cleanHTML = (element) => {
    element.innerHTML = "";
};

//-- Colorea el contenedor del color seleccionado 
color.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.background = e.target.value;
});

function cambiarRGB() {
    let colorInici = '#7F948A';

    const splited = colorInici.split('');
    const auxRgb = [];

    for(let i=1; i<splited.length; i+=2) {
        const unit = `${splited[i]}${splited[i+1]}`;
        auxRgb.push(parseInt(unit, 16));
    }

    return auxRgb;
}


//-- Rango de la barra afecta el tamaño
rango.addEventListener('input', (e) => {
    cleanHTML(contenedor);

    contenedor.style.width = `${e.target.value}px`;
    contenedor.style.height = `${e.target.value}px`;
   
});

//-- Rango de la barra que afecta el borde
radio.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.borderRadius = `${e.target.value}px`;
});

//-- Rango de la barra que ofecta la opacidad - transparencia
opacidad.addEventListener('input', (e) => {    
    cleanHTML(contenedor);
    contenedor.style.background = color;
    contenedor.style.opacity = `${0.1 * e.target.value}`;
});

//-- Rango de la barra que afecta la sombra
sombras.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.filter = `contrast(${e.target.value}%)`;
});

//-- BLUR
blur.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.filter= `blur(${e.target.value}px)`;
});


//-- Saturacion
saturado.addEventListener('input', (e) => {
    cleanHTML(contenedor);
    contenedor.style.filter = `Saturate(${e.target.value}%)`;
});