import { segment } from "oicq";
import fetch from "node-fetch";
import { ciku } from "../../resources/cp_story/cp_ciku.js";

export const rule = {
  cp: {
    reg: "^#*cp.*$", //匹配消息正则，命令正则
    priority: 800, //优先级，越小优先度越高
    describe: "cp", //【命令】功能说明
  },
};

export async function cp(e) {
  let msg = "";

  for (let m of e.message) {
    if (m.type == 'at') {
      msg += m.text.replace("@", "");
      continue;
    }
    msg += m.text;
  }
  msg = msg.replace(/#|cp/g, "").trim();

  if (!/和/.test(msg)) {
    return true;
  }

  let i = Math.round(Math.random() * (ciku.length - 1));

  console.log(msg);
  let position = msg.indexOf("和");

  let cpone = msg.substring(0, position);
  let cptwo = msg.slice(position + 1);

  let re = ciku[i].replace(/<攻>/g, cpone);
  let res = re.replace(/<受>/g, cptwo);

  e.reply(res);
  return true;
}
