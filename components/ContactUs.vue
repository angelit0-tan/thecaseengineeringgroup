<template>
    <div class="container mx-auto">
        <slot/>
        <div class="md:grid grid-cols-2 gap-x-8 gap-y-5 mb-10">
            <div>
                <div class="mb-1">
                    <label>
                        First Name <span class="text-red">*</span>
                    </label>
                    <span class="text-red text-sm" v-if="errors.firstName.value">
                        Required field
                    </span>
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
                    <span class="text-red text-sm" v-if="errors.lastName.value">
                        Required field
                    </span>
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
                    <span class="text-red text-sm" v-if="errors.email.value">
                        Required field
                    </span>
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
                    <span class="text-red text-sm" v-if="errors.phone.value">
                        Required field
                    </span>
                </div>
                <div>
                    <input type="text" v-model="form.phone"/>
                </div>
            </div>
            <div v-if="isCompanyRequired">
                <div class="mb-1">
                    <label>
                        Agency / Company Name <span class="text-red">*</span>
                    </label>
                    <span class="text-red text-sm" v-if="errors.company.value">
                        Required field
                    </span>
                </div>
                <div>
                    <input type="text" v-model="form.company"/>
                </div>
            </div>
            <div v-if="isJobTitleRequired">
                <div class="mb-1">
                    <label>
                        Job Title <span class="text-red">*</span>
                    </label>
                    <span class="text-red text-sm" v-if="errors.jobTitle.value">
                        Required field
                    </span>
                </div>
                <div>
                    <input type="text" v-model="form.jobTitle"/>
                </div>
            </div>
        </div>
        <div class="mb-10" v-if="isServicesRequired">
            <p class="mb-5">
                <slot name="services">
                    Which services are you interested in? (Please select atleast one) <span class="text-red">*</span>
                </slot>
                <span class="text-red text-sm" v-if="errors.selectedOptions.value">
                    Required field
                </span>
            </p>
            <div class="md:grid grid-cols-3 gap-3">
                <div v-for="(category, idx) in categories" :key="idx"
                    class="flex items-center gap-2 mb-2"
                    :class="[idx > 3 ? 'md:inline-block hidden' : 'inline-block', {'show' : showAll}]"
                    >
                    <input type="checkbox" :id="`${category}-${idx}`" :value="category" v-model="form.selectedOptions"/>
                    <label :for="`${category}-${idx}`">{{ category }}</label>
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
        </div>
        <div class="mb-10">
            <div>
                <div class="mb-1">
                    <label>
                        Message / Comment <span class="text-red">*</span>
                    </label>
                    <span class="text-red text-sm" v-if="errors.message.value">
                        Required field
                    </span>
                </div>
                <div>
                    <textarea class="bg-light-gray w-full px-3 py-2" rows="6" v-model="form.message"/>
                </div>
            </div>
        </div>
        <div v-if="isAttachmentRequired">
            <div>
                Upload Attachment or Resume <span class="text-red"> *</span>
                <span class="text-red text-sm" v-if="errors.attachment.value">
                    Required field
                </span>
            </div>
            <input type="file" @change="handleFileUpload">
        </div>
        <div class="text-center py-5">
            <div v-if="hasRequired" class="text-red mb-5">
                Please check the required field.
            </div>
            <button class="px-10 py-3 text-black bg-fern font-bold" :disabled="isSending" @click="sendEmail"> Submit </button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props:{
        isAttachmentRequired: {
            type: Boolean,
            default: false
        },
        isCompanyRequired:{
            type: Boolean,
            default: false
        },
        isJobTitleRequired:{
            type: Boolean,
            default: false
        },
        isServicesRequired: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return{
            showAll: false,
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
                attachment: null,
                selectedOptions: [],
            },
            errors: {
                firstName: {
                    validate: true,
                    value: null
                },
                lastName: {
                    validate: true,
                    value: null
                },
                email: {
                    validate: true,
                    value: null
                },
                phone: {
                    validate: true,
                    value: null
                },
                company: {
                    validate: this.isCompanyRequired,
                    value: null
                },
                jobTitle: {
                    validate: this.isJobTitleRequired,
                    value: null
                },
                selectedOptions: {
                    validate: this.isServicesRequired,
                    value: null
                },
                message: {
                    validate: true,
                    value: null
                },
                attachment: {
                    validate: this.isAttachmentRequired,
                    value: null
                },
            },
            isSending: false,
            emailData: {
                to: 'recipient@example.com',
                subject: 'Subject Here',
                text: 'Email body here',
                attachments: [],
            },
            hasRequired: false
        }
    },
    methods: {
        fieldsClear() {
            for (const field in this.form) {
                this.form[field] = null;
            }
        },
        handleFileUpload(event) {
            this.form.attachment = event.target.files[0];
        },
        fieldsCheck() {
            for (const error in this.errors) {
                if (this.errors[error].validate) {
                    if (!this.form[error]) {
                        this.errors[error].value = 'required';
                        this.hasRequired = true;
                        return false
                    }else {
                        this.errors[error].value = null;
                    }
                }
            }
            
            if (this.errors.selectedOptions.validate) {
                if (this.form.selectedOptions.length <= 0) {
                    this.errors.selectedOptions.value = 'required';
                    this.hasRequired = true;
                    return false
                } else {
                    this.errors.selectedOptions.value = null;
                }
            }
            this.hasRequired = false;
            return true;
        },
        async sendEmail() {
            if (this.isSending) {
                return;
            }

            if (!this.fieldsCheck()) return;

            try {
                this.isSending = true;

                // let formData = new FormData();
                // formData.append('first_name', this.form.firstName);
                // formData.append('last_name', this.form.lastName);
                // formData.append('email', this.form.email);
                // formData.append('phone', this.form.phone);
                // formData.append('company', this.form.company);
                // formData.append('job_title', this.form.jobTitle);
                // formData.append('services', this.form.selectedOptions);
                // formData.append('message', this.form.message);
                // formData.append('file', this.form.attachment);

                // await axios.post(`http://localhost:3008/email`, formData);
                
                this.$mail.send({
                    from: { 
                        name: this.form.firstName ,
                        address: 'support@perfectfriends.com'
                    },
                    subject: 'Incredible',
                    html: `<table>
                        <tr>
                        <td>First name:</td>
                        <td>${this.form.firstName || ''}</td>
                        </tr>
                        <tr>
                            <td>Last name:</td>
                            <td>${this.form.lastName || ''}</td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td>${this.form.email || ''}</td>
                        </tr>
                        <tr>
                            <td>Phone:</td>
                            <td>${this.form.phone || ''}</td>
                        </tr>
                        <tr>
                            <td>Company:</td>
                            <td>${this.form.company || ''}</td>
                        </tr>
                        <tr>
                            <td>Job Title:</td>
                            <td>${this.form.jobTitle || ''}</td>
                        </tr>
                        <tr>
                            <td>Message: </td>
                            <td>${this.form.message || ''}</td>
                        </tr>
                        <tr>
                            <td>Services: </td>
                            <td>${this.form.selectedOptions || ''}</td>
                        </tr>
                    </table>`,
                });

                this.fieldsClear();
                alert("Message is sent!")
            } catch (e) {
                console.log(e)
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
    .show {
        display: block!important;
    }
</style>