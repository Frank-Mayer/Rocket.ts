import sys
import os
import re

os.system("tsc -p ./tsconfig.json --pretty")

file = r"./out/rocket.js"
file_object = open(file, "r")
txt = file_object.read()
file_object.close()

comma = False
txt += "\nexport {"
classes = re.findall(r"class\s.+", txt)
for val in classes:
    if (comma):
        txt += ", "
    classname = val.replace("class ", "").replace(" {", "")
    print(classname)
    txt += classname + " as rocket_"+classname
    comma = True

functions = re.findall(r"function\s.+\(.*\)\s*", txt)
for val in functions:
    if (comma):
        txt += ", "
    functionname = re.sub(r"\s*\(.*\)\s*{?", "", val)
    functionname = re.sub(r"(async)?function\s+", "", functionname)
    print(functionname)
    txt += functionname + " as rocket_"+functionname
    comma = True

txt += "};"

txt = re.sub(r"//.*", "", txt)
txt = txt.replace(", ", ",").replace(
    ") ", ")").replace(" (", "(").replace(" {", "{")
txt = re.sub(r";\n\s*", ";", txt)
txt = re.sub(r"{\n\s*", "{", txt)
txt = re.sub(r"}\n\s*", "}", txt)
txt = re.sub(r"\n\s*\n", "\n", txt)
txt = txt.replace('"use strict";', '"use strict";\n')

file_object = open(file, "w")
file_object.write(txt)
