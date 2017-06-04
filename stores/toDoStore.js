import {createStore} from 'redux';

const defaultTodos = [
    {
        task: 'Initial todo in store',
        state: 'pending'
    }
];
const defaultState = {
    todos: defaultTodos,
    allTodos: defaultTodos,
    filter: 'pending'
};

function toDoStore(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return Object.assign({}, state, {
                todos: state.todos.concat([
                    {
                        task: action.task,
                        state: 'pending'
                    }
                ]),
                allTodos: state.allTodos.concat([
                    {
                        task: action.task,
                        state: 'pending'
                    }
                ])
            });
            break;
        case 'DONE_TODO':
            return Object.assign({}, state, {
                todos: state.todos.filter(ele => ele != action.todo),
                allTodos: state.allTodos.map(ele => {
                    if (ele.task == action.todo.task) {
                        ele.state = 'done';
                    }
                    return ele;
                })
            });
            break;
        case 'TOGGLE_STATE':
            const filter = state.filter === 'pending'
                ? 'done'
                : 'pending';
            return Object.assign({}, state, {
                filter,
                todos: state.allTodos.filter(ele => ele.state === filter)
            });
            break;
        default:
            return state;
    }
}

export default createStore(toDoStore);
