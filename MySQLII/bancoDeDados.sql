create database id not exists usuarios; --cria a base de dados

use usuarios; --informa para MySQL sobre qual base sera operada

--CRIOU A TABELA USUSARIOS
create table if not exists tb_usuarios(
  nome VARCHAR (200) NOT NULL,
  cpf BIGINT PRIMARY KEY NOT NULL,
  endereco VARCHAR (200) NOT NULL,
  telefone INT PRIMARY KEY NOT NULL,
  email VARCHAR (200) NOT NULL,
  senha VARCHAR (200) NOT NULL,
);
--CRIOU A TABELA PRODUTOS

INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("Maria", 555.555.555-55, "Rua Madalena, 123", 11987654321, "maria@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("José", 333.333.333-33, "Av. Paulista, 111", 11987654321, "jose@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("Bruna", 444.444.444-44, "Av. Ibirapuera, 600", 11987654321, "bruna@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("João", 666.666.666-66, "Jd. Tiete, 444",11987654321, "joao@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("Daiane", 777.777.777-77, "Mooca, 500", 11987654321, "daiane@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("Mario", 888.888.888-88, "Jd. Analia Franco, 171", 11987654321, "mario@gmail.com", "********");
INSERT INTO tb_ususarios (nome, cpf, endereco, telefone, email, senha) values ("Rosa", 999.999.999-99, "Av. Aricanduva, 900", 11987654321, "rosa@gmail.com", "********");

select * from tb_ususarios;

