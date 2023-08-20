<template>
    <main class="container nav-container">
        <section class="row mb-5">
            <div class="internal-links-container">
                <router-link :to="{name: 'Home'}">
                    <div class="nav-link-li">
                        <h1 class="font-oswald">Home</h1>
                    </div>
                </router-link>
                <router-link :to="{name: 'About'}">
                    <div class="nav-link-li">
                        <h1 class="font-oswald">About</h1>
                    </div>
                </router-link>
                <router-link :to="{name: 'Projects'}">
                    <div class="nav-link-li">
                        <h1 class="font-oswald">Projects</h1>
                    </div>
                </router-link>
                <router-link :to="{name: 'Resume'}">
                    <div class="nav-link-li">
                        <h1 class="font-oswald">Resume</h1>
                    </div>
                </router-link>
            </div>
            <div class="internal-links-mobile">
                <router-link :to="{name: 'Home'}">
                    <div>
                        <i class="mdi mdi-home icon internal-link"></i>
                    </div>
                </router-link>
                <router-link :to="{name: 'About'}">
                    <div>
                        <i class="mdi mdi-account icon internal-link"></i>
                    </div>
                </router-link>
                <router-link :to="{name: 'Projects'}">
                    <div>
                        <i class="mdi mdi-application-brackets icon internal-link"></i>
                    </div>
                </router-link>
                <router-link :to="{name: 'Resume'}">
                    <div>
                        <i class="mdi mdi-script-text-outline icon internal-link"></i>
                    </div>
                </router-link>
            </div>
        </section>
        <section class="row">
            <div class="external-links-container gap-4">
                <a class="external-link" target="_blank" href="https://www.linkedin.com/in/nathan-moehlmann-557431246/"><i class="mdi mdi-linkedin"></i></a>
                <a target="_blank" href="https://github.com/nmoehlmann"><i class="mdi mdi-github external-link"></i></a>
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

    .internal-link {
        transition: all 0.2s ease 0s;
    }

    .internal-link:hover {
        animation-name: bounce;
        color: #05D9FF;
    }

    h1 {
        transition: 0.3s ease 0s;
    }

    h1:hover {
        font-size: 2.7rem;
        letter-spacing: .2rem;
        color: #05D9FF;
    }

    .nav-container {
        display: flex;
        justify-content: center;
        margin-left: 5rem;
        border-right: solid;
        flex-direction: column;
    }

    .nav-link-li {
        color: white;
        cursor: pointer;
        margin-bottom: 2rem;
    }

    .nav-link-li h1 {
        font-size: 3.5rem;
    }

    .external-links-container {
        display: flex;
    }

    .external-link {
        font-size: 2.5rem;
        color: white;
    }

    a {
        transition: transform 0.3s ease 0s;
    }

    a:hover {
        transform: translateY(-8px)
    }
    a .external-link:hover {
        transition: all 0.3s ease;
    }

    .external-link:hover {
        color: #05D9FF;
        transform: translateY(-10)
    }
    .internal-links-mobile {
        display: none;
    }

    @media(max-width: 1000px) {
        .nav-container {
            justify-content: center;
            display: flex;
            flex-direction: row;
            border: none;
            margin: 0;
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
            display: none;
        }

        .icon {
            color: whitesmoke;
            font-size: 3rem;
            margin-right: 2rem;
        }
    }
</style>