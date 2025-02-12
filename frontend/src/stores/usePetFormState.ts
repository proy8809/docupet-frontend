import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Pet, PetSummary } from './usePetFormState.defs';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';

export const usePetFormState = defineStore('petFormState', () => {
    const registrationService = new PetRegistrationService();

    const name = ref<string>('');
    const gender = ref<'m' | 'f'>('m');
    const date_of_birth = ref<string | undefined>();
    const estimated_age = ref<number | undefined>();
    const type = ref<'cat' | 'dog'>('cat');
    const breed = ref<string | undefined>();
    const breedMix = ref<string>('');

    function makePayload(): Pet {
        return {
            name: name.value,
            gender: gender.value,
            date_of_birth: date_of_birth.value,
            estimated_age: estimated_age.value,
            type: type.value,
            breed: breed.value,
            breed_mix: breedMix.value
        };
    }

    async function savePet(): Promise<PetSummary> {
        const payload = makePayload();

        const response = await registrationService.createPet(payload);

        if (isFailingResponse(response) === true) {
            throw new Error(response.body.message);
        }

        return response.body;
    }

    return { name, gender, date_of_birth, estimated_age, type, breed, breedMix, savePet };
});
