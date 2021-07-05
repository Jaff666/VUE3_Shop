<template>
  <div class="shop">
        <div class="card mx-auto" style="width: 18rem;" v-for="product in products" :to="{ name: 'ProductList', params: { productId: product.id } }" :key="product.id">
          <img v-bind:src="product.productImg" class="card-img-top" style="width: 285px; height: 275px" alt=""/>
          <div class="card-body">
            <strong class="card-title">{{ product.productName }}</strong>
            <div class="products-list">
              <p class="card-text">{{product.productDescription}} <br/><br/> Cena: {{product.productPrice}} zł</p>
              <div class="buttons">
                <button @click="addItem">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

  </div>
</template>

<script>
import { products} from "../assets/products";

export default {
  name: 'Home',
  setup() {
    return {
      products
    }
  },
  computed: {
    fullInfo() {
      return `${this.product.productProducer} ${this.product.productName}`;
    }
  },
  methods: {
    addItem() {

      this.counter++;
    },
  },
  mounted() {
    if(localStorage.counter){
      this.counter=localStorage.counter
    }
  },
  watch: {
    counter(newCounter) {
      localStorage.counter = newCounter;
    }
  },
}
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