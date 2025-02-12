<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-1">
            <label class="block text-gray-700 font-medium mb-1">Do you know their date of birth?</label>
            <SelectButton
                :options="translatedOptions"
                :allow-empty="false"
                option-label="label"
                option-value="value"
                class="gender-select-button"
                v-model="isDateOfBirthKnown"
            />
        </div>

        <ApproximateAge v-if="isDateOfBirthKnown === false" />
        <PreciseDateOfBirth v-else />
    </div>
</template>
<script setup lang="ts">
    import { SelectButton } from 'primevue';
    import { ref, watch } from 'vue';
    import { useI18n } from 'vue-i18n';
    import ApproximateAge from './ApproximateAge.vue';
    import { storeToRefs } from 'pinia';
    import { usePetFormState } from '@/stores/usePetFormState';
    import PreciseDateOfBirth from './PreciseDateOfBirth.vue';

    const { t } = useI18n();

    const { estimatedAge, dateOfBirth } = storeToRefs(usePetFormState());

    const translatedOptions = [
        { value: true, label: t('general.yes') },
        { value: false, label: t('general.no') }
    ];

    const isDateOfBirthKnown = ref<boolean>(false);

    watch(
        (): boolean => isDateOfBirthKnown.value,
        (isDateOfBirthKnown) => {
            switch (isDateOfBirthKnown) {
                case true:
                    estimatedAge.value = undefined;
                    dateOfBirth.value = new Date();
                    break;
                case false:
                    dateOfBirth.value = undefined;
                    estimatedAge.value = 1;
                    break;
            }
        }
    );
</script>
