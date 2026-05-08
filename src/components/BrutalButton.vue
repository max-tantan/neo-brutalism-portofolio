<template>
  <button
    :class="[
      'brutal-shadow border-4 border-black font-black uppercase tracking-wider',
      colorClass,
      sizeClass
    ]"
    @click="handleClick"
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

const emit = defineEmits(['click']);

const playClickSound = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Fail silently
  }
};

const handleClick = (e) => {
  playClickSound();
  emit('click', e);
};

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
