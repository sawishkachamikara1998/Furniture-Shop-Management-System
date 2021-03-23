<template>
    
    <div class="add">
        <form class="row g-3" style="margin:20px">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Deliver Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Name of Delivery guy">
            </div>
            
            <div class="col-12">
                <label for="inputAddress" class="form-label">Vehical No</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Delivery Vehical No">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Delivery Date</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="ex: 2021/12/20">
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Customer Name </label>
                <input type="text" class="form-control" id="inputCity" placeholder="Name Of Ordered Customer">
            </div>
            
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Customer Address </label>
                <input type="text" class="form-control" id="inputCity" placeholder="Address Of Ordered Customer">
            </div>

            <div class="col-md-6">
                <label for="inputCity" class="form-label">Product Name </label>
                <input type="text" class="form-control" id="inputCity" placeholder="Name Of Ordered Product">
            </div>

            <div class="col-md-6">
                <label for="inputCity" class="form-label">Warranty No  </label>
                <input type="text" class="form-control" id="inputCity" placeholder="NWarranty No">
            </div>


            <div class="col-12">
                <button type="submit" class="btn btn-primary">Update Details</button>
            </div>
</form>
    </div>


</template>

<script>
export default {

}
</script>

<style>
.add{
    margin: 50px;
    border:1px solid;
}
</style>


