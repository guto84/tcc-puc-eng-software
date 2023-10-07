INSERT INTO tb_role (id, authority) VALUES ('2f4e2361-1bef-4cda-b971-7909199ad324', 'ROLE_ADMIN');
INSERT INTO tb_role (id, authority) VALUES ('c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010', 'ROLE_PROVIDER');
INSERT INTO tb_role (id, authority) VALUES ('776f5adb-269a-410a-b8a7-ecb83d3ff06b', 'ROLE_USER');

INSERT INTO tb_company (id, name, url) VALUES ('b239870c-5335-4421-8ecb-8df934645b45', 'Lanchonete', 'lanchonete');
INSERT INTO tb_company (id, name, url) VALUES ('e6756246-8bad-4852-9ad7-6350a0152fbf', 'Pizzaria', 'pizzaria');
INSERT INTO tb_company (id, name, url) VALUES ('ad7a78ec-0fdb-472b-a1ca-ca58374768d7', 'Restaurante', 'restaurante');

INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('3459915b-965a-4109-ba87-3534b5582e07', 'Luke Skywalker', 'luke@starwars.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('36577152-c33e-4d56-b4c3-0cca331f7bd4', 'Jimmy Page', 'page@lanchonete.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('07764f13-b3e2-4ce5-9137-46f4b45d6983', 'Robert Plant', 'plant@lanchonete.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('f59e263d-738d-4ad7-a618-d0fdfa122bd6', 'Ozzy Osbourne', 'ozzy@pizzaria.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'e6756246-8bad-4852-9ad7-6350a0152fbf');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('f278075d-0232-4ae5-a2fd-21808bc380e9', 'Zack Wylde', 'zack@pizzaria.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'e6756246-8bad-4852-9ad7-6350a0152fbf');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('4921bf85-aa33-463f-95d4-7f445a389bff', 'Jimi Hendrix', 'hendrix@restaurante.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'ad7a78ec-0fdb-472b-a1ca-ca58374768d7');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('9a3e83d1-a3b0-4413-9958-0dbc68cd2a5c', 'Jeff Beck', 'beck@restaurante.com', '$2a$10$gMF0vmOu5zx/XDzMJTSZDO7yujc5tVSNZONUy4TJ.Pu17tTM96Cm6', 'ad7a78ec-0fdb-472b-a1ca-ca58374768d7');

INSERT INTO tb_user_role (user_id, role_id) VALUES ('3459915b-965a-4109-ba87-3534b5582e07', '2f4e2361-1bef-4cda-b971-7909199ad324');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('36577152-c33e-4d56-b4c3-0cca331f7bd4', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('07764f13-b3e2-4ce5-9137-46f4b45d6983', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('f59e263d-738d-4ad7-a618-d0fdfa122bd6', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('f278075d-0232-4ae5-a2fd-21808bc380e9', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('4921bf85-aa33-463f-95d4-7f445a389bff', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('9a3e83d1-a3b0-4413-9958-0dbc68cd2a5c', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');

INSERT INTO tb_group (id, name, company_id) VALUES ('a5d7226f-ceca-4099-bcc2-ca9ce4b9b5f3', 'Lanches', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_group (id, name, company_id) VALUES ('500881dd-00fe-4ee2-844a-c0f2c0f56b12', 'Porções', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_group (id, name, company_id) VALUES ('4562bb44-07c6-42f4-9756-05eadd2a60a4', 'Bebidas', 'b239870c-5335-4421-8ecb-8df934645b45');

INSERT INTO tb_category (id, name, group_id) VALUES ('2314ecad-f494-463b-8417-9f359e783447', 'Lanches com Hamburguer', 'a5d7226f-ceca-4099-bcc2-ca9ce4b9b5f3');
INSERT INTO tb_category (id, name, group_id) VALUES ('545d28e6-1aa5-4b0f-b64d-53cf52cb4461', 'Lanches com Frango', 'a5d7226f-ceca-4099-bcc2-ca9ce4b9b5f3');
INSERT INTO tb_category (id, name, group_id) VALUES ('094468f8-cefa-4ba1-a402-e757d886e662', 'Porções Quentes', '500881dd-00fe-4ee2-844a-c0f2c0f56b12');
INSERT INTO tb_category (id, name, group_id) VALUES ('9e25ffde-d57c-4f30-bc37-fdd7ad9772e8', 'Porções Frias', '500881dd-00fe-4ee2-844a-c0f2c0f56b12');
INSERT INTO tb_category (id, name, group_id) VALUES ('92f20b48-473a-44fe-b87a-3054d264da7a', 'Bebidas', '4562bb44-07c6-42f4-9756-05eadd2a60a4');
INSERT INTO tb_category (id, name, group_id) VALUES ('9cf7f655-afd7-4618-97d1-a6f0542043e0', 'Cervejas', '4562bb44-07c6-42f4-9756-05eadd2a60a4');

INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('b429e347-dda1-4b83-a0f9-70c1076fa4e9', 'X-Burguer', 'Hamburguer, Queijo e Tomate', 16.0, '2314ecad-f494-463b-8417-9f359e783447');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('e434be73-759b-45e3-a6fe-e2673d7cd14f', 'X-Salada', 'Hamburguer, Queijo, Tomate e Alface', 17.0, '2314ecad-f494-463b-8417-9f359e783447');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('79a2aecb-a6c7-4639-9af7-3892e3d0a923', 'X-Bacon', 'Hamburguer, Queijo, Tomate e Bacon', 19.0, '2314ecad-f494-463b-8417-9f359e783447');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('0cd63507-8e4e-4216-8f8b-dfdaf327b729', 'Frango', 'Frango, Queijo e Tomate', 17.0, '545d28e6-1aa5-4b0f-b64d-53cf52cb4461');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('3ba0b684-0229-4f0e-b309-254bf3627244', 'Frango-Salada', 'Frango, Queijo, Tomate e Alface', 18.0, '545d28e6-1aa5-4b0f-b64d-53cf52cb4461');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('d9a54de1-bbaf-445e-ad52-3ffe536163f3', 'Frango-Bacon', 'Frango, Queijo, Tomate e Bacon', 20.0, '545d28e6-1aa5-4b0f-b64d-53cf52cb4461');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('25b2c516-196b-418e-9a54-ac515cbd1f7e', 'Batata Frita', '500 gramas', 25.0, '094468f8-cefa-4ba1-a402-e757d886e662');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('5f969811-c7e1-4259-9cd9-3900896b70af', 'Polenta Frita', '500 gramas', 25.0, '094468f8-cefa-4ba1-a402-e757d886e662');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('073a5378-38a2-4756-adee-29c868163e5b', 'File de Tilápia', '500 gramas', 40.0, '094468f8-cefa-4ba1-a402-e757d886e662');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('bc90fffd-74b2-40a8-aaf4-7347b14a9157', 'Salame', '300 gramas', 30.0, '9e25ffde-d57c-4f30-bc37-fdd7ad9772e8');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('6e61f427-803d-4426-bc1a-5059e66616fc', 'Frios', '300 gramas', 30.0, '9e25ffde-d57c-4f30-bc37-fdd7ad9772e8');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('31e94aa3-3763-4536-acf7-06906da55ac1', 'Coca-Cola', 'Lata 350 ml', 4.0, '92f20b48-473a-44fe-b87a-3054d264da7a');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('e6b64e60-33fa-4642-8d94-87864be22744', 'Guaraná', 'Lata 350 ml', 4.0, '92f20b48-473a-44fe-b87a-3054d264da7a');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('34e48735-8c4f-4082-8844-7391ca590287', 'Brahma', 'Lata 350 ml', 5.0, '9cf7f655-afd7-4618-97d1-a6f0542043e0');
INSERT INTO tb_product (id, name, description, price, category_id) VALUES ('ef613c44-b6ba-4b71-9c32-d462c6728c26', 'Skol', 'Lata 350 ml', 5.0, '9cf7f655-afd7-4618-97d1-a6f0542043e0');

INSERT INTO tb_configuration (id, name, minimum, maximum, category_id) VALUES ('e17df1f0-a9de-47d3-8f21-206f11e71d09', 'Escolha seu Pão', 1, 1, '2314ecad-f494-463b-8417-9f359e783447');
INSERT INTO tb_configuration (id, name, minimum, maximum, category_id) VALUES ('4fbb6f80-cd7e-42a2-8a49-360a3935b5c4', 'Adicionais', 0, 3, '2314ecad-f494-463b-8417-9f359e783447');
INSERT INTO tb_configuration (id, name, minimum, maximum, category_id) VALUES ('481706f3-9837-4435-bf1c-32bbd611113b', 'Escolha seu Pão', 1, 1, '545d28e6-1aa5-4b0f-b64d-53cf52cb4461');
INSERT INTO tb_configuration (id, name, minimum, maximum, category_id) VALUES ('2828a4ca-7ee8-4fc9-be0f-356f460c27d8', 'Adicionais', 0, 3, '545d28e6-1aa5-4b0f-b64d-53cf52cb4461');

INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('43b2c745-85c2-4452-a334-6c256566f841', 'Pão de Hamburguer', null, 0.0, 'e17df1f0-a9de-47d3-8f21-206f11e71d09');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('53994023-f575-4fe8-b964-a210e6396d6b', 'Pão Francês', null, 0.0, 'e17df1f0-a9de-47d3-8f21-206f11e71d09');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('4e3830a4-750b-457d-ae13-6c5dc2c1a479', 'Pão Australiano', null, 5.0, 'e17df1f0-a9de-47d3-8f21-206f11e71d09');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('8f7683a0-3a7c-43ba-8400-dbcc526b3d55', 'Maionese Caseira', '50 gramas', 3.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('d6a6cad2-838c-495b-93a7-166668b496fa', 'Queijo', '50 gramas', 2.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('096d4907-7426-4140-97ab-6bebdd76df6d', 'Presunto', '50 gramas', 2.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('35a1c6f9-6426-45d6-a141-15316351c819', 'Alface', null, 1.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('74ee0755-3c8c-4a46-b427-752697627c3a', 'Tomate', null, 1.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('2e341b07-737b-4e30-844a-fa9d7d0b191c', 'Milho', null, 1.0, '4fbb6f80-cd7e-42a2-8a49-360a3935b5c4');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('d1844acc-01bd-4c8c-8b5c-a37b3496e878', 'Pão de Hamburguer', null, 0.0, '481706f3-9837-4435-bf1c-32bbd611113b');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('4405883f-e409-4c2a-856b-9006002bac4e', 'Pão Francês', null, 0.0, '481706f3-9837-4435-bf1c-32bbd611113b');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('606427c0-6d52-4b3b-b354-cb7d81b90dc6', 'Pão Australiano', null, 5.0, '481706f3-9837-4435-bf1c-32bbd611113b');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('639abfaa-0e19-4a90-acc6-9254d233c42e', 'Maionese Caseira', '50 gramas', 3.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('202e9782-186b-40a8-b683-bd215b0974b5', 'Queijo', '50 gramas', 2.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('de4bc58f-302d-409f-b1f4-c2035a1ef05f', 'Presunto', '50 gramas', 2.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('c787a344-6625-4134-8290-5df290601f0a', 'Alface', null, 1.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('480922d7-f8e2-4229-a3db-d44536431cdc', 'Tomate', null, 1.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');
INSERT INTO tb_configuration_item (id, name, description, price, configuration_id) VALUES ('6e63607e-0e18-4835-8e4e-3e970e5e7686', 'Milho', null, 1.0, '2828a4ca-7ee8-4fc9-be0f-356f460c27d8');

INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('98226435-79b9-4480-8b12-f22f3219e541', 'Luna Micaela Medina de Salgado', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('676fe66c-2f25-476c-b39f-f3f9f4ad439a', 'Berenice Danielle Brito Góis', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('2539d6c2-271e-40ed-8721-225bd02c165a', 'Samuel Aécio Duarte Gomes', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('45c239d9-52a2-46ad-9d7d-e1bc28c36094', 'Luciano Inácio Lira Lutero', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('2b2c1040-c714-4895-ac25-2e75a871b1a5', 'Giovane Leal', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('07f02aa9-59c7-4c46-8721-1121bc4136db', 'Valentina Carrara Lira', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('3ec8d7b1-bdb2-4029-8a58-14d4218f79fa', 'Maria Martines Rocha', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('1442f23a-ba86-4a17-824f-e9b90a19050c', 'Pedro Dominato Gomes', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('43a6a9db-7a42-4248-abb9-af3fdd697036', 'Giovanni Beltrão de Alencar', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('46dd314a-3e2e-42bd-9b10-2c00053634aa', 'Cirilo Matos de Cabral', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('91eaf235-c034-4d1e-888c-4eab8dccd226', 'Suzy Guerra Rico', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('7d22ad89-3d9f-4ce7-b630-c489a2ffd92c', 'Nathan Paulo Cortês Lozano', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('f5114f68-edff-465a-81d4-a5d654965888', 'Allison Antonieta Marinho de Oliveira', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('7bcc9745-98a4-400b-bab3-f3de4232e974', 'Gabriela Zenaide Brito Leal de Figueira', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());
INSERT INTO tb_order (id, name, address, address_number, address_complement, district, zipcode, phone, status, company_id, created_at, updated_at) VALUES ('1bd1599b-b4aa-4d0c-8a88-88eb3b2df758', 'Damião Serna Torres', 'Rua Que Sobe e Desce', '1234', null, 'Distrito Perdido', '13990000', '19995671234', 0, 'b239870c-5335-4421-8ecb-8df934645b45', NOW(), NOW());

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('c71082d3-f190-4365-982f-ac8407b7c648', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '98226435-79b9-4480-8b12-f22f3219e541');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('72f2edc7-9822-48f2-8ba0-9cacae8c1c7f', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '98226435-79b9-4480-8b12-f22f3219e541');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('a17d3991-3a46-434b-987f-6b944fe090bc', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '676fe66c-2f25-476c-b39f-f3f9f4ad439a');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('fbd97ee4-7c7a-40ce-9f71-0379ddeb714e', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '676fe66c-2f25-476c-b39f-f3f9f4ad439a');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('aed2fccc-06ae-4238-85cf-8ad2d234b03a', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '2539d6c2-271e-40ed-8721-225bd02c165a');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('c5df7177-8078-4403-9240-c8380ff8c25b', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '2539d6c2-271e-40ed-8721-225bd02c165a');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('c39e35a0-810c-41dd-b193-6f9988f9a5e3', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '45c239d9-52a2-46ad-9d7d-e1bc28c36094');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('457b7b19-a2f9-4152-9588-3cba899511cb', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '45c239d9-52a2-46ad-9d7d-e1bc28c36094');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('099a642a-df73-49a5-b0d8-ef7eae083e39', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '2b2c1040-c714-4895-ac25-2e75a871b1a5');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('eb409b9d-abc6-4eeb-8a7e-dce56affcb1a', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '2b2c1040-c714-4895-ac25-2e75a871b1a5');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('dddf4061-4731-4d50-b0fb-4d68d095d197', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '07f02aa9-59c7-4c46-8721-1121bc4136db');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('ff7c5063-5234-4ff9-85db-98441c723f66', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '07f02aa9-59c7-4c46-8721-1121bc4136db');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('9d0cf2f8-f353-445b-bb96-3721d35ec18e', 2.0, 'b429e347-dda1-4b83-a0f9-70c1076fa4e9', '3ec8d7b1-bdb2-4029-8a58-14d4218f79fa');
INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('341590f1-bc8e-41f8-b5fd-6690e36bb878', 1.0, '79a2aecb-a6c7-4639-9af7-3892e3d0a923', '3ec8d7b1-bdb2-4029-8a58-14d4218f79fa');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('3845eacb-44dc-4590-959e-c5bf08c422c3', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '1442f23a-ba86-4a17-824f-e9b90a19050c');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('07fa829b-67b1-400a-8a41-e62f8105d3b9', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '43a6a9db-7a42-4248-abb9-af3fdd697036');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('60fe222d-ca98-4e34-9bc6-a24d5c35bdf9', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '46dd314a-3e2e-42bd-9b10-2c00053634aa');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('25eaf5f3-36fd-4cfc-b9cd-ed81d9f43405', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '91eaf235-c034-4d1e-888c-4eab8dccd226');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('87a907c2-b4f6-40e7-9d5f-d4481a75ef62', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '7d22ad89-3d9f-4ce7-b630-c489a2ffd92c');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('b75f6655-710c-4d4b-af2e-afc59bff5453', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', 'f5114f68-edff-465a-81d4-a5d654965888');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('365e6934-2fe2-4019-9c06-1cc1aeaa696a', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '7bcc9745-98a4-400b-bab3-f3de4232e974');

INSERT INTO tb_order_item (id, quantity, product_id, order_id) VALUES ('d740fd0e-230b-4d5b-ae31-47b41fe7d6ac', 1.0, '25b2c516-196b-418e-9a54-ac515cbd1f7e', '1bd1599b-b4aa-4d0c-8a88-88eb3b2df758');

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('c71082d3-f190-4365-982f-ac8407b7c648', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('72f2edc7-9822-48f2-8ba0-9cacae8c1c7f', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('a17d3991-3a46-434b-987f-6b944fe090bc', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('fbd97ee4-7c7a-40ce-9f71-0379ddeb714e', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('aed2fccc-06ae-4238-85cf-8ad2d234b03a', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('c5df7177-8078-4403-9240-c8380ff8c25b', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('c39e35a0-810c-41dd-b193-6f9988f9a5e3', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('457b7b19-a2f9-4152-9588-3cba899511cb', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('099a642a-df73-49a5-b0d8-ef7eae083e39', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('eb409b9d-abc6-4eeb-8a7e-dce56affcb1a', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('dddf4061-4731-4d50-b0fb-4d68d095d197', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('ff7c5063-5234-4ff9-85db-98441c723f66', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);

INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('9d0cf2f8-f353-445b-bb96-3721d35ec18e', '43b2c745-85c2-4452-a334-6c256566f841', 1.0);
INSERT INTO tb_order_configuration (order_item_id, configuration_item_id, quantity) VALUES ('341590f1-bc8e-41f8-b5fd-6690e36bb878', '4e3830a4-750b-457d-ae13-6c5dc2c1a479', 1.0);
