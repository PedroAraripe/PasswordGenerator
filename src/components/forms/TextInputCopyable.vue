<template>
    <div class="wrapper-text-input form-bg form-field-space mb-4">
        <div class="row">
            <input
                class="col-11"
                v-model="text"
                type="text"
                name="input-text-password"
                id="input-text-password"
            >
            <button @click="copyText" class="form-highlight-text col-1">
                <FontAwesomeIcon :icon="faCopy" />
            </button>
        </div>
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
    & > :first-child > * {
        font-size: 1.6rem;

        background: none !important;
        text-decoration: none !important;
        border: none !important;
        outline: none;
    }

    & input {
        color: var(--highlight-light-color-form);
    }

    & button {
        transition: all 0.3s;

        &:hover {
            transition: all 0.3s;
            cursor: pointer;
            color: white;
        }
    }
}
</style>