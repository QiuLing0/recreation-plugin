import { segment } from "oicq";
import fetch from "node-fetch";

//项目路径
const _path = process.cwd();

//简单应用示例

//1.定义命令规则
export const rule = {
  weather: {
    reg: "^#(.*)(天气)$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "天气预报", //【命令】功能说明
  },
  xzys: {
    reg: "^#.*运势$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "星座运势", //【命令】功能说明
  },
  lssdjt: {
    reg: "^#历史上的今天$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "历史上的今天", //【命令】功能说明
  },
  news: {
    reg: "^#(今日)?新闻$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "新闻", //【命令】功能说明
  },
};

export async function weather(e) {
  let type = `cytq`;  //天气来源
  let name = e.msg.replace(/#|＃|天气/g, "").trim();  //地区名称
  let url = `http://xiaoapi.cn/API/zs_tq.php?type=${type}&msg=${name}&num=20&n=1`;
  let response = await fetch(url);
  let res = await response.json();

  if (res.code == 200) {
    let msg = [
      res.name, "\n",
      res.data
    ];
    e.reply(msg);
    return true;
  }
  else {
    e.reply("请输入\"#XX天气\"来查询某地天气");
    return true;
  }
}

export async function xzys(e) {
  let keyword = e.msg.replace(/#|＃|运势/g, "").trim();  //星座名称
  let url = `http://xiaoapi.cn/API/xzys_pic.php`;
  let msg = null;
  switch (keyword) {
    case "白羊":
    case "白羊座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E7%99%BD%E7%BE%8A%E5%BA%A7`),
      ];
      break;
    case "金牛":
    case "金牛座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E9%87%91%E7%89%9B%E5%BA%A7`),
      ];
      break;
    case "双子":
    case "双子座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%8F%8C%E5%AD%90`),
      ];
      break;
    case "巨蟹":
    case "巨蟹座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%B7%A8%E8%9F%B9`),
      ];
      break;
    case "狮子":
    case "狮子座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E7%8B%AE%E5%AD%90`),
      ];
      break;
    case "处女":
    case "处女座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%A4%84%E5%A5%B3`),
      ];
      break;
    case "天秤":
    case "天秤座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%A4%A9%E7%A7%A4`),
      ];
      break;
    case "天蝎":
    case "天蝎座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%A4%A9%E8%9D%8E`),
      ];
      break;
    case "射手":
    case "射手座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%B0%84%E6%89%8B`),
      ];
      break;
    case "摩羯":
    case "摩羯座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E6%91%A9%E7%BE%AF`),
      ];
      break;
    case "水瓶":
    case "水瓶座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E6%B0%B4%E7%93%B6`),
      ];
      break;
    case "双鱼":
    case "双鱼座":
      msg = [
        segment.at(e.user_id),"\n",
        segment.image(`${url}?msg=%E5%8F%8C%E9%B1%BC`),
      ];
      break;
    case "星座":
      msg = [
        segment.at(e.user_id),
        "请输入\"#白羊座运势\"来查询星座运势",
      ];
      break;
    default:
      msg = [
        segment.at(e.user_id),
        "请输入正确的星座名称",
      ];
      break;
  };
  e.reply(msg);
  return true;
}

export async function lssdjt(e) {
  let url =`http://xiaoapi.cn/API/lssdjt_pic.php`;
  let msg = [
    segment.image(`${url}`),
  ];
  e.reply(msg);
  return true;
}

export async function news(e) {
  let url = `https://api.qqsuu.cn/api/60s`;

    let msg = [
      segment.image(url),
    ];

    e.reply(msg);

    return true;
}