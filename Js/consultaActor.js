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
    } 
}


