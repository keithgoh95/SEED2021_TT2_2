#Imports
import mariadb
import sys

from bentoml            import env, artifacts, api, BentoService
from bentoml.adapters   import DataframeInput, FileInput, MultiImageInput, ImageInput, JsonInput
from bentoml.types      import JsonSerializable
from typing             import List, BinaryIO


#HARD_CODED FOR CONVENIENCE
DATABASE = "rewards"

def ConnectToDatabase():
         # Connect to MariaDB Platform
        try:
            #conn = mariadb.connect(*MARIADB_CONFIG)
            conn = mariadb.connect(user="default",
            password="default",
            host="127.0.0.1",
            port=3306,
            database=DATABASE)
        except mariadb.Error as e:
            print(f"Error connecting to MariaDB Platform: {e}")
            return None

        # Get Cursor
        cur = conn.cursor()
        return cur

def GetRewardInfo(cur, custID):
    query = "SELECT custID,firstName,lastName,points from {} WHERE custID='{}'".format(DATABASE,custID)
    print(query)
    cur.execute(query)
    #Return the first input, we only expect one input
    for custID,firstName,lastName,points in cur:
        print("Successfully gotten a entry")
        return {
            "custID"    : custID,
            "firstName" : firstName,
            "lastName"  : lastName,
            "points"    : points,
        }
    return {}

def AddRewardPoints(cur, args):
    query = "INSERT INTO {} (custID,firstName,lastName,points) VALUES ('{}','{}','{}',{}) ON DUPLICATE KEY UPDATE points=points+{}".format(
        DATABASE,
        args["custID"],
        args["firstName"],
        args["lastName"],
        args["points"],
        args["points"]
        )
    print(query)
    cur.execute(query)
    return GetRewardInfo(cur,args['custID'])





#@env(infer_pip_packages=True,requirements_txt_file='requirements.txt')
class RewardsProgramService(BentoService):
    """
    REST API FOR RewardsProgramService
    """

    #API that takes in a filepath to do prediction service
    #Filepath has to be found on the local machine that is running this service

    def testInput(self, input):
        return self.GetPoint(input)

    """
    Interface takes in the json data format.
    The following keys are what this api expects from the json data
    -- custID :
    Output:
    The api will output a json/dictionary with the following items
    
    """
    @env(infer_pip_packages=True,requirements_txt_file='requirements.txt')
    @api(input=JsonInput())
    def GetPoint(self, parsed_json):
        custID = parsed_json["custID"]
        #Connect to mariadb
        cur  = ConnectToDatabase()
        if(cur is None):
            #Return empty json
            return {}
        print("Successfully connected to database")
        #Check if user exist
        return GetRewardInfo(cur,custID)


    """
    Interface takes in the json data format.
    The following keys are what this api expects from the json data
    -- custID :
    -- pts    : 
    -- firstName:
    -- lastName:

    Output:
    The api will output a json/dictionary with the following items
    
    """
    @env(infer_pip_packages=True,requirements_txt_file='requirements.txt')
    @api(input=JsonInput())
    def addPoints(self, parsed_json):
        custID = parsed_json["custID"]
        pts    = parsed_json["points"]
        cur    = ConnectToDatabase()
        #Connect to mariadb
        if(cur is None):
            #Return empty json
            return {}

        #Check if user exist
        print("Adding points")
        return AddRewardPoints(cur,parsed_json)


if __name__ == "__main__":
    rewards_service = RewardsProgramService()

    print(rewards_service.testInput({"custID" : 'TEST', 'points':43}))
    print(rewards_service.addPoints({"custID" : 'TEST', 'points':43,'firstName':'KEITH','lastName':'GOH'}))