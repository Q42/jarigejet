using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace JarigeJet
{
  public class RouteConfig
  {
    public static void RegisterRoutes(RouteCollection routes)
    {
      routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

      routes.MapRoute(
          name: "Default",
          url: "kids",
          defaults: new { controller = "Home", action = "Kids", id = UrlParameter.Optional }
      );

      routes.MapRoute(
          name: "ical",
          url: "ical",
          defaults: new { controller = "ICal", action = "Index", id = UrlParameter.Optional }
      );

      routes.MapRoute(
          name: "sort",
          url: "{sort}",
          defaults: new { controller = "Home", action = "Index", sort = UrlParameter.Optional }

      );
      
    }
  }
}