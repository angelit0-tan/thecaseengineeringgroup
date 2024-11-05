<template>
    <div v-show="isReady">
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/about-us-bg.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-position: center;">
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse" 
            style="grid-template-columns: 70fr 30fr;">
            <div>
                <div class="md:px-20 px-5 md:py-20 py-5 text-black">
                    <div class="w-11/12 mx-auto">
                        <div class="text-lg leading-9">                              
                            <p>                        
                                <img class="float-right ml-1" src="/images/sba2.png" />  
                                At The C.A.S.E. Engineering Group, we specialize in delivering program support and advisory services that empower organizations to overcome complex challenges. Founded on expertise in Cybersecurity, Architecture, Strategy, and Engineering, we have grown into a versatile team capable of providing dynamic solutions across a wide range of industries. While our roots are in information technology,
                                <img class="float-left mt-2 mr-2" src="/images/sdvosb2.png" style="shape-outside: circle();"/>
                                our impact goes far beyond. Through our innovative approach to research and 
                                problem solving and leveraging an extensive partner network, we deliver solutions 
                                in areas outside of IT as well. From optimizing operations and enhancing 
                                infrastructure to ensuring regulatory compliance, we tailor our approach to meet 
                                the unique needs of each client, no matter the industry. As a Service Disabled 
                                Veteran Owned Small Business and a proud participant in the Small Business 
                                Administration’s 8(a) Small Business Development Program, we are uniquely 
                                positioned to help your organization stay ahead of the curve by providing secure, scalable, and strategic solutions. Whether designing future-proof systems, crafting detailed roadmaps, or engineering innovative solutions, we ensure that each outcome is aligned with your business goals and built for long-term success. At The C.A.S.E. Engineering Group, we are committed to guiding you through today’s challenges with insight and precision. With our full range of advisory services, program support, and hands-on assistance, we partner with you to ensure your organization’s continued growth and resilience. Contact us today to discuss the challenges your organization is facing, and let us craft the solutions that will drive your success.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="bg-lighblue">
                    <div class="w-11/12 mx-auto">
                        <ContactUs
                            isCompanyRequired
                            isJobTitleRequired
                            class="py-16 px-4">
                            <template>
                                <div class="mb-12 text-center">
                                    <div class="mb-3 md:w-4/5 w-full mx-auto">
                                        <span class="font-bold md:text-3xl text-xl">Contact us today to discuss the challenges your organization is facing, and let us craft the solutions that will drive your success.</span>
                                    </div>
                                </div>
                            </template>
                        </ContactUs>
                    </div>
                </div>
                
            </div>
            
            <div class="bg-black py-10">
                <div class="text-white md:text-3xl text-xl font-bold px-10">
                    Core Advisory and Assistance Service Areas
                </div>
                <div>
                    <hr class="border-white w-5/6 mx-auto my-5"/>
                </div>
                <RightMenu is-sub-page/>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    layout: 'subPage',
    data(){
        return {
            isReady: false
        }
    },
    mounted(){ 
        setTimeout(() => {
            this.isReady = true;
        }, 500)
    }
}
</script>