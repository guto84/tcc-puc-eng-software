import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import CssBaseline from '@mui/material/CssBaseline'

import RoutesRoot from './presentation/routes'
import { setupStore } from './presentation/store/root'

// import { createServer } from 'miragejs'
// import { envAdapter } from './infra/adapters'

// createServer({
//   routes() {
//     this.get(`${envAdapter.apiUrl}/roles`, () => [
//       { id: '1', rolename: 'ROLE_USER' },
//       { id: '2', rolename: 'ROLE_ADMIN' },
//       { id: '3', rolename: 'ROLE_PROVIDER' },
//     ])

//     this.post(`${envAdapter.apiUrl}/login`, () => ({
//       token:
//         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJndXRvYjg0QGdtYWlsLmNvbSIsImlzcyI6Ik9uQ2xpY2siLCJpZCI6IjVlYjI3ZGYwLTQ5OGMtNGEzZS1iZTI1LTgzZDRjMmI3NzE3MCIsImV4cCI6MTcxNjgzMDI4N30.WT2xUGV0oQwidSSUItZZy3cdn_HbZE9GGOOGbS1qp9k',
//       roles: [
//         {
//           id: '3fe66b55-e539-4af1-8925-166ca49ad449',
//           rolename: 'ROLE_USER',
//           authority: 'ROLE_USER',
//         },
//         {
//           id: 'f9276a31-4b53-4c98-9838-c95636b18d9f',
//           rolename: 'ROLE_ADMIN',
//           authority: 'ROLE_ADMIN',
//         },
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//           authority: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/companies`, () => [
//       { id: '1', name: 'Lanchonete', url: 'lanchonete' },
//       { id: '2', name: 'Pizzaria', url: 'pizzaria' },
//       { id: '3', name: 'Restaurente', url: 'restaurante' },
//     ])

//     this.get(`${envAdapter.apiUrl}/companies/1`, () => ({
//       id: '1',
//       name: 'Lanchonete',
//       url: 'lanchonete',
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/2`, () => ({
//       id: '1',
//       name: 'Pizzaria',
//       url: 'pizzaria',
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/3`, () => ({
//       id: '1',
//       name: 'Restaurente',
//       url: 'restaurante',
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/1/users`, () => ({
//       id: '1',
//       name: 'Lanchonete',
//       url: 'lanchonete',
//       users: [
//         {
//           id: '1',
//           name: 'Jimmy Page',
//           email: 'page@lanchonete.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//         {
//           id: '2',
//           name: 'Robert Plant',
//           email: 'plant@lanchonete.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/2/users`, () => ({
//       id: '2',
//       name: 'Pizzaria',
//       url: 'pizzaria',
//       users: [
//         {
//           id: '3',
//           name: 'Ozzy Osbourne',
//           email: 'ozzy@pizzaria.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//         {
//           id: '4',
//           name: 'Zack Wylde',
//           email: 'zack@pizzaria.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/3/users`, () => ({
//       id: '3',
//       name: 'Pizzaria',
//       url: 'pizzaria',
//       users: [
//         {
//           id: '5',
//           name: 'Jimi Hendrix',
//           email: 'hendrix@restaurante.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//         {
//           id: '6',
//           name: 'Jeff Beck',
//           email: 'beck@restaurante.com',
//           roles: [
//             {
//               id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//               rolename: 'ROLE_PROVIDER',
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/1`, () => ({
//       id: '1',
//       name: 'Jimmy Page',
//       email: 'page@lanchonete.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/2`, () => ({
//       id: '2',
//       name: 'Robert Plant',
//       email: 'plant@lanchonete.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/3`, () => ({
//       id: '3',
//       name: 'Ozzy Osbourne',
//       email: 'ozzy@pizzaria.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/4`, () => ({
//       id: '4',
//       name: 'Zack Wylde',
//       email: 'zack@pizzaria.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/5`, () => ({
//       id: '5',
//       name: 'Jimi Hendrix',
//       email: 'hendrix@restaurante.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/users/6`, () => ({
//       id: '6',
//       name: 'Jeff Beck',
//       email: 'beck@restaurante.com',
//       roles: [
//         {
//           id: '20b5e71d-e044-40e4-b9b4-40a2f4e27b68',
//           rolename: 'ROLE_PROVIDER',
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/groups/categories/products`, () => [
//       {
//         id: '1',
//         name: 'Lanches',
//         categories: [
//           {
//             id: '1',
//             name: 'Lanches com Hamburguer',
//             products: [
//               {
//                 id: '1',
//                 name: 'X-Burguer',
//                 description: 'Hamburguer, Queijo e Tomate',
//                 price: 16.0,
//               },
//               {
//                 id: '2',
//                 name: 'X-Salada',
//                 description: 'Hamburguer, Queijo, Tomate e Alface',
//                 price: 17.0,
//               },
//               {
//                 id: '3',
//                 name: 'X-Bacon',
//                 description: 'Hamburguer, Queijo, Tomate e Bacon',
//                 price: 19.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Lanches com Frango',
//             products: [
//               {
//                 id: '4',
//                 name: 'Frango',
//                 description: 'Frango, Queijo e Tomate',
//                 price: 17.0,
//               },
//               {
//                 id: '5',
//                 name: 'Frango-Salada',
//                 description: 'Frango, Queijo, Tomate e Alface',
//                 price: 18.0,
//               },
//               {
//                 id: '6',
//                 name: 'Frango-Bacon',
//                 description: 'Frango, Queijo, Tomate e Bacon',
//                 price: 20.0,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: '2',
//         name: 'Porções',
//         categories: [
//           {
//             id: '3',
//             name: 'Porções Quentes',
//             products: [
//               {
//                 id: '7',
//                 name: 'Batata Frita',
//                 description: '500 gramas',
//                 price: 25.0,
//               },
//               {
//                 id: '8',
//                 name: 'Polenta Frita',
//                 description: '500 gramas',
//                 price: 25.0,
//               },
//               {
//                 id: '9',
//                 name: 'Filé de Tilápia',
//                 description: '500 gramas',
//                 price: 40.0,
//               },
//             ],
//           },
//           {
//             id: '4',
//             name: 'Porções Frias',
//             products: [
//               {
//                 id: '10',
//                 name: 'Salame',
//                 description: '300 gramas',
//                 price: 30.0,
//               },
//               {
//                 id: '11',
//                 name: 'Frios',
//                 description: '300 gramas',
//                 price: 25.0,
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: '3',
//         name: 'Bebidas',
//         categories: [
//           {
//             id: '5',
//             name: 'Refrigerantes',
//             products: [
//               {
//                 id: '12',
//                 name: 'Coca-Cola',
//                 description: 'Lata 350 ml',
//                 price: 4.0,
//               },
//               {
//                 id: '13',
//                 name: 'Guaraná',
//                 description: 'Lata 350 ml',
//                 price: 4.0,
//               },
//             ],
//           },
//           {
//             id: '6',
//             name: 'Cervejas',
//             products: [
//               {
//                 id: '14',
//                 name: 'Brahma',
//                 description: 'Lata 350 ml',
//                 price: 5.0,
//               },
//               {
//                 id: '15',
//                 name: 'Skol',
//                 description: 'Lata 350 ml',
//                 price: 5.0,
//               },
//             ],
//           },
//         ],
//       },
//     ])

//     this.get(`${envAdapter.apiUrl}/groups/1`, () => ({
//       id: '1',
//       name: 'Lanches',
//     }))

//     this.get(`${envAdapter.apiUrl}/groups/2`, () => ({
//       id: '2',
//       name: 'Porções',
//     }))

//     this.get(`${envAdapter.apiUrl}/groups/3`, () => ({
//       id: '3',
//       name: 'Bebidas',
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/1`, () => ({
//       id: '1',
//       name: 'Lanches com Hamburguer',
//       group: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/2`, () => ({
//       id: '2',
//       name: 'Lanches com Frango',
//       group: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/3`, () => ({
//       id: '3',
//       name: 'Porções Quentes',
//       group: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/4`, () => ({
//       id: '4',
//       name: 'Porções Frias',
//       group: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/5`, () => ({
//       id: '5',
//       name: 'Refrigerantes',
//       group: {
//         id: '3',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/6`, () => ({
//       id: '6',
//       name: 'Cervejas',
//       group: {
//         id: '3',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/1`, () => ({
//       id: '1',
//       name: 'X-Burguer',
//       description: 'Hamburguer, Queijo e Tomate',
//       price: 16.0,
//       category: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/2`, () => ({
//       id: '2',
//       name: 'X-Salada',
//       description: 'Hamburguer, Queijo, Tomate e Alface',
//       price: 17.0,
//       category: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/3`, () => ({
//       id: '3',
//       name: 'X-Bacon',
//       description: 'Hamburguer, Queijo, Tomate e Bacon',
//       price: 19.0,
//       category: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/4`, () => ({
//       id: '4',
//       name: 'Frango',
//       description: 'Frango, Queijo e Tomate',
//       price: 17.0,
//       category: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/5`, () => ({
//       id: '5',
//       name: 'Frango-Salada',
//       description: 'Frango, Queijo, Tomate e Alface',
//       price: 18.0,
//       category: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/6`, () => ({
//       id: '6',
//       name: 'Frango-Bacon',
//       description: 'Frango, Queijo, Tomate e Bacon',
//       price: 20.0,
//       category: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/7`, () => ({
//       id: '7',
//       name: 'Batata Frita',
//       description: '500 gramas',
//       price: 25.0,
//       category: {
//         id: '3',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/8`, () => ({
//       id: '8',
//       name: 'Polenta Frita',
//       description: '500 gramas',
//       price: 25.0,
//       category: {
//         id: '3',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/9`, () => ({
//       id: '9',
//       name: 'Filé de Tilápia',
//       description: '500 gramas',
//       price: 40.0,
//       category: {
//         id: '3',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/10`, () => ({
//       id: '10',
//       name: 'Salame',
//       description: '300 gramas',
//       price: 30.0,
//       category: {
//         id: '4',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/11`, () => ({
//       id: '11',
//       name: 'Frios',
//       description: '300 gramas',
//       price: 25.0,
//       category: {
//         id: '4',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/12`, () => ({
//       id: '12',
//       name: 'Coca-Cola',
//       description: 'Lata 350 ml',
//       price: 4.0,
//       category: {
//         id: '5',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/13`, () => ({
//       id: '13',
//       name: 'Guaraná',
//       description: 'Lata 350 ml',
//       price: 4.0,
//       category: {
//         id: '5',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/14`, () => ({
//       id: '14',
//       name: 'Brahma',
//       description: 'Lata 350 ml',
//       price: 5.0,
//       category: {
//         id: '6',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/15`, () => ({
//       id: '15',
//       name: 'Skol',
//       description: 'Lata 350 ml',
//       price: 5.0,
//       category: {
//         id: '6',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/1/configurations/items`, () => ({
//       id: '1',
//       name: 'Lanches com Hamburguer',
//       configurations: [
//         {
//           id: '1',
//           name: 'Escolha seu Pão',
//           min: 1,
//           max: 1,
//           configurationItems: [
//             {
//               id: '1',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//             },
//             {
//               id: '2',
//               name: 'Pão de Frances',
//               description: '',
//               price: null,
//             },
//             {
//               id: '3',
//               name: 'Pão Australiano',
//               description: '',
//               price: 5.0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           name: 'Adicionais',
//           min: 0,
//           max: 3,
//           configurationItems: [
//             {
//               id: '4',
//               name: 'Maionese Caseira',
//               description: '50 gramas',
//               price: 3.0,
//             },
//             {
//               id: '4',
//               name: 'Queijo',
//               description: '50 gramas',
//               price: 2.0,
//             },
//             {
//               id: '5',
//               name: 'Presunto',
//               description: '50 gramas',
//               price: 2.0,
//             },
//             {
//               id: '6',
//               name: 'Alface',
//               description: '',
//               price: 1.0,
//             },
//             {
//               id: '7',
//               name: 'Tomate',
//               description: '',
//               price: 1.0,
//             },
//             {
//               id: '7',
//               name: 'Milho',
//               description: '',
//               price: 1.0,
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/categories/2/configurations/items`, () => ({
//       id: '2',
//       name: 'Lanches com Frango',
//       configurations: [
//         {
//           id: '1',
//           name: 'Escolha seu Pão',
//           min: 1,
//           max: 1,
//           configurationItems: [
//             {
//               id: '1',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//             },
//             {
//               id: '2',
//               name: 'Pão de Frances',
//               description: '',
//               price: null,
//             },
//             {
//               id: '3',
//               name: 'Pão Australiano',
//               description: '',
//               price: 5.0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           name: 'Adicionais',
//           min: 0,
//           max: 3,
//           configurationItems: [
//             {
//               id: '4',
//               name: 'Maionese Caseira',
//               description: '50 gramas',
//               price: 3.0,
//             },
//             {
//               id: '5',
//               name: 'Queijo',
//               description: '50 gramas',
//               price: 2.0,
//             },
//             {
//               id: '6',
//               name: 'Presunto',
//               description: '50 gramas',
//               price: 2.0,
//             },
//             {
//               id: '7',
//               name: 'Alface',
//               description: '',
//               price: 1.0,
//             },
//             {
//               id: '8',
//               name: 'Tomate',
//               description: '',
//               price: 1.0,
//             },
//             {
//               id: '9',
//               name: 'Milho',
//               description: '',
//               price: 1.0,
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/configurations/1`, () => ({
//       id: '1',
//       name: 'Escolha seu Pão',
//       min: 1,
//       max: 1,
//       category: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configurations/2`, () => ({
//       id: '2',
//       name: 'Adicionais',
//       min: 0,
//       max: 3,
//       category: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/1`, () => ({
//       id: '1',
//       name: 'Pão de Hamburguer',
//       description: '',
//       price: null,
//       configuration: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/2`, () => ({
//       id: '2',
//       name: 'Pão de Frances',
//       description: '',
//       price: null,
//       configuration: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/3`, () => ({
//       id: '3',
//       name: 'Pão Australiano',
//       description: '',
//       price: 5.0,
//       configuration: {
//         id: '1',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/4`, () => ({
//       id: '4',
//       name: 'Maionese Caseira',
//       description: '50 gramas',
//       price: 3.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/5`, () => ({
//       id: '5',
//       name: 'Queijo',
//       description: '50 gramas',
//       price: 2.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/6`, () => ({
//       id: '6',
//       name: 'Presunto',
//       description: '50 gramas',
//       price: 2.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/7`, () => ({
//       id: '7',
//       name: 'Alface',
//       description: '',
//       price: 1.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/8`, () => ({
//       id: '8',
//       name: 'Tomate',
//       description: '',
//       price: 1.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/configuration-items/9`, () => ({
//       id: '9',
//       name: 'Milho',
//       description: '',
//       price: 1.0,
//       configuration: {
//         id: '2',
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/orders`, () => ({
//       content: [
//         {
//           id: '1',
//           name: 'Aline Oliveira Castro',
//           address: 'Praça Antônio Duarte Amaral',
//           addressNumber: '1363',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '01443070',
//           phone: '11941766015',
//           status: 'RECEIVED',
//         },
//         {
//           id: '2',
//           name: 'Emily Correia Melo',
//           address: 'Avenida Espanha',
//           addressNumber: '737',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '45050120',
//           phone: '77959395919',
//           status: 'RECEIVED',
//         },
//         {
//           id: '3',
//           name: 'Eduarda Cunha Carvalho',
//           address: 'Rua Angelo Mamprin',
//           addressNumber: '1081',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '13272031',
//           phone: '19962626774',
//           status: 'RECEIVED',
//         },
//         {
//           id: '4',
//           name: 'Nicolas Melo Cunha',
//           address: 'Rua Armogaste J. Silveira',
//           addressNumber: '1149',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '74413180',
//           phone: '62949843454',
//           status: 'RECEIVED',
//         },
//         {
//           id: '5',
//           name: 'Eduardo Melo Ribeiro',
//           address: 'Rua Amazonia',
//           addressNumber: '1291',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '09335310',
//           phone: '11972795277',
//           status: 'RECEIVED',
//         },
//         {
//           id: '6',
//           name: 'Marisa Pereira Souza',
//           address: 'Rua Leme',
//           addressNumber: '1431',
//           addressComplement: null,
//           district: 'Jardim Bonito',
//           zipcode: '12240180',
//           phone: '11998875977',
//           status: 'RECEIVED',
//         },
//       ],
//       totalPages: 2,
//       totalElements: 12,
//       offset: 5,
//       page: 1,
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/1`, () => ({
//       id: '1',
//       name: 'Aline Oliveira Castro',
//       address: 'Praça Antônio Duarte Amaral',
//       addressNumber: '1363',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '01443070',
//       phone: '11941766015',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/2`, () => ({
//       id: '2',
//       name: 'Emily Correia Melo',
//       address: 'Avenida Espanha',
//       addressNumber: '737',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '45050120',
//       phone: '77959395919',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/3`, () => ({
//       id: '3',
//       name: 'Eduarda Cunha Carvalho',
//       address: 'Rua Angelo Mamprin',
//       addressNumber: '1081',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '13272031',
//       phone: '19962626774',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/4`, () => ({
//       id: '4',
//       name: 'Nicolas Melo Cunha',
//       address: 'Rua Armogaste J. Silveira',
//       addressNumber: '1149',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '74413180',
//       phone: '62949843454',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/5`, () => ({
//       id: '5',
//       name: 'Eduardo Melo Ribeiro',
//       address: 'Rua Amazonia',
//       addressNumber: '1291',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '09335310',
//       phone: '11972795277',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/orders/6`, () => ({
//       id: '6',
//       name: 'Marisa Pereira Souza',
//       address: 'Rua Leme',
//       addressNumber: '1431',
//       addressComplement: null,
//       district: 'Jardim Bonito',
//       zipcode: '12240180',
//       phone: '11998875977',
//       status: 'RECEIVED',
//       total: 20.0,
//       orderItems: [
//         {
//           id: '1',
//           quantity: 1,
//           total: 16.0,
//           product: {
//             id: '2',
//             name: 'X-Burguer',
//             description: 'Hamburguer, Queijo e Tomate',
//             price: 16.0,
//           },
//           orderConfigurations: [
//             {
//               id: '3',
//               name: 'Pão de Hamburguer',
//               description: '',
//               price: null,
//               configuration: {
//                 id: '4',
//                 name: 'Escolha seu Pão',
//                 min: 1,
//                 max: 1,
//               },
//               quantity: 1,
//               total: 0,
//             },
//           ],
//         },
//         {
//           id: '2',
//           quantity: 1,
//           total: 4.0,
//           product: {
//             id: '13',
//             name: 'Guaraná',
//             description: 'Lata 350 ml',
//             price: 4.0,
//           },
//           orderConfigurations: [],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/companies/menu/lanchonete`, () => ({
//       id: '1',
//       name: 'Lanchonete',
//       url: 'lanchonete',
//       groups: [
//         {
//           id: '1',
//           name: 'Lanches',
//           categories: [
//             {
//               id: '1',
//               name: 'Lanches com Hamburguer',
//               products: [
//                 {
//                   id: '1',
//                   name: 'X-Burguer',
//                   description: 'Hamburguer, Queijo e Tomate',
//                   price: 16.0,
//                 },
//                 {
//                   id: '2',
//                   name: 'X-Salada',
//                   description: 'Hamburguer, Queijo, Tomate e Alface',
//                   price: 17.0,
//                 },
//                 {
//                   id: '3',
//                   name: 'X-Bacon',
//                   description: 'Hamburguer, Queijo, Tomate e Bacon',
//                   price: 19.0,
//                 },
//               ],
//             },
//             {
//               id: '2',
//               name: 'Lanches com Frango',
//               products: [
//                 {
//                   id: '4',
//                   name: 'Frango',
//                   description: 'Frango, Queijo e Tomate',
//                   price: 17.0,
//                 },
//                 {
//                   id: '5',
//                   name: 'Frango-Salada',
//                   description: 'Frango, Queijo, Tomate e Alface',
//                   price: 18.0,
//                 },
//                 {
//                   id: '6',
//                   name: 'Frango-Bacon',
//                   description: 'Frango, Queijo, Tomate e Bacon',
//                   price: 20.0,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           id: '2',
//           name: 'Porções',
//           categories: [
//             {
//               id: '3',
//               name: 'Porções Quentes',
//               products: [
//                 {
//                   id: '7',
//                   name: 'Batata Frita',
//                   description: '500 gramas',
//                   price: 25.0,
//                 },
//                 {
//                   id: '8',
//                   name: 'Polenta Frita',
//                   description: '500 gramas',
//                   price: 25.0,
//                 },
//                 {
//                   id: '9',
//                   name: 'Filé de Tilápia',
//                   description: '500 gramas',
//                   price: 40.0,
//                 },
//               ],
//             },
//             {
//               id: '4',
//               name: 'Porções Frias',
//               products: [
//                 {
//                   id: '10',
//                   name: 'Salame',
//                   description: '300 gramas',
//                   price: 30.0,
//                 },
//                 {
//                   id: '11',
//                   name: 'Frios',
//                   description: '300 gramas',
//                   price: 25.0,
//                 },
//               ],
//             },
//           ],
//         },
//         {
//           id: '3',
//           name: 'Bebidas',
//           categories: [
//             {
//               id: '5',
//               name: 'Refrigerantes',
//               products: [
//                 {
//                   id: '12',
//                   name: 'Coca-Cola',
//                   description: 'Lata 350 ml',
//                   price: 4.0,
//                 },
//                 {
//                   id: '13',
//                   name: 'Guaraná',
//                   description: 'Lata 350 ml',
//                   price: 4.0,
//                 },
//               ],
//             },
//             {
//               id: '6',
//               name: 'Cervejas',
//               products: [
//                 {
//                   id: '14',
//                   name: 'Brahma',
//                   description: 'Lata 350 ml',
//                   price: 5.0,
//                 },
//                 {
//                   id: '15',
//                   name: 'Skol',
//                   description: 'Lata 350 ml',
//                   price: 5.0,
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     }))

//     this.get(`${envAdapter.apiUrl}/products/1/configurations`, () => ({
//       id: '1',
//       name: 'X-Burguer',
//       description: 'Hamburguer, Queijo e Tomate',
//       price: 16.0,
//       category: {
//         id: '1',
//         name: 'Lanches com Hamburguer',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '4',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '5',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/2/configurations`, () => ({
//       id: '2',
//       name: 'X-Salada',
//       description: 'Hamburguer, Queijo, Tomate e Alface',
//       price: 17.0,
//       category: {
//         id: '1',
//         name: 'Lanches com Hamburguer',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '4',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '5',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/3/configurations`, () => ({
//       id: '3',
//       name: 'X-Bacon',
//       description: 'Hamburguer, Queijo, Tomate e Bacon',
//       price: 19.0,
//       category: {
//         id: '1',
//         name: 'Lanches com Hamburguer',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '4',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '5',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '7',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/4/configurations`, () => ({
//       id: '4',
//       name: 'Frango',
//       description: 'Frango, Queijo e Tomate',
//       price: 17.0,
//       category: {
//         id: '2',
//         name: 'Lanches com Frango',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '5',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '7',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '8',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '9',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/5/configurations`, () => ({
//       id: '5',
//       name: 'Frango-Salada',
//       description: 'Frango, Queijo, Tomate e Alface',
//       price: 18.0,
//       category: {
//         id: '2',
//         name: 'Lanches com Frango',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '5',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '7',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '8',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '9',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/6/configurations`, () => ({
//       id: '6',
//       name: 'Frango-Bacon',
//       description: 'Frango, Queijo, Tomate e Bacon',
//       price: 20.0,
//       category: {
//         id: '2',
//         name: 'Lanches com Frango',
//         configurations: [
//           {
//             id: '1',
//             name: 'Escolha seu Pão',
//             min: 1,
//             max: 1,
//             configurationItems: [
//               {
//                 id: '1',
//                 name: 'Pão de Hamburguer',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '2',
//                 name: 'Pão de Frances',
//                 description: '',
//                 price: null,
//               },
//               {
//                 id: '3',
//                 name: 'Pão Australiano',
//                 description: '',
//                 price: 5.0,
//               },
//             ],
//           },
//           {
//             id: '2',
//             name: 'Adicionais',
//             min: 0,
//             max: 3,
//             configurationItems: [
//               {
//                 id: '4',
//                 name: 'Maionese Caseira',
//                 description: '50 gramas',
//                 price: 3.0,
//               },
//               {
//                 id: '5',
//                 name: 'Queijo',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '6',
//                 name: 'Presunto',
//                 description: '50 gramas',
//                 price: 2.0,
//               },
//               {
//                 id: '7',
//                 name: 'Alface',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '8',
//                 name: 'Tomate',
//                 description: '',
//                 price: 1.0,
//               },
//               {
//                 id: '9',
//                 name: 'Milho',
//                 description: '',
//                 price: 1.0,
//               },
//             ],
//           },
//         ],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/7/configurations`, () => ({
//       id: '7',
//       name: 'Batata Frita',
//       description: '500 gramas',
//       price: 25.0,
//       category: {
//         id: '3',
//         name: 'Porções Quentes',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/8/configurations`, () => ({
//       id: '8',
//       name: 'Polenta Frita',
//       description: '500 gramas',
//       price: 25.0,
//       category: {
//         id: '3',
//         name: 'Porções Quentes',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/9/configurations`, () => ({
//       id: '9',
//       name: 'Filé de Tilápia',
//       description: '500 gramas',
//       price: 40.0,
//       category: {
//         id: '3',
//         name: 'Porções Quentes',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/10/configurations`, () => ({
//       id: '10',
//       name: 'Salame',
//       description: '300 gramas',
//       price: 30.0,
//       category: {
//         id: '4',
//         name: 'Porções Frias',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/11/configurations`, () => ({
//       id: '11',
//       name: 'Frios',
//       description: '300 gramas',
//       price: 25.0,
//       category: {
//         id: '4',
//         name: 'Porções Frias',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/12/configurations`, () => ({
//       id: '12',
//       name: 'Coca-Cola',
//       description: 'Lata 350 ml',
//       price: 4.0,
//       category: {
//         id: '5',
//         name: 'Refrigerantes',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/13/configurations`, () => ({
//       id: '13',
//       name: 'Guaraná',
//       description: 'Lata 350 ml',
//       price: 4.0,
//       category: {
//         id: '5',
//         name: 'Refrigerantes',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/14/configurations`, () => ({
//       id: '14',
//       name: 'Brahma',
//       description: 'Lata 350 ml',
//       price: 5.0,
//       category: {
//         id: '6',
//         name: 'Cervejas',
//         configurations: [],
//       },
//     }))

//     this.get(`${envAdapter.apiUrl}/products/15/configurations`, () => ({
//       id: '15',
//       name: 'Skol',
//       description: 'Lata 350 ml',
//       price: 5.0,
//       category: {
//         id: '6',
//         name: 'Cervejas',
//         configurations: [],
//       },
//     }))
//   },
// })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <CssBaseline />
      <RoutesRoot />
    </Provider>
  </React.StrictMode>,
)
