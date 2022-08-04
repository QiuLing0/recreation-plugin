import { segment } from "oicq";
import fetch from "node-fetch";
//项目路径
const _path = process.cwd();

export const rule = {
  FuckingCrazy4: {
    reg: "^#*(疯狂)*星期四$", //匹配消息正则，命令正则
    priority: 800, //优先级，越小优先度越高
    describe: "【#疯狂星期四】疯狂星期四哈哈哈哈哈哈", //【命令】功能说明
  },
};

export async function FuckingCrazy4(e) {

  let url = "https://www.sxsme.com.cn/gonglue/14216.html";
  let response = await fetch(url); //调用接口获取数据
  let res = await response.text();

  let regFC4 = /<hr \/>([\s\S]*?)<hr \/>/g;


  let textFC4 = res.match(regFC4);

  let delFC4 = [];

  for (const key in textFC4) {

    if (textFC4[key].match(/<table([\s\S]*?)<\/table>/g)) {

      textFC4[key] = textFC4[key].replace(/<table([\s\S]*?)<\/table>/g, "<hr /><hr />");

      delFC4.push(key);

      let temp = textFC4[key].match(regFC4);
      for (const tempkey in temp) {
        textFC4.push(temp[tempkey]);
      }
    }
  }

  for (const key in delFC4) {
    textFC4.splice(delFC4[key], 1);
  }

  for (const key in textFC4) {
    textFC4[key] = textFC4[key].replace(/<hr \/>|<p>|<\/p>|&nbsp;|\r|\n|<br \/>/g, "");
    textFC4[key] = textFC4[key].replace(/\t/g, "\n");
    if (textFC4[key].indexOf("\r")) {
      textFC4[key] = textFC4[key].slice(1);
    }
  }


  let imgregFC4 = /https:\/\/img.sxsme.com.cn\/uploadimg\/image\/[0-9]{7,8}\/[0-9A-Za-z_]{10,30}.jpg/g;

  let imgFC4 = res.match(imgregFC4);

  for (const key in imgFC4) {
    textFC4.push(imgFC4[key]);
  }

  let FC4 = textFC4[Math.round(Math.random() * (textFC4.length - 1))];

  e.reply(FC4.includes("http") ? segment.image(FC4) : FC4);



  return true; //返回true 阻挡消息不再往下
}
