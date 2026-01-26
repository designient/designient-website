'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'react-feather';
import { StructuredData } from './StructuredData';

const GOOGLE_MAPS_API_KEY = 'AIzaSyAaisDjCtuBGIfg_Hyl_hmVbve80pruVDE';

const locations = [
{
  city: 'Bangalore',
  address: '148, Church St, Haridevpur, Ashok Nagar',
  locality: 'Bengaluru',
  region: 'Karnataka',
  postalCode: '560001',
  phone: '+91 9353 000 320',
  email: 'hello@designient.com',
  hours: 'Mon-Sat : 10 AM - 7 PM',
  fullAddress: 'BHIVE Platinum Church Street, Bengaluru, Karnataka, India'
},
{
  city: 'Hyderabad',
  address: 'RENT A DESK, Road No. 36, Jubilee Hills',
  locality: 'Hyderabad',
  region: 'Telangana',
  postalCode: '500034',
  phone: '+91 9353 000 320',
  email: 'hello@designient.com',
  hours: 'Mon-Fri: 10 AM - 7 PM',
  fullAddress: 'RENT A DESK, Road No. 36, Jubilee Hills, Hyderabad, Telangana 500034, India'
},
{
  city: 'Pune',
  address: '5th floor, SAI RADHE COMPLEX, Sangamvadi',
  locality: 'Pune',
  region: 'Maharashtra',
  postalCode: '411001',
  phone: '+91 9353 000 320',
  email: 'hello@designient.com',
  hours: 'Sat-Sun: 10 AM - 7 PM',
  fullAddress: 'Sai Radhe Complex, Sangamvadi, Pune, Maharashtra 411001, India'
}];

export function LocationsSection() {
  // LocalBusiness Schemas for SEO
  const localBusinessSchemas = locations.map((location) => {
    // Parse opening hours
    const hoursMatch = location.hours.match(/(\w+-\w+)\s*:\s*(\d+)\s*AM\s*-\s*(\d+)\s*PM/);
    let openingHours = '';
    if (hoursMatch) {
      const days = hoursMatch[1];
      const openHour = hoursMatch[2].padStart(2, '0') + ':00';
      const closeHour = hoursMatch[3].padStart(2, '0') + ':00';
      openingHours = `${days} ${openHour}-${closeHour}`;
    }

    return {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: `Designient - ${location.city} Campus`,
      alternateName: `Designient School of Masterminds - ${location.city}`,
      description: `UI/UX Design Training Institute in ${location.city}, ${location.region}. Adobe certified courses with 95% placement rate.`,
      url: 'https://designient.com',
      telephone: location.phone,
      email: location.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: location.address,
        addressLocality: location.locality,
        addressRegion: location.region,
        postalCode: location.postalCode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        // Note: These coordinates should be updated with actual lat/long if available
        latitude: location.city === 'Bangalore' ? '12.9716' : 
                 location.city === 'Hyderabad' ? '17.3850' : '18.5204',
        longitude: location.city === 'Bangalore' ? '77.5946' : 
                  location.city === 'Hyderabad' ? '78.4867' : '73.8567'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: location.hours.includes('Mon-Sat') ? 
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] :
          location.hours.includes('Mon-Fri') ?
          ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] :
          ['Saturday', 'Sunday'],
        opens: '10:00',
        closes: '19:00'
      },
      areaServed: {
        '@type': 'City',
        name: location.city
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Designient Technologies Private Limited',
        url: 'https://designient.com'
      }
    };
  });

  return (
    <section
      id="locations"
      className="py-24 md:py-32"
      style={{
        backgroundColor: '#fceed1'
      }}>
      <StructuredData data={localBusinessSchemas} />

      <div className="max-w-container mx-auto px-3 md:px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            amount: 0.3
          }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="text-center mb-16 md:mb-24">

          <h2
            className="font-display tracking-wide leading-tight mb-6 text-center"
            style={{
              color: '#8458B3',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)'
            }}>

            VISIT OUR CAMPUSES
          </h2>
          <p
            className="font-body text-base md:text-lg max-w-3xl mx-auto font-normal text-center"
            style={{
              color: '#4a4a4a',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6'
            }}>

            State-of-the-art facilities in Bangalore, Hyderabad, and Pune
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
          {locations.map((location, index) =>
          <motion.article
            key={index}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              amount: 0.2
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="rounded-2xl overflow-hidden shadow-lg"
            style={{
              backgroundColor: 'white'
            }}
            itemScope
            itemType="https://schema.org/Place">

              {/* Map */}
              <div className="aspect-video w-full">
                <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(location.fullAddress)}`}
                width="100%"
                height="100%"
                style={{
                  border: 0
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${location.city} campus location map`} />

              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <h3
                className="font-display tracking-wide mb-4 sm:mb-6"
                style={{
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: 'clamp(1.25rem, 3vw, 2.25rem)'
                }}
                itemProp="name">

                  {location.city.toUpperCase()} CAMPUS
                </h3>

                <address
                className="not-italic space-y-3 sm:space-y-4 mb-4 sm:mb-6"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress">

                  <div className="flex items-start gap-3">
                    <MapPin
                    className="w-5 h-5 flex-shrink-0 mt-1"
                    style={{
                      color: '#8458B3'
                    }} />

                    <div
                    className="font-body text-base font-normal"
                    style={{
                      color: '#4a4a4a',
                      fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                      lineHeight: '1.7'
                    }}>

                      <div itemProp="streetAddress">{location.address}</div>
                      <div>
                        <span itemProp="addressLocality">{location.locality}</span>
                        {', '}
                        <span itemProp="addressRegion">{location.region}</span>
                        {' '}
                        <span itemProp="postalCode">{location.postalCode}</span>
                      </div>
                      <div itemProp="addressCountry">India</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: '#8458B3'
                    }} />

                    <a
                    href={`tel:${location.phone}`}
                    className="font-body text-base font-normal hover:text-[#8458B3] transition-colors"
                    style={{
                      color: '#4a4a4a'
                    }}
                    itemProp="telephone">

                      {location.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: '#8458B3'
                    }} />

                    <a
                    href={`mailto:${location.email}`}
                    className="font-body text-base font-normal hover:text-[#8458B3] transition-colors"
                    style={{
                      color: '#4a4a4a'
                    }}>

                      {location.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock
                    className="w-5 h-5 flex-shrink-0"
                    style={{
                      color: '#8458B3'
                    }} />

                    <span
                    className="font-body text-base font-normal"
                    style={{
                      color: '#4a4a4a'
                    }}>

                      {location.hours}
                    </span>
                  </div>
                </address>

                <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  location.city === 'Bangalore' 
                    ? 'BHIVE Platinum Church Street, Bengaluru, Karnataka, India'
                    : location.city === 'Hyderabad'
                    ? 'RENT A DESK, Road No. 36, Jubilee Hills, Hyderabad, Telangana, India'
                    : 'Sai Radhe Complex, Sangamvadi, Pune, Maharashtra, India'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm font-bold px-6 py-3 rounded-lg transition-colors hover:opacity-90 min-h-[44px] min-w-[140px] text-center"
                style={{
                  backgroundColor: '#8458B3',
                  color: 'white'
                }}>

                  Get Directions
                </a>
              </div>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}