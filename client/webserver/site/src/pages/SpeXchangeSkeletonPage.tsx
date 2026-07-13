import { useTranslation } from 'react-i18next'

interface SpeXchangeSkeletonPageProps {
  title: string
  placeholder: string
}

export function SpeXchangeSkeletonPage ({ title, placeholder }: SpeXchangeSkeletonPageProps) {
  const { t } = useTranslation()

  return (
    <div className="spexchange-skeleton-page p-3">
      <section className="spexchange-skeleton-card mx-auto p-4">
        <div className="spexchange-scope-pill fs14 mb-3">{t('SPEXCHANGE_SCOPE')}</div>
        <h1 className="mb-3">{title}</h1>
        <p className="fs18 mb-3">{placeholder}</p>
        <p className="fs16 grey mb-0">{t('ROD_DB_NEXT_MILESTONE')}</p>
      </section>
    </div>
  )
}
