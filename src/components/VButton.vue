<template>
  <button
    :class="classes"
    class="bg-dark-blue block cursor-pointer rounded-xl text-center font-bold tracking-[.20em] text-white uppercase transition-all duration-500 hover:scale-105"
    tw-merge>
    <slot />
  </button>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    size?: 'sm' | 'md' | 'lg';
    color?: 'dark-blue' | 'blue' | 'charcoal' | 'tan' | 'snow';
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    color: 'dark-blue',
  });

  const classes = computed(() => {
    return {
      'min-w-60 px-4 py-2 text-sm': props.size === 'sm',
      'min-w-80 px-8 py-4 text-lg': props.size === 'md',
      'min-w-100 px-10 py-5 text-xl': props.size === 'lg',
      'bg-dark-blue': props.color === 'dark-blue',
      'bg-main-blue': props.color === 'blue',
      'bg-main-charcoal': props.color === 'charcoal',
      'bg-main-tan': props.color === 'tan',
      'bg-snow': props.color === 'snow',
    };
  });
</script>

<style></style>
