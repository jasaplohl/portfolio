<script lang="ts" setup>
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div class="contact w-full md:w-1/2">
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email address"/>
      <textarea rows="10" placeholder="Message"/>
      <div class="submit">
        <button type="submit">Send</button>
      </div>
      <!-- TODO: Rename from footer component -->
      <FooterComponent />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  padding: 2rem;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.submit {
  display: flex;
  justify-content: flex-end;
}
</style>