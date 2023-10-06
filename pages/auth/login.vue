<script>
import { ArrowLeftIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/outline";
import SVG from "@/assets/svg/learn.svg?component";
import { useAuthStore } from "~/stores/auth";

export default {
  name: "LoginPage",
  components: {
    SVG,
    ArrowLeftIcon,
    ArrowRightCircleIcon,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      errorMsg: `El correo electrónico o la contraseña son incorrectos.`,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const store = useAuthStore();

      console.log("Login");
      try {
        const tryLogin = await store.TryLogin({
          email: this.email,
          password: this.password,
        });

        if (tryLogin != true) throw Error;
      } catch (error) {
        this.error = true;
        this.password = "";
      }
    },
  },
};
</script>

<template>
  <div>
    <div class="flex items-center justify-center h-screen">
      <div
        class="hidden sm:flex w-1/2 h-screen place-items-center justify-center"
      >
        <SVG />
      </div>

      <div class="sm:w-1/2">
        <div class="p-5 w-4/5 mx-auto text-left font-raleway">
          <div class="text-left mb-10">
            <router-link to="/" class="flex place-items-center">
              <ArrowLeftIcon class="h-4 pr-2" />
              Homepage
            </router-link>
          </div>

          <h1
            class="font-bold text-left font-montserrat text-4xl sm:text-6xl mb-10"
          >
            Iniciar Sesión
          </h1>

          <p v-show="error" class="text-sm text-red-500">{{ errorMsg }}</p>
          <form @submit="login">
            <div class="my-5">
              <h1 class="text-left text-xl font-bold mb-5 font-montserrat">
                Correo electrónico
              </h1>
              <input
                type="email"
                v-model="email"
                class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-emerald-400 focus:border-emerald-600"
              />
            </div>

            <div class="my-5">
              <h1 class="text-left text-xl font-bold mb-5 font-montserrat">
                Contraseña
              </h1>
              <input
                type="password"
                v-model="password"
                class="text-sm outline-none pb-5 w-4/5 bg-transparent border-b hover:border-emerald-400 focus:border-emerald-600"
              />
            </div>

            <button
              type="submit"
              :disabled="password.length < 3"
              class="bg-main text-white flex rounded-xl justify-center hover:rounded-3xl transition-all"
            >
              <div class="w-fit flex hover:text-gray-200 py-3 px-6">
                Entrar
                <ArrowRightCircleIcon class="h-6 pl-2" />
              </div>
            </button>

            <!-- <p class="my-2">
              <router-link to="/forgotpassword">Forgot Password?</router-link>
            </p> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
