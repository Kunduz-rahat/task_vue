<template>
<div >
	<div>
      <div>{{ cart.title }}</div>
      <div>{{ cart.body }}</div>
      <div>{{ cart.price }}</div>
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

</style>