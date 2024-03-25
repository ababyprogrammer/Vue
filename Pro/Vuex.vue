<template>
    <div>
        <p>{{ count }}</p>
        <button @click="increment">Increment</button>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    computed: {
        ...mapState(["count"])
    },
    methods: {
        ...mapMutations(["increment"])
    }
};
</script>