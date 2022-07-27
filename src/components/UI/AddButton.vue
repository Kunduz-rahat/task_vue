<template>
<button class="add_btn">
	<slot></slot>
</button>
</template>

<script>
	export default {
		name:'add-button'
	}
</script>

<style scoped>
.add_btn{
width: 274px;
height: 36px;
background: #EEEEEE;
border-radius: 10px;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
color: #B4B4B4;
border: none;
font-family: 'Inter';
margin-top: 24px;
}
.add_btn:hover{
	background: #7BAE73;
}
</style>