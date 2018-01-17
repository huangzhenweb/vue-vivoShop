<template>
	<div class="me">
		<div class="meHeader">
			{{title}}
		</div>
		<div class="main">
			<div class="img">
				<img src="../../static/img/jane1 (2).jpg" alt="" />
			</div>
			<p class="name">{{name}}</p>
			<p class="Signature">{{Signature}}</p>
		</div>
		<div class="myBox">
			<div class="myOrder">
				<div class="orders" @click="order">
					<i class="iconfont icon-74wodedingdan">&#xe7c2;</i>
					<p>我的订单</p>
				</div>
			</div>
			 <div class="myCollection" @click="author">
                <div class="orders">
                    <i class="iconfont icon-zuozhe">&#xe671;</i>
                    <p>联系我</p>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
		import { MessageBox } from 'mint-ui'
	export default{
		data(){
			return{
				title:'个人主页',
				name:'jane',
				Signature:'你陪我跨过黑暗，我陪你走向天亮'
			}
		},
		methods:{
			order(){
				this.$router.push('/order')
			},
			author(){
				MessageBox('qq：30260304', '手机号：18235923548         邮箱：302603054@qq.com');
			}
		}
	}
</script>

<style>
	.meHeader{
		width: 100%;
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: 0.41rem;
		text-align: center;
		background: white;
	}
	.main{
		background: white;
    	margin-top: 10px;
    	width: 100%;
    	padding: 10px 0;
    	    margin-bottom: 10px;
	}
	.main .img{
		width:5rem;
		height: 5rem;
		border-radius: 50%;
		margin: 0 auto;
	}
	.main .img img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.main .name,.Signature{
		text-align: center;
		line-height: 1rem;
		font-size: 0.41rem;
	}
	.myBox{
        width: 100%;
        height: 110px;
        background: white;
    }
    .myOrder,.myCollection{
        height: 50%;
    }
	.orders{
       height: 100%;
       /* background: red; */
       /*margin-left: 10px;*/
       border-bottom: 1px solid #cccccc;
   }
   .orders i,.orders p{
   	    display: block;
    	line-height: 55px;
    	float: left;
    	padding-left: 10px;
   }
</style>