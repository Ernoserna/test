FROM bzcode/nodejs16
WORKDIR /usr/src/
COPY  node-devops-course/ .
RUN npm install
EXPOSE 4000
CMD ["node", "server.js"]