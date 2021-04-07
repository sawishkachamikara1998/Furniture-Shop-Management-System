<template>
    
    <div class="delivery">
        <a href="/addDeliveryDetail">
        <button v-if="!this.isUser" type="button" class="btn btn-primary" style="margin-left:600px; font-size:25px;padding-left: 20px; padding-right:20px; margin-top:20px;margin-bottom:20px" >++  Assign Delivery ++</button>
        </a>

        <div class="content">    
                        
            <table class="table table-striped"  v-for="(delivery,i) in this.deliverylist" :key="i" style="border:1px solid; margin:40px;">

                <tr>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.delivername}}</td>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.deliverdate}}</td>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.Vehicalno}}</td>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.customername}}</td>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.customeraddress}}</td>
                    <td v-bind:href="'/delivery?code='+ delivery.code">{{delivery.warrantyno}}</td>
                    <td> <a href="/editDeliveryDetails">
                        <button v-if="!this.isUser" type="button" class="btn btn-primary btn-lg btn-block">Edit</button>
                        </a>  
                    </td>
                    <td>
                        <a href="/UpdateBranchForm">
                        <button v-if="!this.isUser" type="button" class="btn btn-primary btn-lg btn-block">Delete</button>
                        </a>
                    </td>
                </tr>
            </table>

                
        </div>
    </div>


</template>


<script>
export default {
    data(){
        return{
            isUser: false,
            deliverylist:[
                {
                    code: '001',
                    delivername: 'Asantha',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'QW-9697',
                    customername: 'Sawishka Chamikara',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'Double Bed',
                    warrantyno: '1287'
                    
                },
                {
                    code: '002',
                    delivername: 'Wasantha',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'GH-5978',
                    customername: 'Shanaka Geethangana',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'Cup Board',
                    warrantyno: '6875'
                },
                {
                    code: '003',
                   delivername: 'Dimantha',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'BN-4756',
                    customername: 'Asiri Piyumantha',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'Electric Awon',
                    warrantyno: '0134'
                },
                {
                    code: '004',
                    delivername: 'Samantha',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'TY-8970',
                    customername: 'Chamika Sirivardana',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'Piyano',
                    warrantyno: '0975'
                },
                {
                    code: '005',
                    delivername: 'Sathyananda',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'YU-8797',
                    customername: 'Maduka Senavirathne',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'Table',
                    warrantyno: '1209'
                },
                {
                    code: '006',
                    delivername: 'Dayananda',
                    deliverdate: '2021.12.14',
                    Vehicalno: 'KT-1234',
                    customername: 'Kanaka Bashitha',
                    customeraddress: '38A,udyana Mawatha, Gangodavila, Nugegoda',
                    productname: 'sofa',
                    warrantyno: '01234'
                },
            ]
        }
    }
}
</script>

<style>
tr{

margin: 30px;
}
td{
    padding: 30px;
    padding-right: 50px;
    
}
</style>




