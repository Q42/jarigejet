using System;
using System.Collections.Generic;
using System.Web;
using System.Xml;
using System.Globalization;
using System.Text;
using System.Xml.Serialization;
using DDay.iCal;


namespace JarigeJet.Models
{
  public class Person
  {
    public static readonly string dateFormat = "dd-MM-yyyy";

    public string Name { get; set; }
    public DateTime Birthday { get; set; }

    public Person(){ }

    public Person(XmlElement el)
    {
      Name = el.Attributes["name"].Value;
      Birthday = ParseDate(el.Attributes["birthday"].Value);
    }

    public static DateTime ParseDate(string date)
    {
      return DateTime.ParseExact(date, dateFormat, CultureInfo.InvariantCulture.DateTimeFormat);
    }

  

    public int LastBirthdayAge
    {
      get
      {
        int age = DateTime.Now.Date.Year - Birthday.Year;
        if (DateTime.Now.Date < Birthday.AddYears(age))
        {
          age--;
        }
        return age;
      }
    }

    public string TransformedName
    {
      get
      {
        return Name.Replace(' ', '-');
      }
    }

    public string Url
    {
      get
      {
        return string.Format("http://jarigejet.q42.net/#{0}", TransformedName);
      }
    }

    public DateTime LastBirthday
    {
      get
      {
        DateTime lastBirthday = Birthday;
        DateTime now = DateTime.Now;
        lastBirthday = new DateTime(now.Year, lastBirthday.Month, lastBirthday.Day);
        if (lastBirthday > now)
        {
          lastBirthday = lastBirthday.AddYears(-1);
        }
        return lastBirthday;
      }
    }

    public string Guid
    {
      get
      {
        return string.Format("http://jarigejet.q42.net/{0}/{1}", LastBirthday.Year, TransformedName);
      }
    }

    public string FeedDescription
    {
      get
      {
        return string.Format("{0} wordt vandaag {1}!", Name, LastBirthdayAge);
      }
    }

    public static string ToRFC822Date(DateTime date)
    {
      return date.ToString("r", CultureInfo.InvariantCulture.DateTimeFormat);
    }

    public static string ToRFC3339Date(DateTime date)
    {
      return date.ToString("yyyy-MM-dd'T'HH:mm:ss'Z'");
      //return XmlConvert.ToString(date);
    }

    public XmlElement ToXml(XmlDocument doc)
    {
      XmlElement el = doc.CreateElement("person");
      AddChild(el, "name", Name);
      AddChild(el, "lastBirthdayAge", LastBirthdayAge);
      AddChild(el, "lastBirthdayRss", ToRFC822Date(LastBirthday));
      AddChild(el, "lastBirthdayAtom", ToRFC3339Date(LastBirthday));
      AddChild(el, "url", Url);
      AddChild(el, "guid", Guid);
      AddChild(el, "description", FeedDescription);
      return el;
    }

    private void AddChild(XmlElement el, string key, string value)
    {
      XmlElement child = el.OwnerDocument.CreateElement(key);
      child.InnerText = value;
      el.AppendChild(child);
    }

    private void AddChild(XmlElement el, string key, int value)
    {
      XmlElement child = el.OwnerDocument.CreateElement(key);
      child.InnerText = value.ToString();
      el.AppendChild(child);
    }

    public int GetRemainingDays()
    {
      DateTime birthday = Birthday;
      DateTime now = DateTime.Now.Date;
      while (now > birthday)
      {
        birthday = birthday.AddYears(1);
      }
      return birthday.Subtract(now).Days;
    }

    public int GetUpcomingBirthdayAge()
    {
      DateTime newBirthday = Birthday;
      int age = DateTime.Now.Date.Year - newBirthday.Year;
      if (DateTime.Now.Date > newBirthday.AddYears(age))
      {
        age++;
      }
      return age;
    }


  }

}