<script lang="ts" setup>
import FooterComponent from "@/components/FooterComponent.vue";
import InputFieldComponent from "@/components/InputFieldComponent.vue";
import type {Ref} from "vue";
import {ref} from "vue";

const email: Ref<string> = ref('');
const subject: Ref<string> = ref('');
const message: Ref<string> = ref('');

const onSubmit = () => {
  console.log({
    email: email.value,
    subject: subject.value,
    message: message.value,
  });
}
</script>

<template>
  <div class="gradient-alternate">
    <div class="section flex flex-col justify-center">
      <p>If you have any questions or wish to collaborate, contact me via the form bellow</p>
      <h2>Contact</h2>
      <form @submit.prevent="onSubmit">
        <InputFieldComponent v-model:value="email" type="email" label="Email address" />
        <InputFieldComponent v-model:value="subject" type="text" label="Subject" />
        <InputFieldComponent v-model:value="message" type="textarea" label="Message" />
        <div class="submit">
          <button type="submit" class="btn-primary">Send</button>
        </div>
      </form>
      <FooterComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding-bottom: 0 !important;
}

.contact {
  padding: 2rem;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
}

.submit {
  display: flex;
  justify-content: flex-end;
}
</style>