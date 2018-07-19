<template>
    <div class="NavBar">

        <div class="author">

            <div>

                <p>制作信息</p>

                <p>版权所有@扬州大学生命科学与技术学院</p>

            </div>

            <div>

                <p>使用说明书</p>

                <p>技术支持@陈佳威</p>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: "NavBar",

    data() {
        return {};
    }
};
</script>

<style scoped>
.author{
    width: 1000px;
    /* text-align: center; */
    border-top: 1px solid gray;
    margin: 35px auto;
    color: gray;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
}

.author div:nth-of-type(1){
    margin-top: 10px;
    margin-right: 30px;
}
.author div:nth-of-type(1) p:nth-of-type(1){
    padding-left: 195px;
}
.author div:nth-of-type(2){
    margin-top: 10px;
    margin-left: 5px;
}
.author div:nth-of-type(2) p:nth-of-type(1){
    padding-right: 40px;
}
</style>
