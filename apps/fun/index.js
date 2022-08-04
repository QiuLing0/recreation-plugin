import {
  rule as funRule,
  caihongpi, tiangou, dujitang,
  saylove, joke, godreply
} from "./fun.js";

import {
  rule as newsRule,
  weather, xzys,
  lssdjt, news
} from "./news.js";

import {
  rule as amusementRule,
  ercyFUN, chengfenFUN, daanFUN,
  qiuqianFUN, kantouxiangFUN, shenzhiyanFUN,
  cangtouFUN
} from "./amusement.js";

import { rule as thursdayRule, FuckingCrazy4 } from "./fuckingCrazy4.js"
import { rule as cpRule, cp } from "./cpStory.js";
import { rule as fbRule, fabing } from "./fabing.js";
import { rule as jrrpRule, jrrp } from "./jrrp.js";
import { rule as mywifeRule, whoismywife } from "./myWife.js";

export {
  caihongpi,
  tiangou,
  dujitang,
  saylove,
  joke,
  godreply
};

export {
  weather,
  xzys,
  lssdjt,
  news
};
export {
  ercyFUN,
  chengfenFUN,
  daanFUN,
  qiuqianFUN,
  kantouxiangFUN,
  shenzhiyanFUN,
  cangtouFUN
};
export { FuckingCrazy4 };
export { cp };
export { fabing };
export { jrrp };
export { whoismywife };

let FunRule = { 
  ...funRule, 
  ...newsRule, 
  ...amusementRule, 
  ...thursdayRule, 
  ...cpRule, 
  ...fbRule, 
  ...jrrpRule, 
  ...mywifeRule };

export { FunRule };