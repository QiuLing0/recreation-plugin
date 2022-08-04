import { segment } from "oicq";
import fetch from "node-fetch";

const Key = `bd3bffa6239428252b083784aa929736`

export const rule = {
  caihongpi: {
    reg: "^#.*(彩虹屁|夸夸我)$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "彩虹屁", //【命令】功能说明
  },
  tiangou: {
    reg: "^#.*舔狗(日记)?$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "舔狗日记", //【命令】功能说明
  },
  dujitang: {
    reg: "^#.*毒鸡汤$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "毒鸡汤", //【命令】功能说明
  },
  saylove: {
    reg: "^#.*(土味情话|土味|情话)$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "土味情话", //【命令】功能说明
  },
  joke: {
    reg: "^#.*(讲个笑话|讲笑话|来个笑话|笑话)$", // 只匹配以括号里面结尾的 例如 讲个笑话或 派蒙讲个笑话，同上
    priority: 10, //优先级，越小优先度越高
    describe: "笑话", //【命令】功能说明
  },
  godreply: {
    reg: "^#.*神回复$", // 只匹配以括号里面结尾的 例如 讲个笑话或 派蒙讲个笑话，同上
    priority: 10, //优先级，越小优先度越高
    describe: "神回复", //【命令】功能说明
  },
};

export async function caihongpi(e) {
  let url = `http://api.tianapi.com/caihongpi/index?key=${Key}`;
  let response = await fetch(url);
  let res = await response.json(); //结果json字符串转对象
  let msg = [
    segment.at(e.user_id),"\n",
    res.newslist[0].content,
  ];
  //发送消息
  e.reply(msg);
  return true;
}

export async function tiangou(e) {
    let url = `http://api.tianapi.com/tiangou/index?key=${Key}`;
    let response = await fetch(url);
    let res = await response.json(); //结果json字符串转对象
    let msg = [
      segment.at(e.user_id),"\n",
      res.newslist[0].content,
    ];
    //发送消息
    e.reply(msg);
    return true;
}

export async function dujitang(e) {
    let url = `http://api.tianapi.com/dujitang/index?key=${Key}`;
    let response = await fetch(url);
    let res = await response.json(); //结果json字符串转对象
    let msg = [
      segment.at(e.user_id),"\n",
      res.newslist[0].content,
    ];
    //发送消息
    e.reply(msg);
    return true;
}

export async function saylove(e) {
    let url = `http://api.tianapi.com/saylove/index?key=${Key}`;
    let response = await fetch(url);
    let res = await response.json(); //结果json字符串转对象
    let msg = [
      segment.at(e.user_id),"\n",
      res.newslist[0].content,
    ];
    //发送消息
    e.reply(msg);
    return true;
}

export async function joke(e) {
    let url = `http://api.tianapi.com/joke/index?key=${Key}`;
    let response = await fetch(url);
    let res = await response.json(); //结果json字符串转对象
    let msg = [
      segment.at(e.user_id),"\n",
      res.newslist[0].content,
    ];
    //发送消息
    e.reply(msg);
    return true;
}

export async function godreply(e) {
    let url = `http://api.tianapi.com/godreply/index?key=${Key}`;
    let response = await fetch(url);
    let res = await response.json(); //结果json字符串转对象
    let msg = [
      segment.at(e.user_id),"\n",
      res.newslist[0].title,"\n",
      res.newslist[0].content,
    ];
    //发送消息
    e.reply(msg);
    return true;
}