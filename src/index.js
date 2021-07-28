import { LitElement, html } from "lit-element";
import { create, cssomSheet } from 'twind'

// 1. Create separate CSSStyleSheet
const sheet = cssomSheet({ target: new CSSStyleSheet() })

// 2. Use that to create an own twind instance
const { tw } = create({ sheet })

const columns = [{
  'name': '初始资金',
  'key': 'start_balance',
  'fix_decs': 2
}, {
  'name': '结束资金',
  'key': 'end_balance',
  'fix_decs': 2
},{
  'name': '开始交易日',
  'key': 'start_date'
}, {
  'name': '结束交易日',
  'key': 'end_date'
}, {
  'name': '累计盈利天数',
  'key': 'cum_profit_days',
  'fix_decs': 0
}, {
  'name': '累计亏损天数',
  'key': 'cum_loss_days',
  'fix_decs': 0
}, {
  'name': '年化收益率',
  'key': 'annual_yield',
  'is_percent': true,
  'fix_decs': 2
}, {
  'name': '最大回撤',
  'key': 'max_drawdown',
  'is_percent': true,
  'fix_decs': 2
}, {
  'name': '总手续费',
  'key': 'commission',
  'fix_decs': 2
}, {
  'name': '开仓次数',
  'key': 'open_times',
  }
, {
  'name': '平仓次数',
  'key': 'close_times',
  }
, {
  'name': '日均风险度',
  'key': 'daily_risk_ratio',
  'is_percent': true,
  'fix_decs': 2
  }
, {
  'name': '最大连续盈利天数',
  'key': 'max_cont_profit_days',
  }
, {
  'name': '最大连续亏损天数',
  'key': 'max_cont_loss_days',
  }
, {
  'name': '年化夏普率',
  'key': 'sharpe_ratio',
  'fix_decs': 2
  }
, {
  'name': '年化卡玛比率',
  'key': 'calmar_ratio',
  'fix_decs': 2
  }
, {
  'name': '年化索提诺比率',
  'key': 'sortino_ratio',
  'fix_decs': 2
  }
]

export class MyCounter extends LitElement {

  static get properties () {
    return {
      metries: {type: Object}
    }
  }
  // static properties = ;

  static get styles () {
    return [sheet.target];
  }

  constructor() {
    super();
    this.metries = {};
    this.columns = columns;
  }

  formatter(item) {
    if (item.fix_decs) {
      if (item.is_percent) {
        return Number(this.metries[item.key] * 100).toFixed(item.fix_decs) + '%'
      } else {
        return Number(this.metries[item.key]).toFixed(item.fix_decs)
      }
    } else {
      return this.metries[item.key]
    }
  }

  render() {
    return html`
      <table class="${tw`border-2 `}">
        ${this.columns.map((item, index, array)=>{
          return html`
            <tr class="${tw`border-1 border-opacity-50`}">
              <td class="${tw`text(left) py-2 px-2`}">${item.name}</td>
              <td class="${tw`text(right) py-2 px-2`}">${this.formatter(item)}</td>
            </tr>`
        })}
      </table>
      `;
  }
}

customElements.define("tq-report-metrics", MyCounter);
