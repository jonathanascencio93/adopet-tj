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
}

export enum PetSpecies {
    Dog = 'dog',
    Cat = 'cat',
    Bird = 'bird',
    Rabbit = 'rabbit',
    Other = 'other',
}

export enum PetGender {
    Male = 'male',
    Female = 'female',
    Unknown = 'unknown',
}

export enum PetStatus {
    Available = 'available',
    Pending = 'pending',
    Adopted = 'adopted',
}

export interface Location {
    city: string;
    state: string;
    zipCode?: string;
    country: string;
}

export interface RescuerInfo {
    id: string;
    name: string;
    organizationType: 'shelter' | 'rescue' | 'individual';
    contactEmail: string;
    contactPhone?: string;
}

export interface MedicalInfo {
    vaccinations: string[];
    spayedNeutered: boolean;
    specialNeeds?: string;
    healthNotes?: string;
}
