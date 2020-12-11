TO GET THE REWARDS PROGRAM API UP AND RUNNING
METHOD 1:
1: cd into RewardsProgramService
2: run "python RewardsProgramSave.py"
3: run "bentoml containerize RewardsProgramService:latest -t rewards-service:latest
4: run "docker run -p 5000:5000 -t rewards-service:latest"