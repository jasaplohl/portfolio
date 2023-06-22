<script lang="ts" setup>
import type {ComputedRef, PropType, WritableComputedRef} from "vue";
import {computed} from "vue";

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  type: {
    type: String as PropType<'text' | 'email' | 'password' | 'textarea'>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  errorMsg: {
    type: String,
    required: false,
    default: undefined,
  }
});

const emits = defineEmits<{
  (e: 'update:value', value: string): void
}>();

const value: WritableComputedRef<string> = computed({
  get(): string {
    return props.value;
  },
  set(val: string) {
    emits('update:value', val);
  }
});

const getLabelClass: ComputedRef<string> = computed(() => {
  if (props.value) {
    return 'label--top';
  }
});
</script>

<template>
  <div class="flex flex-col">
    <div class="input-container">
      <label class="label" :class="getLabelClass">{{ label }}</label>
      <input :id="id" v-model="value" :type="type" class="input"  />
    </div>
    <small v-if="errorMsg">{{ errorMsg }}</small>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/assets/styles/variables';

.input-container {
  width: 100%;
  position: relative;

  &:focus-within {
    .input {
      box-shadow: 0 0 5px 2px $color-primary;
    }

    .label {
      top: -10%;
      transform: translateY(-10%);
      font-size: 0.9rem;
    }
  }
}

.label {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5rem;
  background-color: $color-secondary;
  box-shadow: 0 0 5px 2px $color-secondary;
  pointer-events: none;
  transition: 0.5s;

  &--top {
    top: -10%;
    transform: translateY(-10%);
    font-size: 0.9rem;
  }
}

.input {
  width: 100%;
  outline: none;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: $color-secondary;
  transition: 0.5s;
}

small {
  font-weight: bold;
  text-align: end;
}
</style>