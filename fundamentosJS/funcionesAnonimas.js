//FUNCIONES ANÓNIMAS
/* Es una función que no tiene ningún nombre, estas tienen como desventaja que no se pueden reutilizar*/

function sumar(a, b, cb){
    const result =  a + b;
    cb(result);
}

sumar(1,2, function(result){
    console.log("Soy una fución anónima y mi resultado es: ", result);
});