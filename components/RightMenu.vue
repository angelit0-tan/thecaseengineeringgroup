<template>
    <div 
        class="flex flex-wrap gap-4 justify-center w-5/6 mx-auto text-sm"
        :class="{'flex-col' : isSubPage}">
        <button
            v-for="menu in menus.sort((a,b)=> a.order - b.order)" :key="menu.link"
            class="md:px-4 md:py-3 p-2 rounded-full flex items-center gap-2 hover:bg-darkgreen hover:text-white transition delay-75 duration-200 w-fit"
            :class="menu.order === 0 ? 'bg-darkgreen text-white' : 'bg-white text-black'"
            >
            <img src="/images/add.png"/>
            <NuxtLink :to="menu.link">
                <span> {{  menu.name }}</span>
            </NuxtLink>
        </button>
    </div>
</template>
<script>
    export default{
        props:{
            isSubPage:{
                type: Boolean,
                default: false
            }
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