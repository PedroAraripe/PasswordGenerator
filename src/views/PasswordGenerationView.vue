<template>
    <div class="wrapper-password-generation">
        <h1>
            Password Generator
        </h1>

        <WrapperForm>
            Test
        </WrapperForm>
    </div>
</template>

<script lang="ts" setup>
import WrapperForm from "@/components/forms/WrapperForm.vue";
</script>

<style lang="scss" scoped>
.wrapper-password-generation {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h1 {
        margin-bottom: 2rem;
        color: var(--light-main-color-form);
        font-weight: 500;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
    }
}
</style>