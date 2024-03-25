<template>
    <div>
        <p>Current time: {{ time }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            time: null
        };
    },
    created() {
        this.updateTime();
    },
    updated() {
        this.updateTime();
    },
    methods: {
        updateTime() {
            this.time = new Date().toLocaleTimeString();
        }
    }
};
</script>