<template>
	<div class="choose">
		<div class="chooseHeader">
			<span>
				<i class="iconfont" @click="back">&#xe61c;</i>
			</span>
			<span>选购手机</span>
		</div>
		<div class="chooseMain">
			<mt-navbar v-model="selected">
				<mt-tab-item id="tab-container1">全部</mt-tab-item>
				<mt-tab-item id="tab-container2">Xplay系列</mt-tab-item>
				<mt-tab-item id="tab-container3">X系列</mt-tab-item>
				<mt-tab-item id="tab-container4">Y系列</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="tab-container1">
					<ul style="margin-top:2px;">
						<li class="chooseList" v-for="item in chooses" @click="open(item.id)">
							<img :src="item.ImageOne" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.Price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<ul style="margin-top:2px;">
						<li class="chooseList" v-for="item in motos" @click="open(item.id)">
							<img :src="item.ImageOne" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.Price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<ul style="margin-top:2px;">
						<li class="chooseList" v-for="item in MotoZs" @click="open(item.id)">
							<img :src="item.ImageOne" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container4">
					<ul style="margin-top:2px;">
						<li class="chooseList" v-for="item in z2s" @click="open(item.id)">
							<img :src="item.ImageOne" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	export default{
		data(){
			return{
				selected:"tab-container1",
				chooses:[],
				motos:[],
				MotoZs:[],
				z2s:[]
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
				this.$http.get("static/choose.json").then((res)=>{
					this.chooses=res.body.chooses
					this.motos=res.body.motos
					this.MotoZs=res.body.MotoZs
					this.z2s=res.body.z2s
				})
			},
			open(id){
				this.$router.push({path:"goodDetail",query:{id:id}})
			}
		}
	}
</script>

<style>
	.choose{
		position: absolute;
    	background: white;
    	width: 100%;
    	height: 100%;
    	top: 0;
    	bottom: 0;
    	z-index: 999;
	}
		.chooseHeader{
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
	.chooseHeader i{
		display: block;
        float: left;
        height: 50px;
        font-size: 0.71rem;
        color: black;
	}
	.chooseMain{
		margin-top: 1.32rem;
	}
	.chooseList{
		width:50%;
		height: 6.3rem;
		background: #fff;
		float: left;
		box-sizing: border-box;
		border-bottom: 1px solid #f4f4f4;
		border-right: 1px solid #f4f4f4;
		margin-top: 1px;
		list-style: none;
	}
	.chooseList p{
		width: 100%;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.35rem;
	}
	.chooseList .price{
		color:#f00;
		margin-top: 10px;
		
	}
	.chooseList img{
		width: 4rem;
		height: 3.2rem;
		display: block;
		margin: auto;
		padding: 0.5rem;
	}
</style>