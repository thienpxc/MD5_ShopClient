// Extend the Window interface to include FuiToast
declare global {
  interface Window {
    FuiToast?: {
      success: (message: string) => void;
      error: (message: string) => void;
      promise: (
        resPromise: Promise<unknown>,
        messages: {
          loading: string;
          success: (data: unknown) => string;
          error: string;
        },
        options?: {
          isClose: boolean;
        }
      ) => void;
    };
  }
}

// Define a type for the showToast object
type ShowToastType = {
  success: (message: string) => void;
  error: (message: string) => void;
  promise: (
    resPromise: Promise<unknown>,
    messages: {
      loading: string;
      success: (data: unknown) => string;
      error: string;
    },
    options?: {
      isClose: boolean;
    }
  ) => void;
};

// Declare showToast with the defined type
export const showToast: ShowToastType = {
  success: (message) => {
    if (window.FuiToast) {
      window.FuiToast.success(message);
    }
  },
  error: (message) => {
    if (window.FuiToast) {
      window.FuiToast.error(message);
    }
  },
  promise: (resPromise, messages, options = { isClose: true }) => {
    if (window.FuiToast && window.FuiToast.promise) {
      window.FuiToast.promise(resPromise, messages, options);
    }
  },
};
