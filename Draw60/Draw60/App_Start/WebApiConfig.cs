using System.Web.Http;

namespace Draw60 {
    public static class WebApiConfig {
        public static void Register(HttpConfiguration config) {
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new {id = RouteParameter.Optional}
                );

            config.EnableCors();
            config.MapHttpAttributeRoutes();
        }
    }
}