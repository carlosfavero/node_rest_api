create schema u819601105_finan;

create table u819601105_finan.post (
    id serial primary key,
    title text not null,
    content text not null,
    date timestamp default now()
);

insert into u819601105_finan.post (title, content) values ('REST API: Métodos', '...');
insert into u819601105_finan.post (title, content) values ('REST API: Introdução', '...');
insert into u819601105_finan.post (title, content) values ('REST API: Documentação', '...');