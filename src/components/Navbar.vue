<template>
  <nav class="border-b-4 border-black bg-brutal-bg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-4xl font-black uppercase tracking-tighter hover:animate-jitter inline-block group">
            <span class="bg-black text-brutal-green px-2 mr-1">NEO</span>
            <span>AGENCY</span>
          </router-link>
        </div>
        
        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <router-link 
            to="/" 
            class="text-xl font-bold border-2 border-transparent hover:border-black hover:bg-brutal-magenta hover:text-white px-3 py-1 transition-colors"
          >
            HOME
          </router-link>
          <router-link 
            to="/project/1" 
            class="text-xl font-bold border-2 border-transparent hover:border-black hover:bg-brutal-blue px-3 py-1 transition-colors"
          >
            PROJECTS
          </router-link>
          <router-link 
            to="/contact" 
            class="text-xl font-bold border-2 border-transparent hover:border-black hover:bg-brutal-orange px-3 py-1 transition-colors"
          >
            CONTACT
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button class="border-4 border-black p-2 bg-brutal-yellow brutal-shadow" @click="isOpen = !isOpen">
            <span class="font-bold">MENU</span>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden border-t-4 border-black bg-white">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
        <router-link to="/" class="text-2xl font-black border-b-4 border-black py-4 hover:bg-brutal-magenta hover:text-white px-4">HOME</router-link>
        <router-link to="/project/1" class="text-2xl font-black border-b-4 border-black py-4 hover:bg-brutal-blue px-4">PROJECTS</router-link>
        <router-link to="/contact" class="text-2xl font-black py-4 hover:bg-brutal-orange px-4">CONTACT</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>
