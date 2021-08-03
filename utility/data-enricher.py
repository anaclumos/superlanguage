import json

native = json.load(open("./utility/bcputf8.json", "r"))
current_state = json.load(open("./utility/languages2.json", "r"))
en = json.load(open("./bcp47/en.json", "r"))


def parenthesis_outside(s):
    # get string outside parenthesis
    if "(" in s:
        return s.split("(")[0].strip() + s.split(")")[1].strip()
    else:
        return s


def parenthesis_inside(s):
    # get string inside parenthesis
    if "(" in s:
        return s.split("(")[1].split(")")[0].strip()
    else:
        return s


# todo:
# region.native
# language.native
# type.international
# type.native

for key, value in current_state.items():
    print(key, native[key])
    value["language"]["native"] = parenthesis_outside(native[key])
    if len(key) == 5:
        if key[:2] == "ar":
            value["region"]["native"] = parenthesis_outside(native[key])
        value["region"]["native"] = parenthesis_inside(native[key])

    if (len(key)) == 7:
        value["language"]["type"] = {
            "international": parenthesis_inside(en[key]),
            "native": parenthesis_inside(native[key]),
            "iso15924": key[3:7],
        }
    if (len(key)) == 10:
        value["language"]["type"] = {
            "international": parenthesis_inside(en[key]).split(",")[0],
            "native": parenthesis_inside(native[key]).split(",")[0],
            "iso15924": key[3:7],
        }
        value["region"]["native"] = parenthesis_inside(native[key]).split(",")[1]
        value["region"]["international"] = (
            parenthesis_inside(en[key]).split(",")[1].strip()
        )

with open("fin.json", "w") as w:
    json.dump(current_state, w, indent=2, ensure_ascii=False, sort_keys=True)
