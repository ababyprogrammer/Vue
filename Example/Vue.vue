<template>
    <div>
        <input type="text" v-model="username" @input="onInput">
        <p>{{ username }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        onInput() {
            // perform any operations or validation on input here
            console.log('Username updated to:', this.username);
        }
    }
}
</script>