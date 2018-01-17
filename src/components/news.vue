<template>
	<div class="news">
		<div class="newsHeader">
			<span @click="back">
				<i class="iconfont">&#xe61c;</i>
			</span>
			<span>
				新闻详情
			</span>
		</div>
		<div class="newsMain">
			<h3 class="newsTitle">{{news.title}}</h3>
			<span class="newsTime">{{news.time}}</span>
			<div style="margin-top: 0.6rem;">
				<div class="newsBox" v-for="box in news.boxs">
					<p>{{box.p}}</p>
					<img :src="box.img" alt="" />
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				news:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			getData(){
				var id=this.$route.query.id;
				this.$http.get("static/information.json").then((res)=>{
					for(var i in res.body.list){
						if(res.body.list[i].id==id){
							this.news=res.body.list[i]
							console.log(this.news)
						}
					}
				})
			}
		}
	}
</script>

<style>
	.newsHeader{
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
	}
	.newsHeader i{
		display: block;
        float: left;
        height: 50px;
        font-size: 0.71rem;
        color: black;
	}
	.newsMain{
		margin-top: 1.4rem;
		background: #fff;
		margin-bottom: 1.5rem;
	}
	.newsTitle{
		width: 100%;
		text-align: center;
	}
	.newsTime{
		margin-top: 0.1rem;
		display: block;
		text-align: center;
	}
	.newsBox p{
		width: 296px;
		margin: auto;font-size: 0.44rem;
		line-height: 150%;
		font-family: 微软雅黑, sans-serif;
        margin-top: 0.3rem;
	}
	.newsBox img {
        width: 9.3rem;
        display: block;
        margin: auto;
    }
</style>