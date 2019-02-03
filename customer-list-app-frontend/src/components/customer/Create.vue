<template>
   <div>
        <div class="col-md-12 form-wrapper">
          <h2> Create Customer </h2>
          <form id="create-post-form" @submit.prevent="createCustomer">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="first_name" name="title" class="form-control" placeholder="Enter firstname">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="last_name" name="title" class="form-control" placeholder="Enter Last name">
               </div>

             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="email" name="title" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Phone </label>
                <input type="text" id="phone_number" v-model="phone" name="title" class="form-control" placeholder="Enter Phone number">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Address </label>
                <input type="text" id="address" v-model="address" name="title" class="form-control" placeholder="Enter Address">
            </div>

              <div class="form-group col-md-12">
                  <label for="description"> Description </label>
                  <input type="text" id="description" v-model="description" name="description" class="form-control" placeholder="Enter Description">
              </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Create Customer </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { server } from "../../utils/helper";
import router from "../../router";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      description: ""
    };
  },
  created() {
    // this.date_posted = new Date().toLocaleDateString();
  },
  mounted() {},
  methods: {
    createCustomer() {
      let customerData = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        address: this.address,
        description: this.description
      };
      this.__submitToServer(customerData);
    },
    __submitToServer(data) {
      axios.post(`${server.baseURL}/customer/create`, data).then(data => {
        router.push({ name: "home" });
      });
    }
  }
};
</script>

