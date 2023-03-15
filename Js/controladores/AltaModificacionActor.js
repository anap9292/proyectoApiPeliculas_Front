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

    async insertar(actorDTO) {
        await this.fetchApiPost("Insertar", actorDTO);           
    }

    async actualizar(actorDTO) {
        await this.fetchApiPut("Actualizar", actorDTO);
    }

    async cerrarPantalla () {
        window.location = "./ConsultaActor.html";
    }
}
