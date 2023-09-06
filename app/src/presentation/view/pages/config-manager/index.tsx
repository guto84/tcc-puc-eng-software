import { ConfigCreate } from './config-create'
import { ConfigDelete } from './config-delete'
import { ConfigUpdate } from './config-update'
import { ItemCreate } from './item-create'
import { ItemDelete } from './item-delete'
import { ItemUpdate } from './item-update'
import { ConfigManagerTable } from './config-manager-table'

export const ConfigManager = () => {
  return (
    <>
      <ConfigManagerTable />
      <ConfigCreate />
      <ConfigUpdate />
      <ConfigDelete />
      <ItemCreate />
      <ItemUpdate />
      <ItemDelete />
    </>
  )
}
