import api from '@/api/api';

const endpoint = 'https://data.jsdelivr.com/v1';

export type Package = {
  version: string,
  links: {
    self: string,
    stats: string,
  }
}

export function fetchPackagesByUserName(
  payload: { search: string },
): Promise<{
  name: string,
  versions: Package[]
}> {
  return api.get(`${endpoint}/packages/npm/${payload.search}?`);
}
