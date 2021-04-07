<template>

  <div class="add">
    <form class="row g-3">
      <div class="col-md-6">
        <label for="productName" class="form-label">Product Name</label>
        <input
          type="text"
          id="inputproductName"
          v-model="setProductName"
          v-bind:class="{
            'form-control': true,
            'is-invalid': this.errorProductName,
          }"
        />
        <div v-if="this.errorProductName">
          <p style="color: red">
            This Product Name should be at least 3 characters
          </p>
        </div>
      </div>

      <div class="col-md-6">
        <label for="inputproductCode" class="form-label">Product Code</label>
        <input
          type="text"
          id="inputproductCode"
          v-model="setProductCode"
          v-bind:class="{
            'form-control': true,
            'is-invalid': this.errorProductCode,
          }"
        />
        <div v-if="this.errorProductCode">
          <p style="color: red">
            This Product code should be at least 3 characters
          </p>
        </div>
      </div>
      <div class="col-12">
    <label class="visually-hidden" for="specificSizeSelect">Preference</label>
    <select class="form-select" id="specificSizeSelect">
      <option selected>Choose the Product Category...</option>
      <option value="1">Wood</option>
      <option value="2">Plastic</option>
      <option value="3">Electronic</option>
    </select>
  </div>
      <div class="col-md-6">
        <label for="inputproductBrand" class="form-label">Product Brand</label>
        <input
          type="text"
          id="inputproductBrand"
          v-model="setProductBrand"
          v-bind:class="{
            'form-control': true,
            'is-invalid': this.errorProductBrand,
          }"
        />
        <div v-if="this.errorProductBrand">
          <p style="color: red">
            This Product Brand should be at least 3 characters
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <label for="inputproductPrice" class="form-label">Product Price</label>
        <input
          type="number"
          class="form-control"
          id="inputproductPrice"
          required
        />
      </div>
      <div class="mb-3">
        <label for="inputDescription" class="form-label"
          >Product Description</label
        >
        <textarea
          id="inputDescription"
          v-model="setProductDescription"
          v-bind:class="{
            'form-control': true,
            'is-invalid': this.errorProductDescription,
          }"
          rows="3"
        ></textarea>
        <div v-if="this.errorProductDescription">
          <p style="color: red">
            This Product description should be maximum 250 characters
          </p>
        </div>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Add product Images</label>
        <input class="form-control" type="file" id="formFile" required />
      </div>

      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <button
            class="btn btn-primary"
            style="margin:10px"
            @click="this.setAllEmpty()"
          >
            Clear
          </button>
          <button type="submit" class="btn btn-primary" style="margin:10px">
            Add to List
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    setAllEmpty() {
      this.productName = "Timber table";
      this.productDescription = "";
      this.productCode = "0001";
      this.productBrand = "Samsung";
      this.productPrice = "5000.00";
    },
  },
  computed: {
    setProductName: {
      get() {
        return this.productName;
      },
      set(name) {
        this.productName = name;
        if (name.length > 3) {
          this.errorProductName = false;
        } else {
          this.errorProductName = true;
        }
      },
    },
    setProductDescription: {
      get() {
        return this.productDescription;
      },
      set(des) {
        this.productDescription = des;
        if (des.length < 250) {
          this.errorProductDescription = false;
        } else {
          this.errorProductDescription = true;
        }
      },
    },

    setProductBrand: {
      get() {
        return this.productBrand;
      },
      set(brand) {
        this.productBrand = brand;
        if (brand.length > 3) {
          this.errorProductBrand = false;
        } else {
          this.errorProductBrand = true;
        }
      },
    },

    setProductCode: {
      get() {
        return this.productCode;
      },
      set(code) {
        this.productCode = code;
        if (code.length > 3) {
          this.errorProductCode = false;
        } else {
          this.errorProductCode = true;
        }
      },
    },
  },

  data() {
    return {
      errorProductCode: false,
      errorProductName: false,
      errorProductDescription: false,
      errorProductBrand: false,
      productBrand:"Samsung",
      productCode: "0001",
      productDescription: "",
      productName: "Timber table",
      valid: false,
      submitted: false,
      rules: {
        leastRule: (input) => {
          input.length > 3 ? true : "need at least 3 characters";
        },
      },
    };
  },
};
</script>

<style>
.add {
  margin: 300px;
}
.addtolistBtn {
  margin-left: 675px;
}
</style>
