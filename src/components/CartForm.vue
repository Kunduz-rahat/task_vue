<template>

<form @submit.prevent>
        <p class="input_title">Наименование товара</p>
        <my-input
         v-model.trim="cart.title"
          type="text"
          placeholder="Введите наименование товара"
        
        />
        <p  class="input_title">Описание товара</p>
        <my-input style="height: 108px"
           v-model.trim="cart.body"
          type="text"
          placeholder="Введите описание товара"
        />
              <p class="input_title">Цена товара</p>
        <my-input
         type="number"
            v-model.trim="cart.price"
          placeholder="Введите цену" />
			 <div>
  <add-button  @click="createProduct">Добавить товар</add-button>
			 </div>
      
      </form>

</template>

<script>
import AddButton from './UI/AddButton'
import MyInput from './UI/MyInput'
	export default {
		components:{
			AddButton, MyInput
		},
		data(){
			return{
				cart:{
					title:"",
					body:"",
					price:""
				}
			}
		},
		methods:{
			createProduct(){
			this.cart.id=Date.now()
        this.$emit("create", this.cart)
      this.cart={
	title:"",
					body:"",
					price:""
		}
		}
	}
	}
</script>

<style scoped>
h2{
	font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 35px;
color: #3F3F3F;
}
input_title{
	font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 10px;
line-height: 13px;
letter-spacing: -0.02em;
color: #49485E;
margin-bottom: 4px;
}
</style>