import { rule as funRule } from "./fun.js";
export { 
  caihongpi, 
  tiangou, 
  dujitang,
  saylove, 
  joke, 
  godreply
} from "./fun.js";

import { rule as newsRule } from "./news.js";
export {
  weather,
  xzys,
  lssdjt,
  news
} from "./news.js";

import { rule as amusementRule } from "./amusement.js";
export {
  ercyFUN,
  chengfenFUN,
  daanFUN,
  qiuqianFUN,
  kantouxiangFUN,
  shenzhiyanFUN,
  cangtouFUN
} from "./amusement.js";

import { rule as thursdayRule } from "./fuckingCrazy4.js";
export { FuckingCrazy4 } from "./fuckingCrazy4.js";

import { rule as cpRule } from "./cpStory.js";
export { cp } from "./cpStory.js";

import { rule as fbRule } from "./fabing.js";
export { fabing } from "./fabing.js";

import { rule as jrrpRule } from "./jrrp.js";
export { jrrp } from "./jrrp.js";

import { rule as mywifeRule } from "./myWife.js";
export { whoismywife } from "./myWife.js";

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