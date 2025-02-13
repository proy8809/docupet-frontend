import { defineStore } from 'pinia';
import { computed, Ref, ref } from 'vue';
import { Pet, PetSummary } from './usePetFormState.defs';
import { PetRegistrationService } from '@/utils/PetRegistrationService';
import { isFailingResponse } from '@/utils/AxiosClient.defs';

export const usePetFormState = defineStore('petFormState', () => {
    const registrationService = new PetRegistrationService();

    const name = ref<string>();
    const gender = ref<'m' | 'f'>();
    const dateOfBirth = ref<Date>();
    const estimatedAge = ref<number>(1);
    const breed = ref<string>();
    const breedMix = ref<string>('');
    const otherBreedOption = ref<'mix' | 'unknown' | undefined>('unknown');

    const isFormStateValid = computed<boolean>(() => {
        const payload = getPayload();
        return validatePayload(payload, otherBreedOption.value);
    });

    function isFilled<T>(value: T | undefined): value is T {
        return value !== undefined;
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

    function validatePayload(
        payload: Omit<Partial<Pet>, 'type'>,
        otherBreedOption: 'mix' | 'unknown' | undefined
    ): payload is Omit<Pet, 'type'> {
        const isNameValid = isFilled(payload.name);

        const isGenderValid = isFilled(payload.gender);

        const isDateOfBirthValid = isFilled(payload.date_of_birth) || isFilled(payload.estimated_age);

        const breedMixPrecondition =
            otherBreedOption === 'mix' && isFilled(payload.breed_mix) && payload.breed_mix.trim() !== '';

        const breedUnknownPrecondition = otherBreedOption === 'unknown';

        const breedPrecondition = isFilled(payload.breed);

        const isBreedValid = breedMixPrecondition || breedUnknownPrecondition || breedPrecondition;

        return isNameValid && isGenderValid && isDateOfBirthValid && isBreedValid;
    }

    async function savePet(type: 'cat' | 'dog'): Promise<PetSummary> {
        const payload = getPayload();

        if (validatePayload(payload, otherBreedOption.value) === false) {
            throw new Error('validation.invalid_form_data');
        }

        const response = await registrationService.createPet({ type, ...payload });

        if (isFailingResponse(response) === true) {
            throw new Error(response.body.message);
        }

        return response.body;
    }

    return { name, gender, dateOfBirth, estimatedAge, breed, breedMix, otherBreedOption, isFormStateValid, savePet };
});
