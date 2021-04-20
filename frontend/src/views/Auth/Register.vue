<template>
  <form novalidate="true" @submit.prevent="register()">
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
import { useMutation, useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

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

    const { mutate: registerUser, onDone } = useMutation(
      gql`
        mutation($userRegister: createUserInput!) {
          registerUser(userRegister: $userRegister)
        }
      `,
      () => ({
        variables: {
          userRegister: {
            email: input.email,
            surname: input.surname,
            name: input.name,
            password: input.password,
          },
        },
      })
    );

    const register = async () => {
      await registerUser();
      onDone((result) => {
        console.log(result.data);
      });
    };

    return {
      register,
      input,
    };
  },
});
</script>

<style></style>
