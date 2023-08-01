<template>
    <main class="container-fluid">
        <section class="row">
            <div class="col-12 header">
                <h1>Projects</h1>
            </div>
        </section>
        <section class="row">
            <div class="col-xxl-5 d-flex p-container">
                <div class="compass-background">
                    <div class="cooking-compass-container">
                        <img class="cooking-compass" src="src/assets/img/cooking-compass.svg" alt="">
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="col-12 col-xxl-6">
                <div class="header">
                    <h1 class="">Cooking Compass</h1>
                </div>
                <div class="underline"></div>
                <article class="text-body">
                    <h2 class="mb-4 text-light">Description</h2>
                    <p>Have you ever wondered what meals you could make with the food you currently had in your pantry?</p>
                    <div class="underline"></div>
                    <h2 class="text-light mb-4">Features</h2>
                    <ul>
                        <li>Add and remove food items from your pantry</li>
                        <li>Get recommended recipes based on your pantry</li>
                        <li>Shop for ingredients with built in grocery list</li>
                    </ul>
                </article>
            </div>
        </section>
        <section class="row">
            <div class="col-xxl-5 p-container">
                <div class="allSpice-background">
                    <div class="allSpice-logo-container">
                        <p class="allSpice-logo">All Spice</p>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="col-12 col-xxl-6">
                <div class="header">
                    <h1 class="">All Spice</h1>
                </div>
                <div class="underline"></div>
                <article class="text-body">
                    <h2 class="mb-4 text-light">Description</h2>
                    <p>Spice up your life by making and sharing recipes with others. If you like a recipe, favorite it and save it for later!</p>
                    <div class="underline"></div>
                    <h2 class="text-light mb-4">Features</h2>
                    <ul>
                        <li>Create your own recipes including ingredients, instructions, and pictures.</li>
                        <li>Search specific recipes using the search bar.</li>
                        <li>view and favorite created recipes.</li>
                        <!-- <li>Use filter on homepage to view your own or favorited recipes</li> -->
                    </ul>
                </article>
            </div>
        </section>
        <section class="row">
            <div class="col-xxl-5 p-container">
                <div class="keepr-background">
                    <div class="keepr-logo-container">
                        <img class="keepr-logo" src="src/assets/img/Keepr-logo.png" alt="">
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <div class="col-12 col-xxl-6">
                <div class="header">
                    <h1 class="">Keepr</h1>
                </div>
                <div class="underline"></div>
                <article class="text-body">
                    <h2 class="mb-4 text-light">Description</h2>
                    <p>Keepr is an application that allows its users to view, save, and create vaults and keeps</p>
                    <div class="underline"></div>
                    <h2 class="text-light mb-4">Features</h2>
                    <ul>
                        <li>Create a keep with an image and description. Other people can save your keep into their own vault.</li>
                        <li>Create a vault that can store keeps created by others or yourself.</li>
                        <li>Make your vault private so others cant see it or the keeps stored inside.</li>
                        <li>Edit your keeps, vaults, and even your own profile!</li>
                    </ul>
                </article>
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

    // Misc

    .underline {
        border-bottom: solid var(--unselected);
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .p-container {
        display: flex;
        // justify-content: center;
        margin-bottom: 1.5rem;
    }

    .divider {
        display: none;
    }

    @media(max-width: 2000px) {
        .divider {
            display: flex;
        }

        .p-container {
            justify-content: center;
        }

        .row {
            justify-content: center;
            margin-bottom: 2rem;
        }
    }

    .header {
        margin-top: 1rem;
        margin-bottom: 1rem;
        color: white
    }

    .text-body p, ul{
        color: white;
        font-size: 1.5rem;
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

    @media(max-width: 625px) {
        .keepr-background {
            height: 25rem;
        }
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

    @media(max-width: 625px) {
        .allSpice-background {
            height: 25rem;
        }
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

    @media(max-width: 625px) {
        .compass-background {
            height: 25rem;
        }
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

</style>