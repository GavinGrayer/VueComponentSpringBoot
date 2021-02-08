<template>
  <div class="home">
    <el-container style="height: 100%">
      <!-- 侧边栏 -->
      <!-- :父传子 @子传父出发函数 -->
      <my-sidebar :side-collapse="isCollapse"></my-sidebar>

      <el-container>
        <!--头部-->
        <el-header>
          <!-- <i class="el-icon-s-fold" @click="isC" ></i> -->
          <my-header></my-header>
        </el-header>

        <my-tags></my-tags>
        <!-- <my-tag></my-tag> -->
        <!--主页面-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                tagsList: [],
                isCollapse: true,
            };
        },
        /* components: {
                // 将组建加入组建库
                "my-header": "url:../components/Header.vue",
              }, */
        created() {
            // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
            bus.$on("tags", (msg) => {
                console.log("home....bus...on");
                console.log(msg);
                let arr = [];
                for (let i = 0, len = msg.length; i < len; i++) {
                    msg[i].name && arr.push(msg[i].name);
                }
                this.tagsList = arr;
            });
        },
        methods: {
            /* isC() {
                        console.log('Home....isC')
                        this.isCollapse = !this.isCollapse
                    } */
        },
    };
</script>

<style scoped>
  .home {
    font-size: 24px;
    height: 100%;
    background-color: #ffffff;
    /*font-weight: bold;*/
  }

  .el-header,
  .el-footer {
    background-color: #fff;
    color: #fff;
    text-align: left;
    line-height: 60px;
    margin-bottom: 5px;
    box-shadow: 10px 5px 10px #ddd;
  }

  .el-main {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-menu,
  .el-container:nth-child(6) .el-menu {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-menu {
    line-height: 320px;
  }

  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
</style>
