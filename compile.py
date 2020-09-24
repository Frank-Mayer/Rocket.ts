import sys
import os
import re

os.system("tsc -p ./tsconfig.json --pretty")

file = r"./out/rocket.js"
file_object = open(file, "r")
txt = file_object.read()
file_object.close()
classes = re.findall(r"class.+\s", txt)

txt += "\nexport {"
comma = False
for val in classes:
    if (comma):
        txt += ", "
    txt += val.replace("class ", "").replace(" {\n", "")
    comma = True
txt += "};"

file_object = open(file, "w")
file_object.write(txt)
