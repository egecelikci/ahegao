import utils


def script():
    try:
        print('skip randomizing')
        # utils.randomize('images', '_ahegao')
    finally:
        print('dumping stuff into json')
        utils.createJSON('images', 'data.json')


script()
