<script setup lang="ts">
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'
import { getCapitulos, getContenidos } from '~/middlewares/dao';
import { Capitulo, Contenido } from '~/types/cursos';

const { id } = useRoute().params

let contenidoDelCurso = reactive([] as Capitulo[])

const curso: { Capitulos: Capitulo[], name: string } = await getCapitulos(id.toString())
    .then((res) => {
        res.curso.data.attributes.Capitulos.sort()

        res.curso.data.attributes.Capitulos.map(async (e) => {
            contenidoDelCurso.push(await getContenidos(id.toString(), e.name)
                .then((res) => res.curso.data.attributes.Capitulos[0])
            )
        })

        return res.curso.data.attributes
    })
    .catch((err) => { console.log(err); return err; })

let SelectedCap: Ref<Capitulo | null> = ref(null)

function changeSelectedOption(param: Capitulo) {
    SelectedCap.value = param
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

        <div class="md:max-w-sm w-full md:min-h-full text-left min-h-screen text-main md:border-r-2 border-r-0 border-gray-300"
            :class="SelectedCap != null ? 'hidden md:block' : 'static'">

            <h2 class="text-4xl min-h-16 w-full md:text-left text-center font-semibold text-black mb-4">{{ curso.name }}</h2>

            <div v-for="capitulo in contenidoDelCurso" class="md:text-xl my-5 text-3xl hover:scale-y-110 hover:scale-x-105 transition-all duration-300 md:mr-5">
                <div class="flex flex-col w-full bg-main-2 shadow-xl text-white rounded-lg justify-between text-left font-medium p-2"
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
                <ArrowLeftCircleIcon class="md:hidden h-10 w-10" v-on:click="SelectedCap = null" />
                <h1 class="font-bold text-5xl">{{ SelectedCap.name }}</h1>
            </div>

            <div v-for="contenido in SelectedCap['Contenido']"
                class="flex flex-col w-full mt-10 mb-10 justify-center items-center gap-10">

                <Markdown v-if="contenido.text" class="font-normal leading-relaxed text-xl md:w-full text-left mx-5"
                    :markdownString="contenido.text" />

                <img v-if="contenido.image" v-for="img in contenido.image.data"
                    class="h-full aspect-auto md:w-5/6 w-full rounded-xl shadow-xl"
                    :src="`https://strappi-production.up.railway.app${img.attributes.formats.small.url}`" />

                <CldVideoPlayer v-if="contenido.video" v-for="video in contenido.video.data" width="1920" height="1080"
                    :src="video.attributes.formats.medium.url" />
            </div>
        </div>
        <div v-else class="flex justify-center -mt-32 md:w-full text-black w-screen md:mx-10 -mx-5">
            <div class="flex flex-row w-full text-main items-center justify-center">
                <h1 class="font-bold text-3xl">Seleccione un capitulo</h1>
            </div>
        </div>
    </div>
</template>