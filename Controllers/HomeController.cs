using JarigeJet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using Dapper;
using System.Data.SqlClient;
using System.Configuration;
using MySql.Data.MySqlClient;

namespace JarigeJet.Controllers
{
  public class HomeController : Controller
  {
    /* TODO:
     * * * * *
     * Partner pagina
     * Spiffy weg
     */

    [HttpGet]
    public ActionResult Index(string sort)
    {
      var people = getPeople();

      switch(sort){
        case "name":
          people = people.OrderBy(p => p.Name).ToList();
          break;
        case "age":
          people = people.OrderByDescending(p => p.LastBirthdayAge).ToList();
          break;
        default:
          people = people.OrderBy(p => p.LastBirthday).ToList();
          break;
      }

      return View(people);
    }

    [HttpGet]
    public ActionResult Kids(string sort)
    {
      XmlDocument doc = new XmlDocument();
      doc.Load(HttpContext.Request.PhysicalApplicationPath + @"\App_Data\birthdays.xml");

      var people = getPeopleByXml(doc);

      switch (sort)
      {
        case "name":
          people = people.OrderBy(p => p.Name).ToList();
          break;
        case "age":
          people = people.OrderByDescending(p => p.LastBirthdayAge).ToList();
          break;
        default:
          people = people.OrderBy(p => p.LastBirthday).ToList();
          break;

      }
      return View("Index", people);
    }


    private List<Person> getPeople()
    {
      var people = new List<Person>();
      string connectionString = ConfigurationManager.ConnectionStrings["thequre"].ConnectionString;
      using (var connection = new MySqlConnection(connectionString))
      {
        connection.Open();
        // as as as as :-)
        people = connection.Query<Person>("SELECT fullname Name, birthdate Birthday FROM users where birthdate is not null and stopped_on is null").ToList();
      }

      return people;
    }

    private List<Person> getPeopleByXml(XmlDocument doc)
    {
      var people = new List<Person>();

      foreach(XmlElement el in doc.SelectNodes("//person"))
      {
        people.Add(new Person(el));
      }

      return people;
    }

  }
}
