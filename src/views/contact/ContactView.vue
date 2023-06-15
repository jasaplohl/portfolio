<script lang="ts" setup>
</script>

<template>
  <div>
    <h2>Contact</h2>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email address"/>
      <textarea rows="10" placeholder="Message"/>
      <div class="submit">
        <button type="submit">Send</button>
      </div>
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