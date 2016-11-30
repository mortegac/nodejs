/*
 Crear una funcion mediante readFileSync que reciba el nombre de un archivo y devuelva su contenido.
 Crear una funcion mediante readFile que reciba el nombre de un archivo y un callback para que devuelva su contenido.
 Iniciarlo con node index.js
* */
//console.log(process);


var files = ['archivos/test.txt','archivos/test2.txt','archivos/test3.txt','archivos/test4.txt'];
var filesCrear = ['archivos/creado1.txt','archivos/creado2.txt','archivos/creado3.txt','archivos/creado4.txt'];
var fs = require('fs');
/*
console.log("-----------------------------------------------------------");
//Creo los Archivos
for(var x=0; x<filesCrear.length;x++){
    fs.writeFileSync(filesCrear[x], 'Archivo:' + filesCrear[x],'utf8');
}
*/
console.log("-----------------------------------------------------------");
console.log("Contenido SINCRONO:");
console.log("-----------------------------------------------------------");

for(var x=0; x<files.length;x++){
    var contents = fs.readFileSync(files[x],'utf8');
    console.log(contents);
    // fs.writeFileSync(files[x], 'Archivo:' + files[x],'utf8');
}


    console.log("-----------------------------------------------------------");
    console.log("Contenido ASINCRONO:");

    for(var x=0; x<files.length;x++){
        var contents = fs.readFile(files[x],'utf8', function(err, data){
            if (err){
                return false
            }
            console.log('Contenido ASINCRONO:',data);
            console.log("-----------------------------------------------------------");


        });

    //console.log('hola: ', contents);
    //console.log(contents);
    // fs.writeFileSync(files[x], 'Archivo:' + files[x],'utf8');
}
console.log('ME EJECUTE Primero');


//console.log(process);

////////////////////////////////////////////////////////////
//Leer en forma SINCRONA
//var contents = fs.readFileSync('archivos/test.txt').toString();
//console.log(contents); //esperamos por el resultado

////////////////////////////////////////////////////////////
//Leer  ASINCRONA
//fs.readFile("test1.txt","test2.txt","test3.txt","test4.txt", function(err, buf) {
//    console.log(buf.toString()); // Se ejecuta cuando se termine de leer el archivo
// });

console.log("-----------------------------------------------------------");
console.log("LISTANDO CONTENIDO CARPETA:");

var testFolder = 'archivos/';
var fs = require('fs');
    //LEO EL CONTENIDO DE LA CARPETA
    fs.readdir(testFolder, (err, files) => {
        console.log("-----------------------------------------------------------");
            files.forEach(file => {
                console.log(file);
                //fs.readFile(file).toString()
            })
        console.log("-----------------------------------------------------------");
    })


