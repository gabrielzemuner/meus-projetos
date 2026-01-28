export type Link = {
  url: string | null;
  label: string;
  active: boolean;
};

export type MetaPagination = {
  links: Link[];
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
};

export type Pagination<T> = {
  data: T[];
  meta: MetaPagination;
};
