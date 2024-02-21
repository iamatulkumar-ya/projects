import os
import logging
from forexconnect import ForexConnect

from src.service.secureService import Secure



class Login:
        
    
    def __init__(self):

        logging.info("Inside Login Class Constructor: Started")
        
        self._secureObj = Secure() 

        self.USER_ID= self._secureObj.getTextFromCypherText(os.environ['USER_ID'])
        self.USER_PASSWORD=self._secureObj.getTextFromCypherText(os.environ['USER_PASSWORD'])  
        self.TRADING_API_URL= os.environ['TRADING_API_URL']
        self.CONNECTION_TYPE=self._secureObj.getTextFromCypherText(os.environ['CONNECTION_TYPE']) 

        logging.info("Inside Login Class Constructor: Ended")


    def loginToFxcmAPI(self):
        try: 
            logging.info("Inside loginToFxcmAPI: Started")
            print(self)
            fx =  ForexConnect()  
            #encryptedPassword = base64.b64encode(USER_PASSWORD.encode('ascii')).decode('ascii')
            fx.login(self.USER_ID,self.USER_PASSWORD,self.TRADING_API_URL,self.CONNECTION_TYPE) 
            accounts_response_reader = fx.get_table_reader(fx.ACCOUNTS)
            for account in accounts_response_reader:
                print("{0:s}".format(account.account_id))

            print("Connection Successfull")

            logging.info(f"Inside loginToFxcmAPI: Returning - {fx}")
            return fx 
        
        except Exception as ex:
            logging.error(f"Exception Occurred in loginToFxcmAPI - {ex} ")
            raise ex
                
