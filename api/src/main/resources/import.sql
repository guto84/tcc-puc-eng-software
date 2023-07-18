INSERT INTO tb_company (id, name, url) VALUES ('b239870c-5335-4421-8ecb-8df934645b45', 'companyOne', 'company-one');
INSERT INTO tb_company (id, name, url) VALUES ('e6756246-8bad-4852-9ad7-6350a0152fbf', 'companyTwo', 'company-two');
INSERT INTO tb_company (id, name, url) VALUES ('ad7a78ec-0fdb-472b-a1ca-ca58374768d7', 'companyThree', 'company-three');

INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('36577152-c33e-4d56-b4c3-0cca331f7bd4', 'usuario1', 'usuario1@email.com', '123', 'b239870c-5335-4421-8ecb-8df934645b45');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('07764f13-b3e2-4ce5-9137-46f4b45d6983', 'usuario2', 'usuario2@email.com', '123', 'e6756246-8bad-4852-9ad7-6350a0152fbf');
INSERT INTO tb_user (id, name, email, password, company_id) VALUES ('f59e263d-738d-4ad7-a618-d0fdfa122bd6', 'usuario3', 'usuario3@email.com', '123', 'ad7a78ec-0fdb-472b-a1ca-ca58374768d7');

INSERT INTO tb_role (id, authority) VALUES ('2f4e2361-1bef-4cda-b971-7909199ad324', 'ROLE_ADMIN');
INSERT INTO tb_role (id, authority) VALUES ('c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010', 'ROLE_PROVIDER');
INSERT INTO tb_role (id, authority) VALUES ('776f5adb-269a-410a-b8a7-ecb83d3ff06b', 'ROLE_USER');

INSERT INTO tb_user_role (user_id, role_id) VALUES ('36577152-c33e-4d56-b4c3-0cca331f7bd4', '2f4e2361-1bef-4cda-b971-7909199ad324');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('07764f13-b3e2-4ce5-9137-46f4b45d6983', 'c6ccb498-b6b8-4ceb-a3bd-77c8adbd8010');
INSERT INTO tb_user_role (user_id, role_id) VALUES ('f59e263d-738d-4ad7-a618-d0fdfa122bd6', '776f5adb-269a-410a-b8a7-ecb83d3ff06b');
