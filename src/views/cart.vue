<template>
  <div>
    <h1>Your cart:</h1>
  </div>
  <div class="card mx-auto" style="width: 18rem;" v-for="cart in data"
       :to="{ name: 'CartList', params: { cartID: cart.productId } }" :key="cart.productId">
    <div class="card-body">
      <img :src="cart.productImg" class="card-img-top" style="width: 150px; height: 175px" alt="...">
      <h5 class="card-title" v-if="data[0]!==null">{{ cart.productName }}</h5>
      <p class="card-text" v-if="data[0]!==null"> Price: {{ cart.productPrice }} $ </p>
      <button class="button1" @click="removeItemFromCart(cart.productId)">
        Remove from cart
      </button>
    </div>
  </div>
  <div class="sum">
    <strong>Amount to pay: {{totalSum}} $ <br/> </strong>
  </div>
    <button class="button2" @click="clearCart">
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
      let removeIndex = this.data.map((item) => item.productId).indexOf(productId);
      this.data.splice(removeIndex,1);
      sessionStorage.setItem('productsInCart', JSON.stringify(this.data));
      window.location.reload();
    },
  },
  computed: {
    totalSum() {
      return this.data.reduce( (prev, cur) => prev + cur.productPrice, 0);
    }
  }
};

</script>
<style>
.sum {
  padding: 20px;
}
.button1 {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
}
.button2 {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: yellow;
  color: black;
  font-weight: bold;
}

</style>