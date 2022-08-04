import { segment } from "oicq";
import fetch from 'node-fetch'

let GayCD = {};

export const rule = {
  whoismywife: {
    reg: "^#*今日群友老婆$", //匹配消息正则，命令正则
    priority: 800, //优先级，越小优先度越高
    describe: "今日群友老婆", //【命令】功能说明
  },
};

export async function whoismywife(e) {
  if (!e.isMaster) {
    if (GayCD[e.user_id]) {
      e.reply("该命令有2分钟cd");
      return true;
    }

    GayCD[e.user_id] = true;

    GayCD[e.user_id] = setTimeout(() => {
      if (GayCD[e.user_id]) {
        delete GayCD[e.user_id];
      }
    }, 120000);
  }




  let mmap = await e.group.getMemberMap();
  let arrMember = Array.from(mmap.values());
  let randomWife = arrMember[Math.round(Math.random() * (arrMember.length - 1))];
  let number = Math.ceil(Math.random() * 2);

  while (randomWife.sex != "female") {

    randomWife = arrMember[Math.round(Math.random() * (arrMember.length - 1))];

  }

  if (e.isMaster) {
    let msg = [
      segment.at(e.user_id),
      "\n主人好,今天你的群友老婆是",
      segment.image(`https://q1.qlogo.cn/g?b=qq&s=0&nk=${randomWife.user_id}`),
      `【${randomWife.nickname}】 (${randomWife.user_id}) 哒哒哒！(健康使用不要刷屏！)`
    ]

    e.reply(msg);

    return true;
  }


  if (number > 1) {

    let msg = [
      segment.at(e.user_id),
      "\n今天你的群友老婆是",
      segment.image(`https://q1.qlogo.cn/g?b=qq&s=0&nk=${randomWife.user_id}`),
      `【${randomWife.nickname}】 (${randomWife.user_id}) 哒哒哒！(健康使用不要刷屏！)`
    ]

    e.reply(msg);
  } else {
    e.reply(`醒醒,你根本没有老婆`)
  }


  return true;
}
