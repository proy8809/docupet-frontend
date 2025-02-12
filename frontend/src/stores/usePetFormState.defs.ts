export type Pet = {
    name: string;
    gender: 'm' | 'f';
    date_of_birth?: string;
    estimated_age?: number;
    type: 'cat' | 'dog';
    breed?: string;
    breed_mix: string;
};

export type PetSummary = {
    name: string;
    age: number;
    gender: 'm' | 'f';
    type: 'cat' | 'dog';
    breed?: string;
    breed_mix: string;
    is_dangerous: boolean;
};
