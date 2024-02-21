from flask import Flask , request
from http import HTTPStatus
import dotenv
import logging
import os

from src.utility.util import createResponse, getEndpointInstructions, validateRequestJsonDataForRSISBReport
from src.controller.rsiStrategyBacktestReportController import CallGetRSIStrategyBacktestReport


logging.getLogger().setLevel(logging.INFO)

print("Writing from OS variable")

dotenv.load_dotenv()

app = Flask(__name__)


@app.route('/',methods=['GET'])
def welcomeToPortal():
    logging.warning("Welcome to the portal.")
    return createResponse(False,"Please use below endpoints.", getEndpointInstructions(),HTTPStatus.OK)


@app.route('/GetRSIStrategyBacktestReport',methods=['GET'])
def SearchSongs(): 
    try: 
        logging.warning("Inside /GetRSIStrategyBacktestReport")
        logging.warning("Calling CallGetRSIStrategyBacktestReport method to get the result.")
        
        # get callGetSearchedSong
        isValidInputJson, requestInputJson = validateRequestJsonDataForRSISBReport(request.get_json())
        if(isValidInputJson):
            result  =  CallGetRSIStrategyBacktestReport(requestInputJson)
            return createResponse(False, result["message"], result["data"], result["statuscode"])
        
        else:
            return createResponse(True,"Error.","Input is not as expected.",HTTPStatus.BAD_REQUEST)

       
    except Exception as ex:
        logging.error(f"Inside Exception of /GetRSIStrategyBacktestReport.- {ex}")
        return createResponse(True,"Internal Error Occurred. Please try after sometime.","",HTTPStatus.INTERNAL_SERVER_ERROR)

if __name__ == "__main__":

    # remove the debug=True while deploying into PROD
    app.run(port = 5000,debug=True)