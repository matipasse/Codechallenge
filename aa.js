const url = 'https://jsonplaceholder.typicode.com/users';

document.getElementById("boton").addEventListener("click",  (e)=> {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechanacimiento = document.getElementById("fechanacimiento").value;
    
    const data = {
        nombre: nombre,
        apellido: apellido,
        fechanacimiento: fechanacimiento
    };
    
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(json => console.log(json));
    
});