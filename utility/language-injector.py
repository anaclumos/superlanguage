import json
import pprint

with open("languages.json", "r") as f:
    data = json.load(f)
    pprint.pprint(data)
    with open("en.json", "r") as f2:
        en = json.load(f2)
        for key, value in en.items():
            if key in data:
                data[key]["language"] = {
                    "iso639": key[:2],
                    "international": value.split("(")[0].rstrip(),
                    "native": "placeholder",
                }
                if "(" in value:
                    try:
                        data[key]["region"]["iso3166"] = key[-2:]
                        data[key]["region"]["international"] = value.split("(")[1][:-1]
                        data[key]["region"]["native"] = "placeholder"
                    except KeyError:
                        print(key, value)

with open("languages2.json", "w") as f:
    json.dump(data, f, indent=2)
