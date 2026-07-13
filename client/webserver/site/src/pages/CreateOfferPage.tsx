import { useTranslation } from 'react-i18next'
import { SpeXchangeSkeletonPage } from './SpeXchangeSkeletonPage'

export default function CreateOfferPage () {
  const { t } = useTranslation()

  return (
    <SpeXchangeSkeletonPage
      title={t('CREATE_OFFER')}
      placeholder={t('CREATE_OFFER_PLACEHOLDER')}
    />
  )
}
