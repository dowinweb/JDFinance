/**
 * @Author: dongwei
 * @Date:   2018-03-04 10:28:25
 * @Last modified by:   dongwei
 * @Last modified time: 2018-03-07 23:20:34
 */

import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
    ],
})
