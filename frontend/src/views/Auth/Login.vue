<template>
  <form novalidate="true" @submit="login()">
    <label for="email">Name</label>
    <input id="email" v-model="input.email" type="text" name="email" />
    <label for="password">Password</label>
    <input
      id="password"
      v-model="input.password"
      type="password"
      name="password"
    />
    <input type="submit" value="Login" />
  </form>
  <router-link to="/register">Go to register page page</router-link>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { LoginInterface } from "../../interfaces/Auth/Auth";

export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const input = reactive<LoginInterface>({
      email: "",
      password: "",
    });

    const login = (e: Event) => {
      e.preventDefault();
    };

    return {
      login,
      input,
    };
  },
});
</script>

<style></style>
