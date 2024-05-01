let apiKey = '50850710657d3f17a3d4629d98ee79d6';

let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

let difKelvin = 273.15

document.getElementById('botonBusqueda').addEventListener('click', buscar)


function buscar(){
    const ciudad = document.getElementById('ciudadEntrada').value

    if(ciudad){
        datosClima(ciudad)
    }
}

function datosClima(ciudad){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
    .then(data => data.json())
    .then(data => mostrarDatos(data))
    .catch( error => console.error(error) )

}

function mostrarDatos(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''
    const temperatura = data.main.temp
    const ciudadNombre = data.name
    const descripcion = data.weather[0].description

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `la temperatura es: ${temperatura- difKelvin}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent =  `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
}