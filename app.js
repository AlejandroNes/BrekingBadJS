const frase = document.querySelector("#quote");
const autor = document.querySelector("#author");

const boton = document.querySelector('#boton');

const mostrarQuote = async () => {
    //generar un número
    const random = Math.ceil(Math.random() * 10);

    //llamado a la API
    try {
        const url = 'https://www.breakingbadapi.com/api/quotes/' + random;
        const respuesta = await fetch(url);
        const data = await respuesta.json();
        mostrarHTML(data[0]);
    } catch (error) {
        console.log(error);
    }

}

const mostrarHTML = ({ quote, author }) => {

    frase.textContent = quote;
    autor.textContent = author;


}

boton.addEventListener('click', mostrarQuote);
document.addEventListener('DOMContentLoaded', mostrarQuote);