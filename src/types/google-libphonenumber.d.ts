declare module "google-libphonenumber" {
  export interface PhoneNumber {
    getCountryCode(): number;
  }

  export class PhoneNumberUtil {
    static getInstance(): PhoneNumberUtil;
    parse(number: string, region?: string): PhoneNumber;
    isValidNumberForRegion(number: PhoneNumber, region: string): boolean;
  }
}
