import rsa
import os
import logging
import base64

class Secure:

    def __init__(self):

        self.RSA_PRIVATE_KEY_PATH = os.environ['RSA_PRIVATE_KEY_PATH']
        self.RSA_PUBLIC_KEY_PATH = os.environ['RSA_PUBLIC_KEY_PATH']
        self.publicKey = self.__getPublicKey()
        self.privateKey = self.__getPrivateKey()


    def __getPrivateKey(self) -> rsa.PrivateKey:
        """
        Private Method: This method to get private key which is required to decrypt the data the data
        """ 
        with open(self.RSA_PRIVATE_KEY_PATH) as pr_key:
            return  rsa.PrivateKey.load_pkcs1(pr_key.read().encode())
        

    def __getPublicKey(self) -> rsa.PublicKey:
        """
        Private Method: This method to get private key which is required to encrypt the data the data
        """ 
        with open(self.RSA_PUBLIC_KEY_PATH) as pb_key:
            return rsa.PublicKey.load_pkcs1(pb_key.read().encode())
        
    def getCypherText(self, text):
        """
        This method is to get cypher text by pasisg the regular string text
        """
        logging.info("Encryption Started")
        return  (base64.b64encode((rsa.encrypt(text.encode() , self.publicKey)))).decode()

    def getTextFromCypherText(self, cypherText):
        """
        This method is to get cypher text by pasisg the regular string text
        """ 
        logging.info("Decryption Started") 
        return rsa.decrypt(base64.b64decode(cypherText.encode()), self.privateKey).decode()
