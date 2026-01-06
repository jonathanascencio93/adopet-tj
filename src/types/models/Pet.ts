/**
 * Pet data model for the AdoPet TJ application
 */

export interface Pet {
    id: string;
    name: string;
    species: PetSpecies;
    breed: string;
    age: number;
    gender: PetGender;
    description: string;
    location: Location;
    images: string[];
    rescuerInfo: RescuerInfo;
    datePosted: Date;
    status: PetStatus;
    medicalInfo: MedicalInfo;
    temperament?: TemperamentInfo; // Optional behavioral traits
}

export const PetSpecies = {
    Dog: 'dog',
    Cat: 'cat',
    Bird: 'bird',
    Rabbit: 'rabbit',
    Other: 'other',
} as const;

export type PetSpecies = typeof PetSpecies[keyof typeof PetSpecies];

export const PetGender = {
    Male: 'male',
    Female: 'female',
    Unknown: 'unknown',
} as const;

export type PetGender = typeof PetGender[keyof typeof PetGender];

export const PetStatus = {
    Available: 'available',
    Pending: 'pending',
    Adopted: 'adopted',
    Fostered: 'fostered',
    TemporaryShelter: 'temporary_shelter',
} as const;

export type PetStatus = typeof PetStatus[keyof typeof PetStatus];

export interface Location {
    city: string;
    state: string;
    district?: string;
    address?: string;
    zipCode?: string;
    country: string;
}

export interface RescuerInfo {
    id: string;
    name: string;
    organizationType: 'shelter' | 'rescue' | 'individual' | 'foster';
    contactEmail: string;
    contactPhone?: string;
    contactAddress?: string;
    contactCity?: string;
    contactState?: string;
    contactDistrict?: string;
    contactZipCode?: string;
    contactCountry?: string;
    website?: string;
    verified?: boolean;
    instagram?: string;
    facebook?: string;
    twitter?: string;
}

export interface MedicalInfo {
    vaccinations: string[];
    spayedNeutered: boolean; // Also known as castrated/neutered
    allergies?: string;
    specialNeeds?: string;
    healthNotes?: string;
}

/**
 * Behavioral and temperament information
 */
export interface TemperamentInfo {
    kidsFriendly?: boolean;
    friendlyWithOtherAnimals?: boolean;
    energyLevel?: 'low' | 'medium' | 'high';
    trainable?: boolean;
    goodWithCats?: boolean;
    goodWithDogs?: boolean;
    houseTrained?: boolean;
}
