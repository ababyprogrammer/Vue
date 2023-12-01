<template>
    <div id="app">
        <input type="text" v-model="inputValue" @keyup.enter="addTodo">
        <ul>
            <li v-for="(todo, index) in todos" :key="index">
                {{ todo }}
                <button @click="removeTodo(index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            todos: [],
        };
    },
    methods: {
        addTodo() {
            if (this.inputValue.trim()) {
                this.todos.push(this.inputValue.trim());
                this.inputValue = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
    },
};
</script>

<style>
/* Add some CSS for styling the list items and the app container */
#app {
    max-width: 600px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}

input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    padding: 10px;
    background-color: #f9f9f9;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    background-color: #ff4d4d;
    color: white;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #ff0000;
}
</style>