<template>
    <div class="wrapper-text-input form-bg">
        <input
            class="form-field-space"
            v-model="text"
            type="text"
            name="input-text-password"
            id="input-text-password"
        >
        <button @click="copyText" class="form-field-space">
            <FontAwesomeIcon :icon="faCopy" />
        </button>
        
    </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { Ref, ref } from "vue";

const text: Ref<string> =  ref("P4$5W0rD !");

const copyText: void = () => {
  const element = document.querySelector('#input-text-password');

  if(element) {
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand('copy')
  }
}
</script>


<style lang="scss" scoped>
// 
.wrapper-text-input {
    margin-bottom: 1.5rem;
    width: 100%;

    display: flex;
    align-items: center;

    & > * {
        font-size: 30px;

        background: none !important;
        text-decoration: none !important;
        border: none !important;
        outline: none;
    }

    & input {
        color: var(--highlight-light-color-form);
        width: 100%;
    }

    & button {
        color: var(--highlight-light-color-form);
        transition: all 0.3s;

        &:hover {
            transition: all 0.3s;
            cursor: pointer;
            color: white;
        }
    }
}
</style>