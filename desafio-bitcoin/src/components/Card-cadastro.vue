<template>
    <div class="d-flex justify-content-center align-items-center pt-5">
        <div class="card p-5 d-flex flex-column">
            <h1>Cadastro de usuário</h1>
            <p>Utilize esse cadastro para fazer parte do maior site de trade de Bitcoin do mundo.</p>
            <form class="d-flex row g-1 form">
                <label class="required" for="name">Nome Completo</label>
                <input class="form-control " type="text" id="nome" name="nome">
                <label class="required" for="email">E-mail</label>
                <input class="form-control" type="email" id="email" name="email">
                <div class="col-sm-6">
                    <label class="required" for="tel">Telefone</label>
                    <input @keyup="mascara('tel')" class="form-control col-md-2" type="tel" id="tel" name="tel" maxlength="14">
                </div>
                <div class="col-sm-6 ">
                    <label class="required" for="cpf">CPF</label>
                    <input @keyup="mascara('cpf')" class="form-control col-md-4" type="text" id="cpf" name="cpf" maxlength="14">
                </div>
                <div class="col-sm-6">
                    <label class="required" for="cep">CEP</label>
                    <input @keyup="validaCEP" class="form-control" type="text" id="cep" name="cep" maxlength="9">
                </div>
                <div class="col-sm-6">
                    <label for="cidade">Cidade</label>
                    <input class="form-control" type="text" id="cidade" name="cidade">
                </div>
                <label for="bairro">Bairro</label>
                <input class="form-control" type="text" id="bairro" name="bairro">
                <div class="col-sm-6">
                    <label for="log">Logradouro</label>
                    <input class="form-control" type="text" id="log" name="log">
                </div>
                <div class="col-sm-6">
                    <label for="numb">Número</label>
                    <input class="form-control" type="number" id="numb" name="numb">
                </div>
                <button @click="this.$router.push('/conteudo')" type="button" class="btn mt-4">Cadastrar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCadastro',
        data(){
            return {
            }
        },
        methods: {
            mascara(teste){
                if(teste == 'tel'){
                    let tel = document.querySelector("#tel")
                    var mask=tel.value.replace(/\D/g,"");
                    mask=mask.replace(/^(\d\d)(\d)/g,"($1)$2"); 
                    mask=mask.replace(/(\d{5})(\d)/,"$1-$2");    
                    tel.value = mask;

                }else if(teste == 'cpf'){
                    let cpf = document.querySelector("#cpf")
                    var mask = cpf.value.replace(/\D/g,"")
                    mask=mask.replace(/(\d{3})(\d)/,"$1.$2")
                    mask=mask.replace(/(\d{3})(\d)/,"$1.$2")
                    mask=mask.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
                    cpf.value = mask
                }
            },
            validaCEP(){
                let cep = document.querySelector("#cep")
                let CEP = cep.value
                let url = `https://viacep.com.br/ws/${CEP}/json/`
                
                //Mascara
                let mask = CEP.replace(/\D/g,"")            
                mask = mask.replace(/^(\d{5})(\d)/,"$1-$2") 
                cep.value = mask

                let cidade = document.querySelector("#cidade")
                let bairro = document.querySelector("#bairro")
                let log = document.querySelector("#log")
                fetch(url).then(
                    response => response.json()
                ).then(
                    data => {
                        cidade.value = data.localidade
                        bairro.value = data.bairro
                        log.value = data.logradouro
                    }
                )
            }
        },
    }
</script>

<style scoped>
    .card{
        width: 440px;
        background-color: #ffffff;
        border-radius: 8px;
    }

    .card h1{
        font-size: 20px;
        font-weight: bold;;
        color: #07A5B1;
    }
    .card p{
        font-size: 14px;
    }

    .card p, label{
        color: #707070;
    }

    .form input {
        height: 45px;
        border-color: #707070;
    }

    .form label {
        margin-top: 5px;
        margin-bottom: 2px;
        font-size: 14px;
    }

    .btn{
        background-color: #07A5B1;
        color: #ffffff;
        font-weight: bold;
    }

    .required:after {
        content:" *"; 
        color: #07A5B1;
    }

</style>