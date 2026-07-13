import { useTranslation } from 'react-i18next'
import { SpeXchangeSkeletonPage } from './SpeXchangeSkeletonPage'

export default function ActiveSwapsPage () {
  const { t } = useTranslation()

  return (
    <SpeXchangeSkeletonPage
      title={t('ACTIVE_SWAPS')}
      placeholder={t('ACTIVE_SWAPS_PLACEHOLDER')}
    />
  )
}
