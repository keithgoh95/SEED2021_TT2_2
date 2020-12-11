FROM python:3.7

#Copy over the files needed
COPY requirements.txt LPRMainInit.sh /local/
ADD  LPRMain.py double_line_lp.py AWSResourcesConfig.py /

WORKDIR /local
# Execute permission for LPRMainInit.sh
RUN chmod +x LPRMainInit.sh
#Change WOR
# Install conda, pip dependencies and run user defined setup script
RUN if [ -f ./LPRMainInit.sh ]; then bash -c ./LPRMainInit.sh; fi
WORKDIR ./..
#Execute the script
CMD ["python3", "./LPRMain.py"]