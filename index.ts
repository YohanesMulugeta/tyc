import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interfaces are use to define the structure of an object
interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as ToDo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = function (id, title, completed) {
  console.log(`
    The todo with ID: ${id}
    Title: ${title}
    Is it finished? ${completed}`);
};
