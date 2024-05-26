import Mock from "mockjs";
import homeApi from './mockServeData/home'
import user from "./mockServeData/user";
import permission from "./mockServeData/permission";

//定义Mock请求拦截
Mock.mock('/api/home/getData', homeApi.getStatisticalData)

//新增用户列表的数据
Mock.mock('/api/user/add', 'post', user.createUser)
//编辑用户列表的数据
Mock.mock('/api/user/edit', 'post', user.updateUser)
//s删除列表的数据
Mock.mock('/api/user/del', 'post', user.deleteUser)
//用户列表的数据
Mock.mock(/api\/user\/getUser/, user.getUserList)

Mock.mock(/api\/permission\/getMenu/, 'post', permission.getMenu)