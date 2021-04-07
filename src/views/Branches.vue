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
                                <iframe id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1108.3353081745713!2d80.29355248613341!3d8.150428548155816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcef05f4e49db1%3A0xbde34f3479e74d61!2sUpmarket%20Private%20Limited!5e0!3m2!1sen!2slk!4v1617783974526!5m2!1sen!2slk" width="700" height="700" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
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
                    name: 'Madawachchiya'
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


