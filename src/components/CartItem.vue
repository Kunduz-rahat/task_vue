<template>
<div >
	<div>
		<img :src="cart.url" width="332" height="200"/>
      <div class="cart_title">{{ cart.title }}</div>
      <div class="cart_desk">{{ cart.body }}</div>
      <div>{{ cart.price }} руб.</div>
	
	</div>
   <div class="delete_item">
     <my-button @click="$emit('remove', cart)">
		Удалить
	  </my-button>
	</div>   
</div>
</template>

<script>
	export default {
		props:{
			cart:{
				type:Object,
				required:true
			}
		}
	}
</script>

<style  scoped>
.cart_title{
	font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 25px;

color: #3F3F3F;
}
.cart_desk{
	font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;

color: #3F3F3F;
}
</style>