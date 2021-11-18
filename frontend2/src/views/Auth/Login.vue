<template>
  <div>
    <form novalidate="true" @submit.prevent="login()">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from "vue";
import { LoginInterface } from "../../interfaces/Auth/Auth";
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import getProducts from "../../graphql/getProducts.query.gql";

export default defineComponent({
  name: "Login",
  components: {},
  setup() {
    const input = reactive<LoginInterface>({
      email: "",
      password: "",
    });

    const { result } = useQuery(getProducts);

    const data = useResult(result);

    watch(data, (value) => {
      console.log(value);
    });

    const login = () => {
      console.log("test");
    };

    return {
      login,
      input,
    };
  },
});
</script>

<style></style>
