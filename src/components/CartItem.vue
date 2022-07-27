<template>
<div >
	<div cart_item>
		<img :src="cart.url" width="332" height="200"/>
		<div class="cart_info">
<div class="cart_title">{{ cart.title }}</div>
      <p class="cart_desk">{{ cart.body }}</p>
      <div class="cart_price">{{ cart.price }} руб.</div>
	 
		</div>
     <div class="delete_item"> 
     <my-button @click="$emit('remove', cart)">
	<img src="../assets/deletephoto.jpg"/>
	  </my-button>
	</div>  
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
margin: 16px 0;

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
.cart_price{
	margin-top: 32px;
	font-family: 'Source Sans Pro';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
color: #3F3F3F;
}
.cart_item{
	background: #FFFEFB;
box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
border-radius: 4px;


}
.cart_info{
padding: 16px;
}
 .delete_item img{
	position: relative;
	display: block;
	top: -450px;
	right:  -300px;
}
.cart_item:hover .delete_item img{
	top: -450px;
	right:  -300px;
}
</style>