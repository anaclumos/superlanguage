# [Superlanguage](https://superlanguage.vercel.app)

This is a complete list of all known languages — living and extinct, constructed and natural, genetic and local, all of them — recognized by the SIL International Organization. [SIL International is a faith-based nonprofit organization serving language communities worldwide](https://www.sil.org/).

## The [Locale Data API](./api.json)

```json
{
  "locale": {
    "summary": {
      "international": "",
      "native": ""
    },
    "language": {
      "iso639": "",
      "international": "",
      "native": "",
      "type": {
        "iso15924": "",
        "international": "",
        "native": ""
      }
    },
    "region": {
      "iso3166": "",
      "international": "",
      "native": "",
      "emoji": ""
    }
  }
}
```

### JSON API

- The full API:

```
https://raw.githubusercontent.com/anaclumos/superlanguage/main/api.json
```

- If you only need the localized names:

```
https://raw.githubusercontent.com/anaclumos/superlanguage/main/bcp47.json
```

- If you only need the names for specific language/region (replace ko_KR with appropriate BCP 47 tag):

```
https://raw.githubusercontent.com/anaclumos/superlanguage/main/bcp47/ko_KR.json
```

### Examples

- JSON is sorted lexicographically.
- The `ll`, `ll_RR`, `ll_Tttt`, `ll_Tttt_RR` codes are [IETF BCP 47 language tags](https://en.wikipedia.org/wiki/IETF_language_tag).

#### 2 (`ll`) and 5 (`ll_RR`) characters

- `ll` are [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) codes, such as `ko`, `ja`, `en`, `zh`, `th`, etc.
- `RR` are [ISO 3166-1 Alpha 2](https://en.wikipedia.org/wiki/ISO_3166-1) codes, such as `KR`, `JP`, `US`, `CN`, `TH`, etc.

```json
{
  "ko": {
    "language": {
      "international": "Korean",
      "iso639": "ko",
      "native": "한국어"
    },
    "summary": {
      "international": "Korean",
      "native": "한국어"
    }
  },
  "ko_KP": {
    "language": {
      "international": "Korean",
      "iso639": "ko",
      "native": "한국어"
    },
    "region": {
      "emoji": "🇰🇵",
      "international": "North Korea",
      "iso3166": "KP",
      "native": "조선 민주주의 인민 공화국"
    },
    "summary": {
      "international": "Korean (North Korea)",
      "native": "한국어 (조선 민주주의 인민 공화국)"
    }
  },
  "ko_KR": {
    "language": {
      "international": "Korean",
      "iso639": "ko",
      "native": "한국어"
    },
    "region": {
      "emoji": "🇰🇷",
      "international": "South Korea",
      "iso3166": "KR",
      "native": "대한민국"
    },
    "summary": {
      "international": "Korean (South Korea)",
      "native": "한국어 (대한민국)"
    }
  }
}
```

#### 7 (`ll_Tttt`) and 10 (`ll_Tttt_RR`) characters

- 7 and 10 character codes will have language type definitions (`Tttt`).
- `Tttt` are [ISO 15924](https://en.wikipedia.org/wiki/ISO_15924) codes, such as `Cyrl`, `Latn`, `Hans`, `Hant`, `Arab`, etc.

```json
{
  "ks_Arab": {
    "language": {
      "international": "Kashmiri",
      "iso639": "ks",
      "native": "کٲشُر",
      "type": {
        "international": "Arabic",
        "iso15924": "Arab",
        "native": "اَربی"
      }
    },
    "summary": {
      "international": "Kashmiri (Arabic)",
      "native": "کٲشُر (اَربی)"
    }
  }
}
```

```json
{
  "zh_Hant_HK": {
    "language": {
      "international": "Chinese",
      "iso639": "zh",
      "native": "中文",
      "type": {
        "international": "Traditional",
        "iso15924": "Hant",
        "native": "繁體字"
      }
    },
    "region": {
      "emoji": "🇭🇰",
      "international": "Hong Kong SAR China",
      "iso3166": "HK",
      "native": "中華人民共和國香港特別行政區"
    },
    "summary": {
      "international": "Chinese (Traditional, Hong Kong SAR China)",
      "native": "中文 (繁體字, 中華人民共和國香港特別行政區)"
    }
  }
}
```

## Special Thanks

- https://github.com/matiassingers/emoji-flags (MIT)
- https://github.com/umpirsky/locale-list (MIT)
