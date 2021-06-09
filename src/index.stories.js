import "./index.js";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

const data = {'account_id': 'TQSIM', 'start_date': '2021-03-01', 'end_date': '2021-03-04', 'start_balance': 1000000.0, 'end_balance': 993087.1419999999, 'ror': -0.006912858000000077, 'annual_yield': -0.35179865015731615, 'trading_days': 4, 'cum_profit_days': 0, 'cum_loss_days': 3, 'max_drawdown': 0.0053173053938708826, 'commission': 102.85799999999999, 'open_times': 4, 'close_times': 3, 'daily_risk_ratio': 0.01181300191137634, 'max_cont_profit_days': 0, 'max_cont_loss_days': 3, 'sharpe_ratio': -26.484246326071048, 'calmar_ratio': -5.447921568052495, 'sortino_ratio': -13.576022731983656}
export const story1 = () => html` 
  <my-counter start_date=${data.start_date} metries=${JSON.stringify(data)}></my-counter> 
`;

export const story2 = () => html` 
  <my-counter start_date=${data.start_date} metries=${JSON.stringify(data)}></my-counter> 
`;
