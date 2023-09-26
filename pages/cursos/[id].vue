<script setup lang="ts">
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
import { getCapitulos, getContenidos } from '~/middlewares/dao';
import { Capitulo, Contenido } from '~/types/cursos';

const { id } = useRoute().params

let contenidoDelCurso = reactive([] as Capitulo[])

const curso: { Capitulos: Capitulo[], name: string } = await getCapitulos(id.toString())
    .then((res) => {
        res.curso.data.attributes.Capitulos.map(async (e) => {
            contenidoDelCurso.push(await getContenidos(id.toString(), e.name)
                .then((res) => res.curso.data.attributes.Capitulos[0])
            )
        })

        return res.curso.data.attributes
    })
    .catch((err) => { console.log(err); return err; })

let showOptions: Ref<boolean> = ref(true)
let SelectedCap: Ref<Capitulo | null> = ref(null)

function changeSelectedOption(param: Capitulo) {
    SelectedCap.value = param
    // SelectedCap.value.Contenido.forEach((e) => console.log(e))
    // console.log(SelectedCap.value.Contenido.values())
}
if (process.client) {
    document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            SelectedCap.value = null    
        }
    });
}

</script>

<template>
    <div class="flex md:flex-row flex-col mb-10 min-h-screen md:mx-10 mx-5 mt-10">

        <div class="md:max-w-sm w-full md:min-h-full text-left min-h-screen text-main md:border-r-2 border-r-0 border-gray-300 "
            :class="showOptions ? 'static' : ' md:flex-col md:flex hidden'">

            <h2 class="text-3xl min-h-16 w-full font-semibold text-black mb-4">{{ curso.name }} </h2>

            <div v-for="capitulo in contenidoDelCurso" class="md:text-xl text-2xl md:mr-5">
                <div class="flex flex-col w-full justify-between text-left font-medium p-2"
                    v-on:click="changeSelectedOption(capitulo)">
                    <span>{{ capitulo.name }}</span>
                    <div class="transition-opacity duration-700 ease-in"
                        :class="capitulo.name == SelectedCap?.name ? 'h-1 w-10 bg-main-2-darker shadow-xl rounded-xl mr-5 opacity-100' : 'opacity-0'">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="SelectedCap != null" class="text-left md:w-full text-black w-screen md:mx-10 -mx-5">
            <div class="flex flex-row gap-4 w-full text-main items-center justify-center">
                <ArrowLeftCircleIcon class="md:hidden h-10 w-10" v-on:click="showOptions = true" />
                <h1 class="font-bold text-4xl">{{ SelectedCap.name }}</h1>
            </div>

            <div v-for="contenido in SelectedCap['Contenido']"
                class="flex flex-col w-full mt-10 mb-10 justify-center items-center gap-10">

                <Markdown v-if="contenido.text" class="font-normal leading-relaxed text-xl md:w-full text-left mx-5"
                    :markdownString="contenido.text" />

                <img v-if="contenido.image" v-for="img in contenido.image.data"
                    class="h-full aspect-auto md:w-5/6 w-full rounded-xl shadow-xl"
                    :src="`https://strappi-production.up.railway.app${img.attributes.formats.medium.url}`" />

            </div>
        </div>
    </div>
</template>