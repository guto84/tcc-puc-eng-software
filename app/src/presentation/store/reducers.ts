import companyCreateReducer from '../store/slices/companies/company-create.slice'
import companyFindAllReducer from '../store/slices/companies/company-find-all.slice'
import companyDeleteReducer from '../store/slices/companies/company-delete.slice'
import companyFindByIdUsersReducer from '../store/slices/companies/company-find-by-id-users.slice'
import companyMenuReducer from '../store/slices/companies/company-menu.slice'
import companyUpdateReducer from '../store/slices/companies/company-update.slice'

import roleFindAllReducer from '../store/slices/roles/role.find-all.slice'

import userCreateReducer from '../store/slices/users/user-create.slice'
import userDeleteReducer from '../store/slices/users/user-delete.slice'
import userUpdateReducer from '../store/slices/users/user-update.slice'

import groupCreateReducer from '../store/slices/groups/group-create.slice'
import groupDeleteReducer from '../store/slices/groups/group-delete.slice'
import groupFindAllReducer from '../store/slices/groups/group-find-all.slice'
import groupUpdateReducer from '../store/slices/groups/group-update.slice'

import categoryCreateReducer from '../store/slices/categories/category-create.slice'
import categoryDeleteReducer from '../store/slices/categories/category-delete.slice'
import categoryFindByIdConfigsItemsReducer from '../store/slices/categories/category-find-by-id-configs-items.slice'
import categoryUpdateReducer from '../store/slices/categories/category-update.slice'

import productCreateReducer from '../store/slices/products/product-create.slice'
import productDeleteReducer from '../store/slices/products/product-delete.slice'
import productFindByIdConfigsItemsReducer from '../store/slices/products/product-find-by-id-configs-items.slice'
import productUpdateReducer from '../store/slices/products/product-update.slice'

import configurationCreateReducer from '../store/slices/configurations/configuration-create.slice'
import configurationDeleteReducer from '../store/slices/configurations/configuration-delete.slice'
import configurationUpdateReducer from '../store/slices/configurations/configuration-update.slice'

import configurationItemCreateReducer from '../store/slices/configuration-items/configuration-item-create.slice'
import configurationItemDeleteReducer from '../store/slices/configuration-items/configuration-item-delete.slice'
import configurationItemUpdateReducer from '../store/slices/configuration-items/configuration-item-update.slice'

import orderFindAllReducer from '../store/slices/orders/order-find-all.slice'
import orderFindByIdReducer from '../store/slices/orders/order-find-by-id.slice'

export const reducers = {
  companyCreate: companyCreateReducer,
  companyFindAll: companyFindAllReducer,
  companyDelete: companyDeleteReducer,
  companyFindByIdUsers: companyFindByIdUsersReducer,
  companyMenu: companyMenuReducer,
  companyUpdate: companyUpdateReducer,

  roleFindAll: roleFindAllReducer,

  userCreate: userCreateReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  groupCreate: groupCreateReducer,
  groupDelete: groupDeleteReducer,
  groupFindAll: groupFindAllReducer,
  groupUpdate: groupUpdateReducer,

  categoryCreate: categoryCreateReducer,
  categoryDelete: categoryDeleteReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryFindByIdConfigsItems: categoryFindByIdConfigsItemsReducer,

  productCreate: productCreateReducer,
  productDelete: productDeleteReducer,
  productFindByIdConfigsItems: productFindByIdConfigsItemsReducer,
  productUpdate: productUpdateReducer,

  configurationCreate: configurationCreateReducer,
  configurationDelete: configurationDeleteReducer,
  configurationUpdate: configurationUpdateReducer,

  configurationItemCreate: configurationItemCreateReducer,
  configurationItemDelete: configurationItemDeleteReducer,
  configurationItemUpdate: configurationItemUpdateReducer,

  orderFindAll: orderFindAllReducer,
  orderFindById: orderFindByIdReducer,
}
