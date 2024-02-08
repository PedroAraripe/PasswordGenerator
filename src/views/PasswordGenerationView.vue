<template>
    <div class="wrapper-password-generation">
        <PageTitle />

        <TextInputCopyable class="mb-4" />

        <WrapperForm>
            <RangeInput
                label="Character Length"
                :min="5"
                :max="50"
                class="mb-4"
            />

            <CheckboxInput :options="optionsCheckbox" class="mb-4" />
            
        </WrapperForm>
    </div>
</template>

<script lang="ts" setup>
import WrapperForm from "@/components/forms/WrapperForm.vue";
import TextInputCopyable from "@/components/forms/TextInputCopyable.vue";
import RangeInput from "@/components/forms/RangeInput.vue";
import CheckboxInput from "@/components/forms/CheckboxInput.vue";
import PageTitle from "@/components/pageTemplate/PageTitle.vue";
import { type IOptionCheckbox } from "@/interfaces/forms/OptionCheckbox";

const optionsCheckbox: Array<IOptionCheckbox> = [
    {
        id: 1,
        label: "Include Uppercase Letters",
    },
    {
        id: 2,
        label: "Include Lowercase Letters",
    },
    {
        id: 3,
        label: "Include numbers",
    },
    {
        id: 4,
        label: "Include Symbols",
    },
]
</script>

<style lang="scss" scoped>
.wrapper-password-generation {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > * {
        width: 90%;
        max-width: 500px;
    }
}
</style>