FROM node:18
# install java
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64/
RUN export JAVA_HOME
# install headless chrome browser
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    sh -c 'echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt --fix-broken install && \
    apt-get install google-chrome-stable -y
WORKDIR /beyonnex-qa-challenge
ADD . /beyonnex-qa-challenge
RUN npm install
CMD java -version && \
    google-chrome --version
CMD npm run wdio