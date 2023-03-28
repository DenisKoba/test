import { fetchPackagesByUserName, Package } from '@/api/packages-api';
import { ActionContext } from 'vuex';

export type PackagesState = {
  packages: Package[];
}

export type PackagesMutations = {
  PACKAGES_SET_LIST: (state: PackagesState, list: Package[]) => void
}

const packagesState: PackagesState = {
  packages: [],
};

const mutations: PackagesMutations = {
  PACKAGES_SET_LIST(state: PackagesState, list: Package[]) {
    state.packages.push(...list);
  },
};

const actions = {
  async fetchPackages(
    { commit }: ActionContext<unknown, unknown>,
    payload: { search: string },
  ): Promise<void> {
    const response = await fetchPackagesByUserName(payload);
    commit('PACKAGES_SET_LIST', response.versions);
  },
};

export default {
  state: packagesState,
  mutations,
  actions,
};
