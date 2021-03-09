<template>
  <form novalidate="true" @submit="register()">
    <label for="email">Email</label>
    <input id="email" v-model="input.email" type="text" name="email" />
    <label for="password">Password</label>
    <input
      id="password"
      v-model="input.password"
      type="password"
      name="password"
    />
    <label for="surname">Surname</label>
    <input id="surname" v-model="input.surname" type="text" name="surname" />
    <label for="password">Name</label>
    <input id="name" v-model="input.name" type="text" name="name" />
    <input type="submit" value="Login" />
  </form>
  <router-link to="/login">Go to login page</router-link>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { RegisterInterface } from "../../interfaces/Auth/Auth";

export default defineComponent({
  name: "Register",
  components: {},
  setup() {
    const input = reactive<RegisterInterface>({
      email: "",
      password: "",
      surname: "",
      name: "",
    });

    const register = (e: Event) => {
      e.preventDefault();
    };

    return {
      register,
      input,
    };
  },
});
</script>

<style></style>
