<template>
    <div class="Home">
        <NavBarVue></NavBarVue>
        <div class="cover">
            <img src="../NewImages/视频动画尺寸.png" alt="">
        </div>
        <div class="content">
            <div class="test">
                <p class="intro-title">实验简介</p>
                <div class="cell">
                    <div class="left">
                        <img src="../NewImages/实验简介图片尺寸.png" alt="">
                    </div>
                    <div class="right">
                        <p class="intro">收到发货估计是的还的感觉开始的合法根据收到货收到发货估计是的还不赶紧三打白骨精三打白骨精开始的感觉开始的感觉开始的合法根据收到货收到发货估计是的还不赶紧三打白骨精三打白骨精开始的感觉开始的感觉开始的合法根据收到货收到发货估计是的还不赶紧三打白骨精三打白骨精开始的感觉开始的感觉开始的合法根据收到货收到发货估计是的还不赶紧三打白骨精三打白骨精开始的感觉开始的感觉开始的合法根据收到货</p>
                    </div>
                </div>
            </div>
            <div class="download">
                <p class="download-title">虚拟仿真程序下载</p>
                <div class="cell computer">
                    <img src="../NewImages/电脑版软件下载.png" alt="">
                </div>
                <div class="cell vr">
                    <img src="../NewImages/VR版软件下载.png" alt="">
                </div>
                <div class="cell android">
                    <img src="../NewImages/安卓版软件下载.png" alt="">
                </div>
                <div class="cell ios">
                    <img src="../NewImages/苹果版软件下载.png" alt="">
                </div>
            </div>
        </div>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
    import NavBarVue from '@/components/NavBar.vue';
    import FooterVue from '@/components/Footer.vue';
    export default {
        name: "Home",
        components: {
            NavBarVue,
            FooterVue
        },
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .cover {
        margin-top: 5px;
        text-align: center;
    }
    
    .cover img {
        height: 400px;
    }
    
    .content {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .content .test {
        width: 740px;
        height: 270px;
        box-shadow: 0 0 5px #EDEDED;
        background: white;
        padding: 14px 18px 31px 15px;
    }
    
    .content .test .intro-title {
        font-size: 20px;
        color: #67A489;
        font-weight: 700;
        border-bottom: 1px solid gray;
        padding-bottom: 14px;
        padding-left: 10px;
    }
    
    .content .download {
        width: 340px;
        height: 270px;
        box-shadow: 0 0 5px #EDEDED;
        background: white;
        margin-left: 1%;
    }
    
    .cell {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }
    
    .cell .left {
        width: 30%;
        margin-right: 3%;
    }
    
    .cell .left img {
        width: 100%;
    }
    
    .cell .right {
        width: 70%;
    }
    
    .cell .right .intro {
        width: 100%;
        height: 150px;
        font-size: 16px;
        font-weight: 700;
        color: gray;
        text-indent: 2em;
        overflow: hidden;
        text-overflow: ellipsis;
        /* white-space:nowrap; */
    }
    
    .download {
        padding: 14px 14px 0 20px;
        zoom: 1;
    }
    
    .download::after {
        content: ".";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
    }
    
    .download-title {
        font-size: 20px;
        color: #67A489;
        font-weight: 700;
        border-bottom: 1px solid gray;
        padding-bottom: 14px;
        padding-left: 10px;
    }
    
    .download .cell {
        width: 131px;
        height: 85px;
        float: left;
        margin: 5px;
        /* border-radius: 5px; */
        cursor: pointer;
    }
    
    .download .computer {
        background-image: url('../NewImages/虚拟仿真程序下载按钮（蓝色）.png');
        background-size: cover;
    }
    
    .download .vr {
        background-image: url('../NewImages/虚拟仿真程序下载按钮（紫红）.png');
        background-size: cover;
    }
    
    .download .android {
        background-image: url('../NewImages/虚拟仿真程序下载按钮（绿色）.png');
        background-size: cover;
    }
    
    .download .ios {
        background-image: url('../NewImages/虚拟仿真程序下载按钮（灰色）.png ');
        background-size: cover;
    }
    
    .download .cell img {
        width: 65%;
        margin-left: 15px;
    }
    
    .download .cell:nth-of-type(-n+2) {
        margin-top: 20px;
    }
    
    .download .cell:nth-of-type(2n-1) {
        margin-left: 20px;
    }
</style>
