<template>
  <div class="Personalcenter">
    <NavBarVue></NavBarVue>
    <div class="screen">
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
      <div class="cell">
        <div class="Image">
          <img src="../NewImages/教学视频尺寸.png" alt="">
          <div class="timev">
            <span>2018-07-15</span>
            <span>06:45</span>
          </div>
        </div>
        <p>双子叶植物双子叶植物双子叶植物双子叶植物</p>
      </div>
    </div>
    <div class="paging">
      <span>共16条</span>
      <span>每页15条</span>
      <span>当前第1/2页</span>
      <span>首页</span>
      <span>上一页</span>
      <span>下一页</span>
      <span>末页</span>
    </div>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import FooterVue from "@/components/Footer.vue";
export default {
    name: "Personalcenter",
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
.screen{
    width: 1200px;
    margin: 50px auto;
    zoom: 1;
}
.screen::after{
    content:".";
    height: 0;
    line-height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
.cell{
    float: left;
    width: 344px;
    height: 251px;
    margin: 15px 15px 0 15px;
}
.Image{
    width: 333px;
    height: 188px;
    position: relative;
}

.cell .Image img{
    width: 100%;
}
.cell p{
    font-size: 23px;
    font-family: '黑体';
    font-weight: 700px;
    color: rgb(81, 81, 81);
}
.timev{
    position: absolute;
    left: 0;
    bottom: 0px;
    font-size: 23px;
    font-family: '黑体';
    color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
    background: #434D44;
    border-radius: 15px;
}
.paging{
    width: 1025px;
    margin: 0 auto;
    text-align: right;
    font-size: 23px;
    font-family: '新宋体';
    color: rgb(97, 97, 97);
}
</style>