create database bdTodoList;

use bdTodoList;

create table tb_tarefas(
	id_tarefa int primary key auto_increment,
    nm_tarefa varchar(50),
    isCompleted bool
);

insert into tb_tarefas(nm_tarefa, isCompleted) values("Andar de Carro", false);
insert into tb_tarefas(nm_tarefa, isCompleted) values("Estudar para a prova do Lindo",false);
insert into tb_tarefas(nm_tarefa, isCompleted) values("Jogar fortinite",false);
