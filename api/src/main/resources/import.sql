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
INSERT INTO tb_category (id, name, group_id) VALUES ('545d28e6-1aa5-4b0f-b64d-53cf52cb4461', 'Lanches com Hamburguer', 'a5d7226f-ceca-4099-bcc2-ca9ce4b9b5f3');
INSERT INTO tb_category (id, name, group_id) VALUES ('094468f8-cefa-4ba1-a402-e757d886e662', 'Porções Quentes', '500881dd-00fe-4ee2-844a-c0f2c0f56b12');
INSERT INTO tb_category (id, name, group_id) VALUES ('9e25ffde-d57c-4f30-bc37-fdd7ad9772e8', 'Porções Frias', '500881dd-00fe-4ee2-844a-c0f2c0f56b12');
INSERT INTO tb_category (id, name, group_id) VALUES ('92f20b48-473a-44fe-b87a-3054d264da7a', 'Bebidas', '4562bb44-07c6-42f4-9756-05eadd2a60a4');
INSERT INTO tb_category (id, name, group_id) VALUES ('9cf7f655-afd7-4618-97d1-a6f0542043e0', 'Cervejas', '4562bb44-07c6-42f4-9756-05eadd2a60a4');
