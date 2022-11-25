<template>
  <main class="container-fluid d-flex align-items-center flex-column">
    <CardCadastro />
    <div class="container-md cookie py-4 px-3">
      <p>
        Os cookies são utilizados para facilitar a navegação e torná-la mais simples e não danificam o seu dispositivo.
        Permitem uma navegação mais rápida e eficiente, eliminando a necessidade de introduzir repetidamente as mesmas informações.
      </p>
    </div>
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
  }

  .cookie {
    color: #ffffff;
    font-size: 14px;
  }

  @media (min-width: 480px) {
    .cookie {
      width: 440px;
    }
  } 
</style>