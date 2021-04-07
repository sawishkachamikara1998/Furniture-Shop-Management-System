<template>

  <div class="addform">
    <form class="row g-3">
    <div class="col-12">
        <label for="inputproductName" class="form-label"
          >Product Name</label
        >
        <input
          type="text"
          class="form-control"
          id="inputproductName"
          placeholder="Electric fan"
          required
        />
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
        <label for="inputproductCategory" class="form-label"
          >Product Category</label
        >
        <input
          type="text"
          class="form-control"
          id="inputproductCategory"
          placeholder="Electronic"
          required
        />
      </div>
      <div class="col-12">
        <label for="inputproductBrand" class="form-label">Product Brand</label>
        <input
          type="text"
          class="form-control"
          id="inputproductBrand"
          placeholder="Samsung"
          required
        />
      </div>
      <div class="col-md-6">
        <label for="inputproductPrice" class="form-label">Product Price</label>
        <input
          type="text"
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
          class="form-control"
          id="inputDescription"
          rows="3"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label"
          >Select the product image</label
        >
        <input class="form-control" type="file" id="formFile" required />
      </div>

      <div class="col-12">
        <button type="submit" class="btn btn-primary">Update product details</button>
      </div>
    </form>
  </div>

</template>

  <style>
     .addform{
         margin: 300px;
     }
 </style>