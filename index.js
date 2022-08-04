import { currentVersion } from './components/Changelog.js'
import Data from './components/Data.js'

export * from './apps/index.js'

let index = await Data.importModule('/plugins/recreation-plugin/adapter', 'index.js');
export const recreation = index.recreation || {}
Bot.logger.info(`---------^_^---------`);
Bot.logger.info(`娱乐插件${currentVersion}初始化~`);

setTimeout(async function () {
  let msgStr = await redis.get('recreation:restart-msg');
  let relpyPrivate = async function () { };

  if (msgStr) {
    let msg = JSON.parse(msgStr);
    await relpyPrivate(msg.qq, msg.msg);
    await redis.del('recreation:restart-msg');
    let msgs = [`当前娱乐版本: ${currentVersion}`, '您可使用 #娱乐版本 命令查看更新信息']
    await relpyPrivate(msg.qq, msgs.join('\n'))
  }
}, 1000)