-- --------------------------------------------------------
-- INSERINDO CATEGORIAS
-- --------------------------------------------------------
insert ignore into tb_categorias (id, nome) values (1, 'Batom');
insert ignore into tb_categorias (id, nome) values (2, 'Rimel');
insert ignore into tb_categorias (id, nome) values (3, 'Blush');
insert ignore into tb_categorias (id, nome) values (4, 'Corretivo');
insert ignore into tb_categorias (id, nome) values (5, 'Base');

-- --------------------------------------------------------
-- CATEGORIA 1: BATOM
-- --------------------------------------------------------
insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (1, 'Batom Acetinado', 1995, 'MAC', 'O produto é nostalgico, lembra a Rachel de Friends. Boa qualidade.', 'https://i.pinimg.com/736x/3c/06/9a/3c069a57483a53fc2b7523117fba60ff.jpg', 1, 129.90, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (101, 'Batom Matte Ruby', 2019, 'Ruby Rose', 'Ótimo custo benefício, cor intensa mas seca um pouco a boca.', 'https://i.pinimg.com/564x/a4/09/2c/a4092cf7d9a865664366601602410651.jpg', 1, 25.00, 3);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (102, 'Dior Rouge 999', 1953, 'Dior', 'O vermelho mais clássico do mundo. Acabamento perfeito e hidratante.', 'https://i.pinimg.com/564x/e7/87/40/e78740c83226f9933575932598585473.jpg', 1, 249.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (103, 'Super Stay Matte Ink', 2017, 'Maybelline', 'Realmente não sai da boca, dura mais de 16 horas. Difícil de tirar.', 'https://i.pinimg.com/564x/0a/61/80/0a61803704255530f57616142c524b07.jpg', 1, 89.90, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (104, 'Gloss Bomb Universal', 2018, 'Fenty Beauty', 'Brilho incrível sem ser pegajoso, cheiro maravilhoso de pêssego.', 'https://i.pinimg.com/564x/3b/d4/0d/3bd40d8284534726210214227768565c.jpg', 1, 159.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (105, 'Lip Tint Gel', 2020, 'Bruna Tavares', 'Deixa uma cor natural nos lábios e dura bastante. Gosto muito.', 'https://i.pinimg.com/564x/5a/0e/1b/5a0e1b2f7f8f9e2b4f3b5c6d7e8f9a0b.jpg', 1, 45.90, 4);

-- --------------------------------------------------------
-- CATEGORIA 2: RIMEL
-- --------------------------------------------------------
insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (2, 'Rimel a prova d água', 2017, 'Dior', 'Rimel que dura e não mancha sua pele ao longo do dia.', 'https://i.pinimg.com/1200x/d8/6d/b5/d86db5a6ea11311709cb08c3d6bb0f36.jpg', 2, 199.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (201, 'The Colossal Volum', 2010, 'Maybelline', 'O amarelinho clássico. Volume instantâneo e preço justo.', 'https://i.pinimg.com/564x/12/34/56/123456placeholder.jpg', 2, 45.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (202, 'Better Than Sex', 2013, 'Too Faced', 'O melhor volume que já vi, parece cílios postiços, mas esfarela um pouco.', 'https://i.pinimg.com/564x/78/90/12/789012placeholder.jpg', 2, 189.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (203, 'Lash Paradise', 2017, 'L Oréal', 'Dizem que é o dupe do Better Than Sex. Muito bom e mais barato.', 'https://i.pinimg.com/564x/ab/cd/ef/abcdefplaceholder.jpg', 2, 79.90, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (204, 'Hypnôse Drama', 2004, 'Lancôme', 'Curvatura e volume perfeitos, cheiro de rosas. Caro mas vale a pena.', 'https://i.pinimg.com/564x/gh/ij/kl/ghijklplaceholder.jpg', 2, 229.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (205, 'Bad Gal Bang', 2018, 'Benefit', 'Promete 36 horas de duração. O aplicador é bem flexível.', 'https://i.pinimg.com/564x/mn/op/qr/mnoppqrplaceholder.jpg', 2, 179.00, 4);

-- --------------------------------------------------------
-- CATEGORIA 3: BLUSH
-- --------------------------------------------------------
insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (3, 'Blush em pó basic', 2015, 'Dior', 'Hidrata e tem uma boa qualidade. Tom suave.', 'https://i.pinimg.com/736x/f4/97/4a/f4974a778fc148ae1e549a14cccca132.jpg', 3, 250.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (4, 'Blush em pó iluminado', 2020, 'MAC', 'Bem pigmentado, serve para todos os tons.', 'https://i.pinimg.com/736x/59/68/52/596852d04463451d7ea2b960b3f26855.jpg', 3, 179.90, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (7, 'Blush Rosy Glow', 2020, 'Dior', 'Produto que se adapta a todas as cores, muda conforme o pH da pele.', 'https://i.pinimg.com/736x/45/91/ef/4591efc4635fab60e7e72a76f8214871.jpg', 3, 265.50, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (301, 'Orgasm', 1999, 'NARS', 'O blush mais famoso do mundo. Um rosa com dourado lindo.', 'https://i.pinimg.com/564x/st/uv/wx/stuvwxplaceholder.jpg', 3, 230.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (302, 'Benetint', 1976, 'Benefit', 'Líquido, serve para boca e bochecha. O efeito é super natural.', 'https://i.pinimg.com/564x/yz/12/34/yz1234placeholder.jpg', 3, 139.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (303, 'Soft Pinch Liquid', 2020, 'Rare Beauty', 'Extremamente pigmentado, uma gotinha rende muito. Selena arrasou.', 'https://i.pinimg.com/564x/56/78/90/567890placeholder.jpg', 3, 159.00, 5);

-- --------------------------------------------------------
-- CATEGORIA 4: CORRETIVO
-- --------------------------------------------------------
insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (5, 'Corretivo alta cobertura', 2015, 'Dior', 'Cobre tudo, dura o dia todo. Não craquela.', 'https://i.pinimg.com/736x/f4/c7/36/f4c736bcc783dc7ff4fceb153d2848dc.jpg', 4, 230.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (401, 'Radiant Creamy', 2012, 'NARS', 'Acabamento natural, não marca as linhas de expressão. Meu favorito.', 'https://i.pinimg.com/564x/aa/bb/cc/aabbccplaceholder.jpg', 4, 199.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (402, 'Shape Tape', 2016, 'Tarte', 'Cobertura pesada, cobre até tatuagem, mas pode ressecar peles maduras.', 'https://i.pinimg.com/564x/dd/ee/ff/ddeeffplaceholder.jpg', 4, 189.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (403, 'Instant Age Rewind', 2010, 'Maybelline', 'A esponjinha facilita muito a aplicação. Ótimo pro dia a dia.', 'https://i.pinimg.com/564x/gg/hh/ii/gghhiiplaceholder.jpg', 4, 75.90, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (404, 'Pro Filt r', 2019, 'Fenty Beauty', 'Muitas opções de cores, a Rihanna pensou em todos os tons de pele.', 'https://i.pinimg.com/564x/jj/kk/ll/jjkkllplaceholder.jpg', 4, 169.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (405, 'Camuflagem Makiê', 2014, 'Makiê', 'Produto nacional de nível profissional. É bem pastoso.', 'https://i.pinimg.com/564x/mm/nn/oo/mmnnooplaceholder.jpg', 4, 69.90, 4);

-- --------------------------------------------------------
-- CATEGORIA 5: BASE
-- --------------------------------------------------------
insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (6, 'Base com cobertura alta', 2018, 'MAC', 'Produto que serve para todas as peles, dura o dia todo.', 'https://i.pinimg.com/736x/45/91/ef/4591efc4635fab60e7e72a76f8214871.jpg', 5, 219.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (501, 'Studio Fix Fluid', 2000, 'MAC', 'Cheiro forte característico, mas a pele fica de boneca.', 'https://i.pinimg.com/564x/pp/qq/rr/ppqqrrplaceholder.jpg', 5, 209.00, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (502, 'Base Líquida Fit Me', 2015, 'Maybelline', 'Melhor base de farmácia para peles oleosas no Brasil.', 'https://i.pinimg.com/564x/ss/tt/uu/ssttuuplaceholder.jpg', 5, 49.90, 4);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (503, 'Double Wear', 1997, 'Estée Lauder', 'A prova de balas. Se você vai casar ou suar muito, use essa base.', 'https://i.pinimg.com/564x/vv/ww/xx/vvwwxxplaceholder.jpg', 5, 310.00, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (504, 'Base BT Skin', 2020, 'Bruna Tavares', 'Textura bem líquida e leve, parece que não estou usando nada.', 'https://i.pinimg.com/564x/yy/zz/00/yyzz00placeholder.jpg', 5, 76.90, 5);

insert ignore into tb_produtos (id, nome_produto, ano_lancamento, marca, opiniao, url_capa, categoria_id, preco, avaliacao)
values (505, 'Luminous Silk', 2000, 'Giorgio Armani', 'A favorita das celebridades no tapete vermelho. Acabamento glow.', 'https://i.pinimg.com/564x/11/22/33/112233placeholder.jpg', 5, 450.00, 5);