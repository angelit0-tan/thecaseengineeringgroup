<template>
    <div>
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/cyber-security-bg-1.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))">
                <div>
                    <div class="text-white md:text-7xl text-4xl font-bold md:w-108 w-full md:px-10 md:px-10 px-5 absolute text-service flex-wrap">
                        Cybersecurity
                        <p class="text-lg leading-9">
                            Protecting the confidentiality, integrity, and availability of 
                            your data while safeguarding your organization’s critical 
                            assets is not just a priority, it’s a strategic imperative.
                        </p>
                    </div>
                </div>
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse" 
            style="grid-template-columns: 75fr 25fr;">
            <div class="md:px-20 px-5 md:py-10 py-5 text-black">
                <div class="w-11/12 mx-auto">
                    <div class="md:text-5xl text-xl font-bold text-left md:py-10 py-5 md:leading-14">
                        Innovative Cybersecurity Resilience:
                        <br>
                        Beyond Compliance and Standards
                    </div>
                    <div class="text-lg leading-9">
                        <p class="mb-7">
                            Recognizing the importance of embracing innovation to stay competitive, organizations must equally prioritize ensuring the confidentiality, integrity, and availability of data associated with that innovation. In the ever-evolving landscape of technology, threat actors continually advance their methods to gain access, manipulate, and/or prevent access to valuable information. At the C.A.S.E. Engineering Group (C.A.S.E.), we stand as a steadfast partner, committed to reducing cybersecurity risk for organizations by offering expertise that goes beyond industry standards and compliance requirements. Our approach is dedicated to fortifying your digital resilience, ensuring your organization not only keeps pace with technology advancements but stays ahead of potential threats.
                        </p>
                        <div class="bg-[url('/images/cyber-security-bg-2.jpg')] mb-10"
                            style="background-repeat: no-repeat, repeat; background-size: cover; min-height: 50vh;background-position: center;">
                        </div>
                        <p class="mb-7">
                            Our approach transcends conventional security measures. We specialize in aligning organizations with stringent regulatory frameworks, ensuring compliance with pivotal mandates associated with the Federal Information Security Management Act (FISMA), the Federal Information Security Modernization Act of 2014, National Institute of Standards and Technology, White House Office of Management and Budget (OMB), Department of Homeland Security (DHS) Binding Operating Directives (BODs), and relevant standards and regulations specific to your organization’s industry. We are here to assist you in developing, implementing, and maintaining cybersecurity strategies, policies and activities that not only meet industry standards, but also fulfill stringent governance, risk, and compliance requirements. Every facet of our cybersecurity approach is intricately woven to exceed industry standards and compliance expectations.
                        </p>
                        <div class="text-3xl font-bold text-left md:leading-14 my-5">
                            Why Chose C.A.S.E. for Cybersecurity?
                        </div>
                        <div class="flex mb-5">
                            <div class="flex-none pr-6 py-2">                                
                                <img src="/images/cyber-security-icon-1.png" class=""/>      
                            </div>              
                            <p>
                                <span class="text-darkblue font-bold">Strategic Veteran Partnership:</span> 
                                As a Service-Disabled Veteran-Owned Small Business, we inherently understand and appreciate the need to operate securely. When you choose our company, you aren’t just hiring people; you’re gaining strategic partners committed to fortifying your cybersecurity posture.
                            </p>   
                        </div>
                        <div class="flex mb-5">
                            <div class="flex-none pr-6 py-2">                                
                                <img src="/images/cyber-security-icon-2.png" class=""/>      
                            </div>              
                            <p>
                                <span class="text-darkblue font-bold">Competitive Rates, Unmatched Knowledge:</span> 
                                Our rates are competitive, but our knowledge is insurmountable. We bring a wealth of expertise that goes beyond mere compliance, taking a proactive stance against emerging threats and vulnerabilities.
                            </p>   
                        </div>
                        <div class="flex mb-5">
                            <div class="flex-none pr-6 py-2">                                
                                <img src="/images/cyber-security-icon-3.png" class=""/>      
                            </div>              
                            <p>
                                <span class="text-darkblue font-bold">Holistic Alignment:</span> 
                                We go beyond the basics, providing your organization with a multi-layered cybersecurity strategy that seamlessly integrates with federal mandates.
                            </p>   
                        </div>
                        <div class="flex mb-5">
                            <div class="flex-none pr-6 py-2">                                
                                <img src="/images/cyber-security-icon-4.png" class=""/>      
                            </div>              
                            <p>
                                <span class="text-darkblue font-bold">Innovative Resilience:</span> 
                                Our commitment to innovation ensures that your cybersecurity measures evolve to stay ahead of emerging threats, fostering resilience in the face of evolving challenges.
                            </p>   
                        </div>
                        <div class="flex mb-5">
                            <div class="flex-none pr-6 py-2">                                
                                <img src="/images/cyber-security-icon-5.png" class=""/>      
                            </div>              
                            <p>
                                <span class="text-darkblue font-bold">Collaborative Defense:</span> 
                                We view cybersecurity as a collaborative effort, working hand-in-hand with your team to strengthen your digital defenses. Choose C.A.S.E. for a partnership that prioritizes your organization’s security and success. Contact us today to fortify your cybersecurity strategy, policy and activities and embark on a journey towards unparalleled protection.
                            </p>   
                        </div>
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