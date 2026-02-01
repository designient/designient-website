'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, CheckCircle, Clock } from 'react-feather';

interface WeekTopic {
  topic: string;
  hours: number;
}

interface Week {
  week: number;
  title: string;
  topics: WeekTopic[];
  totalHours: number;
}

interface Month {
  month: number;
  title: string;
  weeks: Week[];
  totalHours: number;
}

interface CourseCurriculumProps {
  modules?: {
    title: string;
    description?: string;
    topics: string[];
    duration?: string;
  }[];
  weekWiseCurriculum?: Month[];
  totalHours?: string;
}

export function CourseCurriculum({ modules, weekWiseCurriculum, totalHours }: CourseCurriculumProps) {
  const [expandedMonths, setExpandedMonths] = useState<number[]>([]);
  const [expandedWeeks, setExpandedWeeks] = useState<string[]>([]);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const toggleMonth = (monthIndex: number) => {
    setExpandedMonths((prev) =>
      prev.includes(monthIndex) ? prev.filter((i) => i !== monthIndex) : [...prev, monthIndex]
    );
  };

  const toggleWeek = (weekKey: string) => {
    setExpandedWeeks((prev) =>
      prev.includes(weekKey) ? prev.filter((k) => k !== weekKey) : [...prev, weekKey]
    );
  };

  // If weekWiseCurriculum is provided, use that (new format)
  if (weekWiseCurriculum && weekWiseCurriculum.length > 0) {
    const totalCourseHours = weekWiseCurriculum.reduce((sum, month) => sum + month.totalHours, 0);

    return (
      <section className="py-24 md:py-32" style={{ backgroundColor: '#fceed1' }}>
        <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16">
            <h2
              className="font-display font-bold mb-4"
              style={{
                color: '#8458B3',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)'
              }}>
              Course Curriculum
            </h2>
            {totalHours && (
              <p className="font-body text-lg mb-2" style={{ color: '#6b7280' }}>
                {totalHours} of comprehensive learning
              </p>
            )}
            <p className="font-body text-sm" style={{ color: '#6b7280' }}>
              Week-wise breakdown with detailed hour distribution
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-4">
            {weekWiseCurriculum.map((month, monthIndex) => {
              const isMonthExpanded = expandedMonths.includes(monthIndex);
              return (
                <motion.div
                  key={monthIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: monthIndex * 0.1, duration: 0.4 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border-2"
                  style={{ borderColor: '#8458B3' }}>

                  {/* Month Header */}
                  <button
                    onClick={() => toggleMonth(monthIndex)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg"
                        style={{ backgroundColor: '#8458B3', color: 'white' }}>
                        {month.month}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="font-display font-bold mb-1"
                          style={{
                            color: '#1a1a1a',
                            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                          }}>
                          {month.title}
                        </h3>
                        <div className="flex items-center gap-4 flex-wrap">
                          <span className="font-body text-sm" style={{ color: '#6b7280' }}>
                            {month.weeks.length} Weeks
                          </span>
                          <span className="font-body text-sm font-semibold flex items-center gap-1" style={{ color: '#8458B3' }}>
                            <Clock className="w-4 h-4" />
                            {month.totalHours} Hours
                          </span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isMonthExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#8458B3' }} />
                    </motion.div>
                  </button>

                  {/* Month Content - Week Details */}
                  {isMonthExpanded && (
                    <div className="border-t" style={{ borderColor: '#e5e7eb' }}>
                      <div className="p-6 space-y-4">
                        {month.weeks.map((week) => {
                          const weekKey = `month-${monthIndex}-week-${week.week}`;
                          const isWeekExpanded = expandedWeeks.includes(weekKey);
                          return (
                            <div
                              key={week.week}
                              className="border rounded-lg overflow-hidden"
                              style={{ borderColor: '#e5e7eb' }}>

                              {/* Week Header */}
                              <button
                                onClick={() => toggleWeek(weekKey)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-3 flex-1">
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-display font-semibold text-sm"
                                    style={{ backgroundColor: '#FFF6E2', color: '#8458B3' }}>
                                    W{week.week}
                                  </div>
                                  <div className="flex-1">
                                    <h4
                                      className="font-display font-semibold mb-1"
                                      style={{
                                        color: '#1a1a1a',
                                        fontSize: 'clamp(1rem, 2vw, 1.125rem)'
                                      }}>
                                      {week.title}
                                    </h4>
                                    <div className="flex items-center gap-2">
                                      <Clock className="w-4 h-4" style={{ color: '#6b7280' }} />
                                      <span className="font-body text-sm font-semibold" style={{ color: '#8458B3' }}>
                                        {week.totalHours} Hours
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <motion.div
                                  animate={{ rotate: isWeekExpanded ? 180 : 0 }}
                                  transition={{ duration: 0.3 }}>
                                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: '#8458B3' }} />
                                </motion.div>
                              </button>

                              {/* Week Topics Table */}
                              {isWeekExpanded && (
                                <div className="border-t overflow-x-auto" style={{ borderColor: '#e5e7eb' }}>
                                  <table className="w-full">
                                    <thead>
                                      <tr style={{ backgroundColor: '#f9fafb' }}>
                                        <th
                                          className="text-left p-3 font-body font-semibold text-sm"
                                          style={{ color: '#1a1a1a' }}>
                                          Topic
                                        </th>
                                        <th
                                          className="text-right p-3 font-body font-semibold text-sm w-24"
                                          style={{ color: '#1a1a1a' }}>
                                          Hours
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {week.topics.map((topicItem, topicIndex) => (
                                        <tr
                                          key={topicIndex}
                                          className="border-t"
                                          style={{ borderColor: '#e5e7eb' }}>
                                          <td className="p-3">
                                            <span className="font-body text-sm" style={{ color: '#4a4a4a' }}>
                                              {topicItem.topic}
                                            </span>
                                          </td>
                                          <td className="p-3 text-right">
                                            <span className="font-body font-semibold text-sm" style={{ color: '#8458B3' }}>
                                              {topicItem.hours}h
                                            </span>
                                          </td>
                                        </tr>
                                      ))}
                                      <tr
                                        className="border-t-2 font-semibold"
                                        style={{ borderColor: '#8458B3', backgroundColor: '#FFF6E2' }}>
                                        <td className="p-3">
                                          <span className="font-body text-sm" style={{ color: '#1a1a1a' }}>
                                            Week Total
                                          </span>
                                        </td>
                                        <td className="p-3 text-right">
                                          <span className="font-body font-bold text-sm" style={{ color: '#8458B3' }}>
                                            {week.totalHours}h
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* Month Total */}
                        <div className="mt-4 p-4 rounded-lg border-2" style={{ borderColor: '#8458B3', backgroundColor: '#FFF6E2' }}>
                          <div className="flex items-center justify-between">
                            <span className="font-display font-bold text-lg" style={{ color: '#1a1a1a' }}>
                              Month {month.month} Total
                            </span>
                            <span className="font-display font-bold text-lg" style={{ color: '#8458B3' }}>
                              {month.totalHours} Hours
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Course Total Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8 p-6 rounded-xl border-2 shadow-lg"
              style={{ borderColor: '#8458B3', backgroundColor: '#8458B3' }}>
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-xl md:text-2xl" style={{ color: 'white' }}>
                  Total Course Hours
                </span>
                <span className="font-display font-bold text-xl md:text-2xl" style={{ color: '#f2d53c' }}>
                  {totalCourseHours} Hours
                </span>
              </div>
              <p className="font-body text-sm mt-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Distributed across 12 weeks of comprehensive UI/UX design training
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  // Fallback to original module-based format for backward compatibility
  // Fallback state for original module-based format


  const toggleModule = (index: number) => {
    setExpandedModules((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  if (!modules || modules.length === 0) {
    return null;
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#fceed1' }}>
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16">
          <h2
            className="font-display font-bold mb-4"
            style={{
              color: '#8458B3',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>
            Course Curriculum
          </h2>
          {totalHours && (
            <p className="font-body text-lg" style={{ color: '#6b7280' }}>
              {totalHours} of comprehensive learning
            </p>
          )}
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all"
              style={{
                borderLeft: expandedModules.includes(index) ? '4px solid #8458B3' : '4px solid transparent'
              }}>

              <button
                onClick={() => toggleModule(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="font-display font-bold text-lg"
                      style={{ color: '#8458B3' }}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="font-display font-semibold"
                      style={{
                        color: '#1a1a1a',
                        fontSize: 'clamp(1.125rem, 2vw, 1.5rem)'
                      }}>
                      {module.title}
                    </h3>
                  </div>
                  {module.description && (
                    <p className="font-body text-sm mt-2" style={{ color: '#6b7280' }}>
                      {module.description}
                    </p>
                  )}
                  {module.duration && (
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#FFF6E2', color: '#8458B3' }}>
                      {module.duration}
                    </span>
                  )}
                </div>
                <motion.div
                  animate={{ rotate: expandedModules.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-6 h-6 flex-shrink-0" style={{ color: '#8458B3' }} />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedModules.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2 border-t" style={{ borderColor: '#e5e7eb' }}>
                      <ul className="space-y-3 mt-4">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#8458B3' }} />
                            <span className="font-body" style={{ color: '#4a4a4a', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)' }}>
                              {topic}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
