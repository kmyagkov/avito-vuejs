<template>
    <Spinner size="huge"
             line-fg-color="#00AAFF"
    />
</template>

<script>
    import Spinner from 'vue-simple-spinner'

    export default {
        name: "Loader",
        components: {
            Spinner
        }
    }
</script>
