/**
 * API request/response type definitions
 */

import { Pet, User } from './models';

// Generic API response wrapper
export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
    error?: ApiError;
}

export interface ApiError {
    code: string;
    message: string;
    details?: Record<string, unknown>;
}

// Pagination
export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        pageSize: number;
        totalPages: number;
        totalItems: number;
    };
}

// Pet API types
export interface GetPetsParams {
    page?: number;
    pageSize?: number;
    species?: string;
    location?: string;
    status?: string;
    search?: string;
}

export type GetPetsResponse = PaginatedResponse<Pet>;
export type GetPetResponse = ApiResponse<Pet>;

// User/Auth API types
export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: User;
    token: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    role: 'adopter' | 'rescuer';
}

export type RegisterResponse = ApiResponse<LoginResponse>;
export type GetUserResponse = ApiResponse<User>;
