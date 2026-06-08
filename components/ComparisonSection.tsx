'use client'

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useCurrency } from '../contexts/CurrencyContext';
import { pickByCurrency } from '../lib/localizedPricing';
import { SiteLogo } from './shared/SiteLogo';

const designComparisons = [
  { feature: 'Placement Rate', designient: '95%', others: 'Up to 70%', highlight: true },
  { feature: 'Adobe Certification', designient: 'Included', others: "Don't have", highlight: false },
  { feature: 'Lifetime Mentorship', designient: 'Yes', others: 'No', highlight: false },
  { feature: 'Real Client Projects', designient: 'Always', others: 'Mostly mock', highlight: false },
  { feature: 'Batch Size', designient: '10–25', others: '20–50', highlight: false },
  { feature: 'Personalised Learning', designient: 'Weekly critique', others: 'Not always', highlight: false },
  { feature: 'Job Assistance', designient: 'Structured — included', others: 'Limited', highlight: true },
  { feature: 'Portfolio Review', designient: 'Unlimited', others: '2–3 times', highlight: false },
  { feature: 'AI Tools in Curriculum', designient: '7 tools, live workflow', others: 'Mentioned only', highlight: false },
];

const aiComparisonsBase = [
  { feature: 'Output', designient: '3 deployed automations', others: 'Knowledge of tools, no output', highlight: true },
  { feature: 'Tools taught to depth', designient: 'n8n, Make, ManyChat, Relevance AI', others: '14+ tools at surface level', highlight: false },
  { feature: 'Batch size', designient: '35 max', others: '200 to 400+', highlight: false },
  { feature: 'Live mentorship', designient: 'Every session', others: 'Recorded video', highlight: false },
  { feature: 'Portfolio', designient: '3 live demos with ROI', others: 'No portfolio', highlight: false },
  { feature: 'Guarantee', designient: '50% refund — conditions stated', others: 'No refund', highlight: true },
  { feature: 'Duration', designient: '8 weeks', others: '14 days', highlight: false },
];

type ComparisonRow = {
  feature: string;
  designient: string;
  others: string;
  highlight: boolean;
};

function ComparisonTable({
  title,
  leftHeader,
  rightHeader,
  rows,
}: {
  title: string;
  leftHeader: React.ReactNode;
  rightHeader: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="mb-12 md:mb-16 last:mb-0">
      <h3
        className="font-display font-semibold mb-6 text-center"
        style={{ color: 'var(--text-primary)', fontSize: 'clamp(1.125rem, 2vw, 1.375rem)' }}
      >
        {title}
      </h3>
      <div className="rounded-2xl border border-strong overflow-hidden shadow-card" style={{ backgroundColor: 'var(--bg-card)' }}>
        <table className="w-full">
          <thead>
            <tr className="surface-on-accent" style={{ backgroundColor: 'var(--color-forest)' }}>
              <th className="font-display text-left tracking-tight py-3 sm:py-4 px-3 sm:px-6" style={{ color: 'var(--text-on-accent)', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                FEATURE
              </th>
              <th className="text-center py-3 sm:py-4 px-3 sm:px-6">{leftHeader}</th>
              <th className="font-display text-center tracking-tight py-3 sm:py-4 px-3 sm:px-6" style={{ color: 'var(--text-on-accent)', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.25rem)' }}>
                {rightHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item, index) => (
              <tr
                key={index}
                className="border-t"
                style={{
                  borderColor: 'var(--border-strong)',
                  backgroundColor: item.highlight ? 'var(--bg-section-green)' : index % 2 === 0 ? 'var(--bg-card)' : 'var(--bg-subtle)',
                }}
              >
                <td className="font-body font-semibold py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--text-primary)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                  {item.feature}
                </td>
                <td className="font-body font-bold text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--color-forest)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                  {item.designient}
                </td>
                <td className="font-body font-normal text-center py-3 sm:py-4 md:py-5 px-3 sm:px-6" style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.8125rem, 1.8vw, 1.125rem)' }}>
                  {item.others}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function ComparisonSection() {
  const { currency, isLoading, getCoursePrice } = useCurrency();

  const aiComparisons = useMemo(() => {
    const designientPrice = isLoading
      ? '…'
      : `${getCoursePrice('ai-automation-accelerator').price} early bird`;
    const othersPrice = pickByCurrency(
      currency,
      'Rs 60,000 to Rs 1,00,000',
      '$800 to $1,400',
    );
    const priceRow: ComparisonRow = {
      feature: 'Price',
      designient: designientPrice,
      others: othersPrice,
      highlight: false,
    };
    return [...aiComparisonsBase, priceRow];
  }, [currency, isLoading, getCoursePrice]);

  return (
    <section id="comparison" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display tracking-tight leading-tight mb-6 text-center" style={{ color: 'var(--color-forest)', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Designient vs the Alternatives
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
            }}
          >
            See how we compare to other design schools and AI automation programs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="table-scroll -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <ComparisonTable
            title="Design Track — Designient vs Other Design Courses"
            leftHeader={
              <div className="flex items-center justify-center">
                <SiteLogo
                  variant="footer"
                  className="h-8 sm:h-10 md:h-12 w-auto"
                />
              </div>
            }
            rightHeader="OTHERS"
            rows={designComparisons}
          />
          <ComparisonTable
            title="AI Track — AI Automation Accelerator vs Other AI Automation Programs"
            leftHeader={
              <span className="font-display tracking-tight" style={{ color: 'var(--text-on-accent)', fontWeight: 700, fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}>
                AI AUTOMATION ACCELERATOR
              </span>
            }
            rightHeader="14-DAY AI GENERALIST PROGRAMS"
            rows={aiComparisons}
          />
        </motion.div>
      </div>
    </section>
  );
}
