FROM ubuntu:20.04
RUN  apt update && apt install -y default-jre && apt install -y wget && wget https://get.jenkins.io/war/2.395/jenkins.war
EXPOSE 9091
CMD java -jar jenkins.war --httpPort=9091