<template>
  <div class="LabIntro">
    <NavBarVue></NavBarVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import NavBarVue from "@/components/NavBar.vue";
import FooterVue from "@/components/Footer.vue";
export default {
    name: "LabIntro",
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