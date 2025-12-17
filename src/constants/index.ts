/**
 * Application constants
 */

export const APP_NAME = 'AdoPet TJ';
export const APP_VERSION = '0.1.0';

// API configuration
export const API_BASE_URL =
    import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = parseInt(
    import.meta.env.VITE_API_TIMEOUT || '30000',
    10
);

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 12;
export const MAX_PAGE_SIZE = 50;

// Feature flags
export const ENABLE_MOCK_DATA =
    import.meta.env.VITE_ENABLE_MOCK_DATA === 'true';
export const ENABLE_DEBUG_MODE =
    import.meta.env.VITE_ENABLE_DEBUG_MODE === 'true';

// Pet species options
export const PET_SPECIES = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'bird', label: 'Bird' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'other', label: 'Other' },
] as const;

// User roles
export const USER_ROLES = {
    ADOPTER: 'adopter' as const,
    RESCUER: 'rescuer' as const,
    ADMIN: 'admin' as const,
};

// Routes
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    PET_LISTING: '/pets',
    PET_DETAIL: '/pets/:id',
    PROFILE: '/profile',
    DASHBOARD: '/dashboard',
} as const;
