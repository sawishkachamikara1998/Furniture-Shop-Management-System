/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div class="card" style="width: 1200px; height: 720px; padding: 60px">
    <div class="card-body">
      <form class="row g-3">
        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
          <div class="row">
            <label for="staticEmail" class="col-sm-2 col-form-label"
              ><i class="fas fa-tags"></i
            ></label>
            <div class="col-sm-10">
              <input
                v-model="date"
                type="date"
                class="form-control"
                id="inputEmail03"
                placeholder="Date"
              />
            </div>
          </div>
        </div>

        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
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

        <div class="col-md-6" style="padding: 35px">
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
                  style="margin-right: 70px"
                >
                  Clear
                </button>

                <div class="col-12">
                  <input
                    @click="submitaddstock()"
                    type="button"
                    class="btn btn-primary btnSeccion"
                    id="btnSeccion3"
                    value="Add Stock"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>


      <div class="row">
        <div class="col" style="margin-left: 20px; margin-right:20px">
        <div class="alert alert-success" role="alert" v-if="success">
            {{successMessage}}
        </div>
        <div class="alert alert-danger" role="alert" v-if="error" >
            {{errorMessage}}
        </div>
        </div>
    </div>

    </div>
  </div>
</template>


<script>
export default {
  methods: {

      async submitaddstock(){
      
      await this.axios.post("http://localhost:3000/api/v1/stock/addstocklist", {


          brandName: this.brandName,
          prodName:this.productName,
          prodCode: this.ProductCode,
          date: this.date,
          vendorName: this.vendrname,
          quantity: this.vendrcode,
          category: this.category,
          vendorPrice: this.price,


      })

      .then((response) => { console.log(response.data)
        this.res = response.data; 
          if(!this.res.status){  
            this.error = true; 
            this.errorMessage = "error"; 
            setTimeout (() => { this.error = false }, 3000);
            } 
          else {
            this.success = true; 
            this.successMessage = "success added"
            setTimeout(() => this.$router.push({path:'/addnewstock'}),
           3000 ); 
          }
        }
      );



      }

  },
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
      productName: "",

      errorBrandName: false,
      brandName: "",

      errorproductcode: false,
      ProductCode: "",

      errorvendercode: false,
      vendrcode: "",

      errorvendorname: false,
      vendrname: "",

      errortype: false,
      category: "",

      errorprice: false,
      price: "",


      res: [],
      error: false,
      errorMessage: "", 
      success: false,
      successMessage: "",
      proName: "",
      proCode: "",
      date: "",
      vendorName: "",
      quantity: "",
      vendorPrice: "",
      

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

