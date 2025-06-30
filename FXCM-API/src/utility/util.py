from http import HTTPStatus
import logging

def createResponse(_isError=False,_message="", _data="", _statusCode=HTTPStatus.BAD_REQUEST):
    try:
        if(_isError): 
            return {
                "data":_data,
                "message": "An error occured while processing the request. Please find the cause here: " + str(_message),           
                "statusCode":_statusCode}

        else:
            return {
                    "data": _data,
                    "message": str(_message),
                    "statusCode":_statusCode}

    except Exception as ex:
           logging.error(f"Exception Occurred in createResponse - {ex} ")
           return {
                    "data": "Internal Exception",
                    "message": "Internal Exception",
                    "statusCode":HTTPStatus.INTERNAL_SERVER_ERROR}


def createMethodResponse(_isError,_message, _data, _statusCode):
    return{
        "isErorr": _isError,
        "message":_message,
        "data":_data, 
        "statuscode":_statusCode
    }


def getEndpointInstructions():
   return 'To search a song use below endpoint: {{hostName}}/GetRSIStrategyBacktestReport  Body: json type {"ticker":"","date_from":"yyyy-mm-dd", "date_to": "yyyy-mm-dd", "timeFrameId", ""}'


"""
This method is ise to validatet the input json
"""
def validateRequestJsonDataForRSISBReport(reqJsonData):
    logging.info("Inside validateRequestJsonDataForRSISBReport : Strated")
    try:
        reqDataDict = {k.lower(): items for k, items in reqJsonData.items()}
        
        print(reqDataDict)

        key_to_find = ("ticker", "date_from", "date_to","timeframeid")

        if all(key in reqDataDict for key in key_to_find):
            logging.info("Input Json is having required key.")
            return True , reqDataDict 
        
        else:
            logging.info("Input Json is not having required key.")
            return False , 'None'
    
    except Exception as ex:
       logging.error(f"Exception Occurred in validateRequestJsonDataForRSISBReport - {ex} ")
       return False , 'None'