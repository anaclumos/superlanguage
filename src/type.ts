// ISO 639 is the code for the language; en, ko, ja, etc.
export type LanguageCode = {
  iso6391?: string
  iso6392?: string
  iso6393?: string
  name: Name
  scope:
    | 'Collective'
    | 'Individual'
    | 'Local'
    | 'Macrolanguage'
    | 'Special'
  type?:
    | 'Ancient'
    | 'Constructed'
    | 'Extinct'
    | 'Genetic'
    | 'Genetic, Ancient'
    | 'Genetic-like'
    | 'Geographic'
    | 'Historical'
    | 'Living'
    | 'Special'
}

// ISO 3166  is the code for the countries; US, KR, JP, etc.
export type CountryCode = {
  code: string
  name: Name
}

export type Name = {
  international: string
  native?: string
  emoji?: string
}

export type Locale = {
  language: LanguageCode
  country: CountryCode
}
