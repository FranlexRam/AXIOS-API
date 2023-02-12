const cargarPeliculas = async() => {
    //Se hace la peticion con fetch y se crea una variable para obtner la respuesta.
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=493a952fb71f4ff7fc562f99e3111f81&language=es-MX');

    console.log(respuesta);
}

cargarPeliculas();