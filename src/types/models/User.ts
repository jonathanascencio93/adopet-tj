/**
 * User data model for the AdoPet TJ application
 */

export interface User {
    id: string;
    email: string;
    name: string;
    role: UserRole;
    profileImage: string;
    createdAt: Date;
    adopter?: AdopterProfile;
    rescuer?: RescuerProfile;
}

export const UserRole = {
    Adopter: 'adopter',
    Rescuer: 'rescuer',
    Admin: 'admin',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface AdopterProfile {
    location: {
        city: string;
        state: string;
        zipCode?: string;
    };
    preferences?: {
        species?: string[];
        ageRange?: {
            min: number;
            max: number;
        };
    };
    savedPets: string[]; // Pet IDs
}

export interface RescuerProfile {
    organizationName: string;
    organizationType: 'shelter' | 'rescue' | 'individual';
    location: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    };
    phone?: string;
    website?: string;
    description?: string;
    verified: boolean;
}
