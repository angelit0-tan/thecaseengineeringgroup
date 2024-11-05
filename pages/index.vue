<template>
  <div>
       <site-header/>
       <BgHeader>
           <div class="bg-service" 
            style="background-image: url('/images/home-bg.jpg'), linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4))">
               <div class="md:py-32 py-10">
                   <div class="flex flex-col gap-10 justify-center mb-8 items-center">
                       <div class="text-white md:text-7xl text-2xl font-bold px-2 text-center">
                           What Problem Do You Need Solved?
                       </div>
                       <div class="md:w-2/4 w-full px-2">
                           <div class="w-full border border-white rounded-full">
                            <NuxtLink to="contact-us">
                              <div class="flex items-center rounded-full w-full text-white bg-black p-4 gap-3">
                                <img src="/images/search.png"/>
                                <input type="text" class="w-full bg-black" placeholder="Submit your problem here..."/>
                              </div>
                            </NuxtLink>
                           </div>
                       </div>
                       <div class="mb-2">
                           <span class="border border-white px-8 py-3 text-white bg-darkgreen rounded-full"> Core Advisory Areas </span>
                       </div>
                   </div>
                   <RightMenu/>
               </div>
           </div>
        </BgHeader>
       <div class="container mx-auto pt-10 pb-20">
           <div class="text-white md:text-5xl text-xl font-bold text-center md:py-10 pb-5">
               Who We Are and Why It Matters
           </div>
           <div class="w-4/5 mx-auto">
            <!-- <img src="https://ypfs3.s3.us-west-2.amazonaws.com/photos/STp3MC20tI0jLYFXbkuOIM0CVjp6L5G9tw03jmWE.gif" class="rounded-lg"/> -->
            <video autoplay controls width="100%">
              <source src="https://ypfs3.s3.us-west-2.amazonaws.com/videos/672a3944395d8.mp4" type="video/mp4" />
            </video>
           </div>
       </div>
       <div 
          class="pt-10 pb-20" 
          style="background-image: linear-gradient(92.68deg, #1B5CA6 0%, #4597C6 97.28%);">
          <div class="text-white md:text-5xl text-xl font-bold text-center md:py-10 pb-5 md:leading-14">
            North American Industry Classification System <br/>(NAICS) and Business Classification
          </div>
          <div class="flex flex-wrap justify-center md:gap-y-20 md:gap-x-8 gap-5 text-white text-center w-4/5 mx-auto md:text-xl text-base font-bold text-balance leading-11">
            <div class="bg-black rounded-lg md:p-6 p-2 w-80"
              v-for="industry in industries" :key="industry.id">
              <a :href="industry.link" target="_blank" class="flex flex-col h-full">
                <div>
                  {{ industry.id }}
                </div>
                <div class="mt-auto">
                    {{ industry.name }}
                </div>
              </a>
            </div>
          </div>
       </div>
        <site-footer/>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        industries:[{
          id: '541330',
          name: 'Engineering Services',
          link: 'https://www.naics.com/naics-code-description/?code=541330&v=2022'
        },{
          id: '541511',
          name: 'Customer Computer Programming Services',
          link: 'https://www.naics.com/naics-code-description/?code=541511&v=2022'
        },{
          id: '541512',
          name: 'Computer Systems Design Services',
          link: 'https://www.naics.com/naics-code-description/?code=541330&v=2022'
        },{
          id: '541513',
          name: 'Computer Facilities Management Services',
          link: 'https://www.naics.com/naics-code-description/?code=541513&v=2022'
        },
        {
          id: '541519',
          name: 'Other Computer Related Services',
          link: 'https://www.naics.com/naics-code-description/?code=541519&v=2022'
        },{
          id: '541611',
          name: 'Administrative Management and General',
          link: 'https://www.naics.com/naics-code-description/?code=541611&v=2022'
        },{
          id: '519290',
          name: 'Web Search Portals and All Other Information Services',
          link: 'https://www.naics.com/naics-code-description/?code=541611&v=2022'
        },{
          id: '541990',
          name: 'All Other Professional, Scientific, and Technical Services',
          link: 'https://www.naics.com/naics-code-description/?code=541990&v=2022'
        },{
          id: '541618',
          name: 'Other Management Consulting Services',
          link: 'https://www.naics.com/naics-code-description/?code=541618&v=2022'
        },{
          id: '611420',
          name: 'Computer Training',
          link: 'https://www.naics.com/naics-code-description/?code=611420&v=2022'
        },{
          id: '541110',
          name: 'Offices of Lawyers',
          link: 'https://www.naics.com/naics-code-description/?code=541110&v=2022'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>