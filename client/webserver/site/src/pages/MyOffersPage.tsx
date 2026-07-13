import { useTranslation } from 'react-i18next'
import { SpeXchangeSkeletonPage } from './SpeXchangeSkeletonPage'

export default function MyOffersPage () {
  const { t } = useTranslation()

  return (
    <SpeXchangeSkeletonPage
      title={t('MY_OFFERS')}
      placeholder={t('MY_OFFERS_PLACEHOLDER')}
    />
  )
}
