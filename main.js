// const todos = [];

// window.onload = () =>{
// const form = document.getElementById('todo-form');
// form.onsubmit = (e) => {
//       e.preventDefault();
//       const todo = document.getElementById('todo');
//       const todoText = todo.value; 
//       todo.value = '';
//       todos.push(todoText);
//       const todoList = document.getElementById('todo-list');
//       todoList.innerHTML = '';
//       for(let i = 0; i < todos.length; i++)
//       {
//           todoList.innerHTML +='<li>' + todos[i] + '</li>';
//       }
//     }
// }

//LO MISMO USANDO MAP
const todos = [];

window.onload = () => {
const form = document.getElementById('todo-form');
form.onsubmit = (e) => {
      e.preventDefault();
      const todo = document.getElementById('todo');
      const todoText = todo.value; 
      todo.value = '';
      todos.push(todoText);
      const todoList = document.getElementById('todo-list');
      const todosTemplate = todos.map(t => '<li>' + t + '</li>');
      todoList.innerHTML = todosTemplate.join('');
    }
}

/*
MÉTODO .splice
El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/splice#:~:text=El%20m%C3%A9todo%20splice()%20cambia,y%2Fo%20agregando%20nuevos%20elementos.
let arreglo = [1,2,3,4];
arreglo.splice(2,1);
El arreglo ahora contiene: [1,2,4];
*/