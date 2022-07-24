<template>

 <div>
	
	<cart-item 
	v-for="cart in carts"
	:cart="cart"
	:key="cart.id"
	@remove="$emit('remove', cart)"/>
 </div>

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

</style>