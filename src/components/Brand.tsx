import { useLanguage } from '@/lib/i18n'

export function Brand({ inverted = false }: { inverted?: boolean }) {
  const { t } = useLanguage()

  return (
    <div className="flex shrink-0 items-center gap-2.5 select-none whitespace-nowrap">
      <img
        src="/healthsense_icon.png"
        alt="HealthSense"
        className="size-8 shrink-0 rounded-lg object-contain"
      />
      <div className="flex flex-col shrink-0 whitespace-nowrap leading-none">
        <span className={`font-heading text-lg font-bold tracking-tight whitespace-nowrap ${inverted ? 'text-white' : 'text-foreground'}`}>
          {t.brand.title}
        </span>
        <span className={`text-[10px] font-medium tracking-wider uppercase whitespace-nowrap ${inverted ? 'text-white/60' : 'text-muted-foreground'}`}>
          {t.brand.subtitle}
        </span>
      </div>
    </div>
  )
}
