<template>
    <div>
        <p>{{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    },
    watch: {
        count(newValue, oldValue) {
            console.log(`Count changed from ${oldValue} to ${newValue}`);
        }
    }
};
</script>