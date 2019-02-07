<template>
   <div>
        <h4 class="text-center mt-20">
         <small>
         <button class="btn btn-success" v-on:click="navigate()"> View All Customers </button>
         </small>
        </h4>

        <div class="col-md-12 form-wrapper">
          <h2> Edit Customer </h2>
          <form id="create-post-form" @submit.prevent="editCustomer">
               <div class="form-group col-md-12">
                <label for="title"> First Name </label>
                <input type="text" id="first_name" v-model="customer.first_name" name="title" class="form-control" placeholder="Enter firstname">
               </div>

               <div class="form-group col-md-12">
                <label for="title"> Last Name </label>
                <input type="text" id="last_name" v-model="customer.last_name" name="title" class="form-control" placeholder="Enter Last name">
               </div>

             <div class="form-group col-md-12">
                <label for="title"> Email </label>
                <input type="text" id="email" v-model="customer.email" name="title" class="form-control" placeholder="Enter email">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Phone </label>
                <input type="text" id="phone_number" v-model="customer.phone" name="title" class="form-control" placeholder="Enter Phone number">
            </div>

            <div class="form-group col-md-12">
                <label for="title"> Address </label>
                <input type="text" id="address" v-model="customer.address" name="title" class="form-control" placeholder="Enter Address">
            </div>

              <div class="form-group col-md-12">
                  <label for="description"> Description </label>
                  <input type="text" id="description" v-model="customer.description" name="description" class="form-control" placeholder="Enter Description">
              </div>

              <div class="form-group col-md-4 pull-right">
                  <button class="btn btn-success" type="submit"> Edit Customer </button>
              </div>          
          </form>
        </div>
    </div>
</template>

<script>
import { server } from "../../helper";
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      customer: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCustomer();
  },
  methods: {
    editCustomer() {
      let customerData = {
        first_name: this.customer.first_name,
        last_name: this.customer.last_name,
        email: this.customer.email,
        phone: this.customer.phone,
        address: this.customer.address,
        description: this.customer.description
      };

      axios
        .put(
          `${server.baseURL}/customer/update?customerID=${this.id}`,
          customerData
        )
        .then(data => {
          router.push({ name: "home" });
        });
    },
    getCustomer() {
      axios
        .get(`${server.baseURL}/customer/customer/${this.id}`)
        .then(data => (this.customer = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>

