export const cookieStore = {
    get(name) {
      if (typeof document === 'undefined') return null;
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
      return null;
    },
  
    set(name, value, options = {}) {
      if (typeof document === 'undefined') return;
      const { days = 7, path = '/', secure = true, sameSite = 'Lax' } = options;
      const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}; SameSite=${sameSite}${secure ? '; Secure' : ''}`;
    },
  
    remove(name, path = '/') {
      if (typeof document === 'undefined') return;
      document.cookie = `${name}=; Max-Age=0; path=${path}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }
};