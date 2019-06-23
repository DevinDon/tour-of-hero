export interface BaseResponse<T = any> {
  status: boolean;
  message?: string;
  content?: T;
}
