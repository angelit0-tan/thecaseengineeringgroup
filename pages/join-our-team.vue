<template>
    <div>
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/join-our-team-bg-1.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))">
                <div class="text-white md:text-7xl text-4xl font-bold md:w-1/2 w-full md:px-10 px-5 absolute text-service">
                    JOIN OUR TEAM
                    <p class="text-lg leading-9">
                        At The C.A.S.E. Engineering Group, we are always seeking talented, functional experts who are 
                        passionate about solving complex challenges and driving innovation. If you’re ready to make a 
                        meaningful impact across industries, we encourage you to apply and grow with us!
                    </p>
                </div>
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse" 
            style="grid-template-columns: 75fr 25fr;">
            <div class="md:px-20 px-5 md:py-10 py-5 text-black">
                <div class="w-11/12 mx-auto">
                    <div class="md:text-5xl text-xl font-bold text-left md:py-10 py-5 md:leading-14">
                        Join The C.A.S.E Engineering Group Today!
                    </div>
                    <div class="text-lg leading-9 grid grid-cols-2 gap-2">
                        <div>                            
                            <div class="flex items-center text-3xl font-bold">
                                <img src="/images/join-our-team-icon-1.png"/>                                    
                                <span class="pl-2">Analytic Skills</span>
                            </div>                                 
                            <p class="mb-3">                                     
                                Do you go out of your way to discover real solutions for clients that help them see real-world solutions for their problems?
                            </p>
                            <div class="flex items-center text-3xl font-bold">                                
                                <img src="/images/join-our-team-icon-2.png"/>
                                <span class="pl-2">Interpersonal Skills</span>                                     
                            </div>                                
                            <p class="mb-3">                                     
                                Do you go out of your way to discover real solutions for clients that help them see real-world solutions for their problems? 
                            </p>
                            <div class="flex items-center text-3xl font-bold">                         
                                    <img src="/images/join-our-team-icon-3.png"/>
                                    <span class="pl-2">Inquisitive Skills</span>   
                            </div>      
                            <p>                                     
                                Have you gained an in-depth knowledge of the latest technology challenges, trends, and solutions in the marketplace?
                            </p>   
                        </div>
                        <img src="/images/join-our-team-bg-2.jpg" class="float-right" />
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