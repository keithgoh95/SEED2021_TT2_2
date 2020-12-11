#Saving the Model

import argparse
import errno
import os
import shutil
from RewardsProgramService import RewardsProgramService

def ParseArgs():
  parser = argparse.ArgumentParser()
  parser.add_argument("--save_dir", default=".", type=str)
  return parser.parse_known_args()[0]

args                   = ParseArgs()
output_dir             = args.save_dir
rewardsprogram_service = RewardsProgramService()
saved_path             = rewardsprogram_service.save()




