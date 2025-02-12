<template>
    <div class="flex flex-col gap-1 mx-4">
        <label class="block text-gray-700 font-medium mb-1">Choose One</label>

        <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
                <RadioButton
                    size="large"
                    name="unknown-breed-option"
                    v-model="unknownBreedOption"
                    value="unknown"
                    :disabled="areUnknownBreedOptionsDisabled"
                />
                <span>I don't know</span>
            </div>
            <div class="flex items-center gap-2">
                <RadioButton
                    size="large"
                    name="unknown-breed-option"
                    v-model="unknownBreedOption"
                    value="mix"
                    :disabled="areUnknownBreedOptionsDisabled"
                />
                <span>It's a mix</span>
            </div>
            <InputText v-model="breedMix" :disabled="isBreedMixDisabled" />
        </div>
    </div>
</template>
<script setup lang="ts">
    import { usePetFormState } from '@/stores/usePetFormState';
    import { storeToRefs } from 'pinia';
    import { InputText, RadioButton } from 'primevue';
    import { computed, ref, watch } from 'vue';

    type UnknownBreedOption = 'unknown' | 'mix';

    const unknownBreedOption = ref<UnknownBreedOption | undefined>('unknown');
    const isBreedMixDisabled = computed<boolean>(() => unknownBreedOption.value !== 'mix');
    const areUnknownBreedOptionsDisabled = computed<boolean>(() => breed.value !== undefined);

    const { breed, breedMix } = storeToRefs(usePetFormState());

    watch(
        () => unknownBreedOption.value,
        (unknownBreedOption) => {
            if (unknownBreedOption !== 'mix') {
                breedMix.value = '';
            }
        }
    );

    watch(
        () => breed.value,
        (breed) => {
            switch (breed) {
                case undefined:
                    unknownBreedOption.value = 'unknown';
                    break;
                default:
                    unknownBreedOption.value = undefined;
            }
        }
    );
</script>
