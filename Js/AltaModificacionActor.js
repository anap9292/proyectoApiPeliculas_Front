class AltaModificacionActor extends ControladorBase {
    
    constructor(){
        super();
    }

    async iniciarAsync() {
        
        const urlParametros = new URLSearchParams(window.location.search);
        const id = urlParametros["id"];

        if(id) {

            const actor = await this.fetchApiGet("Actores/ObtenerActor?id="+id);

            if(actor) {
    
                this.cargarVista("iNombre", actor.nombre);
                this.cargarVista("iFechaNacimiento", actor.fechaNacimiento);
                this.cargarVista("iFoto", actor.foto);            
            }
        }
    } 
}
