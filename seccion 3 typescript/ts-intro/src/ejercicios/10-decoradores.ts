/*
    ===== Código de TypeScript =====
*/


function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

@reportableClassDecorator
class MiSuperClase{
    public miPropiedad : string = "ABC1245";

    imprimir (){
        console.log("hola Mundo");
    }
}

console.log(MiSuperClase);