<template>
  <div class="adminFeedback">
    <div class="adminContent" v-if="!this.isUser">
      <table class="table table-striped">

       
  <a href="/feedbackAdminSeePercentage">
   <button style="margin:7px" type="button" class="btn btn-primary">See percentages of negative and positive feedback</button>
  </a>

  

        <thead class="table-dark" style="text-align: left">
          <tr>
            <th scope="col">Item code</th>
            <th scope="col">Item</th>
            <th scope="col">Customer Code</th>
            <!-- <th scope="col">Feedback</th> -->
            <!-- <th scope="col">Reply</th> -->
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody v-for="(adminF, i) in this.replylist" :key="i">
          <br />
          <tr style="border: 1px solid; margin: 40px">
            <td v-bind:href="'/adminF?code=' + adminF.code">
              {{ adminF.code }}
            </td>
            <td v-bind:href="'/adminF?code=' + adminF.code">
              {{ adminF.item }}
            </td>
            <td v-bind:href="'/adminF?code=' + adminF.code">
              {{ adminF.cCode }}
            </td>

            <td>
              <!-- Button trigger modal -->
              <button style="margin-right:100px"
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                @click="setData(adminF.code)"
              >
                See More
              </button>
              <button 
              type="button" class="btn btn-danger">Delete</button>

              
              <!-- <button
                style="margin-left: 100px"
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Delete
              </button> -->
              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        More information
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Feedback :
                      <td v-bind:href="'/adminF?code=' + this.code">
                        {{ this.feedback }}
                      </td>
                      Reply :
                      <td v-bind:href="'/adminF?code=' + this.code">
                        {{ this.reply }}
                      </td>
                      Customer Name :
                      <td v-bind:href="'/adminF?code=' + this.code">
                        {{ this.name }}
                      </td>
                    </div>
                    <div class="modal-footer">
                      <a href="/feedbackAdminReplyEdit" style="margin-right:20px"
                        >Edit Reply
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit Reply</button> -->
                      </a>
                      <a href="/feedbackAdminreply" style="margin-right:20px"
                        >Reply
                        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Edit Reply</button> -->
                    
                      </a>


                  
                    </div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    setData(code) {
      this.code = code;
      console.log(this.replylist)
      this.replylist.forEach((element) => {
        if (element.code == code) {
          this.reply = element.reply;
          this.name = element.name;
          this.feedback = element.feedback;
        }
      });
    },
  },
  data() {
    return {
      code: "",
      reply: "",
      name: "",
      feedback: "",
      isUser: false,
      replylist: [
        {
          code: "001",
          item: "table",
          feedback: "good",
          reply: "thanku",
          name: "Avishka",
          cCode: "c001",
        },
        {
          code: "002",
          item: "chair",
          feedback: "bad",
          reply: "thanku",
          name: "Kanaka",
          cCode: "c002",
        },
        {
          code: "003",
          item: "laptop",
          feedback: "worst",
          reply: "thanku",
          name: "Savindu",
          cCode: "c003",
        },
        {
          code: "004",
          item: "headset",
          feedback: "good",
          reply: "thanku",
          name: "Savishka",
          cCode: "c004",
        },
        {
          code: "005",
          item: "bat",
          feedback: "bad",
          reply: "thanku",
          name: "Maduka",
          cCode: "c005",
        },
        {
          code: "006",
          item: "ball",
          feedback: "worst",
          reply: "thanku",
          name: "Kavishka",
          cCode: "c006",
        },
      ],
    };
  },
};
</script>

<style>
tr {
  margin: 30px;
}
td {
  padding: 30px;
  padding-right: 50px;
}
</style>




