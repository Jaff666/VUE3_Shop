<template>
  <div class="shop">
        <div class="card mx-auto" style="width: 18rem;" v-for="product in products" :to="{ name: 'ProductList', params: { productId: product.id } }" :key="product.id">
          <img v-bind:src="product.productImg" class="card-img-top" style="width: 285px; height: 275px" alt=""/>
          <div class="card-body">
            <strong class="card-title">{{ product.productName }}</strong>
            <div class="products-list">
              <p class="card-text">{{product.productDescription}} <br/><br/> Cena: {{product.productPrice}} zł</p>
              <div class="buttons">
                <button @click="addItemToCart(product.id,++product.productCounter)">
                  Add to cart
                </button>
                <button @click="removeItemFromCart(product.id,product.productCounter--)">
                  Delete from cart
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import { products} from "../store/products";

export default {
  name: 'Home',
  data: () => {
    return {
      cart: []
    };
  },
  setup() {
    return {
      products
    }
  },
  methods: {
    addItemToCart(productId,productCounter) {
      this.cart.push(productId,productCounter);
      console.log(this.cart);
    },
    removeItemFromCart(productId) {
      this.cart.splice(this.cart.indexOf(productId), 2);
      console.log(this.cart);
    },
  }
};
</script>

<style>
.shop{
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

}
.shop > * {
  margin: 1em 0;
}
.buttons{
  padding: 15px;
}
.products-list{
  padding: 15px;
}
button {
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: green;
  color: white;
  font-weight: bold;
}
</style>