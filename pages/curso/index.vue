<script setup lang="ts">
import { Curso } from '~/types/cursos'
import { 
    Disclosure,
    DisclosureButton,
    DisclosurePanel
} from '@headlessui/vue'
import { ref, Ref } from 'vue'
import { MinusCircleIcon, PlusCircleIcon,  } from '@heroicons/vue/24/solid'

defineProps({
    curso: {
        type: Object as () => Curso,
        required: true
    }
})

const curso = {
    id: 12,
    attributes: {
        name: "Conociendo la electronica",
        description: "Sarasa Sarasa Sarasa",
        public: true,
    },
    capitulos: [
        {
            name: "1. Introducción",
            content: [
                {title: "1 Electronica vasica", description: "asdasdasdasdas", img:"hola.png"}, 
                {title: "1.2 Electronica vasica", description: "", img:"hola.png"}
            ]
        },
        {
            name: "2. Introducción",            
            content: [
                {title: "2 Electronica vasica", description: "", img:"hola.png"}, 
                {title: "2.2 Electronica vasica", description: "asdasdadas", img:"hola.png"}
            ]
        },
        {
            name: "3. Introducción",
            content: [{title: "3Electronica vasica", description: "", img:"hola.png"}]
        },
        {
            name: "4. Introducción",
            content: [{title: "4Electronica vasica", description: "asdasdasds", img:"hola.png", video:"video.mp4"}]
        },
    ]
}

let selectedOption : Ref<{title: string,description:string, img:string, video:string}> = ref({title: "Electronica vasica", description: "", img:"hola.png", video:"video.mp4"})

function changeSelectedOption(content) {
    selectedOption.value = content
    console.log(selectedOption.value)
}

</script>

<template>
    <ViewsContent class="flex flex-row min-h-screen ">

        <div class="max-w-1/4 h-full mr-10 text-main">
            <h2 class="text-3xl font-semibold text-main">{{curso.attributes.name}} </h2>
            <Disclosure as="div" v-for="capitulo in curso.capitulos" class="m-2 text-xl" v-slot="{open}">
                <DisclosureButton class="flex flex-col w-full justify-between text-left font-medium p-2" >
                    <span>{{capitulo.name}}</span>
                    <div :class="open?'h-1 w-10 bg-main-2-darker shadow-xl rounded-xl mr-5': 'hidden'"></div>
                </DisclosureButton>
                <DisclosurePanel>
                    <ul class="cursor-pointer pl-4 text-sm font-bold text-gray-600">
                        <li v-for="content in capitulo.content" v-on:click="changeSelectedOption(content)" class="flex items-center my-2"
                            :class="content.title == selectedOption.title ? 'bg-main-2 text-white rounded-xl px-4 shadow-lg' : ''"> 
                            <PlusCircleIcon v-if="content.title != selectedOption.title" class="min-h-5 h-7 min-w-6 mr-4"/>
                            <MinusCircleIcon v-else class="min-h-5 h-7 min-w-6 mr-4"/>
                            {{ content.title }} 
                        </li>
                    </ul>
                </DisclosurePanel>
            </Disclosure>
        </div>
        
        <div class="text-left w-full">
            <h1 class="font-bold mb-5 mt-5 ">{{ selectedOption.title }}</h1>
            
            <p class="font-normal text-xl font-serif text-justify">{{ selectedOption.description }}</p>
        </div>

    </ViewsContent>
</template>