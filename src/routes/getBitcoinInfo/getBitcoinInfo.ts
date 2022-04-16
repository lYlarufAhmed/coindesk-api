import express, {Request, Response, Router} from 'express';
import {api} from "../../service/axios"
import {getFormattedDates} from "../../uttils";

const router: Router = express.Router();

// GET: /getBitcoinInfo
router.get('/', async (req: Request, res: Response) => {
    try {
        const curr = req.body.currency
        // send a request to get the updated time
        const {data: {time: {updatedISO}}} = await api.get(`/bpi/currentprice/${curr}.json`)
        const [startDate, endDate] = getFormattedDates(updatedISO)
        // extract the currency code
        const {data: historicalData} = await api.get(`/bpi/historical/close.json?start=${startDate}&end=${endDate}&currency=${curr}`)
        res.json(JSON.stringify(historicalData))
    } catch (error: any) {
        const status = error?.response?.status
        if (status === 404) {
            res.status(404).json({message: error?.response?.data})
        } else {
            res.status(500).json(error);
        }
    }
});

export default router