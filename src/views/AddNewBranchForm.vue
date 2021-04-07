<template>
    
    <div class="add">
        <form class="row g-3" style="margin:20px">
            <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Branch Name</label>
                <input type="text" class="form-control" id="inputEmail4" placeholder="Name of branch">
            </div>
            <div class="form-group">
                <label for="exampleFormControlFile1">Add A Branch Image Here</label><br><br>
                <input type="file" class="form-control-file" id="exampleFormControlFile1">
            </div>
            <div class="col-12">
                <label for="inputAddress" class="form-label">Location</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Description</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Breifly Description About The Branch">
            </div>
            <div class="col-md-6">
                <label for="inputCity" class="form-label">Contact Details</label>
                <input type="text" class="form-control" id="inputCity" placeholder="38A,udyana Mawatha, Anuradapura">
            </div>
            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">ADD BRANCH</button>
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



