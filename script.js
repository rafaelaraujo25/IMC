let alt  = document.getElementById('altura')
let pes = document.getElementById('peso')


function media() 
{
  let altu = parseFloat(alt.value)
  let peso = Number(pes.value)
  let indice = (peso / altu ** 2).toFixed(2)
  document.getElementById('res').innerHTML= indice

  
  if (indice < 18.5) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com baixo peso!` 
  } else if (indice == 18.5 || indice <= 24.9) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com o peso ideal!`
  } else if (indice == 25 || indice <= 29.9) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com SOBREPESO, vamo emegrecer fi!`
  } else if (indice == 30 || indice <= 34.9) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com OBESIDADE TIPO 1, slk Gordão!`
  } else if (indice == 35 || indice <= 39.9) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com OBESIDADE TIPO 2, VAI EXPLODIR HEIN!`
  } else if (indice == 40) {
    document.getElementById('par').innerHTML = `Seu IMC é de ${indice} sendo assim você está com OBESIDADE TIPO 3, TA MORRENDO...(vai com Deus)`
  } else {
    document.getElementById('par').innerHTML = `Digite algo valido`
  }

}

