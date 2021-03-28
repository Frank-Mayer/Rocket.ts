import os
import http.client
import urllib.request
import urllib.parse
import urllib.error
import sys
from pathlib import Path

wikieDir = "../Rocket.ts.wiki/"

home = open(wikieDir+"Home.md", "w+")
home.write(
    "Welcome to the Rocket.ts documentation!\n\nEvery class and function has its own page\n")
home.close()

sidebar = open(wikieDir+"_Sidebar.md", "w+")
sidebar.write(
    '<img src="https://raw.githubusercontent.com/Frank-Mayer/Rocket.ts/master/rocket.svg" width="128px">\n\n')
sidebar.close()
# sidebar = open(wikieDir+"_Sidebar.md", "a")

tsFiles = list(Path(".").rglob("*.ts"))
for file in tsFiles:
    fileStr = str(file)
    if (not "out/" in fileStr):
    print(fileStr)
