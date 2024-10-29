<template>
    <div class="flex flex-wrap gap-4 justify-center w-5/6 mx-auto">
        <button
            v-for="menu in menus" :key="menu.link"
            class="px-4 py-3 text-black bg-white rounded-full flex items-center gap-2 hover:bg-darkgreen hover:text-white transition delay-75 duration-300"> 
            <img src="/images/add.png"/>
            <NuxtLink :to="menu.link">
                <span> {{  menu.name }}</span>
            </NuxtLink>
        </button>
    </div>
</template>
<script>
    export default{
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
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Red Hat Enterprise Linux (RHEL) Support Services',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Knowledge Management',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Risk Management',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Cloud Computing',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Web Development',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Program Management',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Mobile Application Development',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Staff Augmentation',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Cybersecurity Strategic Planning',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Business Analysis',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Software Development',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Information Technology Service Management (ITSM)',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Security Operations',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'NIST Compliance',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Capital Planning and Investment Control',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Requirements Management',
                        link: 'cloud-security',
                        order: 1,
                    },
                    {
                        name: 'Enterprise Architecture',
                        link: 'cloud-security',
                        order: 1,
                    }
                ]

            }
        }
    }

</script>