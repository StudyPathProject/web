<script setup lang="ts">
import { Curso, Cursos, Content } from '../../types/cursos'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    TransitionRoot,
    TransitionChild
} from '@headlessui/vue'
import { ref, Ref } from 'vue'
import { MinusCircleIcon, PlusCircleIcon, ArrowLeftCircleIcon } from '@heroicons/vue/24/solid'

const cursos: Cursos = [{
    id: 12,
    attributes: {
        name: "1Conociendo la vasico electronica",
        description: "Sarasa Sarasa Sarasa",
        public: true,
    },
    capitulos: [
        {
            name: "1. Introducción",
            content: [
                {
                    title: "1 Electronica vasica", description: `Lorem ipsum dolor sit amet. Est soluta autem vel iste provident est galisum magnam aut dolorum delectus non totam illo! Et repellendus optio aut reprehenderit voluptas qui ullam voluptas et vitae consequuntur et quae culpa et sequi ullam. Sit optio rerum a fuga corporis At perferendis enim et obcaecati voluptatem et doloremque aspernatur. At debitis natus qui mollitia obcaecati quo sunt expedita ut totam possimus ab maiores provident sed dicta reiciendis.
Qui architecto incidunt aut voluptatem quidem et minima porro ut perspiciatis enim hic quaerat officia. Qui mollitia dolore eum sint quos cum nesciunt internos At tempora autem est debitis vero in assumenda dolorem aut sunt cumque?
Est iste tenetur sed saepe ipsam est ratione omnis. Hic voluptates nobis qui earum doloribus ut tempora voluptatem sed itaque vero ut officia accusantium qui dolorum consequuntur. Ut ullam reiciendis vel nulla labore et delectus repellat aut suscipit molestias est laborum quis vel quaerat iste?`, img: "hola.png"
                },
                { title: "1.2 Electronica vasica", description: "", img: "hola.png" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "", img: "hola.png" },
                { title: "2.2 Electronica vasica", description: "asdasdadas", img: "hola.png" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "", img: "hola.png" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", img: "hola.png", video: "video.mp4" }]
        },
    ]
},
{
    id: 13,
    attributes: {
        name: "2Conociendo la electronica",
        description: "Sarasa Sarasa Sarasa",
        public: true,
    },
    capitulos: [
        {
            name: "1. Introducción",
            content: [
                { title: "1 Electronica vasica", description: "asdasdasdasdas", img: "hola.png" },
                { title: "1.2 Electronica vasica", description: "", img: "hola.png" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "", img: "hola.png" },
                { title: "2.2 Electronica vasica", description: "asdasdadas", img: "hola.png" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "", img: "hola.png" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", img: "hola.png", video: "video.mp4" }]
        },
    ]
},
{
    id: 14,
    attributes: {
        name: "3Conociendo la electronica",
        description: "Sarasa Sarasa Sarasa",
        public: true,
    },
    capitulos: [
        {
            name: "1. Introducción",
            content: [
                { title: "1 Electronica vasica", description: "asdasdasdasdas", img: "hola.png" },
                { title: "1.2 Electronica vasica", description: "", img: "hola.png" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "", img: "hola.png" },
                { title: "2.2 Electronica vasica", description: "asdasdadas", img: "hola.png" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "", img: "hola.png" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", img: "hola.png", video: "video.mp4" }]
        },
    ]
},
{
    id: 15,
    attributes: {
        name: "4Conociendo la electronica",
        description: "Sarasa Sarasa Sarasa",
        public: true,
    },
    capitulos: [
        {
            name: "1. Introducción",
            content: [
                { title: "1 Electronica vasica", description: "asdasdasdasdas", img: "hola.png" },
                { title: "1.2 Electronica vasica", description: "", img: "hola.png" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "", img: "hola.png" },
                { title: "2.2 Electronica vasica", description: "asdasdadas", img: "hola.png" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "", img: "hola.png" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", img: "hola.png", video: "video.mp4" }]
        },
    ]
},
]

const { id } = useRoute().params
const curso: Curso = cursos.find((e: Curso) => e.id.toString() == id)
let selectedOption: Ref<Content> = ref(cursos[0].capitulos[0].content)
let selectedCap: Ref<{ name: string, content: Content }> = ref(cursos[0].capitulos[0])
let showOptions: Ref<boolean> = ref(true)

function changeSelectedOption(content: Content, cap: { name: string, content: Content }) {
    selectedOption.value = content
    selectedCap.value = cap
    showOptions.value = false
}
</script>

<template>
    <ViewsContent class="flex md:flex-row flex-col mb-10 min-h-screen ">

        <div class="md:hidden flex text-main">
            <ArrowLeftCircleIcon v-if="!showOptions" class="h-10 w-10" v-on:click="showOptions = true" />
        </div>

        <div class="md:max-w-xl md:w-1/2 w-full min-h-full text-main md:border-r-2 border-gray-600 "
            :class="showOptions ? 'md:static static' : ' md:flex-col md:flex hidden'">
            <h2 class="text-3xl text-clip min-h-16 w-full font-semibold text-black mb-10">{{ (curso.attributes.name as
                string) }} </h2>
            <Disclosure as="div" v-for="capitulo in curso.capitulos" class="m-2 text-xl" v-slot="{ open }">
                <DisclosureButton class="flex flex-col w-full justify-between text-left font-medium p-2">
                    <span>{{ capitulo.name }}</span>
                    <div class="transition-opacity duration-700 ease-in"
                        :class="open ? 'h-1 w-10 bg-main-2-darker shadow-xl rounded-xl mr-5 opacity-100' : 'opacity-0'">
                    </div>
                </DisclosureButton>
                <TransitionRoot :show="open" enter="transition-opacity duration-700" enter-from="opacity-0"
                    enter-to="opacity-100" leave="transition-opacity duration-300" leave-from="opacity-100"
                    leave-to="opacity-0">
                    <DisclosurePanel>
                        <ul class="cursor-pointer pl-4 text-sm font-bold text-gray-600">
                            <li v-for="content in capitulo.content" v-on:click="changeSelectedOption(content, capitulo)"
                                class="flex items-center my-2"
                                :class="content.title == selectedOption.title ? 'bg-main-2 text-white rounded-xl px-4 shadow-xl transition-colors duration-300 ease-in-out' : ''">
                                <PlusCircleIcon v-if="content.title != selectedOption.title"
                                    class="min-h-5 h-7 min-w-6 mr-4" />
                                <MinusCircleIcon v-else class="min-h-5 h-7 min-w-6 mr-4" />
                                {{ content.title }}
                            </li>
                        </ul>
                    </DisclosurePanel>
                </TransitionRoot>
            </Disclosure>
        </div>


        <div class="text-left w-full ml-3" :class="showOptions ? 'md:static hidden' : 'md:static static'">
            <h1 class="font-bold mb-5 mt-5">{{ selectedOption.title }}</h1>

            <p class="font-normal text-xl font-serif text-justify">{{ selectedOption.description }}</p>
        </div>

</ViewsContent></template>