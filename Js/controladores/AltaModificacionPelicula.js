class AltaModificacionPelicula extends ControladorBase {
    
    constructor(){
        super();
        this.Id = 0;
    }

    async iniciarAsync() {
        this.cargarVistas();
        this.configurarEventos();
    }
        
      /*  const urlParametros = new URLSearchParams(window.location.search);
        const id = urlParametros.get("id");

        if(id) {

            const pelicula = await this.fetchApiGet("pelicula/obtenerPelicula/id="+id);

            if(pelicula) {
    
                this.cargarVista("iTitulo", pelicula.titulo);
                this.cargarVista("iEnCines", pelicula.enCines);   
                this.cargarVista("iFechaEstreno", pelicula.fechaEstreno);
                this.cargarVista("iPoster", pelicula.poster);            
            }
        }
    } */

    async cargarVistas() {

        const urlParametros = new URLSearchParams(window.location.search);
        this.Id = urlParametros.get("id");

        if(this.Id) {

            const pelicula = await this.fetchApiGet("Peliculas/obtenerPelicula?id="+this.Id);

            if(pelicula) {
    
                this.cargarVista("iTitulo", pelicula.titulo);
                this.cargarVista("iEnCines", pelicula.enCines);
                this.cargarVista("iFechaEstreno", pelicula.fechaEstreno);
                this.cargarVista("iPoster", pelicula.poster);         
            }
        }
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