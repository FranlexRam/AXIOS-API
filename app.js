//Para usar async y await se debe crear una funcion
const obtenerPeliculas = async () => {
    //Para manejar los errores se usan try y catch
    try {
        //Hacer una peticion y se crea una variable para obtener la respuesta
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

