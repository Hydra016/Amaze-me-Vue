// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
      ],
    app: {
      head: {
        title: 'Amaza Me',
        meta: [
          {name: 'AmazeMe', content: 'An e-commerce website for clothes'}
        ]
      }
    }
})
