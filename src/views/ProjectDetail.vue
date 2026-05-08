<template>
  <div class="animate-fadeIn">
    <!-- Header -->
    <header class="border-b-8 border-black pb-8 mb-12">
      <div class="flex items-center gap-4 mb-4">
        <span class="bg-black text-brutal-green text-2xl font-black px-4 py-2 border-4 border-black brutal-shadow">PRJ-{{ projectId.toString().padStart(3, '0') }}</span>
        <span class="text-2xl font-bold bg-brutal-yellow px-2 border-2 border-black">2026</span>
      </div>
      <h1 class="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none break-words">
        PROJECT NAME THAT IS VERY LONG
      </h1>
    </header>

    <!-- Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
      
      <!-- Left Column: Info -->
      <div class="lg:col-span-4 space-y-12">
        <div class="bg-brutal-blue border-4 border-black p-6 brutal-shadow">
          <h3 class="text-3xl font-black mb-4 border-b-4 border-black pb-2">THE BRIEF</h3>
          <p class="text-xl font-bold leading-relaxed">
            The client asked for something clean and modern. We gave them pure chaos. They hated it at first, but then it won 3 awards, so now they pretend it was their idea all along.
          </p>
        </div>

        <div class="border-4 border-black p-6 bg-white brutal-shadow">
          <ul class="space-y-4 text-xl font-bold">
            <li class="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>CLIENT:</span>
              <span class="uppercase">MegaCorp Inc.</span>
            </li>
            <li class="flex justify-between border-b-2 border-dashed border-black pb-2">
              <span>ROLE:</span>
              <span class="uppercase">Art Direction</span>
            </li>
            <li class="flex justify-between pb-2">
              <span>TIMELINE:</span>
              <span class="uppercase">2 Weeks</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Right Column: Images -->
      <div class="lg:col-span-8 space-y-12">
        <div class="border-4 border-black brutal-shadow bg-white p-4">
          <img src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200" alt="Project Hero" class="w-full h-auto border-4 border-black grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="border-4 border-black brutal-shadow bg-white p-2 transform rotate-2 hover:rotate-0 transition-transform">
            <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800" alt="Detail 1" class="w-full h-auto border-4 border-black" />
          </div>
          <div class="border-4 border-black brutal-shadow bg-white p-2 transform -rotate-2 hover:rotate-0 transition-transform">
            <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800" alt="Detail 2" class="w-full h-auto border-4 border-black" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Next Project -->
    <div class="mt-24 border-t-4 border-black pt-12 flex justify-between items-center">
      <router-link to="/" class="text-3xl font-black hover:bg-black hover:text-white px-4 py-2 border-4 border-transparent hover:border-black transition-colors">
        &larr; BACK
      </router-link>
      <router-link to="/project/2" class="text-4xl md:text-6xl font-black hover:text-brutal-orange transition-colors">
        NEXT PROJECT &rarr;
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const projectId = computed(() => route.params.id || 1);
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
