import {PriceObj} from "./priceObj";
import {RateInfoObj} from "./rateInfoObj";

export interface BitcoinInfoObj {
    rateInfo: RateInfoObj;
    highestLast30Days: PriceObj;
    lowestLast30Days: PriceObj;
}

