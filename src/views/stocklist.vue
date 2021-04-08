<template>
  <div>
    <div class="row"></div>
    <div class="row"></div>
    
    <div class="row">
      <div class="col-md-3">
        <div class="row"></div>
        <div class="row"></div>
        
        <div class="row">
          <div class="card" style="height: 600px; width:350px">
            <div class="card-body">
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <form class="d-flex">
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="category"
                      aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-9">

        
        <div class="row">
          <nav class="navbar navbar-light bg-light" style="width:620px">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Stock ID" aria-label="Search" style="width:500px">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
        <div class="row">
          <div class="card" style="width:1200px">
            <div class="card-body">
              <div class="delivery">
                <div class="adminContent" v-if="!this.isUser">
                  <table class="table table-striped" style="margin-left:-20px">
                    <thead class="table-dark" style="text-align: left">
                      <tr>
                        <th scope="col">BrandName</th>
                        <th scope="col">VendorPrise</th>
                        <th scope="col">Category</th>
                        <th scope="col">ProductCode</th>
                        <th scope="col">ProductName</th>
                        <th scope="col">VendorName</th>
                        <th scope="col">VendorCode</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                      </tr>
                    </thead>

                    <tbody v-for="(stock, i) in this.stocklist" :key="i">
                      <br />
                      <tr
                        style="border: 1px solid; margin: 40px; font-size: 10px"
                      >
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.BrandName }}
                        </td>
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.VendorPrise }}
                        </td>
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.Category }}
                        </td>
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.ProductCode }}
                        </td>
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.ProductName }}
                        </td>
                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.VendorName}}
                        </td>

                        <td v-bind:href="'/stocklist?code=' + stock.code">
                          {{ stock.VendorCode }}
                        </td>

                        <td v-bind:href="'/delivery?code=' + stock.code">
                          {{ stock.Date }}
                        </td>

                        <td>
                          <a href="/editDeliveryDetails">
                            <button
                              v-if="!this.isUser"
                              type="button"
                              class="btn btn-primary btn-lg btn-block"
                            >
                              Edit
                            </button>
                          </a>
                        </td>
                        <td>
                          <a href="/">
                            <button
                              v-if="!this.isUser"
                              type="button"
                              class="btn btn-primary btn-lg btn-block"
                            >
                              Delete
                            </button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
tr {
  margin: 30px;
}
td {
  padding: 30px;
  padding-right: 50px;
}
</style>


<script>
export default {
  data() {
    return {
      isUser: false,
      stocklist: [
        {
          code: "001",
         BrandName: "sony",
          VendorPrise: "4500",
          Category: "electric",
          ProductCode: "0123",
          ProductName: "key-bord-201",
         VendorName: "A.M.D Sawishka",
          Date: "2021/01/05",
        VendorCode: "dfghjk",
         
        },
       
      ],
    };
  },
};
</script>