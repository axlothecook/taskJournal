import './style.css'
//library to use dates
import { compareAsc, format, formatDistance, formatRelative, subDays } from 'date-fns'

// let variable = format(new Date(), "'Today is a' eeee");
// console.log(variable);
//=> "Today is a Wednesday"

// let variable = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
// console.log(variable);
//=> "3 days ago"

// formatRelative(subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."

// format(new Date(2014, 1, 11), "yyyy-MM-dd");
//=> '2014-02-11'

// const dates = [
//   new Date(1995, 6, 2),
//   new Date(1987, 1, 11),
//   new Date(1989, 6, 10),
// ];
// console.log(dates.sort(compareAsc));