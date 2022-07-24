<template>
<div>
    <div>
      <form @submit.prevent>
        <p>Наименование товара</p>
        <input
          v-bind:value="title"
          type="text"
          placeholder="Введите наименование товара"
          @input="title = $event.target.value"
        />
        <p>Описание товара</p>
        <input
          v-bind:value="body"
          @input="body = $event.target.value"
          type="text"
          placeholder="Введите описание товара"
        />
        <p>Ссылка на изображение товара</p>
        <input type="text" 
        placeholder="Введите ссылку" />
        <p>Цена товара</p>
        <input v-bind:value="price"
         type="number"
          @input="price = $event.target.value"
          placeholder="Введите цену" />
        <button @click="createProduct">Добавить товар</button>
      </form>
    </div>
    <div class="cart" v-for="cart in carts">
      <div>{{ cart.title }}</div>
      <div>{{ cart.body }}</div>
      <div>{{ cart.price }}</div>
    </div>
  </div>
</template>

<script>
  export default {
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
       title: "",
      body: "",
      price: ""
      }
    },
    methods:{
      createProduct(event){
        const newProduct = {
          id: Date.now(),
          title: this.title,
          body: this.body,
          price: this.price
        };
        this.carts.push(newProduct);
        (this.title = ""), (this.body = ""), (this.price = "");
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