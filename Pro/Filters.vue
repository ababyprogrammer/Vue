<template>
    <div>
        <p>{{ message | capitalize }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Hello, Vue!"
        };
    },
    filters: {
        capitalize(value) {
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
    }
};
</script>