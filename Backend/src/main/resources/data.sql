insert ignore into tb_categorias (id, nome) values (1, 'Batom');
insert ignore into tb_categorias (id, nome) values (2, 'Rimel');
insert ignore into tb_categorias (id, nome) values (3, 'Sombra');
insert ignore into tb_categorias (id, nome) values (4, 'Blush');
insert ignore into tb_categorias (id, nome) values (5, 'Corretivo');
insert ignore into tb_categorias (id, nome) values (6, 'Base');

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (1, 'Batom Acetinado', 1995, 'MAC', 'O produto é nostalgico, pois lembra o batom usado pela personagem Rachel Green no seriado Friends. Boa qualidade.', 'https://i.pinimg.com/736x/3c/06/9a/3c069a57483a53fc2b7523117fba60ff.jpg', 1);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (6, 'Base com cobertura alta', 2018, 'MAC', 'Produto que serve para todas as peles, dura o dia todo.', 'https://i.pinimg.com/736x/45/91/ef/4591efc4635fab60e7e72a76f8214871.jpg', 6);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (4, 'Blush em pó iluminado', 2020, 'MAC', 'Bem pigmentado, serve para todos os tons.', 'https://i.pinimg.com/736x/59/68/52/596852d04463451d7ea2b960b3f26855.jpg', 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (2, 'Rimel a prova d água', 2017, 'Dior', 'Rimel que dura e não mancha sua pele ao longo do dia.', 'https://i.pinimg.com/1200x/d8/6d/b5/d86db5a6ea11311709cb08c3d6bb0f36.jpg', 2);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (4, 'Blush em pó basic', 2015, 'Dior', 'Hidrata e tem uma boa qualidade', 'https://i.pinimg.com/736x/f4/97/4a/f4974a778fc148ae1e549a14cccca132.jpg', 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (4, 'Blush em pó', 2020, 'Dior', 'Produto que se adapta a todas as cores, com uma linda cor vibrante', 'https://i.pinimg.com/736x/45/91/ef/4591efc4635fab60e7e72a76f8214871.jpg', 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id)
values (5, 'Corretivo alta cobertura', 2015, 'Dior', 'Muita boa qualidade, ele apresenta uma cobertura que cobre tudo, além de durar o dia todo. Não cria resíduos na pele com o pó.', 'https://i.pinimg.com/736x/f4/c7/36/f4c736bcc783dc7ff4fceb153d2848dc.jpg', 5);