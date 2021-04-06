<template>
<div class="main">
    
    <div class="devide">

        <h2 style="margin-left:100px">Welcome To {{this.branchList.name}} Branch</h2>

        <div class="content">
                <div class="split left">

                    <div class="branch" style="margin-left:100px" >
                        <p>{{this.branchList.code}}</p>
                        <p>{{this.branchList.name}}</p>
                        
                            <div class="details">
                                {{this.branchList.description}}
                            </div>
                            <h3>Contact Info</h3>
                            <p>{{this.branchList.contactInfo}}</p>
                    </div>
                </div>
                <div class="split right">
                    
                    <div class="branch" style="margin-left:100px" >
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="600" height="600" id="gmap_canvas" src="https://maps.google.com/maps?q=SLIIT%20sri%20lanka&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                    
                </div>
        

            <div class="admin_btn">

                <a href="/UpdateBranchForm">
                <button v-if="!this.isUser" type="button" class="btn btn-primary btn-lg btn-block">Update Branch Details</button>
                </a>
                <button v-if="!this.isUser" type="button" class="btn btn-secondary btn-lg btn-block" style="margin-left:30px;">Delete Branch Details</button>
            
            </div>
        </div>
    </div>
</div>


</template>
<script>
export default {
    mounted(){
        console.log(this.branchCode);
    },
    data(){
        return{
            branchCode: this.$route.query.code,
            isUser: false,
            branchList: 
                {
                    code: "001",
                    name: "anuradhapura",
                    description: "lgjadgjhsajkhdkjhakjhndkjasdskjnkjcna",
                    contactInfo: "No:36, Gamgodawila, Nugegoda"
                }
        }
    }
}
</script>

<style>

.content{
   border:1px solid;
   padding-top: 30px;
   padding-bottom: 30px;
   margin-top: 80px; 
}


h2 ,h3{
    margin-bottom: 20px;
    margin-top: 20px;
}
p{
    margin-left: 20px;
}

.admin_btn{
  
   
  margin: auto;
  text-align: center;
}




.split {
  z-index: 1;
  
  overflow-x: hidden;
  
}

/* Control the left side */
.left {
  left: 0;
  float: left;
  padding-right: 200px;
 
}

/* Control the right side */
.right {
  right: 0;
 
}

</style>


