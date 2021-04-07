<!--<template>
  <table class="table">
    <thead class="table-dark">
    <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">vechical</th>
        <th scope="col">Assing to Delivery</th>
      </tr>
    </thead>

     <tbody>
     
    <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>
          <a href="/addDeliveryDetail">
            <button type="button" class="btn btn-danger" style=" padding-left: 20px; padding-right:20px;">
              <i class="fas fa-truck"></i>
            </button>
          </a>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
        <td>
          <a href="/addDeliveryDetail">
            <button type="button" class="btn btn-danger" style=" padding-left: 20px; padding-right:20px;">
             <i class="fas fa-truck"></i>
            </button>
          </a>
        </td>
      </tr>

    </tbody>
  </table>
</template> -->

<template>
  <div class="deliveryConfirm" style="border: 1px solid #b30000; margin: 40px; padding: 10px; padding-top: 25px">

    <div class="adminContent" v-if="!this.isUser">
      <table
        class="table table-striped"
        
        
      >

        <thead class="table-dark" style="text-align: left;">
          <tr>
            <th scope="col">delivername</th>
            <th scope="col">deliverdate</th>
            <th scope="col">Vehicalno</th>
            <th scope="col">customername</th>
            <th scope="col">customeraddress</th>
            <th scope="col">warrantyno</th>
            <th scope="col"> Assing To Delivery</th>
          </tr>
          
        </thead>

        <tbody v-for="(deliveryConfirm, i) in this.deliveryConfirmlist" :key="i" >
        <br>
          <tr style="border: 1px solid black; margin: 40px">
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.delivername }}
            </td>
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.deliverdate }}
            </td>
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.Vehicalno }}
            </td>
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.customername }}
            </td>
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.customeraddress }}
            </td>
            <td v-bind:href="'/deliveryConfirm?code=' + deliveryConfirm.code">
              {{ deliveryConfirm.warrantyno }}
            </td>
         
        <td>
          <a href="/addDeliveryDetail">
            <button type="button" class="btn btn-danger" style=" padding-left: 20px; padding-right:20px;">
             <i class="fas fa-truck"></i>
            </button>
          </a>
        </td>
        
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUser: false,
      deliveryConfirmlist: [
   
        {
          code: "002",
          delivername: "Wasantha",
          deliverdate: "2021.12.14",
          Vehicalno: "GH-5978",
          customername: "Shanaka Geethangana",
          customeraddress: "38A,udyana Mawatha, Gangodavila, Nugegoda",
          productname: "Cup Board",
          warrantyno: "6875",
        },
  
      
        {
          code: "006",
          delivername: "Dayananda",
          deliverdate: "2021.12.14",
          Vehicalno: "KT-1234",
          customername: "Kanaka Bashitha",
          customeraddress: "38A,udyana Mawatha, Gangodavila, Nugegoda",
          productname: "sofa",
          warrantyno: "01234",
        },
      ],
    };
  },
};
</script>

<style>
tr {
  margin: 30px;
}
td {
  padding: 30px;
  padding-right: 50px;
}


</style>

