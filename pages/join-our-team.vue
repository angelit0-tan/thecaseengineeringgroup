<template>
    <div>
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/join-our-team-bg-1.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)); background-position: center;">
                <div class="text-white font-bold md:w-1/2 w-full md:px-10 px-5 absolute text-service">
                    <div class="md:text-7xl text-2xl uppercase mb-3">
                        Join our team
                    </div>
                    <p class="md:text-2xl text-sm">
                        At The C.A.S.E. Engineering Group, we are always seeking talented, functional experts who are 
                        passionate about solving complex challenges and driving innovation. If you’re ready to make a 
                        meaningful impact across industries, we encourage you to apply and grow with us!
                    </p>
                </div>
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse">
            <div class="md:px-20 px-5 md:py-10 py-5 text-black">
                <div class="w-11/12 mx-auto mb-7">
                    <div class="md:text-4xl text-2xl font-bold text-center md:py-10 py-5 md:leading-14">
                        Join The C.A.S.E Engineering Group Today!
                    </div>
                    <div class="text-lg leading-9 md:grid grid-cols-2 flex flex-col md:gap-5 gap-9">
                        <div class="flex flex-col justify-between gap-5">       
                            <div>
                                <div class="flex items-center md:text-2xl text-xl font-bold mb-2 gap-3">
                                    <img src="/images/join-our-team-icon-1.png"/>                                    
                                    <span>Analytic Skills</span>
                                </div>                                 
                                <p>                                     
                                    Do you go out of your way to discover real solutions for clients that help them see real-world solutions for their problems?
                                </p>
                            </div>                     
                            <div>                            
                                <div class="flex items-center md:text-2xl text-xl font-bold mb-2 gap-3">                                
                                    <img src="/images/join-our-team-icon-2.png"/>
                                    <span>Interpersonal Skills</span>                                     
                                </div>                                
                                <p>                                     
                                    Do you go out of your way to discover real solutions for clients that help them see real-world solutions for their problems? 
                                </p>
                            </div>
                            <div>
                                <div class="flex items-center md:text-2xl text-xl font-bold mb-2 gap-3">                         
                                    <img src="/images/join-our-team-icon-3.png"/>
                                    <span>Inquisitive Skills</span>   
                                </div>      
                                <p>                                     
                                    Have you gained an in-depth knowledge of the latest technology challenges, trends, and solutions in the marketplace?
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src="/images/join-our-team-bg-2.jpg" class="rounded-md"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full bg-lighblue">
            <ContactUs
                is-attachment-required
                class="py-16 px-4">
                <template>
                    <div class="mb-12 text-center">
                        <div class="mb-3 md:w-4/5 w-full mx-auto">
                            <span class="font-bold md:text-3xl text-xl">
                                Please submit your resume for consideration.
                            </span>
                        </div>
                    </div>
                </template>
            </ContactUs>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'subPage'
}
</script>