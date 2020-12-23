import os
import secrets
import json


def randomize(dir, checker):
    for file in os.listdir(dir):
        name = file.split(".")
        if name[0].endswith(checker):
            pass
        else:
            os.rename(
                f"{dir}/{file}",
                f"{dir}/{secrets.token_urlsafe(8)}{checker}.{name[-1]}"
            )


def createJSON(dir, file):
    with open(file, 'w') as f:
        json.dump(os.listdir(dir), f)
