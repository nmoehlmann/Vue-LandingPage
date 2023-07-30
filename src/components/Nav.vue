<template>
    <main class="container nav-container">
        <section class="row mb-5">
            <div class="internal-links-container">
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
                <router-link :to="{name: 'Projects'}">
                    <div class="nav-link">
                        <h1>Projects</h1>
                    </div>
                </router-link>
                    <div class="nav-link">
                        <h1>Resume</h1>
                    </div>
            </div>
            <div class="internal-links-mobile">
                <router-link :to="{name: 'Home'}">
                    <div>
                        <i class="mdi mdi-home icon"></i>
                    </div>
                </router-link>
                <router-link :to="{name: 'About'}">
                    <div>
                        <i class="mdi mdi-account icon"></i>
                    </div>
                </router-link>
                <div>
                    <i class="mdi mdi-application-brackets icon"></i>
                </div>
                <div>
                    <i class="mdi mdi-script-text-outline icon"></i>
                </div>
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
        flex-direction: column;
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

    .internal-links-mobile {
        display: none;
    }

    @media(max-width: 1000px) {
        .nav-container {
            justify-content: space-between;
            display: flex;
            flex-direction: row;
            border: none;
        }

        .internal-links-container {
            display: flex;
            flex-direction: row;
            margin-right: 5rem;
            padding-top: .25rem;

            display: none;
        }

        .internal-links-mobile {
            display: flex;
            flex-direction: row;
            color: whitesmoke;
        }

        .external-links-container {
            padding-top: .25rem;
        }

        .icon {
            color: whitesmoke;
            font-size: 3rem;
            margin-right: 2rem;
        }
    }
</style>