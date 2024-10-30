<template>
    <div>
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/about-us-bg.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))">
                <div class="text-white md:text-7xl text-4xl font-bold md:w-1/2 w-full md:px-10 px-5 absolute text-service">
                    
                </div>
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse" 
            style="grid-template-columns: 75fr 25fr;">
            <div class="md:px-20 px-5 md:py-10 py-5 text-black">
                <div class="w-11/12 mx-auto">
                    <div class="text-lg leading-9">                              
                        <p class="mb-7">                        
                            <img class="float-right pr-1" src="/images/sba2.png" />  
                            At The C.A.S.E. Engineering Group, we specialize in delivering program support and advisory services that empower organizations to overcome complex challenges. Founded on expertise in Cybersecurity, Architecture, Strategy, and Engineering, we have grown into a versatile team capable of providing dynamic solutions across a wide range of industries. While our roots are in information technology,                                                    
                            <img class="float-left pr-2" src="/images/sdvosb2.png" />
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
            <div class="bg-black py-10">
                <div class="text-white text-3xl font-bold px-10">
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
    layout: 'serviceSubPage'
}
</script>