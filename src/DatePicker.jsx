import { format, formatDistance, formatRelative, subDays, sub } from 'date-fns'
import {moment} from 'moment'
//format(new Date(), "'Today is a' eeee");
//=> "Today is a Tuesday"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
//=> "3 days ago"
let data = format(new Date(), "'Today is a' eeee");
formatRelative(subDays(new Date(), 3), new Date())
//=> "last Friday at 7:26 p.m."
let result = sub(new Date(), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30
})
export default function DatePicker() {
    return (
        <div>
            <h1>DatePicker</h1>
            <p>Today is {format(new Date(), "'Today is a' e")}</p>
            <p>dupa: {data}</p>

        </div>
    )
}
//useless