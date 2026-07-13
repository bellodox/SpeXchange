import { startTransition, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useAuthStore } from '../stores/useAuthStore'
import { ROUTES } from '../router/routes'
import { NotificationBell } from '../components/notifications/NotificationBell'

export function Header () {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const authed = useAuthStore(s => s.authed)
  const exchanges = useAuthStore(s => s.exchanges)
  const hasConnection = Object.keys(exchanges).length > 0

  const navItems = [
    { path: ROUTES.MARKETS, label: t('Market'), visible: authed && hasConnection },
    { path: ROUTES.CREATE_OFFER, label: t('CREATE_OFFER'), visible: authed },
    { path: ROUTES.MY_OFFERS, label: t('MY_OFFERS'), visible: authed },
    { path: ROUTES.ACTIVE_SWAPS, label: t('ACTIVE_SWAPS'), visible: authed },
    { path: ROUTES.WALLETS, label: t('WALLETS'), visible: authed },
    { path: ROUTES.HISTORY, label: t('HISTORY'), visible: authed },
  ]

  const go = useCallback((to: string) => () => {
    startTransition(() => { navigate(to) })
  }, [navigate])

  const isActive = (path: string) => pathname.startsWith(path)

  const burgerTarget = authed ? ROUTES.SETTINGS : ROUTES.LOGIN
  const burgerActive = isActive(burgerTarget)

  return (
    <header id="header">
      {/* Left side: portal slot for page-specific header content (e.g. market stats) */}
      <div id="headerSlot" />

      <nav className="header-nav">
        {navItems.filter(item => item.visible).map(item => (
          <div
            key={item.path}
            className={`header-btn demi${isActive(item.path) ? ' active' : ''}`}
            onClick={go(item.path)}
          >
            {item.label}
          </div>
        ))}
        <NotificationBell />
        <div
          className={`header-btn${burgerActive ? ' active' : ''}`}
          onClick={burgerActive ? undefined : go(burgerTarget)}
        >
          <span className="ico-hamburger fs20" />
        </div>
      </nav>
    </header>
  )
}
