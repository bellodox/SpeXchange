import { useTranslation } from 'react-i18next'
import { SpeXchangeSkeletonPage } from './SpeXchangeSkeletonPage'

export default function HistoryPage () {
  const { t } = useTranslation()

  return (
    <SpeXchangeSkeletonPage
      title={t('HISTORY')}
      placeholder={t('HISTORY_PLACEHOLDER')}
    />
  )
}
