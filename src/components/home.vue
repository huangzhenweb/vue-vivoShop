<template>
	<div class="home">
		<div class="homeHeader">
			VIVO
			<!--<i class="iconfont icon-VIVO"></i>-->
		</div>
		<div class="official">
			<img src="../../static/img/official.png" alt="" />
		</div>
		<div class="swipe">
			<mt-swipe :auto="2000">
			  <mt-swipe-item>
			  		<router-link to="goodDetail?id=4">
			  			<img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171113/20171113232814110405_original.jpg" alt="轮播图" />
			  		</router-link>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<router-link to="choose">
			  			<img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20171122/20171122174336166279_original.jpg" alt="" />
			  		</router-link>
			  </mt-swipe-item>
			</mt-swipe>
		</div>		
		<ul class="listItem">
			<li @click="choose">
				<div><img src="../../static/img/xuangou.jpg" alt="" /></div>
			</li>
			<li @click="parts">
				<div><img src="../../static/img/peijian.jpg" alt="" /></div>
			</li>
			<li @click="btn">
				<div><img src="../../static/img/pingbao.jpg" alt="" /></div>
			</li>
			<li @click="btn">
				<div><img src="../../static/img/dingzhi.jpg" alt="" /></div>
			</li>
		</ul>
		<div class="main">
			<span>爆款产品</span>
			<ul class="main_con">
				<li class="item" v-for="(item,index) in items" @click=open(item.id)>
					<div class="img"><img :src="item.img" alt="" /></div>
					<p class="name">{{item.name}}</p>
					<p class="info">{{item.nametwo}}</p>
					<p class="price">¥ {{item.Price}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {Swipe, SwipeItem} from 'mint-ui';
	import {MessageBox} from 'mint-ui';
	export default{
		data(){
			return {
				items:[]
			}
		},
		mounted: function () {
            this.getData();
        },
		methods:{
			getData:function(){
				var _this=this;
				this.$http.get("static/Home.json").then(function(res){
					this.items=res.body.todos
//					console.log(this.items)
				})
			},
			open(id){
				this.$router.push({path: "goodDetail", query: {id: id}})
			},
			choose(){
				this.$router.push({path:"choose"})
			},
			parts(){
				this.$router.push({path:"parts"})
			},
			btn(){
				MessageBox("提示，vue练习的第一个项目，给我赞，谢谢")
			}
		}
	}
</script>

<style>
	.home{
		border-bottom: 10px;
	}
	.homeHeader{
		position: fixed;
		top: 0;
		width:100%;
		font-size: 0.8rem;
		background: #fff;
		height: 1.3rem;
		line-height: 1.3rem;
		padding-left: 0.3rem;
		font-weight: 800;
		z-index: 5;
	}
	.official{
		height: 0.8rem;
		width: 100%;
		margin-top: 1.3rem;
		background: #fff;
	}
	.official img{
		width: 100%;
		height: 100%;
	}
	.swipe{
		width: 100%;
		height: 6.5rem;
		margin-top: 1px;
	}
	.swipe img{
		width:100%;
		height: 100%;
	}
	.listItem{
		width:100%;
		/*display: flex;*/
		height: 2.5rem;
		background: #fff;
		border-bottom: 1px solid #ccc;
	}
	.listItem li{
		width:25%;
		height: 100%;
		float: left;
	}
	.listItem li div{
		width: 1.7rem;
		height: 1.68rem;
		margin: auto;
	}
	.listItem li div img{
		display: block;
		width: 100%;
		height: 100%;
		margin: 15px auto;
	}
	.main::after,.main_con::after{
		content: "";
		display: block;
		clear: both;
	}
	.main span{
		display: block;
		height: 1.3rem;
		border-bottom: 1px solid #ccc;
		padding-left: 0.3rem;
		line-height: 1.3rem;
		font-size: 0.35rem;
	}
	.main_con{
		margin-bottom: 1rem;
	}
	.item{
		width:50%;
		height: 7.3rem;
		box-sizing: border-box;
		border-right:1px;
		border-bottom: 1px;
		float: left;
	}
	.item div{
		height: 3.3rem;
    	width: 3.5rem;
    	display: block;
    	margin: auto;
    	padding-top: 0.9rem;
	}
	.item div img{
		width:100%;
		height: 100%;
	}
	.item p{
		width: 100%;
		text-align: center;
		overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

	}
	.name{
		font-size: 0.37rem;
        padding-top: 0.8rem;
	}
	.info{
		padding-top: 0.15rem;
		font-size: 0.22rem;
	}
	.price{
		font-size: 0.33rem;
		color: #f00;
		margin-top: 0.2rem;
	}
	.mint-msgbox{
		width:55%;
		padding: 10px;	
	}
	.mint-msgbox-cancel{
		display: block!important;
	}
</style>