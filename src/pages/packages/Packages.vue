<template>
  <div class="packages">
    <Input label="Search packages" v-model="search">
      <b-icon-search />
    </Input>
    <b-table
      class="table-responsive-sm packages__table"
      striped hover
      :items="paginatedList"
      :busy="isBusy"
      :responsive="true"
      sticky-header
      @row-clicked="showFullDetails"
    >
      <template #table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
    </b-table>
    <b-pagination-nav
      v-model="page"
      v-if="packages.length"
      :link-gen="linkGen"
      :number-of-pages="Math.ceil(packages.length/10)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Package } from '@/api/packages-api';
import Input from '@/components/ui/input/Input.vue';
import debounce from '@/helpers/debounce/debounce';
import Modal from '@/components/ui/modal/Modal.vue';

@Component({ components: { Modal, Input } })
export default class Packages extends Vue {
  search = '';

  isBusy = false;

  page = 1;

  get packages(): Package[] {
    return this.$store.state.packages.packages;
  }

  get paginatedList(): Package[] {
    const rangeStart = this.page > 1 ? (this.page - 1) * 10 : this.page;
    const rangeEnd = (rangeStart - 1) + 10;
    return this.packages.slice(rangeStart, rangeEnd);
  }

  get headers(): string[] {
    return Object.keys(this.packages);
  }

  debouncedFetch = debounce(() => this.fetchPackages(), 400);

  linkGen(pageNum: number): Package {
    return this.packages[pageNum - 1];
  }

  showFullDetails(pkg: Package): void {
    this.$modal.show(Modal, {
      package: pkg,
    }, {
      adaptive: true,
      styles: 'min-height: 300px',
    });
  }

  async fetchPackages(): Promise<void> {
    if (!this.search) return;

    this.isBusy = true;

    try {
      await this.$store.dispatch('fetchPackages', { search: this.search, page: this.page });
    } finally {
      this.isBusy = false;
    }
  }

  @Watch('search')
  handleSearch(): void {
    this.debouncedFetch();
  }
}
</script>

<style scoped lang="scss">
.packages {
  padding: 30px;

  &__table {
    max-height: calc(100vh - 200px);
    cursor: pointer;
  }
}
</style>
