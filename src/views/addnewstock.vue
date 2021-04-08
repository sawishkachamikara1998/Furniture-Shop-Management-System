


<template>
  <div class="card" style="width: 1200px; height: 720px">
    <div class="card-body">
      <form class="row g-3">
        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorBrandName,
                }"
                v-model="setBrandName"
              />
              <div v-if="errorBrandName">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="textarea"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorProductName,
                }"
                v-model="setProductName"
                id="productName"
              />
              <div v-if="errorProductName">
                <p style="color: red">
                  Product name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="date"
                class="form-control"
                id="inputEmail03"
                placeholder="Date"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="textarea"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorproductcode,
                }"
                v-model="setProductCode"
                id="inputEmail04"
              />
              <div v-if="errorproductcode">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorvendercode,
                }"
                v-model="setvendercode"
                id="inputEmail05"
              />
              <div v-if="errorvendercode">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorvendorname,
                }"
                v-model="setvendorname"
                id="inputEmail06"
              />
              <div v-if="errorvendorname">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding-right: 15px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errortype,
                }"
                v-model="settype"
                id="inputEmail07"
              />
              <div v-if="errortype">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 5px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                type="email"
                v-bind:class="{
                  'form-control': true,
                  'is-invalid': errorprice,
                }"
                v-model="setprice"
                id="inputEmail08"
              />
              <div v-if="errorprice">
                <p style="color: red">
                  branch name should be minumum 3 characters
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6"></div>

          <div class="col-md-6">
            <div class="row">
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
              <div class="col-md-6">
                
                <button
                  type="button"
                  class="btn btn-primary"
                  style="margin-right:70px"
                >
                  Clear
                </button>

                <button type="button" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    setProductName: {
      get() {
        return this.productName;
      },
      set(pname) {
        console.log(pname);
        this.productName = pname;
        if (pname.length > 3) {
          this.errorProductName = false;
        } else {
          this.errorProductName = true;
        }
      },
    },

    setBrandName: {
      get() {
        return this.brandName;
      },

      set(bname) {
        console.log(bname);

        this.brandName = bname;

        if (bname.length > 3) {
          this.errorBrandName = false;
        } else {
          this.errorBrandName = true;
        }
      },
    },
    setProductCode: {
      get() {
        return this.ProductCode;
      },

      set(pcode) {
        this.ProductCode = pcode;

        if (pcode.length > 3) {
          this.errorproductcode = false;
        } else {
          this.errorproductcode = true;
        }
        console.log(pcode);
      },
    },

    setvendercode: {
      get() {
        return this.vendrcode;
      },

      set(vcode) {
        this.vendrcode = vcode;

        if (vcode.length > 3) {
          this.errorvendercode = false;
        } else {
          this.errorvendercode = true;
        }
        console.log(vcode);
      },
    },

    settype: {
      get() {
        return this.category;
      },

      set(type) {
        this.category = type;

        if (type.length > 3) {
          this.errortype = false;
        } else {
          this.errortype = true;
        }
        console.log(type);
      },
    },

    setvendorname: {
      get() {
        return this.vendrname;
      },

      set(vname) {
        this.vendrname = vname;

        if (vname.length > 3) {
          this.errorvendorname = false;
        } else {
          this.errorvendorname = true;
        }
        console.log(vname);
      },
    },

    setprice: {
      get() {
        return this.price;
      },

      set(vprice) {
        this.price = vprice;

        if (vprice.length > 3) {
          this.errorprice = false;
        } else {
          this.errorprice = true;
        }
        console.log(vprice);
      },
    },
  },

  data() {
    return {
      errorProductName: false,
      productName: "Product Name",

      errorBrandName: false,
      brandName: "Brand Name",

      errorproductcode: false,
      ProductCode: "Product Code",

      errorvendercode: false,
      vendrcode: "Vendor Code",

      errorvendorname: false,
      vendrname: "Vendor Name",

      errortype: false,
      category: "Category",

      errorprice: false,
      price: "Vendor price",
    };
  },
};
</script>


<style scoped>
.card {
  margin-left: 150px;
  margin-top: 150px;
}
</style>

