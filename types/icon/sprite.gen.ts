export interface SpritesMap {
  media: 'pause' | 'play'
  shared:
    | 'accessories'
    | 'appliances'
    | 'arrow right'
    | 'cart'
    | 'catalog'
    | 'check'
    | 'close'
    | 'comparison'
    | 'complect pc'
    | 'down'
    | 'email'
    | 'favourite'
    | 'geoloc'
    | 'laptop'
    | 'left'
    | 'menu'
    | 'minus'
    | 'network'
    | 'phone'
    | 'plus'
    | 'right'
    | 'search'
    | 'send'
    | 'tel'
    | 'tg'
    | 'tool'
    | 'trash'
    | 'tv'
    | 'up'
    | 'user'
    | 'vk'
    | 'youtube'
}
export const SPRITES_META: {
  [Key in keyof SpritesMap]: {
    filePath: string
    items: Record<
      SpritesMap[Key],
      {
        viewBox: string
        width: number
        height: number
      }
    >
  }
} = {
  media: {
    filePath: 'media.svg',
    items: {
      pause: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20
      },
      play: {
        viewBox: '0 0 20 20',
        width: 20,
        height: 20
      }
    }
  },
  shared: {
    filePath: 'shared.svg',
    items: {
      'accessories': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'appliances': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'arrow right': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'cart': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'catalog': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'check': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'close': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'comparison': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'complect pc': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'down': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'email': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'favourite': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'geoloc': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'laptop': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'left': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'menu': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'minus': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'network': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'phone': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'plus': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'right': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'search': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'send': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'tel': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'tg': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'tool': {
        viewBox: '0 0 25 24',
        width: 25,
        height: 24
      },
      'trash': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'tv': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'up': {
        viewBox: '0 0 24 24',
        width: 24,
        height: 24
      },
      'user': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'vk': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      },
      'youtube': {
        viewBox: '0 0 30 30',
        width: 30,
        height: 30
      }
    }
  }
}
