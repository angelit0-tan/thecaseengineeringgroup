
<template>
    <div>
        <site-header/>
        <Nuxt/>
        <div class="w-full bg-lighblue">
            <ContactUs
                is-services-required
                is-company-required
                is-job-title-required
                class="py-16 px-4">
                <template>
                    <div class="mb-12 text-center">
                        <div class="mb-3">
                            <span class="font-bold text-3xl">Contact Us</span>
                        </div>
                        <div>
                            Please fill out the form and submit
                        </div>
                    </div>
                </template>
            </ContactUs>
        </div>
        
        <site-footer/>
    </div>
</template>