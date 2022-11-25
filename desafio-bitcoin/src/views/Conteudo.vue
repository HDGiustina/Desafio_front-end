<template>
  <main class="container-fluid">
    <CardConteudo />
  </main>
</template>

<script>
  import CardConteudo from '../components/Card-conteudo.vue'
  export default {
    name: 'Conteudo',
    components: {
      CardConteudo,
    }
  }

</script>

<style>
  .container-fluid {
    background-color: #5D6070;
    height: 100vh;
    width: 100%;
  }
/* @media (min-width: 1024px) {
  
} */
</style>
