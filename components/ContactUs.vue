<template>
    <div class="container mx-auto">
        <slot/>
        <div class="md:grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
            <div>
                <div class="mb-1">
                    <label>
                        First Name <span class="text-red">*</span>
                    </label>
                </div>
                
                <div>
                    <input type="text" v-model="form.firstName"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Last Name <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text" v-model="form.lastName"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Email Address <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text" v-model="form.email"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Phone <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text" v-model="form.phone"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Agency / Company Name <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text" v-model="form.company"/>
                </div>
            </div>
            <div>
                <div class="mb-1">
                    <label>
                        Job Title <span class="text-red">*</span>
                    </label>
                </div>
                <div>
                    <input type="text" v-model="form.jobTitle"/>
                </div>
            </div>
        </div>
        <div class="mb-10">
            <p class="mb-5">
                Which services are you interested in? (Please select atleast one) <span class="text-red">*</span>
            </p>
            <div class="md:grid grid-cols-3 gap-3">
                <div v-for="category in categories" :key="category"
                    class="flex items-center gap-2">
                    <input type="checkbox" :id="category" :value="category" v-model="form.selectedOptions"/>
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
                    <textarea class="bg-light-gray w-full" rows="6" v-model="form.message"/>
                </div>
            </div>
        </div>
        <div class="text-center py-5">
            <button class="px-8 py-3 text-white bg-fern" @click="sendEmail"> Submit </button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
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
            form : {
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                company: null,
                jobTitle: null,
                message: null,
                selectedOptions: [],
            },
            isSending: false
        }
    },
    methods: {
        fieldsClear() {
            for (const field in this.form) {
                this.form[field] = null;
            }
        },

        async sendEmail() {
            if (this.isSending) {
                return;
            }

            try {
                this.isSending = true;
                await axios.post(`http://localhost:3008/email`, {
                    first_name: this.form.firstName,
                    last_name: this.form.lastName,
                    email: this.form.email,
                    phone: this.form.phone,
                    company: this.form.company,
                    job_title: this.form.jobTitle,
                    services: this.form.selectedOptions,
                    message: this.form.message
                });
                this.fieldsClear();
                alert("Message is sent!")
            } catch (e) {
                alert('Something went wrong.');
            } finally {
                this.isSending = false;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    input[type='text'] {
        @apply bg-light-gray px-3 py-2 w-full;
    }

</style>