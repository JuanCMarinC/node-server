
const util = require('util');
const readline = require('readline-sync');

let tareas2 = [
    {
        id: '1',
        descripcion: 'Cepillarse los dientes',
        estado: false
    },
    {
        id: '2',
        descripcion: 'Leer la biblia',
        estado: false
    }
];

function encontrarMayorID() {
    const mayorID = tareas2.reduce((maxID, tarea) => {
      return tarea.id > maxID ? tarea.id : maxID;
    }, -1);
  
    if (mayorID >= 0) {
      return mayorID; // Retorna el mayor ID encontrado
    } else {
      return 1; // no hay tareas arrancamos con id 1
    }
  }

function addTarea(terea) {
    return new Promise((resolve, reject) => {
        tareas2.push(terea);
        resolve();
    });
}





function listarTareas() {
    let contador = 0;
    let mensaje = "";
    while (contador < tareas2.length) {
        if (tareas2[contador].estado == false) {
            mensaje = mensaje + "ID tarea = " + tareas2[contador].id + "  Descripcion = " + tareas2[contador].descripcion +
                "  Estado = Pendiente \n";
        } else {
            mensaje = mensaje + "ID tarea = " + tareas2[contador].id + "  Descripcion = " + tareas2[contador].descripcion +
                "  Estado = Terminada \n";
        }
        contador++;
    }
    return mensaje;
}

function agregarT() {
    return new Promise((resolve, reject) => {
        let cont = 1;

        

        for (let i = 0; i < cont; i++) {
            const tereaTemp = {
                id: Number(encontrarMayorID())+1,
                descripcion: readline.question('Ingrese la descripcion de la nueva actividad \n'),
                estado: false
            };
            addTarea(tereaTemp)
                    let add = readline.question('Desea AGREGAR otra tarea ? : s/n \n');
                    if (add.toLowerCase() === 'n') {
                        resolve();
                    } else {
                        cont++;
                    }
               
        }
    });
}

function eliminarT() {
    return new Promise((resolve, reject) => {
        let ide1 = readline.question('Digite el ID de la tarea a ELIMINAR :');
        tareas2 = tareas2.filter(tareas => tareas.id != ide1);
        resolve();
    });
}

function completarT() {
    return new Promise((resolve, reject) => {
        let ide = readline.question('Digite el ID de la tarea a COMPLETAR :');
        let contador = 0;
        while (contador < tareas2.length) {
            if (tareas2[contador].id == ide) {
                tareas2[contador].estado = true;
            }
            contador++;
        }
        resolve();
    });
}

function menuP() {
    console.clear();
    console.log('===========================================');
    console.log('==========Lista de tareas==================');
    console.log('===========================================');

    let listaT = listarTareas();
    console.log(listaT);

    console.log('===========================================');
    console.log('==========Seleccione una accion============');
    console.log('===========================================');
    console.log('    1. ' + 'Agregar Tarea');
    console.log('    2. ' + 'Completar Tarea');
    console.log('    3. ' + 'Eliminar Tarea');
    console.log('===========================================');
    console.log('===========================================');

    let ans = readline.question('Digite el numero de la accion que desea realizar :');

    if (ans == 1) {
        agregarT()
            .then(() => {
                console.log('Tareas agregadas exitosamente');
                menuP();
            })
            .catch((error) => {
                console.error('Error al agregar tareas:', error);
            });
    } else if (ans == 2) {
        completarT()
            .then(() => {
                console.log('Tarea completada exitosamente');
                menuP();
            })
            .catch((error) => {
                console.error('Error al completar la tarea:', error);
            });
    } else if (ans == 3) {
        eliminarT()
            .then(() => {
                console.log('Tarea eliminada exitosamente');
                menuP();
            })
            .catch((error) => {
                console.error('Error al eliminar la tarea:', error);
            });
    } else {
        console.error('Error accion no valida :', error);
        menuP();
    }
}

menuP();
