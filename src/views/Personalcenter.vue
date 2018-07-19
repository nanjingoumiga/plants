<template>
  <div class="Personalcenter">
    <NavBarVue></NavBarVue>
    <div class="content">
      <h5>个人中心</h5>
      <div class="">
        <span>修改密码</span>
      </div>
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
</style>