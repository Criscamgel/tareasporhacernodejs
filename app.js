/* const argv = require('yargs').argv; */
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
    let tarea = porHacer.crear( argv.descripcion );
    console.log(tarea);                   
    break;

    case 'listar':
    let listado = porHacer.getListado();

    if(listado.length){         
    
    let i = 0;
    for ( let tarea of listado) {
        i++;
        console.log(i);
        console.log('=============== Por Hacer =============='.green);
        console.log(tarea.descripcion);
        console.log('Estado: ', tarea.completado);
        console.log('=============== Por Hacer =============='.green);  
        
    }

    }else{
        return console.log("No hay registros en el listado");         
    }
    
    break;

    case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
                 
    break;

    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);                     
    break;
 
    default:
        console.log('Comando no es reconocido');        
}
