





<template>
  <div class="addstock">
    <div class="card" style="width: 1200px; height: 540px">
      <div class="card-body">
        <div class="container">
          <div class="row" v-if="isValid">
            <div class="col-md-4" v-for="(item,i) in typeArray" :key="i"><a v-bind:href="'/'+ item.code">
              <button type=button style="border:none"><div class="upperRow">
                <div class="position-relative top-50 start-50 translate-middle">
                  <p style="align: center; font-size:20px">
                    <i :class="item.icon" class="fa-2x"></i> {{item.name}}
                  </p>
                </div>
              </div></button></a>
            </div>
          </div>
          <div class="row" v-if="isSecondValid">
            <div class="col-md-4" v-for="(item,i) in underArray" :key="i"><a href=/stocklist>
              <button type=button style="border:none"><div class="  upperRow">
                <div class="position-relative top-50 start-50 translate-middle">
                  <p style="text-align: center"><i :class="item.icon"></i> {{item.name}}</p>
                </div>
              </div></button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeArray: [
        {
          icon: "fas fa-camera",
          name: "Stock List",
          code: "stocklist"
        },
        {
          icon: "fas fa-ambulance",
          name: "Vendor",
          code: "vendor"
        },
        {
          icon: "fab fa-angellist",
          name: "Add New Stock",
          code: "addnewstock"
        },
      ],
      underArray: [
        {
          icon: "fas fa-camera",
          name: "Update/Edit Stock",
          code: "editstock"
        },
        {
          icon: "fas fa-ambulance",
          name: "Remove Stock",
          code: "removestock"
        },
        {
          icon: "fab fa-angellist",
          name: "Get Stock",
          code: "getstock"
        },
      ],
      isValid: true,
      isSecondValid: true,
    };
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css";

.addstock{

  margin-left: 150px;
  margin-top: 150px;
}

.row {
  padding: 30px;
}

.upperRow {
  height: 150px;
  width: 300px;
}
</style>
