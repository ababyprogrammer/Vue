<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello'
            }
        }
    };    
</script>

<style>
p {
    font-size: 2rem;
    text-align: center;
}
</style>