<template>
<div class="main">
    
    <div class="devide">

        <h2 style="margin-left:100px">Welcome To {{this.branchList.name}} Branch</h2>

        <div class="content">
            
                <div class="row">   
                        <div class="col-md-6">
                            
                                <div class="card" style="margin-left:100px; padding:5px" >
                                    <p>{{this.branchList.code}}</p>
                                    <p>{{this.branchList.name}}</p>
                                    
                                        <div class="details">
                                            {{this.branchList.description}}
                                        </div>
                                        <h3>Contact Info</h3>
                                        <p>{{this.branchList.contactInfo}}</p>
                                        
                                </div> 
                            
                        </div>
                        <div class="col-md-6">  
                            
                                <div class="branch">
                                    <div class="mapouter" style="margin:20px;">
                                    
                        
                                            <div
                                                id="carouselExampleIndicators"
                                                class="carousel slide"
                                                data-bs-ride="carousel"
                                            >
                                                <div class="carousel-indicators">
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="0"
                                                    class="active"
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="1"
                                                    aria-label="Slide 2"
                                                ></button>
                                                <button
                                                    type="button"
                                                    data-bs-target="#carouselExampleIndicators"
                                                    data-bs-slide-to="2"
                                                    aria-label="Slide 3"
                                                ></button>
                                                </div>
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active">
                                                    <img :src="this.activeImage.image" class="d-block w-100" style="height: 600px" />
                                                    </div>
                                                    <div class="carousel-item" v-for="(image, i) in this.imagesList" :key="i">
                                                    <img :src="image.image" class="d-block w-100" style="height: 600px" />
                                                    </div>
                                                </div>
                                                <button
                                                class="carousel-control-prev"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="prev"
                                                >
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                                </button>
                                                <button
                                                class="carousel-control-next"
                                                type="button"
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide="next"
                                                >
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                                </button>
                                            </div>
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

            activeImage: {
        image:
            "https://www.zip.lk/wp-content/uploads/job-manager-uploads/main_image/2019/01/15482177176641689394011-1067x800.jpg",
      },
      imagesList: [
        {
          image:
            "https://th.bing.com/th/id/OIP.X3z2l3rQd8EplmUTqcWq7wHaFS?w=259&h=185&c=7&o=5&dpr=1.25&pid=1.7",
        },
        {
          image:
            "https://th.bing.com/th/id/OIP.SVBkG0nRshThDKXPH-nTUwHaEO?w=317&h=180&c=7&o=5&dpr=1.25&pid=1.7",
        },
      ],


            branchCode: this.$route.query.code,
            isUser: false,
            branchList: 
                {
                    code: "001",
                    name: "anuradhapura",
                    description: "lgjadjhsjkhaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaakjhakjhndkjasdskjnkjcna",
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


