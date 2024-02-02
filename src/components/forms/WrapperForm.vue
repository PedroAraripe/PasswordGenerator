<template>
    <div class="wrapper-form">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.wrapper-form {
    background-color: var(--main-color-form);
    padding: 2rem;
    width: max(30%, 500px);
}
</style>