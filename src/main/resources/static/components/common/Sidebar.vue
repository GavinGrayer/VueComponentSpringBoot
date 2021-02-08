<template>
    <div class="sidebar">
        <el-scrollbar>
            <el-menu
                    router
                    :default-active="onRoutes"
                    :collapse="isCollapse"
                    background-color="#324157"
                    text-color="#bfcbd9"
                    active-text-color="#20a0ff"
                    unique-opened
                    class="sidebar-el-menu"
            >
                <el-menu-item index="/" style="text-align: center">
                    <span slot="title"><h1>后台管理系统</h1></span>
                </el-menu-item>
                <el-menu-item index="/foo">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="/bar">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>

                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <span slot="title">分组一</span>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <span slot="title">选项4</span>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
    module.exports = {
        props: ["side-collapse"],
        data() {
            return {
                isCollapse: false,
            };
        },
        computed: {
            onRoutes() {
                console.log("onRoutes...");
                console.log(this.$route);
                return this.$route.path.replace("/", "");
            },
        },
        created() {
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            // on监听事件
            bus.$on("collapse", (msg) => {
                console.log("sidebar...bus");
            this.isCollapse = msg;
            //bus.$emit("collapse-content", msg);
        });
        },
        watch: {
            sideCollapse: function (old, val) {
                this.isCollapse = val;
            },
        },
    };
</script>

<style scoped>
    .sidebar {
        display: block;
        left: 10px;
        top: 70px;
        bottom: 0;
        overflow-y: scroll;
        background-color: rgb(50, 65, 87);
    }

    .el-scrollbar {
        height: 100%;
        width: 100%;
        background-color: rgb(50, 65, 87);
    }

    .el-menu {
        background-color: #d3dce6;
        color: #333;
        text-align: left;
        line-height: 200px;
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 250px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>
