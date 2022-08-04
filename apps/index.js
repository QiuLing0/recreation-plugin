//import { versionInfo, refer_Artifacts_Desc } from "./help.js";
import { currentVersion } from "../components/Changelog.js";
import lodash from 'lodash';

import { rule as adminRule, updateRecreationPlugin } from "./admin.js";
import * as Fun from "./fun/index.js";
export * from "./fun/index.js";

import { rule as tgyjRule, tgyj, chongsheng } from "./games/tgyj.js";
export { updateRecreationPlugin };

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
  ...Fun.FunRule,
  ...tgyjRule,
};

lodash.forEach(rule, (r) => {
  r.priority = r.priority || 50
  r.prehash = true
  r.hashMark = true
})

export { rule };
