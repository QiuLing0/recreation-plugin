import { segment } from "oicq";
import fetch from 'node-fetch'
import moment from 'moment';

let sum = 1; //这里记录总次数 也就是每天可查询次数接口分开算
// yyyy-MM-DD 默认当前年月日 改后面的时间就行
let dateTime = 'YYYY-MM-DD 00:00:00'; //这里定义时间刷新时间格式是 年-月-日 时:分:秒
/**
 * 每天限制次数
 * 每天凌晨0点刷新 如需改规则请自行修改
 */

export const rule = {
  jrrp: {
    reg: "^#*(今日人品|jrrp)$", //匹配消息正则，命令正则
    priority: 800, //优先级，越小优先度越高
    describe: "今日人品", //【命令】功能说明
  },
};

export async function jrrp(e) {
  let data_redis = await redis.get(`Yunzai:setlinshimsg:${e.user_id}_jrrp`); //先获取这个逼 看看他今天有没有抽牌
  var new_sum = 1;
  if (data_redis) {
    if (JSON.parse(data_redis)[0].num == sum) {
      e.reply(`你今天已经获取过人品了请明天再来~`)
      return;
    }
    new_sum += JSON.parse(data_redis)[0].num; //次数累加
  }
  var num = Math.random();
  num = Math.ceil(num * 100);
  console.log(num);
  if (num >= 0 && num < 50) {

    let msg = [
      segment.at(e.user_id),
      `\n今日你的人品值为` + num + `点,不要灰心,相信自己,明天会变得更差！`,
    ]

    e.reply(msg);



  } else if (num > 50 && num < 80) {
    let msg = [
      segment.at(e.user_id),
      `\n今日你的人品值为` + num + `点,人品还行噢,可以安全出门啦！`,
    ]

    e.reply(msg);


  } else if (num > 80 && num <= 99) {
    let msg = [
      segment.at(e.user_id),
      `\n今日你的人品值为` + num + `点,建议去买彩票噢！`,
    ]

    e.reply(msg);


  } else {
    let msg = [
      segment.at(e.user_id),
      `\n今日你的人品值为` + num + `点,你今天就是天选之人！！`,
    ]

    e.reply(msg);

  }

  var time = moment(Date.now()).add(1, 'days').format(dateTime)
  var new_date = (new Date(time).getTime() - new Date().getTime()) / 1000 //获取隔天凌晨四点的时间差
  console.log(new_date)
  let redis_data = [{
    num: new_sum, //次数
  }]
  console.log(redis_data)
  redis.set(`Yunzai:setlinshimsg:${e.user_id}_jrrp`, JSON.stringify(redis_data), { //把次数写入缓存防止一直抽卡
    EX: parseInt(new_date)
  });

  return true;
}
