import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
// ─── Types ─────────────────────────────────────────────────────────────────────

export interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  headers?: Record<string, string>;
}

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  errors?: Record<string, string[]>;
}

// ─── Error Normalizer ──────────────────────────────────────────────────────────

export function normalizeError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    return {
      message:
        error.response?.data?.message ?? error.message ?? "Request failed",
      status: error.response?.status,
      code: error.code,
      errors: error.response?.data?.errors,
    };
  }
  if (error instanceof Error) {
    return { message: error.message };
  }
  return { message: "Unknown error occurred" };
}

// ─── Create Axios Instance ─────────────────────────────────────────────────────

export function createApiClient(config?: ApiClientConfig): AxiosInstance {
  return axios.create({
    // Gunakan origin yang sama (tidak perlu baseURL)
    // Semua request relatif terhadap window.location.origin
    baseURL: config?.baseURL ?? window.location.origin,
    timeout: config?.timeout ?? 15_000,
    withCredentials: true, // kirim & terima HTTP-only cookie otomatis
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...config?.headers,
    },
  });
}

// ─── HTTP Methods Wrapper ──────────────────────────────────────────────────────

export function createHttpMethods(instance: AxiosInstance) {
  async function request<T>(
    method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> {
    try {
      const res = await instance.request<ApiResponse<T>>({
        method,
        url,
        ...(method === "GET" ? { params: data } : { data }),
        ...config,
      });
      return res.data;
    } catch (error) {
      throw normalizeError(error);
    }
  }

  return {
    get: <T>(url: string, params?: unknown, config?: AxiosRequestConfig) =>
      request<T>("GET", url, params, config),

    post: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      request<T>("POST", url, body, config),

    put: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      request<T>("PUT", url, body, config),

    patch: <T>(url: string, body?: unknown, config?: AxiosRequestConfig) =>
      request<T>("PATCH", url, body, config),

    delete: <T>(url: string, config?: AxiosRequestConfig) =>
      request<T>("DELETE", url, undefined, config),
  };
}

// ─── Default Instance & http ───────────────────────────────────────────────────

export const apiInstance = createApiClient();

export const http = createHttpMethods(apiInstance);
