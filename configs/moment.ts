import mz from 'moment-timezone';
const kr = 'Asia/Seoul';

const moment = mz().tz(kr);

export const simpleTime = (time: string) => moment.tz(time).format('YY-MM-DD HH:mm:ss');
