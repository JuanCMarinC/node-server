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

]





function addTarea(terea){tareas2.push(terea);}



function listarTareas (){
    let contador = 0;
    let mensaje="";
    while(contador<tareas2.length){
        if(tareas2[contador].estado==false){
            mensaje = mensaje+"ID tarea = "+tareas2[contador].id+"  Descripcion = "+tareas2[contador].descripcion+
                     "  Estado = Pendiente \n";
        }else{
            mensaje = mensaje+"ID tarea = "+tareas2[contador].id+"  Descripcion = "+tareas2[contador].descripcion+
                     "  Estado = Terminada \n"
         }
    contador++;
    }
    return mensaje;
}

function agregarT(){
    let cont =1;
    for (let i = 0; i < cont; i++) {

       const tereaTemp={
            id: tareas2.length+1,
            descripcion: readline.question('Ingrese la descripcion de la nueva actividad \n'),
            estado: false
        }                
        addTarea(tereaTemp);
        let add=readline.question('Desea AGREGAR otra tarea ? : s/n \n');
        if(add =="n" || add == "N"){break;}
        cont++;
      }   
   menuP();
}

function eliminarT(){
    let ide1=readline.question('Digite el ID de la tarea a ELIMINAR :');
    tareas2=tareas2.filter(tareas=> tareas.id != ide1);
    menuP();
};

function completarT(){
    let ide=readline.question('Digite el ID de la tarea a COMPLETAR :');
    let contador = 0;
    while(contador<tareas2.length){
        if(tareas2[contador].id == ide){
            tareas2[contador].estado = true;           
        }

        contador ++;
    }
    menuP();

}

function menuP(){
    console.clear();
    console.log('===========================================');
    console.log('==========Lista de tareas==================');
    console.log('===========================================');

    let listaT = listarTareas();
    console.log(listaT);
    
    console.log('===========================================');
    console.log('==========Seleccione una accion============');
    console.log('===========================================');
    console.log('    1. '+'Agregar Tarea');
    console.log('    2. '+'Completar Tarea');
    console.log('    3. '+'Eliminar Tarea');
    console.log('===========================================');
    console.log('===========================================');
    
    
    let ans=readline.question('Digite el numero de la accion que desea realizar :');

    if(ans==1){agregarT();}
    else if(ans==2){completarT();}
    else if(ans==3){eliminarT();}
    else{}
      


}

menuP();