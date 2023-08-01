<template>
    <main>
        <iframe class="resume vh-100" src="src/assets/pdf/MyResume.pdf" frameborder="0"></iframe>
    </main>
</template>


<script>
export default {
    setup(){
        return {}
    }
}
</script>


<style lang="scss" scoped>
    .resume {
        width: 100%;
    }

    @media(max-width: 1000px) {
        main {
            margin-top: 10rem;
        }

        .resume {
            width: 100%
        }
    }
</style>