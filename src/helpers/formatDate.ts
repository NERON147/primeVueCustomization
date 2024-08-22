import moment from 'moment';
import 'moment/dist/locale/ru';
moment.locale('ru');

export function formatDateTime(date: Date | null | undefined){
  return moment(date).format('HH:mm');
}