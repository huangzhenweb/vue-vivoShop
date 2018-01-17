<template>
	<div class="footer">
		<router-link class="nav-item" to="/home" tag="li">
			<i class="iconfont icon-shouye"></i>
			<div>首页</div>
		</router-link>
		<router-link class="nav-item" to="/Information" tag="li">
            <i class="iconfont icon-faxian"></i>
            <div>资讯</div>
        </router-link>
		<router-link class="nav-item" to="/cart" exact tag="li">
            <i class="iconfont icon-gouwu"></i>
            <div>购物车</div>
        </router-link>
        <router-link class="nav-item" to="/my" exact tag="li">
            <i class="iconfont icon-wode"></i>
            <div>我的</div>
        </router-link>
	</div>
</template>

<script>
</script>

<style>
	.footer{
		position: fixed;
		bottom: 0;
		display: flex;
		width: 100%;
		text-align: center;
		height: 1.5rem;
		background: #fff;
		border-top: 1px solid #ccc;
	}
	.nav-item{
		flex: 1;
	}
	.footer li{
		margin-top: 0.1rem;
		/*font-size: 16px;*/
	}
	.footer li div{
		margin-top: 0.1rem;
	}
	.footer i{
		font-size: 0.65rem;
	}
	.router-link-active{
		color:#f00;
	}
</style>