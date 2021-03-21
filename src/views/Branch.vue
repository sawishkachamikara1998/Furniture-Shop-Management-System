<template>
    <div class="branch" >

        <p>Hiiiii</p>
        <p>{{this.branchList.code}}</p>
        <p>{{this.branchList.name}}</p>
        <p>{{this.branchList.description}}</p>
        <p>{{this.branchList.contactInfo}}</p>
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
                    description: "lgjadgjhsajkhdkjhsakjhndkjasdskjnkjcna",
                    contactInfo: "9897979877"
                }
        }
    }
}
</script>

