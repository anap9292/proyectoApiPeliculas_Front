class ControladorBase {

    constructor(controlador, configuracion){
        this.Id = 0;
        this.UrlBase = `https://localhost:7190/api/${controlador}/`;
        this.Configuracion = configuracion;
        this.Modelo = {};
    }    

    async iniciarAsync() {

    }

    async fetchApiGet(metodoApi){

        let json;

        let respuesta = await fetch(this.UrlBase + metodoApi);

        if (respuesta.ok) {
    
            json = await respuesta.json();
        }else {

            alert("Error al conectar con el servidor");
        }

        return json;
    }

    async fetchApiPut(endpointApi, modelo){

        const opciones = 
        {
            method: "PUT", 
            body: JSON.stringify(modelo), 
            headers: 
            { 
                "Content-Type": "application/json"
            }        
        };

        const respuesta = await fetch(this.UrlBase + metodoApi, opciones);

        if (respuesta.ok) {
            
            alert("Se guardo correctamente!")

        } else {

            alert("Error al conectar con el servidor");
        }
    }

    async fetchApiPost(endpointApi, modelo){

        const opciones = 
        {
            method: "POST", 
            body: JSON.stringify(modelo), 
            headers: 
            { 
                "Content-Type": "application/json"
            }        
        };

        const respuesta = await fetch(this.UrlBase + metodoApi, opciones);

        if (respuesta.ok) {
            
            alert("Se guardo correctamente!")

        } else {

            alert("Error al conectar con el servidor");
        }
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
    
    agregarBoton(fila, pantallaEditar, id) {

        let columna = document.createElement('td');    

        let boton = document.createElement('a');        
        boton.innerHTML = "EDITAR"
        boton.href = `./${pantallaEditar}.html?id=${id}`;
        /*columna.className = 'btn'*/
        boton.target = '_blank'
        /*columna.style.float = 'center'*/

        columna.appendChild(boton);

        fila.appendChild(columna);
    }

    async cargarModelo(){
        const urlParametros = new URLSearchParams(window.location.search);
        const id = urlParametros.get("id");

        if(id) {

            this.Id = id;
            this.Modelo = await this.fetchApiGet(`Get?id=${this.Id}`);
        }   
    }

    async configurarVistas(){

        if(this.Modelo) {

            const configuracion = await import(`../configuraciones/${this.Configuracion}.js`);

            for(const vista of configuracion.Vistas) {

                this.cargarVista(vista.Nombre, this.Modelo[vista.Binding]);
            }        
        }     
    }

    cargarVista(idControl, valor) {

        const control = document.querySelector(`#${idControl}`);

        if(control) {

            control.value = valor;
        }
    }
    
    obtenerVista(idControl) {

        let valor;
        const control = document.querySelector(`#${idControl}`);

        if(control) {

            valor = control.value;
        }

        return valor;
    }
}