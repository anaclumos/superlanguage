import json

languages = {}

with open("./en.json", "r") as file:
    data = json.load(file)
    for key, value in data.items():
        print(key, value)
        languages[key] = {"summary": {"international": value}}

with open("./bcpemoji.json", "r") as file:
    data = json.load(file)
    for key, value in data.items():
        languages[key]["region"] = {"emoji": value["emoji"]}

with open("./bcputf8.json", "r") as file:
    data = json.load(file)
    for key, value in data.items():
        languages[key]["summary"]["native"] = value

with open("./languages.json", "w") as file:
    json.dump(languages, file, indent=2)
