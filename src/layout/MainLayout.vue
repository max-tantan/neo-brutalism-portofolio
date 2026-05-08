<template>
  <div class="min-h-screen flex flex-col bg-brutal-bg overflow-x-hidden selection:bg-brutal-magenta selection:text-white relative">
    <!-- Noise Overlay -->
    <div class="bg-noise"></div>

    <!-- Custom Cursor -->
    <div 
      class="hidden lg:flex fixed top-0 left-0 w-12 h-12 pointer-events-none z-[10000] justify-center items-center text-6xl font-black text-black drop-shadow-[2px_2px_0_rgba(255,0,245,1)]"
      :style="{ transform: `translate3d(${x - 24}px, ${y - 24}px, 0)` }"
    >
      +
    </div>

    <Navbar />
    
    <main class="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer class="relative z-10" />
  </div>
</template>

<script setup>
import { useMouse } from '@vueuse/core';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

const { x, y } = useMouse({ type: 'client' });
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
