import moment from "moment";
import {MinMaxPriceObj} from "./types/minMaxPriceObj";

const QUERY_DATE_FORMAT = 'YYYY-MM-DD'

export function getFormattedDates(currDateStr: string): [string, string] {
    const currDate = moment(currDateStr)
    // get current date and format like `YYYY-MM-DD`
    const endDate = currDate.format(QUERY_DATE_FORMAT)
    // get a date 30 days back from now and format like`YYYY-MM-DD`
    const startDate = currDate.subtract(30, 'days').format(QUERY_DATE_FORMAT)
    return [startDate, endDate]
}

export function getMinMaxPrice(bpiObj: object): MinMaxPriceObj {
    let ret: MinMaxPriceObj = {
        lowest: null, highest: null
    }
    for (const [date, value] of Object.entries(bpiObj)) {
        if (!ret.lowest && !ret.highest) {
            ret = {
                lowest: {date: date, price: value},
                highest: {date: date, price: value},
            }
        } else {
            if (ret.lowest?.price && value < ret.lowest?.price) {
                ret = {
                    ...ret,
                    lowest: {date: date, price: value},
                }
            } else if (ret.highest?.price && value > ret.highest?.price) {
                ret = {
                    ...ret,
                    highest: {date: date, price: value},
                }
            }
        }
    }
    return ret
}