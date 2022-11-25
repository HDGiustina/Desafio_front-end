<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="card  d-flex ">
            <img class="card-img-top" :src="img" alt="teste">
            <div class="p-4">
                <div class="card dados p-4 w-auto h-auto">
                    <h1>Bitcoin Price Index</h1>
                    <div class="p-3">
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
        created() {
            this.pegarDados()
        },
        methods: {
            pegarDados(){
                let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
                console.log('data')
                fetch(url).then(
                    response => response.json()
                ).then(
                    data => {
                        console.log(data.bpi)
                        this.precoBitcoin = data.bpi
                    }
                )
            }
        }
    }
</script>

<style scoped>
    .container {
        height: 100vh;
        width: 100%;
    }
    .card{
        width: 440px;
        height: 600px;
        background-color: #ffffff;
        border-radius: 8px;
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