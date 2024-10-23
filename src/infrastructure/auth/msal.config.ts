import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import {
  MsalGuardConfiguration,
  MsalInterceptorConfiguration,
  InteractionType,
} from '@azure/msal-angular';

// MSAL Instance Configuration
export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '<YOUR_CLIENT_ID>', // Replace with your Azure AD Client ID
      authority: 'https://login.microsoftonline.com/<YOUR_TENANT_ID>', // Replace with your Azure AD Tenant ID
      redirectUri: 'http://localhost:4200', // Replace with your redirect URI
    },
    cache: {
      cacheLocation: 'localStorage', // You can change this to 'sessionStorage' if needed
      storeAuthStateInCookie: true, // Recommended for IE 11 or Edge
    },
  });
}

// MSAL Interceptor Configuration
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();

  // Define endpoints and corresponding scopes for token attachment
  protectedResourceMap.set('http://localhost:3000/api', [
    'api://<YOUR_CLIENT_ID>/access_as_user',
  ]);

  return {
    interactionType: InteractionType.Redirect, // Can be changed to Popup if needed
    protectedResourceMap,
  };
}

// MSAL Guard Configuration for route protection
export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect, // Can be Popup if you prefer popup login experience
  };
}
