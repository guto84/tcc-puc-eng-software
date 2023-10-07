import { CategoryCreate } from './category-create'
import { CategoryDelete } from './category-delete'
import { CategoryUpdate } from './category-update'
import { GroupCreate } from './group-create'
import { GroupDelete } from './group-delete'
import { GroupUpdate } from './group-update'
import { ProductCreate } from './product-create'
import { ProductDelete } from './product-delete'
import { ProductUpdate } from './product-update'
import { MenuManagerTable } from './menu-manager-table'

export const MenuManager = () => {
  return (
    <>
      <MenuManagerTable />
      <GroupCreate />
      <GroupUpdate />
      <GroupDelete />
      <CategoryCreate />
      <CategoryUpdate />
      <CategoryDelete />
      <ProductCreate />
      <ProductUpdate />
      <ProductDelete />
    </>
  )
}
