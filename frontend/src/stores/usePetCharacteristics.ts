import { defineStore } from 'pinia';
import { ref } from 'vue';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';

export const usePetCharacteristics = defineStore('petCharacteristics', () => {
    const registrationService = new PetRegistrationService();

    const petBreeds = ref<string[]>([]);
    const petGenders = ref<string[]>(['f', 'm']);

    async function loadPetBreeds(type: string): Promise<void> {
        const response = await registrationService.getPetBreeds(type);

        if (isFailingResponse(response) === true) {
            petBreeds.value = [];

            throw new Error(response.body.message);
        }

        petBreeds.value = response.body;
    }

    return { petBreeds, petGenders, loadPetBreeds };
});
