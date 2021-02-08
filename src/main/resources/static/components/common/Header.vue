<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="isC">
      <i v-if="!isCollapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="header-right">
      <div class="user-avator">
        <img src="images/img.jpg" />
      </div>
      <!-- 用户名下拉菜单 -->
      <el-dropdown class="user-name" trigger="click">
        <span class="el-dropdown-link">
          {{ username }}
          <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <a
                  href="#"
                  target="_blank"
          >
            <el-dropdown-item>项目仓库</el-dropdown-item>
          </a>
          <el-dropdown-item divided command="loginout"
          >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
    module.exports = {
        data() {
            return {
                msg: "hello world!  Header",
                username: "zhangsn",
                isCollapse: false
            };
        },
        methods: {
            isC() {
                console.log("Header...isC");
                this.isCollapse = !this.isCollapse;
                //触发事件
                bus.$emit('collapse', this.isCollapse);
            },
        },
    };
</script>

<style scoped>
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
    display: inline-block;
  }

  .el-icon-s-fold,.el-icon-s-unfold {
    color: #000;
  }


  .collapse-btn {
    float: left;
    padding: 0 10px;
    cursor: pointer;
    line-height: 60px;
  }
  .header .logo {
    float: left;
    width: 250px;
    line-height: 60px;
  }
  .header-right {
    float: right;
    padding-right: 10px;
  }

  .el-dropdown-link {
    color: #000;
    font-size: 16px;
    cursor: pointer;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }

  .user-avator {
    display: inline-block;
    line-height: 60px;
  }
  .user-avator img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 60px;
    vertical-align: middle;
  }
</style>