// Get current date in different formats
const dateUtils = {
    // Get basic date object
    getCurrentDate: () => {
      return new Date();
    },
  
    // Get formatted date string (YYYY-MM-DD)
    getFormattedDate: () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },
  
    // Get date with time (YYYY-MM-DD HH:MM:SS)
    getDateTimeString: () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  
    // Get localized date string
    getLocaleDateString: (locale = 'en-US') => {
      return new Date().toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
  
    // Get relative time (e.g., "2 hours ago")
    getRelativeTime: (date = new Date()) => {
      const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
      const now = new Date();
      const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);
      
      if (Math.abs(diffInSeconds) < 60) {
        return rtf.format(Math.floor(diffInSeconds), 'second');
      }
      
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (Math.abs(diffInMinutes) < 60) {
        return rtf.format(diffInMinutes, 'minute');
      }
      
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (Math.abs(diffInHours) < 24) {
        return rtf.format(diffInHours, 'hour');
      }
      
      const diffInDays = Math.floor(diffInHours / 24);
      return rtf.format(diffInDays, 'day');
    },
  
    // Get custom formatted date
    getCustomFormat: (format = 'YYYY-MM-DD') => {
      const date = new Date();
      const formats = {
        YYYY: date.getFullYear(),
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        DD: String(date.getDate()).padStart(2, '0'),
        HH: String(date.getHours()).padStart(2, '0'),
        mm: String(date.getMinutes()).padStart(2, '0'),
        ss: String(date.getSeconds()).padStart(2, '0')
      };
  
      return format.replace(/YYYY|MM|DD|HH|mm|ss/g, match => formats[match]);
    }
};
  
export default dateUtils;