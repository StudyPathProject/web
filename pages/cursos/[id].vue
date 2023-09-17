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
Est iste tenetur sed saepe ipsam est ratione omnis. Hic voluptates nobis qui earum doloribus ut tempora voluptatem sed itaque vero ut officia accusantium qui dolorum consequuntur. Ut ullam reiciendis vel nulla labore et delectus repellat aut suscipit molestias est laborum quis vel quaerat iste?`,
                    img: "https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/06/software-libre-codigo-abierto-1.jpg",
                    video: "https://www.youtube.com/watch?v=QEk8a_sVDlw"
                },
                { title: "1.2 Electronica vasica", description: "", video: "https://www.youtube.com/watch?v=QEk8a_sVDlw" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "" },
                { title: "2.2 Electronica vasica", description: "asdasdadas" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", video: "video.mp4" }]
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
                { title: "1 Electronica vasica", description: "asdasdasdasdas" },
                { title: "1.2 Electronica vasica", description: "" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "" },
                { title: "2.2 Electronica vasica", description: "asdasdadas" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", video: "video.mp4" }]
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
                { title: "1 Electronica vasica", description: "asdasdasdasdas" },
                { title: "1.2 Electronica vasica", description: "", img: "https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/06/software-libre-codigo-abierto-1.jpg" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "" },
                { title: "2.2 Electronica vasica", description: "asdasdadas" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", video: "video.mp4" }]
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
                { title: "1 Electronica vasica", description: "asdasdasdasdas" },
                { title: "1.2 Electronica vasica", description: "" }
            ]
        },
        {
            name: "2. Introducción",
            content: [
                { title: "2 Electronica vasica", description: "" },
                { title: "2.2 Electronica vasica", description: "asdasdadas" }
            ]
        },
        {
            name: "3. Introducción",
            content: [{ title: "3Electronica vasica", description: "" }]
        },
        {
            name: "4. Introducción",
            content: [{ title: "4Electronica vasica", description: "asdasdasds", video: "video.mp4" }]
        },
    ]
},
]

const { id } = useRoute().params
const curso: Curso = cursos.find((e: Curso) => e.id.toString() == id)

let selectedOption: Ref<Content> = ref(cursos[0].capitulos[0].content[0])
let selectedCap: Ref<{ name: string, content: Content[] }> = ref(cursos[0].capitulos[0])
let showOptions: Ref<boolean> = ref(true)

function changeSelectedOption(content: Content, cap: { name: string, content: Content[] }) {
    selectedOption.value = content
    selectedCap.value = cap
    showOptions.value = false
}
</script>

<template>
    <div class="flex md:flex-row flex-col mb-10 min-h-screen mx-5 mt-10">

        <div class="md:max-w-xs md:w-1/2 w-full md:min-h-full text-left min-h-screen text-main md:border-r-2 border-r-0 border-gray-300 "
            :class="showOptions ? 'static' : ' md:flex-col md:flex hidden'">
            
            <h2 class="text-3xl text-clip min-h-16 w-full font-semibold text-black mb-4">{{ (curso.attributes.name as
                string) }} </h2>

            <Disclosure as="div" v-for="capitulo in curso.capitulos" class="m-2 text-2xl" v-slot="{ open }">
                
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


        <div class="text-left md:w-full w-screen md:mx-10 -mx-5" :class="showOptions ? 'md:static hidden' : 'static'">

            <div v-if="!showOptions" class="flex flex-row gap-4 w-full text-main items-center justify-center">
                <ArrowLeftCircleIcon class="md:hidden h-10 w-10" v-on:click="showOptions = true" />
                <h1 class="font-bold">{{ selectedOption.title }}</h1>
            </div>
            
            <div class="flex flex-col w-full mt-10 mb-10 justify-center items-center gap-10">
                
                <p v-if="selectedOption?.description != undefined"
                    class="font-normal leading-relaxed text-xl md:w-full text-left mx-5">{{ selectedOption.description }}</p>

                <img v-if="selectedOption?.img != undefined"
                    class="h-full aspect-auto md:w-5/6 w-full rounded-xl shadow-xl" :src="selectedOption.img" />

                <video v-if="selectedOption?.video != undefined" class="w-full h-full md:w-5/6 aspect-video rounded-xl shadow-xl"
                    width="1280" height="720" :src="selectedOption.video" :controls="true">
                </video>
            </div>
        </div>

    </div>
</template>