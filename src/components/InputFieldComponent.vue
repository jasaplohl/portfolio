<script lang="ts" setup>
import type {PropType, WritableComputedRef} from "vue";
import {computed} from "vue";

const props = defineProps({
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
})
</script>

<template>
  <div class="w-full">
    <label>{{ label }}</label>
    <input v-model="value" :type="type" />
  </div>
</template>

<style lang="scss" scoped>
input {
  width: 100%;
}
</style>