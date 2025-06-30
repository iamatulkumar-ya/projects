from forexconnect import ForexConnect
import datetime
import logging
import pandas as pd


def getHistoricalPriceData(fx: ForexConnect, requestInputJson):

    logging.info("Inside getHistoricalPriceData: Started")

    try:
        # Let's take the required inputs
        
        instrument = requestInputJson["ticker"]
        logging.info(instrument)
        timeFrameId = requestInputJson["timeframeid"]
        logging.info(timeFrameId)
        # date_from = datetime.datetime(
        #     str(requestInputJson["date_from"]).replace('-', ','))

        # date_to = datetime.datetime(
        #     str(requestInputJson["date_to"]).replace('-', ','))
        # logging.info(date_to)

        date_from = datetime.datetime(2021,12,13)
        date_to = datetime.datetime(2022,12,13)
        _histData= fx.get_history(instrument, timeFrameId, date_from, date_to)  
        return pd.DataFrame(_histData)

    except Exception as ex:
        logging.error(f"Exception Occurred in getHistoricalPriceData - {ex} ")
        raise ex
 