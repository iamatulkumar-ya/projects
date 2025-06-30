import rsa
import os 
import base64 
 
import dotenv


dotenv.load_dotenv()
 
RSA_PUBLIC_KEY_PATH=os.environ['RSA_PUBLIC_KEY_PATH']
RSA_PRIVATE_KEY_PATH=os.environ['RSA_PRIVATE_KEY_PATH']


with open(RSA_PUBLIC_KEY_PATH) as pb_key:
    publicKeyByets = pb_key.read().encode()

with open(RSA_PRIVATE_KEY_PATH) as pr_key:
    privateKeyByets = pr_key.read().encode()
 

pbkey = rsa.PublicKey.load_pkcs1(publicKeyByets)

prkey = rsa.PrivateKey.load_pkcs1(privateKeyByets)
 
# cypherText = (base64.b64encode((rsa.encrypt(Text.encode() , pbkey)))).decode()
# print(cypherText)

# print(cypherText.encode())
 
cyText = os.environ['USER_ID']
print(cyText)

actualMsg = rsa.decrypt(base64.b64decode(cyText.encode()), prkey).decode()
print(actualMsg)


