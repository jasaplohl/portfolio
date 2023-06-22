<script lang="ts" setup>
import FooterComponent from "@/components/FooterComponent.vue";
import InputFieldComponent from "@/components/InputFieldComponent.vue";
import type {Ref} from "vue";
import {ref} from "vue";
import { sendEmail } from '@/services/mailjet.service';

const email: Ref<string> = ref('');
const emailError: Ref<string | undefined> = ref(undefined);

const subject: Ref<string> = ref('');
const subjectError: Ref<string | undefined> = ref(undefined);

const message: Ref<string> = ref('');
const messageError: Ref<string | undefined> = ref(undefined);

const onSubmit = async () => {
  emailError.value = undefined;
  subjectError.value = undefined;
  messageError.value = undefined;

  const emailVal: string = email.value.trim();
  const subjectVal: string = subject.value.trim();
  const messageVal: string = message.value.trim();

  if (emailVal && subjectVal && messageVal) {
    await sendEmail(emailVal, subjectVal, messageVal);
  } else {
    emailError.value = emailVal ? undefined : 'Your email must not be empty!';
    subjectError.value = subjectVal ? undefined : 'The email subject must not be empty!';
    messageError.value = messageVal ? undefined : 'Your message must not be empty!';
  }
}
</script>

<template>
  <div class="gradient-alternate">
    <div class="section flex flex-col justify-center">
      <h2>Contact</h2>
      <p>If you have any questions or wish to collaborate, contact me via the form bellow</p>
      <br />
      <form @submit.prevent="onSubmit">
        <InputFieldComponent v-model:value="email" id="email" type="email" label="Email address" :error-msg="emailError" />
        <InputFieldComponent v-model:value="subject" type="text" label="Subject" :error-msg="subjectError" />
        <InputFieldComponent v-model:value="message" type="textarea" label="Message" :error-msg="messageError" />
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