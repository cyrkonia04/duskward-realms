export default function PageHeader({ title, subtitle, compact = false }) {
  return (
    <header className={`text-center ${compact ? 'mb-5 sm:mb-8' : 'mb-8 sm:mb-12'}`}>
      <h1 className="text-3xl sm:text-4xl mb-3">{title}</h1>
      {subtitle && (
        <p className="font-body italic text-gothic-parchment/60 text-sm">{subtitle}</p>
      )}
      <div className={`mx-auto ${compact ? 'mt-3' : 'mt-4'} w-24 border-t border-gothic-gold/40`} />
    </header>
  );
}