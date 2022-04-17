import express, {Request, Response, Router} from 'express';
import {api} from "../../service/axios"
import {getFormattedDates, getMinMaxPrice} from "../../uttils";
import {BitcoinInfoObj} from "../../types/bitcoinInfoObj";

const router: Router = express.Router();

// GET: /getBitcoinInfo
router.get('/', async (req: Request, res: Response) => {
    try {
        // extract the currency code
        const curr = req.body.currency
        // send a request to get the updated time
        // store the bpi
        const {data: {time: {updatedISO}, bpi}} = await api.get(`/bpi/currentprice/${curr}.json`)
        // get formatted updated date and 30 days earlier date
        const [startDate, endDate] = getFormattedDates(updatedISO)
        // get historical data
        const {data: historicalData} = await api.get(`/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${curr}`)
        // get highest and lowest price detail
        const {highest, lowest} = getMinMaxPrice(historicalData.bpi)
        if (highest && lowest) {
            // prepare the response object
            const info: BitcoinInfoObj = {
                rateInfo: bpi[curr.toUpperCase()],
                highestLast30Days: highest,
                lowestLast30Days: lowest
            }
            res.json(JSON.stringify(info))
        }
    } catch (error: any) {
        // handle error
        const status = error?.response?.status
        if (status === 404) {
            res.status(404).json({message: error?.response?.data})
        } else {
            res.status(500).json(error);
        }
    }
});

export default router