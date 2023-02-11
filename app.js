//Para usar async y await se debe crear una funcion
const obtenerPeliculas = async () => {
    try {
        //Hacer una peticion
        const respuesta = await axios.get('https://api.themoviedb.org/3/movie/popular', {
            //Colocar params para hacer el codigo mas limpio
            params: {
                api_key: '192e0b9821564f26f52949758ea3c473',
                language: 'es-MX'
            }
        })
    
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

obtenerPeliculas();

