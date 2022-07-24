<template>
<div>
 <cart-form @create="createProduct"/>
 <cart-list v-bind:carts="carts"
 @remove="removeProduct" />
  </div>
</template>

<script>
import CartForm from './components/CartForm';
import CartList from './components/CartList';

  export default {
    components:{
CartForm, CartList
    },
    data(){
      return{
            carts: [
        {
          id: 1,
          title: "Наименование товара",
          body: "Довольно-таки интересное описание товара в несколько строк.Довольно-таки интересное описание товара в несколько строк. ",
          price: 10000
        }
      ],
    
      }
    },
    methods:{
      createProduct(cart){
       this.carts.push(cart)
      },
      removeProduct(cart){
this.carts=this.carts.filter(product=>product.id!==cart.id)
      }
    }
  }
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>