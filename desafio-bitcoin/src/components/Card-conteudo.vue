<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="card m-5">
            <img class="card-img-top" :src="img" alt="teste">
            <div class="container-md p-5 pb-4" style=" font-size: 14px;">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non voluptas sequi iste, dolorum culpa, et doloribus distinctio provident vitae sint explicabo nobis pariatur vel sapiente reiciendis, at veniam cum.
                </p>
            </div>
            <div class="p-4">
                <div class="card dados p-4 w-auto h-auto">
                    <h1>Bitcoin Price Index</h1>
                    <div v-if="(precoBitcoin != '')" class="p-2">
                        <p class="m-0">
                            {{ this.precoBitcoin.USD.description }}: ${{ this.precoBitcoin.USD.rate_float }}
                        </p>
                        <p class="m-0">
                            {{ this.precoBitcoin.GBP.description }}: £{{ this.precoBitcoin.GBP.rate_float }}
                        </p>
                        <p class="m-0">
                            {{ this.precoBitcoin.EUR.description }}: €{{ this.precoBitcoin.EUR.rate_float }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="container-md p-5 pb-4" style=" font-size: 14px;">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam non voluptas sequi iste, dolorum culpa, et doloribus distinctio provident vitae sint explicabo nobis pariatur vel sapiente reiciendis, at veniam cum.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CardConteudo',
        data(){
            return {
                precoBitcoin: [],
                img: '/img/Bitcoin-conteudo.png',
            }
        },
        methods: {
            pegarDados(){
                let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
                fetch(url).then(
                    response => response.json()
                ).then(
                    data => {
                        if(data){
                            this.precoBitcoin = data.bpi
                            this.precoBitcoin.USD.rate_float = this.precoBitcoin.USD.rate_float.toFixed(2)
                            this.precoBitcoin.GBP.rate_float = this.precoBitcoin.GBP.rate_float.toFixed(2)
                            this.precoBitcoin.EUR.rate_float = this.precoBitcoin.EUR.rate_float.toFixed(2)
                        }
                    }
                )
               
            }
        },
        mounted() {
            this.pegarDados()
        },
    }
</script>

<style scoped>
    
    .card{
        width: 440px;
        background-color: #ffffff;
        border: none;
    }

    .dados{
        background-color: #07A5B1;
        color: #ffffff;
    }

    .dados h1{
        font-size: 25px;
        font-weight: bold;
    }

    .dados p{
        font-size: 15px;
    }
</style>