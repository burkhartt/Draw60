using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using Autofac.Core;

namespace Draw60 {
    public class WebApiApplication : HttpApplication {
        protected void Application_Start() {
            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            DependencyInjection.Register();
            GlobalConfiguration.Configuration.EnsureInitialized();
        }
    }
}