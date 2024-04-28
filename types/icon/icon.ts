import { SpritesMap } from '@/types/icon/sprite.gen'

export type IconName<Key extends keyof SpritesMap> = `${Key}/${SpritesMap[Key]}`

export type AnyIconName = {
  [Key in keyof SpritesMap]: `${Key}/${SpritesMap[Key]}`
}[keyof SpritesMap]

export interface CustomIconProps {
  name: AnyIconName
}
