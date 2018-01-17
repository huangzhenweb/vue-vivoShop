<template>
	<div class="order">
		<div class="orderHeader">
			<span>
				<i class="iconfont" @click="back">&#xe61c;</i>
			</span>
			<span>我的订单</span>
		</div>
		<div class="orderimg" v-if="!orders.length">
			<img src="../../static/img/dingdan.png" alt="" />
			<p>您暂无订单</p>
		</div>
		<ul class="orderMain">
			<li v-for="(order,index) in orders">
				<div class="orderBox">
					<div class="orderId">
						<span>vivo官方旗舰店</span>
						<span>交易成功</span>
					</div>
					<div class="orderOne">
					<div class="orderImg">
						<img :src="order.image" alt="" />
					</div>
					<div class="order_box">
						<p>{{order.name}}</p>
						<p>{{order.color}}</p>
						<p>¥ {{order.price}}</p>
					</div>
					<p>x {{order.value}}</p>
				</div>
				<div class="orderTwo">
					<div class="del" @click="odefault(index)">删除订单</div>
					<div class="Total">共 <span>{{order.value}}</span>件商品 总计：<span>¥ {{order.value*order.price}}</span></div>
				</div>
				</div>
				
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState ,mapMutations ,mapGetters,} from 'vuex';
	export default{
		computed:{
			orders(){
				return this.$store.state.orders
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			...mapMutations([
				'odefault'
			])
		}
	}
</script>

<style>
	.order{
		position: absolute;
    width: 100%;
    height: 100%;
    z-index: 999;
    background: #F4F4F4;

	}
	.orderHeader{
		position: fixed;
		width: 100%;
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: 0.41rem;
		padding-left: 0.3rem;
		top:0;
		box-shadow: 0 0 10px #cecece;
		-webkit-box-shadow: 0 0 10px #cecece;
		text-align: center;
		background: #fff;
		z-index: 1;
	}
	.orderHeader i{
		display: block;
        float: left;
        height: 50px;
        font-size: 0.71rem;
        color: black;
	}
	.orderimg{
		width: 3rem;
		height: 3rem;
		margin: 0 auto;
		margin-top: 5rem;
	}
	.orderimg img{
		width: 3.5rem;
		
	}
	.orderimg p{
		margin-top: 0.3rem;
		text-align: center;
		color: #CCCCCC;
		font-size: 0.42rem;
	}
	.orderMain{
		margin-top: 1.3rem;
	}
	.orderMain li{
		margin-top: 0.2rem;
	}
	.orderBox{
		height: 6.1rem;
		margin-top: 0.35rem;
	}
	.orderId {
	    height: 1.2rem;
	    line-height: 1.2rem;
	    background: white;
	    border-bottom: 1px solid #cccccc;
	    padding-left: 10px;
	}
	.orderId span:nth-child(1){
	    float: left;
    	color: rgb(102, 102, 102);
	}
	.orderId span:nth-child(2){
	   float: right;
    	margin-right: 0.2rem;
    	color: rgb(0, 172, 255);
    	font-weight: 400;
	}
	.orderOne {
	    width: 100%;
	    height: 3.1rem;
	    background: white;
	    list-style: none;
	}
	.orderImg{
		padding: 0.3rem;
	}
	.orderOne img {
	    width: 2.5rem;
	    float: left;
	}
	.order_box{
		width: 58%;
		float: left;
	}
	.order_box p:nth-child(2){
		font-size: 0.3rem;
    	padding-left: 0.1rem;
    	color: #888;
	}
	.order_box p:nth-child(3){
		width: 100px;
    	float: left;
    	color: red;
    	font-size: 0.34rem;
    	margin-top: 0.13rem;
	}
	.orderTwo{
		float: right;
		width: 100%;
		height: 1.7rem;
		background: #fff;
		border-top:1px solid #CCCCCC;
	}
	.del{
		float: right;
    	padding-right: 0.3rem;
    	margin-top: 0.8rem;
    	color: #888;
	}
	.Total{
		float: right;
		    margin-top: 13px;
	}
	.orderTwo span{
		color:#f00;
	}
</style>