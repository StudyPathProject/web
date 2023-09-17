<template>
    <div v-html="renderedMarkdown"></div>
  </template>
  
  <script>
  import MarkdownIt from 'markdown-it'
  
  export default {
    props: {
      markdownString: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        renderedMarkdown: ''
      }
    },
    mounted() {
      const md = new MarkdownIt()
      this.renderedMarkdown = md.render(this.markdownString)
    }
  }
  </script>