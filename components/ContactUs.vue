<template>
    <div class="container mx-auto">
        <slot/>
        <div class="grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
            <div>
                <div class="mb-1">
                    <label>
                        First Name <span class="text-red">*</span>
                    </label>
                </div>
                
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Last Name <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Email Address <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Phone <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Agency / Company Name <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Job Title <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text"/>
                </div>
            </div>
        </div>
        <div class="mb-10">
            <p class="mb-5">
                Which services are you interested in? (Please select atleast one)<span class="text-red">*</span>
            </p>
            <div class="grid grid-cols-3 gap-3">
                <div v-for="category in categories" :key="category"
                    class="flex items-center gap-2">
                    <input type="checkbox" :id="category" :value="category" v-model="selectedOptions"/>
                    <label :for="category">{{ category }}</label>
                </div>
            </div>
        </div>
        <div class="mb-10">
            <div>
                <div class="mb-1">
                    <label>
                        Message / Comment <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <textarea class="bg-light-gray w-full" rows="6"/>
                </div>
            </div>
        </div>
        <div class="text-center py-5">
            <button class="px-8 py-3 text-white bg-fern"> Core Advisory Areas </button>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return{
            categories: [
                'Program Support Services',
                'Cybersecurity',
                'Zero Trust Security',
                'Cloud Security',
                'Network Operations',
                'Red Hat Enterprise Linux (RHEL) Support Services',
                'Knowledge Management',
                'Risk Management',
                'Cloud Computing',
                'Web Development',
                'Program Management',
                'Mobile Application Development',
                'Staff Augmentation',
                'Cybersecurity Strategic Planning',
                'Business Analysis',
                'Software Development',
                'Information Technology Service Management (ITSM)',
                'Security Operations',
                'NIST Compliance',
                'Capital Planning and Investment Control',
                'Requirements Management',
                'Enterprise Architecture',
            ],
            selectedOptions: []
        }
    }
}
</script>
<style lang="scss" scoped>
    input[type='text'] {
        @apply bg-light-gray px-3 py-2 w-full;
    }

</style>