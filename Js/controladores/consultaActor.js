class ConsultaActor extends ControladorBase {
    
    constructor(){
        super("Actores","");
    }

    async iniciarAsync() {

        const tbody = document.querySelector('#data');
        const listaActores = await this.fetchApiGet("GetAll");

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


