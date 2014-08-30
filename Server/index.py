import cherrypy

class StaticAndDynamic(object):
    _cp_config = {'tools.staticdir.on' : True,
                  'tools.staticdir.dir' : '/Users/timmyb_84/Documents/Draw60/Server/WebSite',
                  'tools.staticdir.index' : 'index.html',
    }

    @cherrypy.expose
    def s(self, **params):
        return "hey"


cherrypy.quickstart(StaticAndDynamic())