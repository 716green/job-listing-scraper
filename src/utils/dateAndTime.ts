import moment from 'moment';

const [date, tm] = moment
  .utc()
  .subtract(4, 'hours')
  .format('YYYY-MM-DD HH:mm:ss.SSS')
  .split(' ');
const timeStamp = moment
  .utc()
  .subtract(4, 'hours')
  .format('YYYY-MM-DD HH:mm:ss.SSS');
let [h, m, _s] = tm.split('.')[0].split(':');
let hours = parseInt(h);
let mins = parseInt(m);
let mn: string = '';
if (mins.toString().length === 1) {
  mn = '0' + mins;
} else {
  mn = mins.toString();
}

if (hours > 12) hours -= 12;
const time = [hours, mn].join(':');
let timeString: string = '';
let hr = '0' + hours.toString().split('00').join('0').toString();
if (hours.toString().split(':')[0].length === 1) {
  timeString = '0' + time;
} else {
  timeString = time.toString();
}

let [yr, mo, dy] = date.split('-');

export const dateTimeObj = {
  dateAndTime: timeStamp,
  year: yr,
  month: mo,
  day: dy,
  fullDate: date,
  fullTime: timeString,
  hours: hr,
  minutes: mn,
};
