var nombre;
var estado_civil;
nombre=prompt("Ingrese el nombre de la persona");
estado_civil= parseInt(prompt("Ingrese el valor de su estado civil:1 Soltero, 2:Casado, 3:Separado, 4:Viudo, 5:Unión libre"));
switch (estado_civil) {
    case 1:
        alert(nombre +" es Soltero")
        
        break;
case 2:
    alert(nombre +" es Casado")
            
            break;
case 3:
    alert(nombre +" es Separado")
        
        break;
case 4:
    alert(nombre +" es Viudo")
        
        break;
case 5:
    alert(nombre +" esta en Union libre")
        
        break;
    default:
        alert(" La opcion no es valida")
        break;
}