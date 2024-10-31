<template>
    <header>
        <div class="flex container mx-auto py-6 px-3 items-center justify-between">
            <div>
                <a href="/">
                    <img src="/images/logo-small.png"/>
                </a>
            </div>
            <div class="main-nav md:block hidden">
                <ul class="flex gap-10 text-white items-center font-bold nav-lists">
                    <li>
                        <NuxtLink to="/">
                            Home
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about-us" :activeClass="'text-green'">
                            About Us
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">
                            Advisory and Assitance Service Areas
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/join-our-team" :activeClass="'text-green'">
                            Join Our Team
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact-us" :activeClass="'text-green'">
                            Contact Us
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <button class="btn-mobile-nav md:hidden block text-white">
                <div class="menu-open">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-11">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                </div>
                <div class="hidden menu-close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-11">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    .main-nav {

        @media (min-width: 768px) {

        }
    }
</style>