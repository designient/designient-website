// Batch schedule data for all cities and courses

export interface BatchTiming {
  weekday?: {
    morning?: {
      days: string;
      time: string;
      startDate: string;
      available: boolean;
    };
    evening?: {
      days: string;
      time: string;
      startDate: string;
      available: boolean;
    };
  };
  weekend?: {
    morning?: {
      days: string;
      time: string;
      startDate: string;
      available: boolean;
    };
    evening?: {
      days: string;
      time: string;
      startDate: string;
      available: boolean;
    };
  };
}

export interface CityBatchSchedule {
  [city: string]: BatchTiming;
}

export const proCourseBatchSchedule: CityBatchSchedule = {
  bangalore: {
    weekday: {
      morning: {
        days: 'Monday - Thursday',
        time: '11:00 AM - 1:00 PM',
        startDate: 'Mar 9, 2026',
        available: true
      },
      evening: {
        days: 'Monday - Thursday',
        time: '3:00 PM - 5:00 PM',
        startDate: 'Mar 9, 2026',
        available: false // Currently not open
      }
    },
    weekend: {
      morning: {
        days: 'Saturday - Sunday',
        time: '10:00 AM - 2:00 PM',
        startDate: 'Mar 7, 2026',
        available: true
      }
      // No evening batches in weekend
    }
  },
  hyderabad: {
    // Batches are full - no upcoming batches
  },
  pune: {
    // Batches are full - no upcoming batches
  }
}
