class AltaModificacionActor extends ControladorBase {
    
    constructor(){
        super();
    }

    async iniciarAsync() {
        
        const urlParametros = new URLSearchParams(window.location.search);
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
    } 
}