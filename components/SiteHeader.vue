<template>
    <header class="relative" :class="{'nav-open' : isOpen}">
        <div class="flex container mx-auto py-6 px-3 items-center justify-between">
            <div>
                <a href="/">
                    <img src="/images/logo-small.png"/>
                </a>
            </div>
            <div class="main-nav">
                <ul class="flex md:flex-row flex-col gap-10 md:text-white text-black items-center font-bold nav-lists">
                    <li @click="toggle">
                        <NuxtLink to="/">
                            Home
                        </NuxtLink>
                    </li>
                    <li @click="toggle">
                        <NuxtLink to="/about-us" :activeClass="'text-green'" >
                            About Us
                        </NuxtLink>
                    </li>
                    <li class="md:block hidden">
                        <NuxtLink to="/">
                            Advisory and Assitance Service Areas
                        </NuxtLink>
                    </li>
                    <li @click="toggle">
                        <NuxtLink to="/join-our-team" :activeClass="'text-green'">
                            Join Our Team
                        </NuxtLink>
                    </li>
                    <li @click="toggle">
                        <NuxtLink to="/contact-us" :activeClass="'text-green'">
                            Contact Us
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <button class="btn-mobile-nav md:hidden block text-white">
                <div class="menu-open"
                    :class="{'hidden' : isOpen}"
                    @click="toggle"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-11">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
                <div class="menu-close text-black"
                    :class="{'hidden' : !isOpen}"
                    @click="toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-11">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        }
    }
}
</script>
<style lang="scss" scoped>
    .btn-mobile-nav{
        z-index: 999;
    }

    .main-nav {
        z-index: 99;
        background-color: rgba(255, 255, 255, 0.9);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(10px);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        transform: translateX(100%);
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease-in;
        opacity: 0;
        pointer-events: none;
        visibility: hidden;

        @media (min-width: 768px) {
            width: auto;
            height: auto;
            transform: none;
            opacity: unset;
            position: unset;
            visibility: visible;
            background-color: unset;
            pointer-events: unset;
        }
    }

    .nav-open .main-nav {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
      transform: translateX(0);
    }
</style>