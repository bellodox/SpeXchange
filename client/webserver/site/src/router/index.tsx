import { Suspense, lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../layout/AppLayout'
import { AuthGuard, InitGuard, DexConnectionGuard, GuestGuard } from './guards'
import { ROUTES } from './routes'
import { loadLastVisitedPage } from './lastVisitedPage'

// Index route: restore the last-visited authed page, falling back to
// /wallets. Wrapped in a component (not a static <Navigate>) so the
// localStorage read happens at mount time, not module-load time.
function IndexRedirect () {
  return <Navigate to={loadLastVisitedPage()} replace />
}

// Lazy-load pages for code splitting.
const LoginPage = lazy(() => import('../pages/LoginPage'))
const InitPage = lazy(() => import('../pages/InitPage'))
const MarketsPage = lazy(() => import('../pages/markets'))
const CreateOfferPage = lazy(() => import('../pages/CreateOfferPage'))
const MyOffersPage = lazy(() => import('../pages/MyOffersPage'))
const ActiveSwapsPage = lazy(() => import('../pages/ActiveSwapsPage'))
const WalletsPage = lazy(() => import('../pages/WalletsPage'))
const WalletTransactionsPage = lazy(() => import('../pages/WalletTransactionsPage'))
const HistoryPage = lazy(() => import('../pages/HistoryPage'))
const SettingsPage = lazy(() => import('../pages/SettingsPage'))

function PageSuspense ({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="flex-center p-5">Loading...</div>}>{children}</Suspense>
}

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: ROUTES.LOGIN, element: <GuestGuard><PageSuspense><LoginPage /></PageSuspense></GuestGuard> },
      {
        path: ROUTES.INIT,
        element: <InitGuard><PageSuspense><InitPage /></PageSuspense></InitGuard>,
      },
      {
        element: <AuthGuard />,
        children: [
          { index: true, element: <IndexRedirect /> },
          { path: ROUTES.WALLETS, element: <PageSuspense><WalletsPage /></PageSuspense> },
          { path: ROUTES.WALLET_TRANSACTIONS, element: <PageSuspense><WalletTransactionsPage /></PageSuspense> },
          { path: ROUTES.SETTINGS, element: <PageSuspense><SettingsPage /></PageSuspense> },
          { path: ROUTES.CREATE_OFFER, element: <PageSuspense><CreateOfferPage /></PageSuspense> },
          { path: ROUTES.MY_OFFERS, element: <PageSuspense><MyOffersPage /></PageSuspense> },
          { path: ROUTES.ACTIVE_SWAPS, element: <PageSuspense><ActiveSwapsPage /></PageSuspense> },
          { path: ROUTES.HISTORY, element: <PageSuspense><HistoryPage /></PageSuspense> },
          {
            element: <DexConnectionGuard />,
            children: [
              { path: ROUTES.MARKETS, element: <PageSuspense><MarketsPage /></PageSuspense> },
            ],
          },
        ],
      },
    ],
  },
])
