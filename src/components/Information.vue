<template>
	<div class="information">
		<div class="informationHeader">
			<span>新闻信息</span>
		</div>
		<ul class="informationMian">
			<li class="list" v-for="item in informations">
				<h3 class="title">{{item.title}}</h3>
				<span class="time">{{item.time}}</span>
				<div class="informationImg" @click="open(item.id)">
					<img :src="item.img" alt="" />
				</div>
				<a href="javascript:;" class="more" @click="open(item.id)">阅读全文</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				informations:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			getData(){
				this.$http.get("static/information.json").then((res)=>{
					this.informations=res.body.informations
				})
			},
			open(id){
				this.$router.push({path:"news",query:{id:id}})
			}
		}
	}
</script>

<style>
	.informationHeader{
		position: fixed;
		width:100%;
		-webkit-box-shadow:0 0 10px #cecece;
		box-shadow: 0 0 10px #cecece;
		height: 1.3rem;
		line-height: 1.3rem;
		font-size: 0.35rem;
		padding-left: 0.3rem;
		background: #fff;
		top:0;
		font-size: 0.41rem;
		font-family: '微软雅黑';
	}
	.informationMian{
		margin-top: 1.3rem;
		margin-bottom: 1.3rem;
	}
	.informationMian .list{
		width:100%;
		height: 7rem;
		background: #fff;
		margin-top: 5px;
		padding-top: 0.35rem;
	}
	.informationMian .list .title{
		
		text-align: left;
		color: rgb(67, 67, 67);
		font-size: 0.4rem;
		margin-left: 1.4rem;
	}
	.informationMian .list .time{
		
		text-align: left;
		display: block;
		line-height: 0.5rem;
		font-size: 0.16rem;
		padding: 7px 0;
		margin-left: 1.4rem;
	}
	.informationImg{
		width: 100%;
		height: 4.7rem;
	}
	.informationImg img{
		width: 100%;
		height: 100%;
	}
	.more{
		float: right;
		font-size: 0.3rem;
		margin-right: 0.75rem;
		margin-top: 0.2rem;
		color: #4a4a4a;
	}
</style>