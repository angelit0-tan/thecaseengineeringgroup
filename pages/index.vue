<template>
  <div>
       <site-header/>
       <div>
           <div class="bg-[url('/images/home-bg.jpg')]" style=" background-repeat: no-repeat, repeat; background-size: cover;">
               <div class="py-32">
                   <div class="flex flex-col gap-10 justify-center mb-8 items-center">
                       <div class="text-white text-6xl font-bold">
                           What Problem Do You Need Solved?
                       </div>
                       <div class="w-2/4">
                           <div class="w-full border border-white rounded-full">
                               <input type="text" class="rounded-full w-full text-white bg-black px-4 py-2" placeholder="Submit your problem here..."/>
                           </div>
                       </div>
                       <div>
                           <button class="border border-white px-8 py-3 text-white bg-darkgreen rounded-full"> Core Advisory Areas </button>
                       </div>
                   </div>
                   <RightMenu/>
               </div>
           </div>
       </div>
       <div class="container mx-auto">
           <div class="text-white text-4xl font-bold text-center py-10">
               Who We Are and Why It Matters
           </div>
       </div>
       <div class="text-white">
           test links

       </div>
       <div>
           <site-footer/>
       </div>
  </div>
</template>
<style lang="scss" scoped>

</style>