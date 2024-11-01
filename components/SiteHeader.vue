<template>
    <header class="relative" :class="{'nav-open' : isOpen}">
        <div class="flex container mx-auto py-6 px-3 items-center justify-between">
            <div>
                <a href="/">
                    <img src="/images/logo-small.png"/>
                </a>
            </div>
            <div class="main-nav">
                <ul class="flex md:flex-row md:text-lg text-xl flex-col gap-10 text-white items-center font-bold nav-lists">
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
                    <li class="md:block hidden relative md:flex flex-col items-center">
                        <button @click="toggleMenu">                            
                            Advisory and Assitance Service Areas
                        </button>
                        <template v-if="isMenuVisible">
                            <div class="bg-white text-black w-max absolute rounded-md box p-8 mt-12">
                                <div class="border-b text-2xl mb-3 pb-2">Capabilities</div>
                                <div class="grid grid-cols-3 grid-rows-8 grid-flow-col grid-cols-none text-base font-normal gap-3">
                                    <div v-for="menu in menus" :key="menu.link" 
                                        class="bg-white text-black pr-4 pt-3 grid-item hover:text-darkgreen" @click="toggleMenu">
                                        <NuxtLink :to="menu.link">
                                            {{  menu.name }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </template>
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
                <div class="menu-close"
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
            isOpen: false,
            isMenuVisible: false,
            menus: [{
                        name: 'Cybersecurity',
                        link: 'cyber-security',
                        order: 1,
                    },
                    {
                        name: 'Zero Trust Security',
                        link: 'zero-trust-security',
                        order: 1,
                    },
                    {
                        name: 'Cloud Security',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Network Operations',
                        link: 'network-operations',
                        order: 1,
                    },
                    {
                        name: 'Red Hat Enterprise Linux Services',
                        link: 'rhel-support-services',
                        order: 1,
                    },
                    {
                        name: 'Program Management',
                        link: 'program-management',
                        order: 1,
                    },
                    {
                        name: 'Knowledge Management',
                        link: 'knowledge-management',
                        order: 1,
                    },
                    {
                        name: 'Risk Management',
                        link: 'risk-management',
                        order: 1,
                    },
                    {
                        name: 'Cloud Computing',
                        link: 'cloud-computing',
                        order: 1,
                    },
                    {
                        name: 'Web Development',
                        link: 'web-development',
                        order: 1,
                    },
                    {
                        name: 'Program Support Services',
                        link: 'program-support-services',
                        order: 1,
                    },
                    {
                        name: 'Mobile Application Development',
                        link: 'mobile-application-development',
                        order: 1,
                    },
                    {
                        name: 'Staff Augmentation',
                        link: 'staff-augmentation',
                        order: 1,
                    },
                    {
                        name: 'Cybersecurity Strategic Planning',
                        link: 'cyber-security-strategic-planning',
                        order: 1,
                    },
                    {
                        name: 'Business Analysis',
                        link: 'business-analysis',
                        order: 1,
                    },
                    {
                        name: 'Software Development',
                        link: 'software-development',
                        order: 1,
                    },
                    {
                        name: 'Information Technology Service Management (ITSM)',
                        link: 'information-technology-service-management',
                        order: 1,
                    },
                    {
                        name: 'Security Operations',
                        link: 'security-operations',
                        order: 1,
                    },
                    {
                        name: 'NIST Compliance',
                        link: 'nist-compliance',
                        order: 1,
                    },
                    {
                        name: 'Capital Planning and Investment Control',
                        link: 'capital-planning-and-investment-control',
                        order: 1,
                    },
                    {
                        name: 'Requirements Management',
                        link: 'requirements-management',
                        order: 1,
                    },
                    {
                        name: 'Enterprise Architecture',
                        link: 'enterprise-architecture',
                        order: 1,
                    },
                ],
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen;
        },
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },

    }
}
</script>
<style lang="scss" scoped>
    .btn-mobile-nav{
        z-index: 999;
    }

    .main-nav {
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.9);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(10px);
        position: fixed;
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

    // .box {
    //   padding: 20px; /* Padding inside the box */
    //   margin-top: 13px;
    //   border-radius: 8px; /* Rounded corners */
    // }

    .box::after {
        content: ''; /* Empty content for the arrow */
        position: absolute; /* Position the arrow relative to the box */
        bottom: 100%; /* Position it above the box */
        left: 50%; /* Center it horizontally */
        transform: translateX(-50%); /* Shift it left by half of its width */
        border-width: 10px; /* Width of the arrow */
        border-style: solid; /* Solid arrow */
        border-color: transparent transparent white transparent; /* Arrow color */
    }
</style>