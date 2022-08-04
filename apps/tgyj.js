import { segment } from "oicq";
import fetch from 'node-fetch'
import schedule from "node-schedule";
import moment from "moment";

var GayCD = {};
const cd = 1;  //设置冷却时间，单位为分钟

export const rule = {
  tgyj: {
    reg: "^同归于尽$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "同归于尽", //【命令】功能说明
  },
  chongsheng: {
    reg: "^重生$", //匹配消息正则，命令正则
    priority: 10, //优先级，越小优先度越高
    describe: "重生", //【命令】功能说明
  }
};

export async function tgyj(e) {
console.log("66666");
  let id = e.group_id + e.user_id

  if (GayCD[id]) {
    e.reply(`该命令有${cd}分钟冷却时间!`);
    return true;
  }

  let qq2 = e.user_id;
  let qq = null;

  for (let msg of e.message) {

    if (msg.type == 'at') {
      qq = msg.qq;
      break;
    }
  }

  if (qq == null) {
    e.reply("未识别成功,请艾特对方使用", true);
    return true;
  }

  let num1 = Math.round(Math.random() * 100 * 1.2);
  let num2 = Math.round(Math.random() * 100);

  if (num1 > num2) {
    e.reply(`由于你是发起者,所以你将加伤20％,因此你受到${num1}点伤害,对方受到${num2}点伤害,恭喜你惩罚加倍！`, true)
    e.group.muteMember(qq2, num1 * 2);
    e.group.muteMember(qq, num2);
  } else if (num1 < num2) {
    e.reply(`由于你是发起者,所以你将加伤20％,因此你受到${num1}点伤害,对方受到${num2}点伤害,恭喜你惩罚减少！`, true)
    e.group.muteMember(qq2, num1);
    e.group.muteMember(qq, num2 * 2);
  } else {
    e.reply(`由于你是发起者,所以你将加伤20％,因此你受到${num1}点伤害,对方受到${num2}点伤害,恭喜你们惩罚一样！`, true)
    e.group.muteMember(qq2, num1);
    e.group.muteMember(qq, num2);
  }

  GayCD[id] = true;

  GayCD[id] = setTimeout(() => {
    if (GayCD[id]) {
      delete GayCD[id];
    }
  }, cd * 60 * 1000)
  //执行的逻辑功能

  return true; //返回true 阻挡消息不再往下
}

export async function chongsheng(e) {
  let qq = null

  for (let msg of e.message) {

    if (msg.type == 'at') {
      qq = msg.qq
      break

    }
  }

  if (qq == null) {
    e.reply("未识别成功,请艾特对方使用", true)
    return true
  }

  e.group.muteMember(qq, 0);

  return true;
}
