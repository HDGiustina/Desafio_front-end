<template>
  <main class="container-fluid d-flex p-0">
    <CardConteudo />
    <div class="card align-self-center text-center">
      <img :src="SAC" alt="SAC" class="w-50 align-self-center pt-2">
      <p class="fw-bold fs-6" style=" color: gray;" >SAC</p>
    </div>
  </main>
</template>

<script>
  import CardConteudo from '../components/Card-conteudo.vue'
  export default {
    name: 'Conteudo',
    data(){
      return {
        SAC: '/img/SAC.png'
      }
    },
    components: {
      CardConteudo,
    }
  }

</script>

<style scoped>
  .container-fluid {
    background-color: #5D6070;
  }

  .card{
      width: 150px;
      background-color: #ffffff;
      border: none;
      border-radius: 30px 0px 0px 10px;
    }
</style>
