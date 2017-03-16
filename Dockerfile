# Use Official NodeJs base image
FROM node

RUN mkdir -p /noderserver/
WORKDIR /noderserver

# Clone NodeJs project into working folder and install dependinacies
RUN git clone https://github.com/SwyserDev/swyser-contact-service .
RUN npm install

# Start node server
EXPOSE 8090
CMD [ "npm", "start" ]




# docker run -d -p 8080:8080/tcp swyserdev/swyser-contact-service