<template>
<input :value="modelValue" @input="updateInput" class="input"/>
</template>

<script>


	export default {
		name:'my-input',
		props:{
			modelValue:[String, Number]
		},
		methods:{
			updateInput(event){
this.$emit('update:modelValue', event.target.value)
			}
		}
	}
</script>

<style scoped>
.input{
	width: 284px;
height: 36px;
background: #FFFEFB;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
border-radius: 4px;
border: none;
padding: 10px 16px;
}
</style>