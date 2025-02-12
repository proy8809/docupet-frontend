import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Pet, PetSummary } from './usePetFormState.defs';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';

export const usePetFormState = defineStore('petFormState', () => {
    const registrationService = new PetRegistrationService();

    const name = ref<string>('');
    const gender = ref<'m' | 'f'>('m');
    const dateOfBirth = ref<Date | undefined>();
    const estimatedAge = ref<number | undefined>();
    const type = ref<'cat' | 'dog'>('cat');
    const breed = ref<string | undefined>();
    const breedMix = ref<string>('');

    function makePayload(): Pet {
        return {
            name: name.value,
            gender: gender.value,
            date_of_birth: dateOfBirth.value?.toISOString(),
            estimated_age: estimatedAge.value,
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

    return { name, gender, dateOfBirth, estimatedAge, type, breed, breedMix, savePet };
});
