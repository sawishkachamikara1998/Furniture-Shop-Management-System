<template>
  <div class="home">
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
              :src="this.activeImage.image"
              class="d-block w-100"
              style="height: 600px"
            />
          </div>
          <div
            class="carousel-item"
            v-for="(image, i) in this.imagesList"
            :key="i"
          >
            <img
              :src="image.image"
              class="d-block w-100"
              style="height: 600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- <div class="row align-items-start">
        <div class="col" v-for="(image, key) in this.imageList" :key="key">
          <img :src="image.code" class="img-thumbnail" />
        </div>
      </div> -->
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
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  async mounted() {
    this.axios
      .get("http://localhost:3000/api/v1/products/allProducts")
      .then((response) => {
        console.log(response.data);
      });
  },
  data() {
    return {
      activeImage: {
        image:
          "https://th.bing.com/th/id/OIP.bS2wHrBMEWxM0iE2s90HygHaFr?w=255&h=195&c=7&o=5&dpr=1.25&pid=1.7",
      },
      imagesList: [
        {
          image:
            "https://th.bing.com/th/id/OIP.X3z2l3rQd8EplmUTqcWq7wHaFS?w=259&h=185&c=7&o=5&dpr=1.25&pid=1.7",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.SVBkG0nRshThDKXPH-nTUwHaEO?w=317&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        },
      ],
      productList: [
        {
          name: "cheese",
          code: "Chair",
          image:"https://th.bing.com/th/id/OIP.NQ1qLgXTEIjdNlzMJW1V0wD6D6?w=206&h=206&c=7&o=5&dpr=1.25&pid=1.7",
          price: "3500LKR",
        },

        {
          name: "Cheeze",
          code: "Table",
          image:"https://th.bing.com/th/id/OIP.tZ7KJ96r0v6kXf7Wan7roQHaFj?w=247&h=185&c=7&o=5&dpr=1.25&pid=1.7",
          price: "4800LKR",
        },
         {
          name: "Cheeze",
          code: "Floor polisher",
          image:"https://th.bing.com/th/id/OIP.i1pGSr46BLe7X4Nl5Q3VGAHaHa?w=190&h=190&c=7&o=5&dpr=1.25&pid=1.7",
          price: "12000LKR",
        },
         {
          name: "Cheeze",
          code: "Washing machine",
          image:"https://th.bing.com/th/id/OIP.dp-nNvKXYs2hS0o2tcOkWAHaJF?w=206&h=253&c=7&o=5&dpr=1.25&pid=1.7",
          price: "60000LKR",
        },
         {
          name: "Cheeze",
          code: "Blender",
          image:"https://th.bing.com/th/id/OIP.1AHNdHDBLx4EThDzL2TyIQHaHa?w=213&h=213&c=7&o=5&dpr=1.25&pid=1.7",
          price: "60000LKR",
        },
        {
          name: "Cheeze",
          code: "Cupboard",
          image:"https://th.bing.com/th/id/OIP.KssFLOo4ZM46T7AxX0t41wHaIF?w=196&h=214&c=7&o=5&dpr=1.25&pid=1.7",
          price: "12500LKR",
        },
        {
          name: "Cheeze",
          code: "Book rack",
          image:"https://th.bing.com/th/id/OIP.pOH4O8Rah1gZVi3vTPutogHaHa?w=185&h=185&c=7&o=5&dpr=1.25&pid=1.7",
          price: "3200LKR",
        },
        {
          name: "Cheeze",
          code: "Pen holder",
          image:"https://th.bing.com/th/id/OIP.p0bVdSet_xBwOYRP8KLU_QHaHa?w=201&h=201&c=7&o=5&dpr=1.25&pid=1.7",
          price: "1200LKR",
        },
      ],
    };
  },
};
</script>



