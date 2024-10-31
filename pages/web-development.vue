<template>
    <div>
        <BgHeader>
            <div 
                class="bg-service relative" 
                style="background-image: url('/images/web-development-bg-1.jpg'), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));background-position: center;">
                <div class="text-white md:text-7xl text-4xl font-bold md:w-1/2 w-full md:px-10 px-5 absolute text-service">
                    Web Development
                </div>
            </div>
        </BgHeader>
        
        <div 
            class="bg-white md:grid flex flex-col-reverse" 
            style="grid-template-columns: 75fr 25fr;">
            <div class="md:px-20 px-5 md:py-10 py-5 text-black">
                <div class="w-11/12 mx-auto">
                    <div class="md:text-5xl text-xl font-bold text-left md:py-10 py-5 md:leading-14">
                        Web Development: Building Engaging and Scalable Digital Experiences
                    </div>
                    <div class="text-lg leading-9">
                        <p class="mb-7">
                            In today’s digital-first world, your website is often the first interaction potential customers have with your business. Whether it’s an e-commerce platform, a corporate website, or a web application, having a well-designed, high-performing website is critical to your organization’s success. However, building a website that balances aesthetics, functionality, and performance requires a blend of technical expertise and creative vision. Is your web presence making the rightimpression, or is it holding your business back from reaching its full potential?
                        </p>
                        <p class="mb-7">
                            At The C.A.S.E. Engineering Group, we deliver custom web development solutions that are both visually appealing and technically robust. Our team of experienced web developers and designers specializes in creating responsive, user-friendly websites that enhance user engagement and drive business growth. From the initial concept to deployment and ongoing support, we work closely with your team to ensure that your website reflects your brand, meets your business objectives, and provides a seamless experience across all devices. Whether you need a new website built from the ground up or an overhaul of an existing platform, we have the skills and expertise to bring your vision to life.
                        </p>
                        <p class="mb-7">
                            We focus on building websites that are not only aesthetically pleasing but also optimized for performance, security, and scalability. By leveraging the latest technologies and frameworks, such as HTML5, CSS3, JavaScript, and content management systems (CMS) like WordPress and Drupal, we ensure that your website is built to modern standards. Our web development services include full-stack development, mobile optimization, e-commerce solutions, API integration, and website performance optimization, ensuring that your web presence is fully equipped to meet today’s digital demands
                        </p>
                        <div class="bg-[url('/images/web-development-bg-2.jpg')] mb-10"
                            style="background-repeat: no-repeat, repeat; background-size: cover; min-height: 50vh;background-position: center;">
                        </div>
                        <div class="text-3xl font-bold text-left md:leading-14 mb-5">
                            Customized Web Solutions for Your Business Needs
                        </div>
                        <p class="mb-7">
                            At C.A.S.E., we understand that every business has unique web development needs, which is why we tailor our solutions to fit your specific requirements. Whether you’re launching a marketing website, developing a customer portal, or building an enterprise-level web application, we deliver solutions that are scalable, secure, and designed to grow with your business. We prioritize user experience (UX) and user interface (UI) design, ensuring that your website is not only functional but also easy to navigate and visually appealing to your target audience.
                        </p>
                        <p class="mb-7">
                            With a focus on performance, security, and responsiveness, our web development services ensure that your site is equipped to handle high traffic volumes, deliver fast load times, and remain secure against potential threats. Our experience across multiple industries, from government agencies to private sector clients, means we bring a wealth of knowledge to every project we undertake. Let The C.A.S.E. Engineering Group build a digital experience that sets your organization apart and provides a solid foundation for your online success.
                        </p>
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
    layout: 'serviceSubPage'
}
</script>