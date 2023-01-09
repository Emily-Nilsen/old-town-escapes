import { v4 as uuid } from 'uuid'

export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
      label: subMenuItem.label,
      destination: menuItem.menuItem.destination?.uri,
    })),
  }))
}
