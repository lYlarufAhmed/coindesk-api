export interface CurrentPriceReturnObj {
    time: {
        updated: string;
        updatedISO: string;
        updateduk?: string;
    };
    bpi: {
        [key: string]: {
            code: string;
            rate: string;
            description: string;
            rate_float: number
        };
    }
}