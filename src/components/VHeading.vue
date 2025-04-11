<template>
  <component :is="tag" :class="classes" class="font-bold" tw-merge>
    <slot />
  </component>
</template>

<script lang="ts" setup>
  import { computed } from 'vue';

  interface Props {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }

  const props = withDefaults(defineProps<Props>(), {
    tag: 'h1',
    size: 'md',
  });

  const classes = computed(() => {
    return {
      'text-sm': props.size === 'sm',
      'text-md': props.size === 'md',
      'text-xl leading-[28px] lg:text-3xl lg:leading-[40px]': props.size === 'lg',
      'text-[32px] leading-[40px] lg:text-[56px] lg:leading-[55px] tracking-[-1%]':
        props.size === 'xl',
    };
  });
</script>

<style></style>
