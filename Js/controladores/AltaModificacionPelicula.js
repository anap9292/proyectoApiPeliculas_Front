class AltaModificacionPelicula extends ControladorBase {
    
    constructor(){
        super("Peliculas", "altaModificacionPelicula");
    }

    async iniciarAsync() {
        await this.cargarModelo();
        await this.configurarVistas();
        this.configurarEventos();
    }
        
     configurarEventos() {
        
        const boton = document.querySelector("#guardar")

        boton.addEventListener("click", async (evento) => {

            await this.guardar();
        });
    }

    async guardar() {
        
        const peliculaDto = {
            Id: this.Id,
            Nombre: this.obtenerVista("iTitulo"),
            EnCines: this.obtenerVista("iEnCines"),
            FechaEstreno: this.obtenerVista("iFechaEstreno"),
            Poster: this.obtenerVista("iPoster")
        };

        if(this.Id) {
            
            await this.fetchApiPut("Peliculas/Actualizar", peliculaDto);
        }
        else {
            
            await this.fetchApiPost("Peliculas/alta", peliculaDto);            
         }

        window.location = "./ConsultaPeliculas.html";
    }
}