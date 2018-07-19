<template>
  <div class="Personalcenter">
    <NavBarVue></NavBarVue>
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