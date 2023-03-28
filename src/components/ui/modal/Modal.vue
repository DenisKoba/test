<template>
  <b-card
    class="modal-card"
    border-variant="primary"
    :header="package.version"
    header-bg-variant="primary"
    header-text-variant="white"
    align="center"
  >
    <b-card-text v-for="(link, index) in package.links" :key="link">
      Link {{ index }}: <a :href="link" target="_blank">{{ link }}</a>
    </b-card-text>
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Package } from '@/api/packages-api';

@Component({})
export default class Modal extends Vue {
  @Prop({ default: () => ({}) }) package!: Package;
}
</script>

<style scoped>
.modal-card {
  height: 100% !important;
}
</style>
