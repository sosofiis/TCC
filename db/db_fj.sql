CREATE DATABASE FibroJourney;
USE FibroJourney;

CREATE TABLE fj_users(
	nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    id INT PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE humor(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME,
	humor ENUM("calma", "feliz", "irritada", "triste", "ansiosa", "tensão", "confusa", "animada")
);

CREATE TABLE sintomas(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME,
	sintomas ENUM("dor generalizada", "problemas de sono", "problemas de memória/cognição", "dor de cabeça", "tontura", "náuseas", "rigidez nas articulações", "fadiga")
);

CREATE TABLE ativ_fisica(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME,
	ativ ENUM("academia", "corrida", "ioga", "dança/aeróbico", "natação", "esportes em equipe", "ciclismo", "não me exercitei")
);

CREATE TABLE tratamento(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME,
	tratamento ENUM("medicamento para dor", "terapia", "tratamento multidisciplinar", "não fiz tratamento")
);

CREATE TABLE sono(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME,
	sono ENUM("ótima", "boa", "razoável", "ruim", "péssima")
);

CREATE TABLE feed_posts(
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    FOREIGN KEY(user_id) REFERENCES fj_users(id),
    data DATETIME, 
    conteudo VARCHAR(280)
);