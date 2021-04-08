<template>
  <div>
  <a href="/Producteditform">
    <div class="editbtn2">
      <button
        v-if="!this.isUser"
        type="button"
        class="btn btn-primary btn-lg btn-block"
      >
        Edit Product
      </button>
    </div></a
  >
  <div class="small-container">
    <div class="raw">
      <div class="col-2">
        <div class="col-12">
          

          <div class="container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
              
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    :src="this.productDetails.images[0].image"
                    class="d-block w-100"
                    style="height: 100px"
                  />
                </div>
                <div
                  class="carousel-item"
                  v-for="(image, i) in this.productDetails.images"
                  :key="i"
                >
                  <img
                    :src="image.image"
                    class="d-block w-100"
                    style="height: 100px"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <h2>{{ this.productDetails.name }}</h2>
          <p>{{ this.productDetails.ratings }}</p>
          <p>{{ this.productDetails.price }}</p>
          <p>{{ this.productDetails.remainingQuantity }}</p>
          <p>{{this.productDetails.description}}</p>
          <p>{{this.productDetails.deliveryMethods}}</p>
          <p>{{this.productDetails.paymentMethods}}</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  mounted() {},
  data() {
    return {
      productDetails: {
        name: "Timber table",
        ratings: "4",
        price: "3800",
        remainingQuantity: "2",
        description: "Five year service warranty",
        deliveryMethods: ["home delivery"],
        paymentMethods: ["Cash - on - delivery", "Card payment"],
        isReturn: true,
        images: [
          {
            image:
              "https://th.bing.com/th/id/OIP.tZ7KJ96r0v6kXf7Wan7roQHaFj?w=247&h=185&c=7&o=5&dpr=1.25&pid=1.7",
          },
          {
            image:
              "https://www.bing.com/th?id=OIP.cmgkUogLKZvZj62YJX_DJQHaHi&w=116&h=110&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2",
          },
          {
            image:
              "https://www.bing.com/th?id=OIP.kNknnaotHwUwHtcrAesM4gHaFQ&w=139&h=92&c=8&rs=1&qlt=90&dpr=1.25&pid=3.1&rm=2",
          },
        ],
        promotion: "",
      },
      productCode: this.$route.query.prodcode,
    };
  },
};
</script>

<style>
.editbtn2 {
  margin-left: 1200px;
}
</style>
