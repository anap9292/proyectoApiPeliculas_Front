class ConsultaPelicula extends ControladorBase {
    
    constructor(){
        super("Peliculas");
    }

    async iniciarAsync() {

        const tbody = document.querySelector('#data');
        const listaPeliculas = await this.fetchApiGet("GetAll");

        if(listaPeliculas){

            this.cargarDatos(tbody, listaPeliculas, "AltaModificacionPelicula");
        }

        this.configurarEventos();
    } 

    configurarEventos() {
        
        const boton = document.querySelector("#nuevo")

        boton.addEventListener("click", async (evento) => {

            window.location = "./AltaModificacionPelicula.html"
        });
    }
}