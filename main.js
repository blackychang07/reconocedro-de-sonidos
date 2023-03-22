function comenzar()
{
    navigator.mediaDevices.getUserMedia({
        audio:true
    })

    reconocimiento = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/d_ToHjd6U/model.json",listo)
}

function listo()
{
    reconocimiento.classify(resultados)
}

function resultados(error, sonidos)
{
if(!error){

        console.log(sonidos)
       ruido = sonidos[0].label
        document.getElementById("sonido").innerHTML=ruido
        precision = Math.round(sonidos[0].confidence*100)
        document.getElementById("precision").innerHTML=precision
        gif1 = document.getElementById("gif1") 
        gif2 = document.getElementById("gif2")
        gif3 = document.getElementById("gif3")
        gif4 = document.getElementById("gif4") 
        gif1.src = "ironman 2 png.png"
        gif2.src = "thor congelado png.png"
        gif3.src = "escudo abajo.webp"
        gif4.src = "hul gruñon.webp"
        
        if(ruido =="iron man"){
            gif1.src="ironman.gif"
        }
        else if(ruido =="thor" || ruido=="golpe"){
            gif2.src="thor.gif"
        }
        else if(ruido =="hulk" || ruido=="aplauso"){
            gif4.src="hulk golpeando.gif"
        }
        else if(ruido =="capitan america" || ruido=="silbido"){
            gif3.src="brillosin.gif"
        }
}
}