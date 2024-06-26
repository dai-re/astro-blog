#!/usr/bin/env python3

from datetime import datetime
import os
def main():
    date = datetime.now().strftime("%B %d %Y")
    path = 'src/content/post/'
    title = input("Enter the title: ")
    title = title.replace(' ', '-')
    os.mkdir(path + title)
    ttitle = title.replace('-', ' ')
    str = f"""---
title: {ttitle}
date: {date}
admin: 
desc: 
image: 
tags: ["", ""]
key: ["", ""]
---
"""
    with open(path + title + "/index.md", 'w') as file:
        file.write(str)
        file.close()
main()