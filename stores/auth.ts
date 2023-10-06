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
    user: null,
    jwt: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getJWT: (state) => state.jwt,
  },
  actions: {
    async TryLogin(payload: { email: string; password: string }) {
      console.log(payload);
      const { email, password } = payload;
      const env = useRuntimeConfig();

      try {
        const url = `${env.app.API_BASE}/api/auth/local`;
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
          console.log("Well done!");
          const { user, jwt } = response as AuthResponse;

          // @ts-ignore
          this.user = user;
          this.jwt = jwt;
        });
        return true;
      } catch (e) {
        return new Error("Error");
      }
    },

    SignOut() {
      this.$reset();
    },
  },
});
