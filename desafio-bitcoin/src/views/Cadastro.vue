<template>
  <main class="container-fluid">
    <CardCadastro />
  </main>
</template>

<script>
  import CardCadastro from '../components/Card-cadastro.vue'

  export default {
    name: 'Cadastro',
    components: {
      CardCadastro,
    }
  }

</script>

<style scoped>
  .container-fluid {
    background-color: #5D6070;
    height: 100vh;
    width: 100%;
  }

</style>