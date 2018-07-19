import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import LabIntro from '../views/LabIntro';
import Onlinetest from '../views/Onlinetest'
import Personalcenter from '../views/Personalcenter'
import Studyexchange from '../views/Studyexchange'
import Teachvideo from '../views/Teachvideo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'重定向',
      redirect:'/home',
      
    },
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta: {
        title: '首页'
      },
    },
    {
      path: '/labIntro',
      name: '实验简介',
      component: LabIntro,
      meta: {
        title: '实验简介'
      },
    },
    {
      path: '/onlinetest',
      name: '在线考试',
      component: Onlinetest,
      meta: {
        title: '在线考试'
      },
    },
    {
      path: '/personalcenter',
      name: '个人中心',
      component: Personalcenter,
      meta: {
        title: '个人中心'
      },
    },
    {
      path: '/studyexchange',
      name: '学习交流',
      component: Studyexchange,
      meta: {
        title: '学习交流'
      },
    },
    {
      path: '/teachvideo',
      name: '教学视频',
      component: Teachvideo,
      meta: {
        title: '教学视频'
      },
    },
  ]
})
