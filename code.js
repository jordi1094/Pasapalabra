let preguntas = [
    {
        "letra": "A",
        "pregunta": "CON LA A: Mecanismo para esparcir un líquido a presión, como el agua para el riego",
        "respuesta": "ASPERSOR"
    },
    {
        "letra": "B",
        "pregunta": "CON LA B: Apertura delantera de un pantalón",
        "respuesta": "BRAGUETA"
    },
    {
        "letra": "C",
        "pregunta":"CON LA C: Galería que rodea el patio principal de una iglesia o convento",
        "respuesta": "CLAUSTRO",
    },
    {
        "letra": "D",
        "pregunta": "CON LA D: Documento que expide un centro educativo o una corporación y que acredita un título o un grado académico",
        "respuesta": "DIOPLOMA"
    },
    {
        "letra": "E",
        "pregunta": "CON LA E: Nombre del rey visigodo que gobernó entre los años 687 y 702, y limitó la actividad económica de los judíos",
        "respuesta": "ÉGICA"
    },
    {
        "letra": "F",
        "pregunta": "CON LA F: Brillo muy intenso",
        "respuesta": "FULGOR",
    },
    {
        "letra": "G",
        "pregunta":"CON LA G: País asiático con capital en Tiflis", 
        "respuesta": "GEORGIA"
    },
    {
        "letra": "H",
        "pregunta":"CON LA H: Masa de harina con manteca, muy sobada y que, al cocerse en el horno, forma muchas hojas delgadas superpuestas",
        "respuesta": "HOJALDRE"
    },
    {
        "letra": "I",
        "pregunta": "CON LA I: Esperanza cuyo cumplimiento parece especialmente atractivo",
        "respuesta": "ILUSIÓN"
    },
    {
        "letra": "J",
        "pregunta": "CON LA J: Soldado de infantería de la Guardia Imperial turca, reclutado a menudo entre hijos de cristianos",
        "respuesta": "JENÍZARO"
    },
    {
        "letra": "K",
        "pregunta": "CON LA K: Ropa que utilizan los japoneses",
        "respuesta" : "KIMONO"
    },
    {
        "letra": "L",
        "pregunta": "CON LA L: Daño o detrimento corporal causado por una herida, un golpe o una enfermedad",
        "respuesta": "LESIÓN"
    },
    {
        "letra": "M",
        "pregunta": "CON LA M: Apellido del matemático que, a principios del siglo 20, introdujo el modelo de espacio-tiempo en cuatro dimensiones",
        "respuesta": "MINKOWSKI"
    },
    {
        "letra": "N",
        "pregunta": "CON LA N: Insignificante, sin importancia",
        "respuesta": "NIMIO"
    },
    {
        "letra": "Ñ",
        "pregunta": "CONTIENE LA Ñ: En fútbol, acción en la que se sortea a un contrario pasándole el balón entre las piernas",
        "respuesta": "CAÑO"
    },
    {
        "letra": "O",
        "pregunta": "CON LA O: Cerro aislado que domina un llano",
        "respuesta": "OTERO"
    },
    {
        "letra": "P",
        "pregunta": "CON LA P: Juego que consiste en tirar unas bolas y otra más pequeña, y ver quién se aproxima más a ésta con las grandes",
        "respuesta": "PETANCA"
    },
    {
        "letra": "Q",
        "pregunta": "CONTIENE LA Q: Se dice del triángulo que tiene todos sus lados iguales",
        "respuesta": "EQUILATERO"
    },
    {
        "letra": "R",
        "pregunta": "CON LA R: Satisfacción a una pregunta, duda o dificultad",
        "respuesta": "RESPUESTA"
    },
    {
        "letra": "S",
        "pregunta": "CON LA S: Antiguo instrumento musical de metal, consistente en un aro o herradura atravesado por varillas, que sonaba agitándolo",
        "respuesta": "SISTRO"
    },
    {
        "letra": "T",
        "pregunta": "CON LA T: Cada uno de los pasos o gestiones que se establecen de manera oficial para la conclusión o resolución de un asunto",
        "respuesta": "TRÁMITE"
    },
    {
        "letra": "U",
        "pregunta": "CON LA U: Lugar en el que está situado algo",
        "respuesta": "UBICACIÓN"
    },
    {
        "letra": "V",
        "pregunta": "CON LA V: Casa de recreo aislada en el campo",
        "respuesta": "VILLA"
    },
    {
        "letra": "W",
        "pregunta": "CONTIENE LA W: fruto comestible, de piel vellosa y pulpa verde",
        "respuesta": "KIWI"
    },
    {
        "letra": "X",
        "pregunta": "CONTIENE LA X: Enunciado o conjunto coherente de enunciados orales o escritos",
        "respuesta": "TEXTO"
    },
    {
        "letra": "Y",
        "pregunta": "CONTIENE LA Y: Máquina o conjunto de máquinas que sirven para cambiar los decorados en el escenario de un teatro",
        "respuesta": "TRAMOYA"
    },
    {
        "letra": "Z",
        "pregunta": "CON LA Z: Escarabajo que ataca los trigales, especialmente cuando los granos son tiernos",
        "respuesta": "ZABRO"
    }
];
let letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let preguntaActual = "";
let respuestaActual = "";
let contador = 0;
let displayPregunta = document.getElementsByClassName("pregunta")[0];
let displayRespuesta = document.getElementById("respuesta");
let botonStart = document.getElementById("start");
let botonResponder = document.getElementById("enviar");
preguntaActual = preguntas[0].pregunta
displayPregunta.innerHTML = preguntaActual




botonResponder.addEventListener('click',() =>{ responder()})
window.addEventListener('keydown',(e) =>{
    if (e.keycode === 13){
        responder()
    }
})


function responder(){
    respuestaActual = displayRespuesta.value
    if(respuestaActual.toUpperCase() === preguntas[contador].respuesta){
    let circuloLetra = document.getElementById(letras[contador]);
    circuloLetra.style.backgroundColor = "green"
    contador = contador+1
    preguntaActual = preguntas[contador].pregunta;
    displayPregunta.innerHTML = preguntaActual
    }else{
        let circuloLetra = document.getElementById(letras[contador]);
    circuloLetra.style.backgroundColor = "red"
    contador = contador+1
    preguntaActual = preguntas[contador].pregunta;
    displayPregunta.innerHTML = preguntaActual
    }
}