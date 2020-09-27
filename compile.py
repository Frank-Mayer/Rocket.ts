import sys
import os
import re

os.system("tsc -p ./tsconfig.json --pretty")

moduleName = "rocket"
file = "./out/"+moduleName+".js"
file_object = open(file, "r")
txt = file_object.read()
file_object.close()

comma = False
export = "\nexport {"
classes = re.findall(r"class\s.+", txt)
for val in classes:
    if (comma):
        export += ", "
    classname = val.replace("class ", "").replace(" {", "")
    print(classname)
    export += classname + " as rocket_"+classname
    comma = True

functions = re.findall(r"function\s.+\(.*\)\s*", txt)
for val in functions:
    if (comma):
        export += ", "
    functionname = re.sub(r"\s*\(.*\)\s*{?", "", val)
    functionname = re.sub(r"(async)?function\s+", "", functionname)
    print(functionname)
    export += functionname + " as rocket_"+functionname
    comma = True

export += "};"

txt += export

# txt = re.sub(r"//.*", "", txt)
# txt = txt.replace(", ", ",").replace(
#     ") ", ")").replace(" (", "(").replace(" {", "{")
# txt = re.sub(r";\n\s*", ";", txt)
# txt = re.sub(r"{\n\s*", "{", txt)
# txt = re.sub(r"}\n\s*", "}", txt)
# txt = re.sub(r"\n\s*\n", "\n", txt)
# txt = txt.replace('"use strict";', '"use strict";\n')

file_object = open(file, "w")
file_object.write(txt)
file_object.close()

dfile = file.replace(".js", ".d.ts")

file_object = open(dfile, "r")
txt = file_object.read()
file_object.close()

txt = 'declare module "'+moduleName+'" {\n'+txt.replace("declare ", "")+"\n"+export+"\n}"

file_object = open(dfile, "w")
file_object.write(txt)
file_object.close()
