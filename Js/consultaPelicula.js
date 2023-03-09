class ConsultaPelicula extends ControladorBase {
    
    constructor(){
        super();
    }

    async iniciarAsync() {

        const tbody = document.querySelector('#data');
        const listaPeliculas = await this.fetchApiGet("Peliculas");

        if(listaPeliculas){

            this.cargarDatos(tbody, listaPeliculas, "AltaModificacionPelicula");
        }
    } 
}