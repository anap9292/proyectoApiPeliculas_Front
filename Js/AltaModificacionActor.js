class AltaModificacionActor extends ControladorBase {
    
    constructor(){
        super();
        this.Id = 0;
    }

    async iniciarAsync() {
    
        this.cargarVistas();
        this.configurarEventos();
    } 

    async cargarVistas() {

        const urlParametros = new URLSearchParams(window.location.search);
        this.Id = urlParametros.get("id");

        if(this.Id) {

            const actor = await this.fetchApiGet("Actores/ObtenerActor?id="+this.Id);

            if(actor) {
    
                this.cargarVista("iNombre", actor.nombre);
                this.cargarVista("iFechaNacimiento", actor.fechaNacimiento);
                this.cargarVista("iFoto", actor.foto);            
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
        
        const actorDto = {
            Id: this.Id,
            Nombre: this.obtenerVista("iNombre"),
            FechaNacimiento: this.obtenerVista("iFechaNacimiento")
        };

        if(this.Id) {
            
            await this.fetchApiPut("Actores/Actualizar", actorDto);
        }
        else {
            
            await this.fetchApiPost("Actores/Insertar", actorDto);            
         }

        window.location = "./ConsultaActor.html";
    }
}
