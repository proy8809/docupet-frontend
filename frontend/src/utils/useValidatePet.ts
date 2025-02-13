import { Pet } from '@/stores/usePetFormState.defs';
import { useIsFilled } from './useIsFilled';

export function useValidatePet(
    payload: Omit<Partial<Pet>, 'type'>,
    otherBreedOption: 'mix' | 'unknown' | undefined
): payload is Omit<Pet, 'type'> {
    if (useIsFilled(payload.name) === false || payload.name.trim() === '') {
        return false;
    }

    if (useIsFilled(payload.gender) === false) {
        return false;
    }

    if (
        useIsFilled(payload.date_of_birth) === false &&
        useIsFilled(payload.estimated_age) === false
    ) {
        return false;
    }

    if (
        otherBreedOption === 'mix' &&
        (useIsFilled(payload.breed_mix) === false || payload.breed_mix.trim() === '')
    ) {
        return false;
    }

    if (otherBreedOption === undefined && useIsFilled(payload.breed) === false) {
        return false;
    }

    return true;
}
