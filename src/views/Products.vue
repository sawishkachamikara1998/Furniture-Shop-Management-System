<template>
    <div class="products">
        <p>{{this.productCode}}</p>
        <div class="row align-items-start">
        <div class="col" v-for="(product, key) in this.productList" :key="key">
          <div class="card" style="width: 18rem;">
            <img :src="product.image" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ product.code }}</h5>
              <p class="card-text">
                {{ product.code }}
              </p>
              <p class="card-text">
                Price -
                {{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    async mounted(){

    },
    data(){
        return{
            productCode: this.$route.query.code,
            productList: [
                {
                    code:"001",
                    name: "Timber chair",
                    price: "LKR.4500.00",
                    image: "https://th.bing.com/th/id/OIP.PdOc1rI2KP7owOmatH8OYwHaKK?w=158&h=217&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"002",
                    name: "Timber table",
                    price: "LKR.5600.00",
                    image: "https://th.bing.com/th/id/OIP.Xyukvm64QAo7bU1-XevZ3wHaFj?w=275&h=207&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"003",
                    name: "Timber cupboard",
                    price: "LKR.12000.00",
                    image: "https://th.bing.com/th/id/OIP.8GxlP-g3E8Nbv5MPH4APdQHaE8?w=286&h=191&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"004",
                    name: "Timber cloth Rack",
                    price: "LKR.7200.00",
                    image: "https://th.bing.com/th/id/OIP.5nc5uzvAmaE2twgZAeWCUwHaHa?w=220&h=220&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"005",
                    name: "Timber pen holder",
                    price: "LKR.900.00",
                    image: "https://th.bing.com/th/id/OIP.Z5-yPkuQFED0iz8r_UMopwHaHo?w=178&h=182&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"006",
                    name: "Table fan",
                    price: "LKR.6500.00",
                    image: "https://th.bing.com/th/id/OIP.sjw3FrKO9Syk5odqd7Cr7QHaHa?w=204&h=204&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"007",
                    name: "Floor polisher",
                    price: "LKR.12000.00",
                    image: "https://th.bing.com/th/id/OIP.i1pGSr46BLe7X4Nl5Q3VGAHaHa?w=190&h=190&c=7&o=5&dpr=1.25&pid=1.7"

                },
                {
                    code:"008",
                    name: "Steam iron",
                    price: "LKR.4200.00",
                    image: "https://th.bing.com/th/id/OIP.K5Oh2tkNmvrjxH-cHpDGqwHaHa?w=193&h=193&c=7&o=5&dpr=1.25&pid=1.7"

                },
            ]        
        }
    }
}
</script>