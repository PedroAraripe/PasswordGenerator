<template>
    <div class="wrapper-password-generation">
        <PageTitle />

        <TextInputCopyable />

        <WrapperForm>
            Test
        </WrapperForm>
    </div>
</template>

<script lang="ts" setup>
import WrapperForm from "@/components/forms/WrapperForm.vue";
import TextInputCopyable from "@/components/forms/TextInputCopyable.vue";
import PageTitle from "@/components/pageTemplate/PageTitle.vue";
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