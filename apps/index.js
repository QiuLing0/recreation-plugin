//import { versionInfo, refer_Artifacts_Desc } from "./help.js";
import { currentVersion } from "../components/Changelog.js";
import lodash from 'lodash';
import { rule as adminRule, updateRecreationPlugin } from "./admin.js";
import {
  rule as funRule,
  caihongpi, tiangou, dujitang,
  saylove, joke, godreply
} from "./fun.js";
import {
  rule as newRule,
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
import { rule as tgyjRule, tgyj, chongsheng } from "./tgyj.js";
export { updateRecreationPlugin };
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
export { tgyj, chongsheng };

let rule = {
  versionInfo: {
    reg: "^#娱乐版本$",
    describe: "【#帮助】 娱乐版本介绍",
  },
  help: {
    reg: "^#?(娱乐)?(命令|帮助|菜单|help|说明|功能|指令|使用说明)$",
    describe: "查看插件的功能",
  },
  ...adminRule,
  ...funRule,
  ...newRule,
  ...amusementRule,
  ...thursdayRule,
  ...cpRule,
  ...fbRule,
  ...jrrpRule,
  ...mywifeRule,
  ...tgyjRule,
};

lodash.forEach(rule, (r) => {
  r.priority = r.priority || 50
  r.prehash = true
  r.hashMark = true
})

export { rule };
