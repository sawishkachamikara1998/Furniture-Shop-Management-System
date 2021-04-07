<template>
  <div class="add">
    <form class="row g-3" style="margin: 20px">
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">Deliver Name</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail4"
          placeholder="Name of Delivery guy"
        />
      </div>

      <!--<div class="col-md-6">
          <button type="button" class="btn btn-primary" @click="loadData()">Add</button>
      </div>-->

      <div class="col-12">
        <label for="inputAddress" class="form-label">Vehical No</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress"
          placeholder="Delivery Vehical No"
          v-model="vehicleNo"
        />
      </div>
      <div class="col-12">
        <label for="inputAddress2" class="form-label">Delivery Date</label>
        <input
          type="text"
          class="form-control"
          id="inputAddress2"
          placeholder="ex: 2021/12/20"
        />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">Customer Name </label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Name Of Ordered Customer"
          v-model="customerName"
        />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">Customer Address </label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Address Of Ordered Customer"
          v-model="customerAdd"
        />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">Product Name </label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="Name Of Ordered Product"
        />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">Warranty No </label>
        <input
          type="text"
          class="form-control"
          id="inputCity"
          placeholder="NWarranty No"
        />
      </div>

      <div class="col-12" style="margin-top: 30px">
        <!-- Button trigger modal -->

        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Submit
        </button>

        <!-- Modal -->
        <div
          style="margin-top: 100px"
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Are you sure?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Edit
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  @click="submit()"
                >
                  Confirm To Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit() {
      console.log(this.vehicleNo);
      console.log(this.customerAdd);
      console.log(this.customerName);
      //send js code

      setTimeout(() => {
        this.$router.push({
          path: "/delivery",
        });
      }, 3000);
    },
    loadData() {
      (this.customerName = "dffghg"),
        (this.customerAdd = "no 89, 2nd lane, gjsa");
    },
  },

  data() {
    return {
      vehicleNo: "",
      customerName: "",
      customerAdd: "",
    };
  },
};
</script>

<style>
.add {
  margin: 50px;
  border: 1px solid;
}
</style>


