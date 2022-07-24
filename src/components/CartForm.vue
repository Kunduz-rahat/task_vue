<template>
<h2>Добавление товара</h2>
<form @submit.prevent>
        <p>Наименование товара</p>
        <my-input
         v-model="cart.title"
          type="text"
          placeholder="Введите наименование товара"
        
        />
        <p>Описание товара</p>
        <my-input
           v-model="cart.body"
          type="text"
          placeholder="Введите описание товара"
        />
              <p>Цена товара</p>
        <my-input
         type="number"
            v-model="cart.price"
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
</style>