<template>
    <div class="flex container mx-auto py-6 items-center justify-between">
        <div>
            <a href="/">
                <img src="/images/logo-small.png"/>
            </a>
        </div>
        <div>
            <ul class="flex gap-10 text-white items-center font-bold">
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
    </div>
</template>