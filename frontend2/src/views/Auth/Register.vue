<template>
  <div>
    <p>{{ error }}</p>
    <form
      v-if="token.token === false"
      novalidate="true"
      @submit.prevent="registerUser()"
    >
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
    <div v-if="token.token">
      <p>You are logged in</p>
      <button @click="logout()">Click here to logout</button>
    </div>
    <router-link to="/login">Go to login page</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { RegisterInterface } from "../../interfaces/Auth/Auth";
import { useMutation } from "@vue/apollo-composable";
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

    const token = reactive<any>({
      token: false,
    });

    onMounted(() => {
      const data = localStorage.getItem("token");
      data ? (token.token = true) : "";
    });

    const { mutate: registerUser, onDone, error } = useMutation(
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

    const logout = () => {
      localStorage.removeItem("token");
      token.token = false;
    };

    onDone((result: any) => {
      console.log(result?.data?.registerUser);
      if (result?.data.registerUser) {
        const value = localStorage.setItem("token", result.data.registerUser);
        token.token = true;
      } else {
        console.log("Error in request");
      }
    });

    return {
      input,
      registerUser,
      token,
      logout,
      error,
    };
  },
});
</script>

<style></style>
