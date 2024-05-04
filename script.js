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
    .catch( error => console.error(error))

}

function mostrarDatos(data){

    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.classList.add('contenedor-dos')
    divDatosClima.innerHTML = ''
    const temperatura = data.main.temp
    const temperaturaInt = parseInt(temperatura)
    const temperaturaMenosKelvin = temperaturaInt - difKelvin
    const temperaturaFinal = Math.round(temperaturaMenosKelvin)
    const humedad = data.main.humidity
    const ciudadNombre = data.name
    const descripcion = data.weather[0].description
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `Temperatura: ${temperaturaFinal}°C`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@4x.png` 

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent =  `La descripcion meteorologica es: ${descripcion}`

    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    //divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
}