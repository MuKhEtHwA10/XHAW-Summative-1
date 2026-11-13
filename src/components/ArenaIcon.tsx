import type { ReactNode } from 'react'

export type ArenaIconName =
  | 'gamepad'
  | 'bolt'
  | 'trophy'
  | 'cake'
  | 'headset'
  | 'racing'
  | 'unlock'
  | 'tag'
  | 'location'
  | 'phone'
  | 'mail'
  | 'clock'
  | 'check'
  | 'star'

type Props = {
  name: ArenaIconName
  size?: number
  className?: string
}

export default function ArenaIcon({ name, size = 20, className }: Props) {
  const paths: Record<ArenaIconName, ReactNode> = {
    gamepad: (
      <>
        <path d="M7.2 8.5h9.6a4.7 4.7 0 0 1 4.5 6.1l-.9 2.8a2.3 2.3 0 0 1-3.8 1l-1.5-1.3H8.9l-1.5 1.3a2.3 2.3 0 0 1-3.8-1l-.9-2.8a4.7 4.7 0 0 1 4.5-6.1Z" />
        <path d="M8 11.5v4M6 13.5h4M16.5 12.2h.01M18.5 14.2h.01M9 8.5l1.2-2h3.6l1.2 2" />
      </>
    ),
    bolt: <path d="m13.2 2-8 12h6l-.4 8 8-12h-6l.4-8Z" />,
    trophy: (
      <>
        <path d="M7 4h10v3.5a5 5 0 0 1-10 0V4ZM9 20h6M12 12.5V20M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" />
      </>
    ),
    cake: (
      <>
        <path d="M4 11h16v9H4zM4 15c2 1.7 4 1.7 6 0 2 1.7 4 1.7 6 0 1.3 1.1 2.7 1.5 4 .8M8 11V8M12 11V7M16 11V8" />
        <path d="M8 5.8c1-1 .8-2 0-2.8-.8.8-1 1.8 0 2.8ZM12 4.8c1-1 .8-2 0-2.8-.8.8-1 1.8 0 2.8ZM16 5.8c1-1 .8-2 0-2.8-.8.8-1 1.8 0 2.8Z" />
      </>
    ),
    headset: (
      <>
        <path d="M4 13V11a8 8 0 0 1 16 0v2M4 13h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2ZM20 13h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2ZM17 19c0 1.7-1.3 3-3 3h-2" />
      </>
    ),
    racing: (
      <>
        <path d="M5 16h14l-1.3-5a2 2 0 0 0-1.9-1.5H8.2A2 2 0 0 0 6.3 11L5 16ZM3 16h18v3H3zM7 19v2M17 19v2M8 13h.01M16 13h.01" />
        <path d="M8 9.5 9.5 6h5L16 9.5" />
      </>
    ),
    unlock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 7.5-2M12 14v3" />
      </>
    ),
    tag: (
      <>
        <path d="M3 12V4h8l10 10-7 7L3 12Z" />
        <path d="M7.5 8h.01" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    phone: <path d="M5 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2C10.2 20.5 3.5 13.8 3 5a2 2 0 0 1 2-2Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    star: <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />,
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {paths[name]}
    </svg>
  )
}
