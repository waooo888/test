import Cookie from 'js-cookie'

export default {
    state: {
        isCollapse: false,//控制菜单的展开还是收起
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ],//面包屑的数据
        menu: []
    },
    mutations: {
        CollapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        //更新面包屑
        selectMenu(state, val) {
            if (val.name !== 'home') {
                const index = state.tabsList.findIndex(item => item.name === val.name)
                //如果不存在
                if (index === -1) {
                    state.tabsList.push(val)
                }
            }

        },
        //删除指定的tag数据
        closeTag(state, item) {
            console.log(item);
            console.log(state);
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index, 1)
        },
        //设置menu数据
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        //动态注册路由
        addMenu(state, router) {
            //判断我们当前缓存中是否有数据
            if (!Cookie.get('menu')) {
                return
            }

            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            //处理动态路由的数据
            const menuArry = []
            menu.forEach(item => {
                if (item.children) {//有子菜单
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArry.push(...item.children)
                }
                else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArry.push(item)
                }
            })
            menuArry.forEach(item => {
                router.addRoute('Main', item)
            })
        }
    }
}