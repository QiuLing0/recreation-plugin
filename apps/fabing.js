import { segment } from "oicq";
import fetch from "node-fetch";
import { ciku } from "../resources/fabing/fb_ciku.js";

export const rule = {
  fabing: {
    reg: "^#*发病.*$", //匹配消息正则，命令正则
    priority: 800, //优先级，越小优先度越高
    describe: "发病", //【命令】功能说明
  },
};

export async function fabing(e) {
  let msg = "";

  for (let m of e.message) {
    if (m.type == 'at') {
      msg += m.text.replace("@", "");
      continue;
    }
    msg += m.text;
  }
  msg = msg.replace(/#|发病/g, "").trim();
  console.log(msg);
  let i = Math.round(Math.random() * (ciku.length - 1))

  let re = ciku[i].replace(/阿咪/g, msg);

  e.reply(re);
  return true;
}

