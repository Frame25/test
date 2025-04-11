<template>
  <div class="text-main-charcoal flex items-start overflow-hidden rounded-lg bg-white">
    <div class="flex h-full w-2/5 shrink-0 flex-col">
      <img
        v-for="image in props.images"
        :key="image"
        :src="image"
        :alt="props.title"
        class="h-full w-full object-cover" />
    </div>
    <div class="px-8 py-10">
      <v-heading tag="h3" size="lg" class="mb-2 lg:mb-3">{{ props.title }}</v-heading>
      <ul class="marker:text-main-tan mb-2 list-inside list-disc leading-[26px] lg:mb-3">
        <li v-for="item in props.list" :key="item" class="">
          {{ item }}
        </li>
      </ul>
      <p v-for="description in props.description" :key="description" class="mb-2 lg:mb-3">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import VHeading from './VHeading.vue';

  interface Props {
    title: string;
    description: string[];
    list: string[];
    images: string[];
  }

  const props = withDefaults(defineProps<Props>(), {
    title: '',
    description: () => [],
    list: () => [],
    images: () => [],
  });
</script>

<style></style>
