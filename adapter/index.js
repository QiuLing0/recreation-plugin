import plugin from '../../../lib/plugins/plugin.js'
import * as Recreation from '../apps/index.js'
import { render } from './render.js'

export class recreation extends plugin {
  constructor () {
    super({
      name: 'recreation-plugin',
      desc: '娱乐插件',
      event: 'message',
      priority: 50,
      rule: [{
        reg: '.+',
        fnc: 'dispatch'
      }]
    })
  }

  async dispatch (e) {
    let msg = e.raw_message

    msg = '#' + msg.replace(/#|＃/, '').trim()
    for (let fn in Recreation.rule) {
      let cfg = Recreation.rule[fn]
      if (Recreation[fn] && new RegExp(cfg.reg).test(msg)) {
        let ret = await Recreation[fn](e, {
          render
        })
        if (ret === true) {
          return true
        }
      }
    }

    return false
  }
}
