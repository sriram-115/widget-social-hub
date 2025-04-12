
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ea348e63021a4e3387e162753b4bc78f',
  appName: 'widget-social-hub',
  webDir: 'dist',
  server: {
    url: 'https://ea348e63-021a-4e33-87e1-62753b4bc78f.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: undefined,
      keystoreAlias: undefined,
      keystorePassword: undefined,
      keystoreAliasPassword: undefined,
    }
  }
};

export default config;
