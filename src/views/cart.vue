<template>
  <div>
    <h1>Your cart:</h1>
  </div>
  <div>
    <strong v-if="data[0]!==null">{{data}}</strong> <br/> <br/>
    <button @click="clearCart">
      Clear cart
    </button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      data: [localStorage.getItem('productsInCart')]
    };
  },
  methods: {
    clearCart(){
      localStorage.clear();
    }
  }
};
</script>
<style>

</style>
 