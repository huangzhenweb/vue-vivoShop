<template>
	<div class="parts">
		<div class="partsHeader">
			<span>
				<i class="iconfont" @click="back">&#xe61c;</i>
			</span>
			<span>选购配件</span>
		</div>
		<div class="partsMain">
			<mt-navbar v-model="selected">
				<mt-tab-item id="tab-container1">全部</mt-tab-item>
				<mt-tab-item id="tab-container2">充电器</mt-tab-item>
				<mt-tab-item id="tab-container3">保护膜</mt-tab-item>
				<mt-tab-item id="tab-container4">耳机音响</mt-tab-item>
				<mt-tab-item id="tab-container5">数据线</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="tab-container1">
					<ul style="margin-top:2px;">
						<li class="partsList" v-for="item in list" @click="open(item.id)">
							<img :src="item.image" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container2">
					<ul style="margin-top:2px;">
						<li class="partsList" v-for="item in charger" @click="open(item.id)">
							<img :src="item.image" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container3">
					<ul style="margin-top:2px;">
						<li class="partsList" v-for="item in protect" @click="open(item.id)">
							<img :src="item.image" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container4">
					<ul style="margin-top:2px;">
						<li class="partsList" v-for="item in headset" @click="open(item.id)">
							<img :src="item.image" alt="" />
							<p>{{item.name}}</p>
							<p>{{item.nametwo}}</p>
							<p class="price">¥ {{item.price}}</p>
							
						</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="tab-container5">
					<ul style="margin-top:2px;">
						<li class="partsList" v-for="item in usbset" @click="open(item.id)">
							<img :src="item.image" alt="" />
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
				list:[],
            	charger:[],
            	protect:[],
            	headset:[],
            	usbset:[]
			}
		},
		mounted(){
			this.getData()
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			open(id){
				this.$router.push({path:"goodDetail",query:{id:id}})
			},
			getData(){
				this.$http.get("static/parts.json").then((res)=>{
					this.list=res.body.list
					this.charger=res.body.charger
					this.protect=res.body.protect
					this.headset=res.body.headset
					this.usbset=res.body.USB_Data
				})
			}
		}
	}
</script>

<style>
		.partsHeader{
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
	.partsHeader i{
		display: block;
        float: left;
        height: 50px;
        font-size: 0.71rem;
        color: black;
	}
		.partsMain{
		margin-top: 1.32rem;
	}
	.partsList{
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
	.partsList p{
		
		text-align: center;
		
		font-size: 0.35rem;
		margin: auto;
	}
	.partsList p:nth-child(2){
		width: 90%;
		font-size: .4rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.partsList p:nth-child(3){
		    width: 3.8rem;
		    margin: 0 auto;
		    padding: 0;
		    height: 2.6em;
		    font-size: .22rem;
		    line-height: 1.4;
		    color: #000;
		    text-align: center;
		    word-break: break-all;
		    overflow: hidden;
		    padding-top: 0.2rem;
	}
	.partsList .price{
		color:#f00;
		margin-top: 10px;
		
	}
	.partsList img{
		width: 4rem;
		height: 3.2rem;
		display: block;
		margin: auto;
		padding: 0.5rem;
	}
</style>