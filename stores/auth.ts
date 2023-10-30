import { defineStore } from "pinia";

type User = {
  username: string;
  email: string;
};

type AuthResponse = { user: User; jwt: string };
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | {
      username: string;
      email: string;
    },
    role: "" as string,
    jwt: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getJWT: (state) => state.jwt,
  },
  actions: {
    async TryLogin(payload: { email: string; password: string }) {
      const { email, password } = payload;
      const env = useRuntimeConfig();
      console.log(env.app)
      try {
        const url = `${env.app.API_BASE!}/api/auth/local?populate=role`;
        await $fetch(url, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: {
            identifier: email,
            password: password,
          },
        }).then((response) => {
          const { user, jwt } = response as AuthResponse;
          this.user = user;
          this.jwt = jwt;

          if (process.server) return;

          localStorage.setItem("username", user.username);
          localStorage.setItem("email", user.email);
          localStorage.setItem("jwt", jwt);
        });
        return true;
      } catch (e) {
        return new Error("Error");
      }
    },

    SignOut() {
      // this.$reset();
      this.user = null;
      this.jwt = "";

      if (process.server) return;

      localStorage.removeItem("username");
      localStorage.removeItem("email");
      localStorage.removeItem("jwt");
    },

    getFromLocal() {
      // Do not run on server
      if (process.server) return;

      this.user = {
        username: localStorage.getItem("username") ?? "",
        email: localStorage.getItem("email") ?? "",
      };
      this.jwt = localStorage.getItem("jwt") ?? "";
    },
  },
});
