<template>

<div  class="container">
  <h2>Добавление товара</h2>
  <div class="grid">
<div class="cart_form">
<cart-form @create="createProduct"/>
</div>
 <div class="cart_list">
 <cart-list v-bind:carts="carts"
 @remove="removeProduct" />
 </div>

  </div>

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
  background: #FFFEFB;
}
.container{
max-width: 1440px;
min-height: 900px;
padding: 32px;

}
.grid{
display: grid;
grid-template-columns: 1fr 3fr;
margin-top: 16px;
}
.cart_form{
  background: #FFFEFB;
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
border-radius: 4px;
}

</style>