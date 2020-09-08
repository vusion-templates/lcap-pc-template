FROM harbor.lcp.service.163.org/library/bff-image:develop-latest

RUN mkdir -p /home/project
COPY ./server /home/project
WORKDIR /home/project
CMD ["npm", "run", "start:docker"]
