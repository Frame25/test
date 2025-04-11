<template>
  <div class="px-4 py-16 lg:px-20 lg:py-27">
    <v-heading size="xl" class="text-dark-blue mx-auto mb-10 max-w-3xl text-center lg:mb-20">
      We make creative media that <span class="text-main-blue">adds value</span>
    </v-heading>

    <div class="mb-10 grid grid-cols-1 gap-4 lg:mb-20 lg:grid-cols-3 lg:gap-8">
      <service-card
        v-for="service in SERVICES"
        :key="service.title"
        :title="service.title"
        :description="service.description"
        :list="service.list"
        :images="service.images" />
    </div>

    <v-button class="mx-auto">Get started</v-button>
  </div>
</template>

<script lang="ts" setup>
  import { SERVICES } from '@/lib/constants';

  import ServiceCard from './ServiceCard.vue';
  import VButton from './VButton.vue';
  import VHeading from './VHeading.vue';
</script>

<style></style>
