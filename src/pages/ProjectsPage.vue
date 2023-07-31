<template>
    <main class="container-fluid">
        <section class="row">
            <div class="col-12 header">
                <h1>Projects</h1>
            </div>
        </section>
        <section class="row">
            <div class="col-xxl-6 d-flex p-container">
                <div class="compass-background">
                    <div class="cooking-compass-container">
                        <img class="cooking-compass" src="src/assets/img/cooking-compass.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 p-container">
                <div class="allSpice-background">
                    <div class="allSpice-logo-container">
                        <p class="allSpice-logo">All Spice</p>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 p-container">
                <div class="keepr-background">
                    <div class="keepr-logo-container">
                        <img class="keepr-logo" src="src/assets/img/Keepr-logo.png" alt="">
                    </div>
                </div>
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

    .header {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: white
    }

    // Keepr

    .keepr-background {
        background-image: url(src/assets/img/masonry.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        height: 35rem;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    .keepr-logo {
        background-color: white;
        height: 15rem;
        border-radius: 8%;
    }

    .keepr-logo-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(2px);
    }

    // All Spice
    .allSpice-background {
        background-image: url(src/assets/img/food-img.avif);
        background-size: cover;
        background-repeat: no-repeat;
        height: 35rem;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    .allSpice-logo {
        font-family: 'Noto Serif', serif;
        font-size: 7rem;
        color: whitesmoke;
        // background: rgba($color: #202020, $alpha: .7);
        border-radius: 10px;
        text-shadow: 2px 2px 3px black;
    }

    .allSpice-logo-container {
        backdrop-filter: blur(2.5px);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    // cooking compass
    .compass-background {
        background-image: url(src/assets/img/cooking-background.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        height: 35rem;
        aspect-ratio: 1/1;
        border-radius: 10px;
    }

    .cooking-compass {
        object-fit: contain;
        height: 20rem;
        background: rgba($color: #202020, $alpha: .7);
        border-radius: 10px;
    }

    .cooking-compass-container {
        backdrop-filter: blur(3px);
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .p-container {
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
    }
</style>