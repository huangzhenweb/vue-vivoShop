<template>
	<div class="goodDetail">
		<div class="goodDetailHeader">
			<span>
				<i class="iconfont" @click="back">&#xe61c;</i>
			</span>
			<span>商品详情</span>
		</div>
		<div class="goodBox">
			<div class="goodDetailSwiper">
				<mt-swipe :auto="4000">
                            <mt-swipe-item> <img :src="goodDetails.imgone" alt="图片"></mt-swipe-item>
                            <mt-swipe-item> <img :src="goodDetails.imgtwo" alt="图片"></mt-swipe-item>
                            <mt-swipe-item> <img :src="goodDetails.imgThree" alt="图片"></mt-swipe-item>
                </mt-swipe>
			</div>
			<div class="goodDetailMain">
				<p class="number">商品编号：{{goodDetails.number}}</p>
				<p class="name">{{goodDetails.name}}</p>
				<p class="price">¥ {{goodDetails.price}}</p>
			</div>
			<div class="goodDetailValue">
				<div class="nub">购买数量 ：</div>
				<div class="Number">
					<span class="goodDetailReduce" @click="del">-</span>
					<input class="input" type="text" v-model="goodDetails.value" readonly="readonly"/>
					<span class="goodDetailAdd" @click="add">+</span>
				</div>
			</div>
			<div class="goodDetailBox">
				<mt-navbar v-model="selected">
                    <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
                    <mt-tab-item id="tab-container2">商品配置</mt-tab-item>
                </mt-navbar>
                <mt-tab-container v-model="selected">
                	<mt-tab-container-item id="tab-container1">
                		<div class="goodDetailImg">
                			<p v-for="image in goodDetails.Images">
                				<img :src="image.one" alt="" />
                			</p>
                		</div>
                	</mt-tab-container-item>
                	<mt-tab-container-item id="tab-container2">
                		<div class="goodDetailPeizhi">
                			<table style="border-collapse: collapse;" border="1">
                				<tbody>
                					<tr v-for="peizhi in goodDetails.Peizhis">
                						<td style="width:26%;height: 50px;">{{peizhi.left}}</td>
                						<td style="width:50%;height: 50px;">{{peizhi.right}}</td>
                					</tr>
                				</tbody>
                			</table>
                		</div>
                	</mt-tab-container-item>
                </mt-tab-container>
			</div>
			<div class="goodDetailFooter">
				<a href="javaScript:;" class="add" @click="addcart">加入购物车</a>
				<a href="javaScript:;" class="purchase" @click="pay">立即购买</a>
			</div>
		</div>
	</div>
</template>

<script>
	import {Swipe, SwipeItem} from 'mint-ui'
	import { MessageBox } from 'mint-ui'
	import { Toast } from 'mint-ui'
	import { Navbar, TabItem } from 'mint-ui'
	import { TabContainer, TabContainerItem } from 'mint-ui'
	export default{
		data(){
			return {
				active:'1',
				selected:'tab-container1',
				goodDetails:[]
			}
		},
		mounted(){
			this.getData()
		},
		computed:{
			paid(){
				var paid=0;
					paid+=this.goodDetails.value*this.goodDetails.price
					return paid
			}
		
		},
		methods:{
			getData(){
				var id=this.$route.query.id
				this.$http.get("static/goodDetail.json").then((res)=>{
					for(var i in res.body.goodDetails){
						if(res.body.goodDetails[i].id==id){
							this.goodDetails=res.body.goodDetails[i]
						}
					}
				})
			},
			back(){
				this.$router.go(-1)
			},
			del(){
				if(this.goodDetails.value==1){
					this.goodDetails.value==1	
				}else{
					this.goodDetails.value--
				}
				
				
			},
			add(){
				this.goodDetails.value++
			},
			addcart(){
				var idExist=this.$store.state.carts.find((todo)=>{
					return todo.id==this.goodDetails.id
				})
				if(!idExist){
					var data={
                        id:this.goodDetails.id,
                        name:this.goodDetails.name,
                        price:this.goodDetails.price,
                        imgone:this.goodDetails.imgone,
                        value:this.goodDetails.value
                    }
                    this.$store.commit("addcarts",data);
                    Toast({
                        message:"加入购物车成功！",iconClass:"iconfont icon-goumaichenggong-copy",duration: 950
                    })
				}else{
					MessageBox('提示', '商品已存在购物车');
				}
				
			},
			pay(){
				Toast({message:`成功支付了${this.paid}元`,iconClass:'iconfont icon-goumaichenggong',duration:750})
				var data={
					id:this.goodDetails.id,
					name:this.goodDetails.name,
					price:this.goodDetails.price,
					image:this.goodDetails.imgone,
					value:this.goodDetails.value,
					order:this.goodDetails.order,
					color:this.goodDetails.color,
					number:this.goodDetails.number,
					
				}
				console.log(data)
				this.$store.commit("addorder",data)
			}
		}
	}
</script>

<style>
	.goodDetailHeader{
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
	.goodDetailHeader i{
		display: block;
        float: left;
        height: 50px;
        font-size: 0.71rem;
        color: black;
	}
	.goodBox{
		margin-top: 1.3rem;
	}
	.goodDetailSwiper{
		width:100%;
		height: 9rem;
		margin-top: 3px;
		background: #fff;
	}
	.goodDetailSwiper img{
		width: 70%;
		height: 7rem;
		display: block;
		margin: auto;
	}
	.goodDetailMain{
		padding: 0.4rem;
		border-bottom: 1px solid #ccc;
		border-top: 1px solid #ccc;
	}
	.goodDetailMain p{
		margin-bottom: 5px;
	}
	.goodDetailMain .name{
		color: black;
    	font-weight: 800;
    	font-size: 0.35rem;
	}
	.goodDetailMain .price{
		font-size: 0.4rem;
		color:#F00;
	}
	.goodDetailValue {
    	height: 1rem;
    	border-bottom: 1px solid #cecece;
    	padding: 0.4rem;
    }
    .nub{
    	font-size: 0.35rem;
    }
    .nub,.Number{
    	float: left;
    	line-height: 0.8rem;
    }
    .Number{
    	margin-left: 0.2rem;
    }
    .goodDetailReduce,.goodDetailAdd{
    	width:1rem;
    	height: 0.8rem;
    	line-height: 0.8rem;
    	display: block;
    	background: #fff;
    	float: left;
    	border: 1px solid #b2b2b2;
		text-align: center;
    	font-size: 0.5rem;
    	color: block;
    }
    .goodDetailReduce{
    	border-right: none;
    }
    .goodDetailAdd{
    	border-left:none;
    }
   	.input{
   		width: 1rem;
    height: 0.8rem;
    line-height: 0.8rem;
    float: left;
    border: 1px solid #b2b2b2;
    text-align: center;
    color: black;
   	}
   	.goodDetailBox{
   		margin-bottom: 1.8rem;
   	}
   	.goodDetailImg{
        margin-top: 4px;
        margin-bottom: 6px;
   }
   .goodDetailImg  img{
       width: 100%;
       height: auto;
       display: block;
   }
   table{
   	width: 100%;
   	border:1px solid #cccccc;
   	margin-top: 5px;
   	margin-bottom: 10px;
   }
   table td{
   	font-size: 0.31rem;
   	text-align: center;
   	color: #000;
   }
   .goodDetailFooter{
   	position: fixed;
   	width:100%;
   	bottom: 0;
   	height: 1.3rem;
   	background: #f6f4f7;
   	border-top:1px solid #efefef;
   	z-index: 2;
   }
   .goodDetailFooter a{
   	display: block;
   		width:50%;
   		float: left;
   		height: 100%;
   		line-height: 1.3rem;
   		text-align: center;
   		font-size: 0.35rem;
   		background: #e3211e;
   		color:#fff;
   }
   .goodDetailFooter .add{
   	background: #FF9800;
   }
</style>