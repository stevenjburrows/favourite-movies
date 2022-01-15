CREATE TABLE users (
  id int NOT NULL,
  firstName varchar(255) default NULL,
  lastName varchar(255) default NULL,
  favourite_movies varchar(255) default NULL,
  username varchar(255) default NULL,
  pword varchar(255) default NULL
);

INSERT INTO users (id,firstName,lastName,favourite_movies, username, pword)
    VALUES
        (1,'Anona','Cruz','tt0848228,tt4154756,tt2395427,tt4154796','acruz','12345'),
        (2,'Camilla','Sayer','tt4154756,tt10515848,tt0120575','csayer','54321'),
        (3,'Ganesh','Zentai','tt0287871,tt2975590,tt0103776,tt4116284,tt2313197','gzentai','qwerty'),
        (4,'Vivien','Straub','tt0926084,tt0417741','vstraub','asdfgh'),
        (5,'Bernardita','Bishop','tt0389860','bbishop','zxcvbn');