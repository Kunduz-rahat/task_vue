<template>

 <div v-if="carts.length > 0" class="cart_list">
	
<cart-item 
	v-for="cart in carts"
	:cart="cart"
	:key="cart.id"
	@remove="$emit('remove', cart)"/>
	</div>
	

 <h2 v-else style="color:red">Список товаров пуст</h2>
</template>

<script>
import CartItem from '@/components/CartItem';
	export default {
		components:{CartItem},
		props:{
			carts:{
				type:Array,
				required:true
			}
		}
	}
</script>

<style scoped>
.cart_list{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	
}

</style>