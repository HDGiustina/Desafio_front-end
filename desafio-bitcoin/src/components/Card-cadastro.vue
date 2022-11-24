<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="card p-3 d-flex flex-column">
            <h1>Cadastro de usuário</h1>
            <p>Utilize esse cadastro para fazer parte do maior site de trade de Bitcoin do mundo.</p>
            <form class="d-flex flex-column">
                <label class="form-label" for="name">Nome Completo</label>
                <input class="form-control" type="text" id="nome" name="nome">
                <label class="form-label" for="email">E-mail</label>
                <input class="form-control" type="email" id="email" name="email">
                <label class="form-label" for="tel">Telefone</label>
                <input class="form-control" type="tel" id="tel" name="tel">
                <label class="form-label" for="cpf">CPF</label>
                <input class="form-control" type="number" id="cpf" name="cpf">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCadastro',
    }
</script>

<style scoped>

    .container {
        height: 100vh;
        width: 100%;
    }
    .card{
        width: 440px;
        height: 440px;
        background-color: #ffffff;
        border-radius: 8px;
        /* justify-content: space-between; */
    }

    

</style>