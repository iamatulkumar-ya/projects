import logging
import pandas as pd
import datetime
import numpy

from src.utility.util import createMethodResponse
from src.service.fxcmService import getHistoricalPriceData
from src.service.rsiStrategyService import applyRSICalculation
from src.service.loginService import Login

def CallGetRSIStrategyBacktestReport(_requestInputJson):
    logging.info("Inside CallGetRSIStrategyBacktestReport : Started")

    try:

        loginObj = Login() 
        fx = loginObj.loginToFxcmAPI()
         
        # if (fx == 9001):
        #     return createMethodResponse(False,"Unable to login into fxcm", "None", 403)

       # else:
        historical_data = getHistoricalPriceData(fx, _requestInputJson)

        # if (historical_data == 9001):
        #     logging.info("Exception has occured to get the historical data")
        #     return createMethodResponse("Unable to get the historical data from fxcm", "Exception", 500)

        if (len(historical_data) <=0):
            logging.info("No historical data has been found")
            return createMethodResponse(False,f"Unable to get the historical data from fxcm. - {len(historical_data)}", "Exception", 404)
        
        logging.info(historical_data)
        # positive case
        logging.info("Writing historical data into csv file")
        historical_data.to_csv("historical_data.csv")

        logging.info("applying RSI Calculation")
        calculatedData = applyRSICalculation(historical_data)
         
        if (len(calculatedData) <=0):
            logging.info("No data has been found after RSI Calculation")
            return createMethodResponse(False,"Unable to get the rsi calculated data.", "Error", 404)

        # positive case
        logging.info("Writing rsi calcualted data into csv file")
        calculatedData.to_csv("calculatedData.csv") 

        return createMethodResponse(False, "Processed Successfully", "OK", 200)    

    except Exception as ex:
        logging.error(
            f"Exception Occurred in CallGetRSIStrategyBacktestReport - {ex} ")
        return createMethodResponse(True, "Exception occurred while getting RSI Backtest Report", "Exception", 500)
