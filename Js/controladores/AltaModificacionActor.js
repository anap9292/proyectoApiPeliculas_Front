class AltaModificacionActor extends ControladorBase {
    
    constructor(){
        super("Actores", "altaModificacionActor");
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
