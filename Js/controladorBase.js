class ControladorBase {

    constructor(){
        this.UrlBase = "https://localhost:7190/api/";
    }    

    async iniciarAsync() {

    }

    async fetchApiGet(endpointApi){

        let json;

        let respuesta = await fetch(this.UrlBase + endpointApi);

        if (respuesta.ok) {
    
            json = await respuesta.json();
        }else {

            alert("Error al conectar con el servidor");
        }

        return json;
    }

    cargarDatos(tbody, listaModelos, pantallaEditar)
    {
        for(const modelo of listaModelos){

            this.agregarFila(tbody, modelo, pantallaEditar);
        }        
    }

    agregarFila(tbody, modelo, pantallaEditar) {

        let fila = document.createElement('tr');

        for(const propiedad of Object.keys(modelo)){

            this.agregarColumna(fila, modelo[propiedad]);
        }
        
        this.agregarBoton(fila, pantallaEditar, modelo["id"]);
        
        tbody.appendChild(fila);
    }     
    
    agregarColumna(fila, valor){
    
        let columna = document.createElement('td');    
        columna.innerText = valor;
        fila.appendChild(columna);
    }
    
    agregarBoton(fila, pantallaEditar, id){
        let columna = document.createElement('a');    
        columna.innerHTML = "EDITAR"
        columna.href = `./${pantallaEditar}.html?id=${id}`;
        fila.appendChild(columna);
    }
}