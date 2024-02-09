<template>
  <div class="form-item wrapper-password-strength px-4 py-3 d-flex align-items-center justify-content-between form-black-highlight">
    <div>
      STRENGTH
    </div>
    <div class="d-flex align-items-center">
      <div class="form-base-text-color text-uppercase security-level-label me-3">
        {{ securityLevelsLabel[passwordSecurityLevel] }}
      </div>
      
      <div class="strength-chips d-flex align-items-center">
        <span
        v-for="i in 4"
        :key="i"
        :class="{
          'ms-2': i,
          'active': i <= passwordSecurityLevel
        }"
        class="chip"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type ICheckboxValues, type SecurityLevelsLabel } from "@/interfaces/forms/OptionCheckbox";
import { computed, type ComputedRef, type PropType } from 'vue';

const props = defineProps({
  passwordSecurities: {
    type:  Object as PropType<ICheckboxValues>,
    required: false,
    default: () => ({})
  }
})

const passwordSecurityLevel: ComputedRef<number> = computed(() => Object.values(props.passwordSecurities).filter(c => c).length)

const securityLevelsLabel: SecurityLevelsLabel = {
  1: "weak",
  2: "medium",
  3: "safe"
}
</script>

<style lang="scss" scoped>
.wrapper-password-strength {
  .security-level-label {
    font-size: 20px;
  }
  .strength-chips {
    .chip {
      $chip-width: 25px;
      display: inline-block;
      border: 1px solid white;
      height: $chip-width;
      width: calc($chip-width/5 * 2);
      background: transparent;

      transition: all 0.3s;
      
      &.active {
        border-color: var(--form-highlight-color-2);
        background-color: var(--form-highlight-color-2);
      }
    }
  }
}
</style>@/interfaces/forms/SecurityLevels