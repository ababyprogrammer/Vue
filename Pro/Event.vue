<template>
    <div>
        <p>{{ counter }}</p>
        <button @click="increment">Increment</button>
        <child @increment-child="increment"></child>
    </div>
</template>

<script>
import Child from "./Child.vue";

export default {
    components: {
        Child
    },
    data() {
        return {
            counter: 0
        };
    },
    methods: {
        increment() {
            this.counter++;
        }
    }
};
</script>