interface BaseAPIResponse<R = unknown, E = unknown> {
  code: number;
  success: string;
  errors: E;
  data: R;
  metadata?: IPagination;
}

interface IPagination {
  page: number;
  limit: number;
  total_items: number;
  total_page: number;
}

interface IParamsPagination {
  limit?: number | null;
  page?: number | null;
  sort?: string | null;
  order_by?: string | null;
  phone_number?: string;
}
