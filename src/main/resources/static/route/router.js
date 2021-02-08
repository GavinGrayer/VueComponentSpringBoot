// 注册组件
const Home = httpVueLoader('view/Home.vue');
var Header = httpVueLoader('components/common/Header.vue');
Vue.component('my-header', Header);
var Sidebar = httpVueLoader('components/common/Sidebar.vue');
Vue.component('my-sidebar', Sidebar);
var Tags = httpVueLoader('components/common/Tags.vue');
Vue.component('my-tags', Tags);

//路由
const Foo = {
    template: '<div>foo</div>'
};
const Bar = {
    template: '<div>bar</div>'
};
const routes = [
    /*     {
            path: '/',
            redirect: '/foo'
        }, */
    {
        path: '/',
        component: Home,
        meta: { title: '系统首页' },
        children: [{
            path: '/foo',
            component: Foo,
            meta: { title: 'foo' }
        },
            {
                path: '/bar',
                component: Bar,
                meta: { title: 'bar' }
            },
        ]
    },];
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})




