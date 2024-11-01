<template>
    <div class="w-5/6 mx-auto text-xs">
        <div 
            class="flex flex-wrap gap-4 justify-center mb-4"
            :class="{'md:flex-col' : isSubPage}">
            <button
                v-for="(menu, idx) in menus.sort((a,b)=> a.order - b.order)" :key="menu.link"
                class="md:px-4 md:py-3 p-2 rounded-full hover:bg-darkgreen hover:text-white transition delay-75 duration-200 w-fit"
                :class="[menu.order === 0 ? 'bg-darkgreen text-white' : 'bg-white text-black', idx > 3 ? 'md:inline-block hidden' : 'inline-block', {'show' : showAll}]"
                >
                <div class="flex items-center gap-2">
                    <img src="/images/add.png"/>
                    <NuxtLink :to="menu.link">
                        <span> {{  menu.name }}</span>
                    </NuxtLink>
                </div>
            </button>
        </div>
        <div class="md:hidden block text-center flex justify-center">
            <button class="md:px-4 md:py-3 p-2 rounded-full hover:bg-darkgreen hover:text-white transition delay-75 duration-200 w-fit bg-white text-black flex gap-2 items-center"
                @click="showAll = !showAll">
                <div>
                    <svg 
                        v-if="showAll"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                    </svg>

                    <svg
                        v-if="!showAll" 
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div>
                    {{ !showAll ? 'See More' : 'See Less' }}
                </div>
            </button>
        </div>
    </div>
    
</template>
<script>
    export default{
        props:{
            isSubPage:{
                type: Boolean,
                default: false
            },
            showAll: false
        },
        data() {
            return{
                menus: [{
                        name: 'Program Support Services',
                        link: 'program-support-services',
                        order: 1,
                    },{
                        name: 'Cybersecurity',
                        link: 'cyber-security',
                        order: 1,
                    },{
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
                        name: 'Red Hat Enterprise Linux (RHEL) Support Services',
                        link: 'rhel-support-services',
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
                        name: 'Program Management',
                        link: 'program-management',
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
        mounted() {
            const activeMenu = this.menus.find(menu => menu.link === window.location.pathname.split('/')[1])
            if(activeMenu) return activeMenu.order = 0
        }
    }

</script>
<style scoped>
    .show {
        display: inline-block!important;
    }
</style>