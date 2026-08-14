import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ label, title, description, light = false }) {
  return (
    <ScrollReveal>
      <div className="section-heading">
        {label && <span className="label">{label}</span>}
        <h2>{title}</h2>
        <div className="gold-line-center"></div>
        {description && <p>{description}</p>}
      </div>
    </ScrollReveal>
  );
}
