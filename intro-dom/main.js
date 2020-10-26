window.onload = () => {
    const parrafo = document.getElementById('texto');
    //console.log(parrafo.innerHTML); //Tambien se su puede usar innerText
  //  parrafo.innerText = 'Texto actualizado'; //Esto reemplaza el texto original de HTMl por el texto mencionado
//innerText no podría cargar etiquetas de HTML en su defecto tendríamos que hacer lo sigu
  parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>';

    
}

