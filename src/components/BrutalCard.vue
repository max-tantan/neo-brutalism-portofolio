<template>
  <div class="brutal-shadow border-4 border-black bg-white flex flex-col h-full">
    <!-- Header Slot -->
    <div v-if="$slots.header" class="border-b-4 border-black p-4 bg-brutal-blue">
      <slot name="header"></slot>
    </div>
    
    <!-- Body Slot -->
    <div class="p-6 flex-grow">
      <slot name="body"></slot>
    </div>
    
    <!-- Footer Slot -->
    <div v-if="$slots.footer" class="border-t-4 border-black p-4 bg-brutal-orange mt-auto">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
// BrutalCard.vue - Container modular
</script>
