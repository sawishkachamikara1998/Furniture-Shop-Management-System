<template>
    <div class="branches">

        <button v-if="!this.isUser" type="button" class="btn btn-primary">Create New Branch</button>
        
        <div class="branch-list">
            <ul class="list-group">
                <li v-for="(branch,i) in this.branchList" :key="i" class="list-group-item" style="border:none;" >
                    
                    <a v-bind:href="'/Branches/Branch?code='+ branch.code"><button type="button" class="btn btn-outline-secondary">{{branch.name}}</button></a>

                </li>
            </ul>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            isUser: true,
            branchList:[
                {
                    code: '001',
                    name: 'Anuradhapura'
                },
                {
                    code: '002',
                    name: 'Matara'
                },
                {
                    code: '003',
                    name: 'Kurunegala'
                },
            ]
        }
    }
}
</script>

