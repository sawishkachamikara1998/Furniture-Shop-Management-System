<template>
    <div class="branches">
        <a href="/AddNewBranchForm">
        <button v-if="!this.isUser" type="button" class="btn btn-primary" style="margin-left:600px; font-size:25px;padding-left: 20px; padding-right:20px; margin-top:20px;margin-bottom:20px" >++ Create New Branch ++</button>
        </a>

        <div class="content">
                <div class="split left">

                    <div class="branch-list">
                        <ul class="list-group">
                            <li v-for="(branch,i) in this.branchList" :key="i" class="list-group-item" style="width:300px; border:none" >
                                
                                <a v-bind:href="'/Branches/Branch?code='+ branch.code"><button type="button" class="btn btn-outline-secondary" style="padding: 20px; padding-left:50px;padding-right:50px; font-size:25px; margin-left:20px;margin-bottom:20px;">{{branch.name}}</button></a>

                            </li>
                        </ul>
                     </div>
                </div>

                <div class="split right">
                    
                    <div class="branch" style="margin-left:100px" >
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="700" height="700" id="gmap_canvas" src="https://www.google.lk/maps/place/8%C2%B008'57.2%22N+80%C2%B017'37.5%22E/@8.1492167,80.2930357,18z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d8.1492145!4d80.2937572?hl=en&authuser=0" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                    
                </div>
    
        </div>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            isUser: false,
            branchList:[
                {
                    code: '001',
                    name: 'Anuradhapura'
                },
                {
                    code: '002',
                    name: 'Polonnaruwa '
                },
                {
                    code: '003',
                    name: 'Kurunegala  '
                },
                {
                    code: '004',
                    name: 'Madawachchiya  '
                },
                {
                    code: '005',
                    name: 'Plgahawela'
                },
                {
                    code: '006',
                    name: 'narammala'
                },
            ]
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

.split {
  z-index: 1;
  
  overflow-x: hidden;
  
}
.branch-list{
    margin-top: 70px;
    margin-left: 40px;
}

/* Control the left side */
.left {
  left: 0;
  float: left;
  padding-right: 200px;
 
}

.mapouter{
    margin: 50px;
}

/* Control the right side */
.right {
  right: 0;
 
}

</style>


