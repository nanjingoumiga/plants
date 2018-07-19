<template>
    <div class="NavBar">
        <div class="title">
            <div>
                <img src="../NewImages/双子叶植物营养器官建设虚拟仿真实验标题.png" alt="">
            </div>
            <div>
                <img src="../NewImages/用户头像.png" alt="">
                <p class="">陈佳威
                    <img src="../NewImages/用户名和注销之间的竖线.png" alt="">
                    <span class="logout">注销</span>
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/home">首页</router-link>
                </li>
                <li>
                    <router-link to="/labIntro">实验简介</router-link>
                </li>
                <li>
                    <router-link to="/teachvideo">教学视屏</router-link>
                </li>
                <li>
                    <router-link to="/studyexchange">学习交流</router-link>
                </li>
                <li>
                    <router-link to="/onlinetest">在线考试</router-link>
                </li>
                <li>
                    <router-link to="/personalcenter">个人中心</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
           
        };
    }
};
</script>

<style scoped>
.title{
    width: 100%;
    height: 91px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.title div:nth-of-type(2) img{
    vertical-align: middle;
}
.title div:nth-of-type(2) p{
    display: inline;
    vertical-align: middle;
    color: #608FD0;
}
nav{
    width: 100%;
    background: #3353DA;
}
ul{
    width: 70%;
    height: 46px;
    line-height: 46px;
    margin: 0 auto;
    zoom: 1;
}
ul::after{
    content: ".";
    clear: both;
    display: block;
    overflow: hidden;
    font-size: 0;
    height: 0;
}
li{
    float: left;
    text-align: center;
    width: 15%;
    border-left: 1px solid #2E74DF;
}
li:nth-last-of-type(1){
    border-right: 1px solid #2E74DF;
}
a{
    color: white;
}
</style>
