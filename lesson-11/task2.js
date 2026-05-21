
function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json());
}


function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json());
}


const allPromise = Promise.all([fetchTodo(), fetchUser()])
  .then(results => {
    console.log('Promise.all результат:');
    console.log('Todo:', results[0]);
    console.log('User:', results[1]);
    return results;
  })
  .catch(error => {
    console.error('Помилка в Promise.all:', error);
  });


const racePromise = Promise.race([fetchTodo(), fetchUser()])
  .then(result => {
    console.log('Promise.race результат (перший завершений запит):');
    console.log(result);
    return result;
  })
  .catch(error => {
    console.error('Помилка в Promise.race:', error);
  });