export type languageCode = {
  iso6391?: string
  iso6392?: string
  iso6393?: string
  name: name
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

export type countryCode = {
  code: string
  name: name
}

export type name = {
  international: string
  native?: string
  emoji?: string
}

export type Locale = {
  language: languageCode
  country: countryCode
}
