<template>
    <main class="container nav-container flex-column">
        <section class="row mb-5">
            <router-link :to="{name: 'Home'}">
                <div class="nav-link">
                    <h1>Home</h1>
                </div>
            </router-link>
            <router-link :to="{name: 'About'}">
                <div class="nav-link">
                    <h1>About</h1>
                </div>
            </router-link>
            <div class="nav-link">
                <h1>Projects</h1>
            </div>
            <div class="nav-link">
                <h1>Resume</h1>
            </div>
        </section>
        <section class="row">
            <div class="external-links-container gap-4">
                <i class="mdi mdi-linkedin external-link"></i>
                <i class="mdi mdi-github external-link"></i>
            </div>
        </section>
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
    .nav-container {
        display: flex;
        justify-content: center;
        margin-left: 5rem;
        border-right: solid;
    }

    .nav-link {
        color: white;
        cursor: pointer;
        margin-bottom: 2rem;
    }

    .external-links-container {
        display: flex;
    }

    .external-link {
        font-size: 2.5rem;
        color: white;
    }
</style>