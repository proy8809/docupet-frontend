import { defineStore } from 'pinia';
import { ref } from 'vue';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';

export const usePetCharacteristics = defineStore('petCharacteristics', () => {
    const registrationService = new PetRegistrationService();

    const petTypes = ref<string[]>([]);
    const petBreeds = ref<string[]>([]);
    const petGenders = ref<string[]>(['m', 'f']);

    async function loadPetTypes(): Promise<void> {
        const response = await registrationService.getPetTypes();

        if (isFailingResponse(response) === true) {
            petTypes.value = [];

            throw new Error(response.body.message);
        }

        petTypes.value = response.body;
    }

    async function loadPetBreeds(type: string): Promise<void> {
        const response = await registrationService.getPetBreeds(type);

        if (isFailingResponse(response) === true) {
            petBreeds.value = [];

            throw new Error(response.body.message);
        }

        petBreeds.value = response.body;
    }

    return { petTypes, petBreeds, loadPetTypes, loadPetBreeds };
});
