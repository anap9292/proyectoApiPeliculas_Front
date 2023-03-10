class ConsultaActor extends ControladorBase {
    
    constructor(){
        super();
    }

    async iniciarAsync() {

        const tbody = document.querySelector('#data');
        const listaActores = await this.fetchApiGet("Actores");

        if(listaActores){

            this.cargarDatos(tbody, listaActores, "AltaModificacionActor");
        }

        this.configurarEventos();
    } 

    configurarEventos() {
        
        const boton = document.querySelector("#nuevo")

        boton.addEventListener("click", async (evento) => {

            window.location = "./AltaModificacionActor.html"
        });
    }
}


