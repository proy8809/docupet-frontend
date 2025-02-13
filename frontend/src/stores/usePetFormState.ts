import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import { Pet, PetSummary } from './usePetFormState.defs';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';
import { useToast } from 'primevue';
import { useValidatePet } from '@/utils/useValidatePet';

export const usePetFormState = defineStore('petFormState', () => {
    const registrationService = new PetRegistrationService();

    const name = ref<string>();
    const gender = ref<'m' | 'f'>();
    const dateOfBirth = ref<Date>();
    const estimatedAge = ref<number>();
    const breed = ref<string>();
    const breedMix = ref<string>('');
    const otherBreedOption = ref<'mix' | 'unknown' | undefined>('unknown');

    const isFormStateValid = computed<boolean>(() => {
        const payload = getPayload();
        return useValidatePet(payload, otherBreedOption.value);
    });

    function clearPet(): void {
        name.value = undefined;
        gender.value = undefined;
        dateOfBirth.value = undefined;
        estimatedAge.value = 1;
        breed.value = undefined;
        breedMix.value = '';
        otherBreedOption.value = 'unknown';
    }

    function getPayload(): Omit<Partial<Pet>, 'type'> {
        return {
            name: name.value,
            gender: gender.value,
            date_of_birth: dateOfBirth.value?.toISOString(),
            estimated_age: estimatedAge.value,
            breed: breed.value,
            breed_mix: breedMix.value
        };
    }

    async function savePet(type: 'cat' | 'dog'): Promise<PetSummary> {
        const payload = getPayload();

        if (useValidatePet(payload, otherBreedOption.value) === false) {
            throw new Error('validation.invalid_form_data');
        }

        const response = await registrationService.createPet({ type, ...payload });

        if (isFailingResponse(response) === true) {
            throw new Error(response.body.message);
        }

        return response.body;
    }

    return {
        name,
        gender,
        dateOfBirth,
        estimatedAge,
        breed,
        breedMix,
        otherBreedOption,
        isFormStateValid,
        savePet,
        clearPet
    };
});
