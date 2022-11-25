<template>
    <div class="container-md d-flex justify-content-center align-items-center pt-5">
        <div class="card p-5 d-flex flex-column">
            <h1>Cadastro de usuário</h1>
            <p>Utilize esse cadastro para fazer parte do maior site de trade de Bitcoin do mundo.</p>
            <form class="d-flex row g-1 form" @submit.prevent="validarDados">
                <label class="required" for="name">Nome Completo</label>
                <input v-model="dados.nome" class="form-control " type="text" id="nome" name="nome">
                <label class="required" for="email">E-mail</label>
                <input v-model="dados.email" class="form-control" type="email" id="email" name="email">
                <div class="col-sm-6">
                    <label class="required" for="tel">Telefone</label>
                    <input v-model="dados.telefone" @keyup="mascara('tel')" class="form-control col-md-2" type="tel" id="tel" name="tel" maxlength="14">
                </div>
                <div class="col-sm-6 ">
                    <label class="required" for="cpf">CPF</label>
                    <input v-model="dados.cpf" @keyup="mascara('cpf')" class="form-control col-md-4" type="text" id="cpf" name="cpf" maxlength="14">
                </div>
                <div class="col-sm-6">
                    <label class="required" for="cep">CEP</label>
                    <input v-model="dados.cep" @keyup="validaCEP" class="form-control" type="text" id="cep" name="cep" maxlength="9">
                </div>
                <div class="col-sm-6">
                    <label for="cidade">Cidade</label>
                    <input v-model="dados.cidade" class="form-control" type="text" id="cidade" name="cidade">
                </div>
                <label for="bairro">Bairro</label>
                <input v-model="dados.bairro" class="form-control" type="text" id="bairro" name="bairro">
                <div class="col-sm-6">
                    <label for="log">Logradouro</label>
                    <input v-model="dados.logradouro" class="form-control" type="text" id="log" name="log">
                </div>
                <div class="col-sm-6">
                    <label for="numb">Número</label>
                    <input v-model="dados.numero" class="form-control" type="number" id="numb" name="numb">
                </div>
                <button type="submit" class="btn mt-4 btnVerde" data-bs-toggle="modal" data-bs-target="#exampleModal">Cadastrar</button>
            </form>
            <div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div v-if="this.validacao == true" class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Cadastro Realizado com Sucesso!</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex flex-column">
                            <p>Ao clicar em OK você será redirecionado para a página de exibição</p>
                            <button type="button" class="btn align-self-end m-2 btnVerde" data-bs-dismiss="modal" @click="this.$router.push('/conteudo')">OK</button>
                        </div>
                    </div>
                    <div v-else class="modal-content erro">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Erro ao Cadastrar</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex flex-column">
                            <p>Complete todos os campos obrigatórios para concluir o cadastro.</p>
                            <button type="button" class="btn align-self-end m-2 fechar" data-bs-dismiss="modal">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCadastro',
        data(){
            return {
                validacao: false, 
                valCEP: true,
                dados: [
                    {nome: '', email: '', telefone: '', cpf: '', cep: '', cidade: '', bairro: '', logradouro: '', numero: ''},
                ],
                
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
                        this.dados.cidade = data.localidade
                        bairro.value = data.bairro
                        this.dados.bairro = data.bairro
                        log.value = data.logradouro
                        this.dados.logradouro = data.logradouro
                    }
                ).catch(
                    () => this.valCEP = false
                )
            },
            validarDados(){
                this.validacao = true
                let obrigatorios = this.dados
                let regEmail = /^[a-zA-Z0-9\._-]+@[a-zA-z0-9\._-]+\.[a-zA-z]{2,4}$/ 
                let tel
                let valCPF 
                if(obrigatorios.telefone != undefined && obrigatorios.cpf != undefined){
                    tel = obrigatorios.telefone.replace(/\D/g,"")
                    valCPF = obrigatorios.cpf.replace(/\D/g,"")
                } else {
                    this.validacao = false
                }

                if(obrigatorios.nome === undefined){ //validação do nome
                    this.validacao = false
                } else if(!regEmail.test(obrigatorios.email)){
                    this.validacao = false
                } else if(tel.length != 11){
                    this.validacao = false
                } else if (valCPF.length != 11){
                    this.validacao = false
                } else if(obrigatorios.cep === undefined || this.valCEP == false){
                    this.validacao = false
                }
            },
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

    .btnVerde{
        background-color: #07A5B1;
        color: #ffffff;
        font-weight: bold;
    }

    .required:after {
        content:" *"; 
        color: #07A5B1;
    }

    .erro h1{
        color: #f34242;
    }

    .fechar{
        background-color: #f34242;
        color: #ffffff;
        font-weight: bold;
    }

</style>