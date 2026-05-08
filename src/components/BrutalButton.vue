<template>
  <button
    :class="[
      'brutal-shadow border-4 border-black font-black uppercase tracking-wider',
      colorClass,
      sizeClass
    ]"
    @click="$emit('click')"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  colorVariant: {
    type: String,
    default: 'green',
    validator: (value) => ['green', 'magenta', 'orange', 'blue', 'white'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
});

defineEmits(['click']);

const colorClass = computed(() => {
  const map = {
    green: 'bg-brutal-green text-black',
    magenta: 'bg-brutal-magenta text-white',
    orange: 'bg-brutal-orange text-black',
    blue: 'bg-brutal-blue text-black',
    white: 'bg-white text-black'
  };
  return map[props.colorVariant] || map.green;
});

const sizeClass = computed(() => {
  const map = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-xl'
  };
  return map[props.size] || map.md;
});
</script>
