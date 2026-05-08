<template>
  <div class="flex flex-col gap-24">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex flex-col justify-center items-center text-center mt-12 border-4 border-black p-8 bg-brutal-green brutal-shadow">
      <h1 class="text-7xl md:text-9xl font-black z-10 leading-none -mt-12 text-black mix-blend-difference drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">
        WE DESIGN.<br/>YOU PAY.<br/>NO COMPLAINTS.
      </h1>
      
      <div class="absolute -bottom-8 -right-8 w-48 h-48 bg-brutal-magenta rounded-full border-4 border-black brutal-shadow z-0 animate-pulse"></div>
      <div class="absolute -top-12 -left-4 w-32 h-32 bg-brutal-blue border-4 border-black brutal-shadow z-0 rotate-12"></div>
      
      <div class="mt-16 z-10 flex gap-6 flex-wrap justify-center">
        <BrutalButton text="HIRE US NOW" size="lg" colorVariant="magenta" @click="$router.push('/contact')" />
        <BrutalButton text="VIEW WORK" size="lg" colorVariant="white" @click="scrollToWork" />
      </div>
    </section>

    <!-- Grid Section -->
    <section id="work" class="mt-12">
      <div class="flex items-end justify-between mb-8 border-b-4 border-black pb-4">
        <h2 class="text-5xl md:text-7xl font-black">OUR CHAOS</h2>
        <span class="text-2xl font-bold bg-black text-white px-2 hidden sm:block">SELECTED PROJECTS</span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <BrutalCard v-for="project in projects" :key="project.id" class="group cursor-pointer" @click="$router.push(`/project/${project.id}`)">
          <template #header>
            <div class="flex justify-between items-center">
              <span class="font-black text-2xl text-white">{{ project.id.toString().padStart(3, '0') }}</span>
              <span class="bg-white text-black px-2 py-1 font-bold text-sm uppercase border-2 border-black">{{ project.category }}</span>
            </div>
          </template>
          
          <template #body>
            <div class="h-64 border-4 border-black mb-6 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-300" :style="{ backgroundImage: `url(${project.image})` }"></div>
            <h3 class="text-4xl font-black mb-2 leading-tight">{{ project.title }}</h3>
            <p class="text-xl font-bold border-l-4 border-brutal-orange pl-4">{{ project.description }}</p>
          </template>
          
          <template #footer>
            <div class="flex justify-between items-center font-bold text-xl">
              <span>{{ project.year }}</span>
              <span class="underline decoration-4 group-hover:bg-black group-hover:text-brutal-orange px-2 transition-colors">VIEW PROJECT &rarr;</span>
            </div>
          </template>
        </BrutalCard>
      </div>
    </section>
    
    <!-- Marquee Banner -->
    <section class="border-y-4 border-black py-4 bg-brutal-blue overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <div class="whitespace-nowrap">
        <span class="text-4xl font-black uppercase inline-block animate-marquee mr-8">
          +++ BREAKING THE RULES +++ MAKES NO SENSE +++ JUST BUY IT +++ BREAKING THE RULES +++ MAKES NO SENSE +++ JUST BUY IT +++
        </span>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BrutalButton from '../components/BrutalButton.vue';
import BrutalCard from '../components/BrutalCard.vue';

const scrollToWork = () => {
  const el = document.getElementById('work');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const projects = ref([
  {
    id: 1,
    title: 'ACID RAIN FESTIVAL',
    category: 'BRANDING',
    year: '2025',
    description: 'Visual identity for an underground music festival that got canceled twice.',
    image: 'https://images.unsplash.com/photo-1540039155732-684735035727?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'CYBER-TRASH E-COMMERCE',
    category: 'WEB DESIGN',
    year: '2026',
    description: 'An online store where nothing is actually for sale.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'NEON NIGHTMARE APP',
    category: 'UI/UX',
    year: '2024',
    description: 'A meditation app that aggressively yells at you to relax.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'CONCRETE JUNGLE',
    category: 'CAMPAIGN',
    year: '2026',
    description: 'Selling luxury apartments by showing photos of abandoned warehouses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  }
]);
</script>
