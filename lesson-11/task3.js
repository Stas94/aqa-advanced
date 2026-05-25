
async function fetchTodo(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при запиті todo:', error);
  }
}


async function fetchUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при запиті user:', error);
  }
}


async function handlePromises() {
  try {
    
    const allResults = await Promise.all([fetchTodo(1), fetchUser(1)]);
    console.log('Promise.all результат:');
    console.log('Todo:', allResults[0]);
    console.log('User:', allResults[1]);

    const raceResult = await Promise.race([fetchTodo(1), fetchUser(1)]);
    console.log('\nPromise.race результат (перший завершений запит):');
    console.log(raceResult);

    return { allResults, raceResult };
  } catch (error) {
    console.error('Помилка:', error);
  }
}

handlePromises();