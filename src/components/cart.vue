<template>
	<div class="">
		<div class="cartHeader">
			<router-link to="/">
				<i class="iconfont">&#xe61c;</i>				
			</router-link>
			购物车
		</div>
		<ul class="cartMain">
			<li v-for="(cart,index) in carts">
				<div class="cartImg">
					<img :src="cart.imgone" alt="" />
				</div>
				<div class="cartInfo">
					<div class="cartName">
						{{cart.name}}
						<i class="iconfont" @click="shanchu(index)">&#xe717;</i>
					</div>
					<p class="cartPrice">{{cart.price}}</p>
				</div>
				<div class="cartNumber">
					<span class="reduce" @click="reduce(index)">-</span>
					<input type="text" v-model="cart.value" readonly="readonly"/>
					<span class="add" @click="add(index)">+</span>
				</div>
			</li>
		</ul>
		<div class="cartImage" v-if="!carts.length">
			<img src="../../static/img/gouwuche.png" alt="" />
			<h1>购物车是空的哦！快去购物吧！</h1>
			<router-link to="home">逛一逛</router-link>
		</div>
		<div class="cartFooter" v-if="carts.length">
			<div class="total">
				<span>合计：</span>
				<span>¥ {{sum}}</span>
			</div>
			<div class="box">
				<a href="javascript:;" @click="settlement">清空购物车</a>
				<a href="/">继续购物</a>
				
				
			</div>
		</div>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
    import {mapState, mapMutations, mapGetters} from 'vuex';
    
    export default{
    	data(){
    		return{
    			
    		}
    	},
    	computed:{
    		...mapGetters(
    			["sum"]
    		),
    		carts(){
    			return this.$store.state.carts
    		}
    	},
    	methods:{
    		...mapMutations([
    			'shanchu','add','reduce','settlement'
    		])
    	}
    }
</script>

<style>
	.cart {
        position: absolute;
        width: 100%;
        height: 100%;
        /*z-index: 999;*/
        top: 0;
        left: 0;
        background: #F4F4F4;
    }
    .cartHeader{
    	position: fixed;
    	width: 100%;
    	height: 1.3rem;
    	line-height: 1.3rem;
    	box-shadow: 0 0 10px #cecece;
    	padding-left: 0.3rem;
    	top:0;
    	font-size: 0.41rem;
    }
    .cartHeader i{
    	display: block;
    float: left;
    height: 50px;
    font-size: 0.71rem;
    color: black;
    width: 0.9rem;
    }
    .cartMain{
    	margin-top: 1.3rem;
    	margin-bottom: 1.24rem;
    }
    .cartMain li{
    	    width: 100%;
    height: 4rem;
    background: white;
    margin-top: 0.04rem;
    }
    .cartImg{
    	float: left;
    	padding: 0.5rem;
    }
    .cartImg img{
    	width:2.6rem;
    	height: 2.8rem;
    }
    .cartInfo{
    	/*float: left;*/
    	width: 7.7rem;
    	font-size: 0.35rem;
    	padding: 0.6rem 0 0 0.3rem;
    }
    .cartName{
    	font-size: 0.36rem;
    }
    .cartPrice{
    	color: #f00;
    	margin-top: 0.2rem;
    	font-size: 0.4rem;
    }
    .cartName i{
    	float: right;
    	font-size: 0.57rem;
    	color: #000;
    }
    .cartNumber{
    	float: left;
    	margin-top: 0.3rem;
    }
    .cartNumber .add,.cartNumber .reduce{
    	display: block;
    	float: left;
    	width:0.75rem;
    	height: 0.75rem;
    	line-height: 0.75rem;
    	border: 1px solid #dedede;
    	color: #b2b2b2;
    	text-align: center;
    	font-size: 0.5rem;
    }
    .cartNumber input{
    	width: 0.96rem;
    	height: 0.75rem;
    	float: left;
    	text-align: center;
    	border: 1px solid #dedede;
    }
    .cartNumber .add{
    	border-left: none;
    }
    .cartNumber .reduce{
    	border-right:none;
    	
    }
    .cartImage img{
    	width:4.4rem;
    	height: 5.2rem;
    	display: block;
    	margin: auto;
    	padding-top: 1.5rem;
    }
    .cartImage h1{
    	margin-top: 0.5rem;
    	text-align: center;
    	color: #959595;
    	font-size: 0.6rem;
    }
    .cartImage a{
    	display: block;
    	text-align: center;
    	margin: 0.8rem auto;
    	width: 110px;
    	height: 37px;
    	line-height: 37px;
    	border-radius: 4px;
    	text-align: center;
    	background: #e0524b;
    	color: #fff;
    	font-weight: 800;
    	font-size: 0.5rem;
    	
    }
    .cartFooter{
    	position: fixed;
    	width: 100%;
    	height: 1.18rem;
    	background: white;
    	bottom: 1.5rem;
    	display: block;
    	border-top: 1px solid #F4F4F4;
    }
    .cartFooter .total{
    	float: left;
    	width: 37%;
    	text-align: center;
    	line-height: 1.18rem;
    	font-size: 0.35rem;
    }
    .cartFooter .total span:nth-child(2){
    	font-size: 0.54rem;
    	color: rgb(227, 33, 30);
    }
  	.cartFooter .box{
  		width: 63%;
  		float: right;
  		height: 100%;
 	 }
 	 .cartFooter .box a{
 	 	display: block;
 	 	float: right;
 	 	width: 33.3%;
        height: 100%;
        color: white;
        text-align: center;
        line-height: 1.18rem;
        font-size: 0.35rem;
 	 }
 	  .cartFooter .box a:nth-child(2){
 	  	background: #E3211E;
 	  }
 	   .cartFooter .box a:nth-child(1){
 	  	background: #FF9800;
 	  }
</style>