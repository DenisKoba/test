<template>
  <b-form-input v-model="search" type="text" :placeholder="label"></b-form-input>
</template>

<script lang="ts">
import {
  Component, Vue, Prop, VModel,
} from 'vue-property-decorator';

@Component({})
export default class Input extends Vue {
  @VModel({ type: String }) readonly search!: string;

  @Prop({ default: '' }) label!: string;
}
</script>

<style scoped>

</style>
