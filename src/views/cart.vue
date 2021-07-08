<template>
  <div>
    <h1>Your cart:</h1>
  </div>
  <div class="card mx-auto" style="width: 18rem;" v-for="cart in data" :to="{ name: 'CartList', params: { cartID: cart.productID } }" :key="cart.productID">
    <div class="card-body">
      <img  v-bind:src="cart.productImg" class="card-img-top"  style="width: 150px; height: 175px" alt="...">
      <h5 class="card-title" v-if="data[0]!==null">{{cart.productName}}</h5>
      <p class="card-text" v-if="data[0]!==null"> Price: {{cart.productPrice}} $ </p>
      <button class ="button1" @click="removeItemFromCart(cart.productID)">
        Remove from cart
      </button>
    </div>
  </div>
    <button @click="clearCart">
      Clear cart
    </button>
</template>

<script>

export default {
  data: () => {
    return {
      data: JSON.parse(sessionStorage.getItem('productsInCart'))
    };
  },
  methods: {
    clearCart(){
      sessionStorage.clear()
      location.reload();
    },
    removeItemFromCart(productId) {
      let removeIndex = this.data.map(function(item) { return item.productID; }).indexOf(productId);
      console.log(removeIndex);
      this.data.splice(removeIndex,1);
    },
  }
};

</script>
<style>
.button1 {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
}

</style>