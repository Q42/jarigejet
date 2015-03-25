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
using System.Text;
using DDay.iCal;
using DDay.iCal.Serialization.iCalendar;

namespace JarigeJet.Controllers
{
  public class ICalController : Controller
  {

    public ActionResult Index(string sort)
    {
      var people = getPeople();

      iCalendar iCal = new iCalendar();
      iCal.Name = "VCALENDAR";
      iCal.Version = "2.0";
      iCal.ProductID = "Q42-Jarigejet";

      foreach (Person p in people)
      {
        Event evt = iCal.Create<Event>();
        evt.Start = new iCalDateTime(p.Birthday);
        evt.End = evt.Start.AddDays(1);
        evt.Summary = string.Format("{0} ({1})", p.Name, p.Birthday.Year);

        RecurrencePattern pat = new RecurrencePattern(FrequencyType.Yearly);
        evt.RecurrenceRules.Add(pat);
      }


      iCalendarSerializer serializer = new iCalendarSerializer();
      string result = serializer.SerializeToString(iCal);
      var bytes = Encoding.UTF8.GetBytes(result);

      //return View((object)result);
      return File(bytes, "text/calendar");
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

  }
}
