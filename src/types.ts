export enum SupportChannel {
  HARDWARE,
  NETWORK,
  SOFTWARE
}

export type Location = {
  cityName: string;
  countryName: string;
  timezone: string;
};

export type SupportTicket = {
  location: string;
  start: string;
  end: string;
  type: SupportChannel;
  phone: string;
};

export type TicketModel = {
  type: number;
  startTimestamp: string;
  endTimestamp?: string;
  location: number;
  telephone: string;
};

export const Locations = [
  { cityName: 'Berlim', countryName: 'Alemanha', timezone: 'Europe/Berlin' },
  {
    cityName: 'Bombaim',
    countryName: 'Índia',
    timezone: 'Asia/Kolkata'
  },
  {
    cityName: 'Bostom',
    countryName: 'EUA',
    timezone: 'America/New_York'
  },
  {
    cityName: 'Chicago',
    countryName: 'EUA',
    timezone: 'America/Chicago'
  },
  {
    cityName: 'São Paulo',
    countryName: 'Brasil',
    timezone: 'America/Sao_Paulo'
  },
  {
    cityName: 'Rio de Janeiro',
    countryName: 'Brasil',
    timezone: 'America/Sao_Paulo'
  },
  {
    cityName: 'Manchester',
    countryName: 'Reino Unido',
    timezone: 'Europe/London'
  },
  {
    cityName: 'Melbourne',
    countryName: 'Australia',
    timezone: 'Australia/Melbourne'
  }
];
