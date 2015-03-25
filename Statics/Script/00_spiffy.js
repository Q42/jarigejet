

 var   d  =  window["Spif"] = {
    e:"undefined",
    f:"*",
    g:" ",
    
    h:"none",

    j:"threadStart",
    k:"threadEnd",
    l:"beforeChangeClassName",
    m:"afterChangeClassName",
    n:"beforeHtmlChanged",
    o:"afterHtmlChanged",
    r:"beforeAction",
    t:"afterElementActivation",
    v:"linkExecuteRequest",
    w:  400,
    z:  "loaded",
    B:  "unloaded\\b|\\bloading\\b|\\bloaded",

    C:"load",
    D:"click",
    F:"keydown",
    G:"keypress",
    H:"mousedown",
    I:"mousemove",
    J:"mouseup",

    K:"DXImageTransform.Microsoft.Alpha",

    L:  true,
    M:  false,

    N:"onBefore",
    O:"onFinish",

    P:"-delay",


    Q:(typeof(window.opera) !=  "undefined"),
    R:(navigator.userAgent.indexOf("MSIE") != -1) && !window.opera,
    
    
    S:(navigator.userAgent.indexOf("MSIE") != -1) && !window.opera  && (typeof(XMLHttpRequest) !=  "undefined"),
    T:((navigator.userAgent.indexOf("Gecko") != -1) && (navigator.appVersion.indexOf("AppleWebKit") == -1)),
    U:(navigator.appVersion.indexOf("AppleWebKit") != -1) && (typeof(XMLHttpRequest) ==  "undefined"),
    V:(navigator.appVersion.indexOf("AppleWebKit") != -1) && (typeof(XMLHttpRequest) !=  "undefined"),
    
    W:  document.documentElement,

    X:  function(Y)
   {
      if  (Y.Z)
        Y.Z();
   }
};

 d["isIE"] =  d.R;
 d["isIE7"] =  d.S;
 d["isOpera"] =  d.Q;
 d["isGecko"] =  d.T;
 d["isSafari"] =  d.V;
 d["DEFAULTMORPHDURATION"] =  d.w;
 d["SUPPRESSEVENTS"] =  d.L;
 d["FIREEVENTS"] =  d.M;
 d["THREADSTART"] =  d.j;
 d["THREADEND"] =  d.k;
 

 d.aa  = {
    ba:365,

    get:  function(name,  defaultValue)
   {
      var   ca  =  this.da();

      return  (name   in   ca)?ca[name]:defaultValue;
   },

    da:  function()
   {
      var   ca  = {};

      var   ea  =  document.cookie.split("; ");
      for  (var   i=0;  i<ea.length;  i++)
     {
        var   fa  =  ea[i].split("=");
        ca[unescape(fa[0])] =  unescape(fa[1]);
     }
      
      return   ca;
   },

    ga:  function(name,  value)
   {
      document.cookie  =  escape(name) +  "="  +  escape(value) +  this.ha(this.ba);
   },

    remove:  function(name)
   {
      document.cookie  =  escape(name) +  "="  +  this.ha(-365);
   },
    
    ha:  function(ia)
   {
      var   ja  =  new   Date;
      ja.setDate(ja.getDate() +  ia);
      return   "; expires="  +  ja.toGMTString();
   }
};

 d["Cookies"] =  d.aa;
 d.aa["get"] =  d.aa.get;
 d.aa["getAll"] =  d.aa.da;
 d.aa["set"] =  d.aa.ga;
 d.aa["remove"] =  d.aa.remove;
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 d.ka  = {
    la:  function(ma,  delay,  Y,  na)
   {
      if  (delay  >=  0)
        return   setTimeout(this.oa(ma,  Y,  na),  delay);
      else 
     {
        ma.apply(Y  ||  window,  na  || []);
        return   null;
     }
   },
    pa:  function(ma,  qa,  Y,  na)
   {
      var   ra  =  this.oa(ma,  Y,  na);
      ra();
      return   setInterval(ra,  qa);
   },

    oa:  function(ma,  Y,  na)
   {
      return   function()
     {
        d.sa.ta(d.j,  null,  null);
        ma.apply(Y  ||  window,  na  || []);
        d.sa.ta(d.k,  null,  null);
     };
   },

    ua:  function(va,  wa,  context)
   {
      var   xa  =  va.href;
      if  (xa)
        var   ya  =  xa.split("#")[1];
      
      if  (ya)
        return   document.getElementById(ya);

      
      return   d.za.Aa(context  ||  va,  wa);
   },

    Ba:  function(Ca,  Da,  Ea,  Fa,  Ga)
   {
      var   Ha  = {};
      Ha.Ia  =  d.za.Aa(Ca,  Da);
      if  (Ha.Ia)
     {
        Ha.Ja  =  d.Ka.La(Ha.Ia,  Da,  Fa);
        Ha.object  =  this.ua(Ha.Ia,  Ea);
        if  (Ha.object)
          Ha.Ma  =  d.Ka.La(Ha.object,  Ea,  Ga);
     }
      return   Ha;
   },
    Na:  function(s,  Oa)
   {
      return   s?Function("a",  "b",  "c",  "d",  "e",  "return "  +  s  +  "(a, b, c, d, e);"):Oa;
   },
    Pa:  function(Ca,  Qa,  Ra,  Sa,  Ta)
   {
      return   this.Ua(Ca,  Qa,  Ra,  Sa,  Ta).Va[0];
   },
    Wa:  function(Ca,  Qa,  Ra,  Sa,  Ta)
   {
      return   this.Ua(Ca,  Qa,  Ra,  Sa,  Ta).Va;
   },
    Ua:  function(Ca,  Qa,  Ra,  Sa,  Ta)
   {
      var   Xa  = {
        Va:[],
        Ca:null 
     };
      var   Ya;
      do 
     {
        if  (!(Ya  =  d.Ka.match(Ca,  Qa  +  "-[\\w-]+")))
          Ca  =  Ca.parentNode;
     }
      while  (!Ya  && !Sa  &&  Ca  &&  Ca.nodeType  ==  1);

      if  (Ya)
        for  (var   i=0;  i<Ya.length;  i++)
       {
          var   s  =  Ya[i].substring(Qa.length+1);
          if  (!Ta  || !Ta[s])
         {
            Xa.Va.push(s);
            Xa.Ca  =  Ca;
         }
       }

      if  ((Ra  !=  null) && (Xa.Va.length  ==  0))
        Xa.Va[0] =  Ra;
      return   Xa;
   },
    Za:  function(Ca,  _b,  ab,  Sa)
   {
      var   Ya;
      do 
     {
        Ya  =  d.Ka.match(Ca,  _b  +  "-?\\d+");
        Ca  =  Ca.parentNode;
     }
      while  (!Sa  &&  Ca  &&  Ca.nodeType  ==  1  && !Ya);
      return  (Ya?parseInt(Ya[0].substring(_b.length)):ab);
   },
    bb:  function(a)
   {
      var   cb  = {};
      for  (var   i=0;  i<a.length;  i++)
        cb[a[i]] =  i;
      return   cb;
   },
    db:  function(Ca,  eb,  fb)
   {
      var   gb  =  Ca.hb;
      if  (!gb)
        gb  =  Ca.hb  = {};

      gb[eb] =  fb;
   },
    ib:  function(Ca,  eb)
   {
      var   gb  =  Ca.hb;
      if  (!gb)
        return   null;
      else 
        return   gb[eb];
   }
};

 d.ka.platform  = (d.S?"ie ie7":(d.R?"ie ie6":(d.T?"gecko":(d.Q?"opera":(d.U?"safari2":(d.V?"safari":"unknown"))))));



 if  (!Array.prototype.push)
{
    Array.prototype.push  =  function()
   {
      for  (var   i=0;  i<arguments.length;  i++)
        this[this.length] =  arguments[i];
   };
}

 if  (!Function.prototype.apply)
{
    Function.prototype.apply  =  function(Y,  na)
   {
      Y.jb  =  this;
      var   kb  =  Y.jb(na[0],  na[1],  na[2],  na[3],  na[4]);
      Y.jb  =  null;
      return   kb;
   }
}

 d.X(d.ka);

 d["Utils"] =  d.ka;
 d.ka["setTimeoutHandler"] =  d.ka.la;
 d.ka["setIntervalHandler"] =  d.ka.pa;
 d.za  = {
    lb:  1,
    mb:{},

    nb:  function(Ca)
   {
      if  (!Ca.id)
     {
        var   id  =  "qid_"  +  this.lb++;
        Ca.id  =  id;
        this.mb[id] =  true;
     }

      return   Ca.id;
   },

    ob:  function(Ca)
   {
      var   pb  = [];

      if  (Ca.id  && !this.mb[Ca.id])
        pb[0] =  Ca;

      var   qb  =  Ca.getElementsByTagName(d.f);
      var   rb  =  qb.length;
      for  (var   i=0;  i<rb;  i++)
     {
        var   Ca  =  qb[i];
        if  (Ca.id  && !this.mb[Ca.id])
          pb[pb.length] =  Ca;
     }

      return   pb;
   },
    Aa:  function(Ca,  sb,  tb)
   {
      while  (Ca  &&  Ca.nodeType  ==  1)
     {
        if  (d.Ka.contains(Ca,  sb))
          return   Ca;

        Ca  =  Ca.parentNode;
        if  (tb  &&  Ca  &&  Ca.className  &&  d.Ka.contains(Ca,  tb))
          return   null;
     }
   },
    ub:  function(Ca,  sb)
   {
      var   vb  =  Ca.getElementsByTagName("*");
      var   wb  =  vb.length;
      for  (var   i=0;  i<wb;  i++)
        if  (d.Ka.contains(vb[i],  sb))
          return   vb[i];
   },
    getElementsByTagName:  function(Ca,  tagName)
   {
      var   xb  = [];
      var   yb  =  Ca.getElementsByTagName(tagName);
      var   zb  =  yb.length;
      for  (var   i=0;  i<zb;  i++)
        xb.push(yb[i]);

      return   xb;
   },
    getBoxObjectFor:  function(Ca)
   {
      if  (d.R)
     {
        var   Ab  =  Ca.getBoundingClientRect();
        return  {
          x:  Ab.left,
          y:  Ab.top,
          width:  Ab.right  -  Ab.left,
          height:  Ab.bottom  -  Ab.top 
       };
     }
      else   if  (d.T)
        return   Ca.ownerDocument.getBoxObjectFor(Ca);
      else   if  (d.Q)
     {
 Bb("TO DO!!!");
        Cb  = {
          y:Ca.offsetTop,
          height:Db.offsetHeight 
       };
     }
      else   if  (d.V  ||  d.U)
     {
        var   Cb  = {  x:  0,  y:  0,  width:  Ca.offsetWidth,  height:Ca.offsetHeight  };
        while  (Ca)
       {
          Cb.x  +=  Ca.offsetLeft;
          Cb.y  +=  Ca.offsetTop;
          Ca  =  Ca.offsetParent;
       }
        return   Cb;
     }
   },

    Eb:  function(Ca)
   {
      var   value  =  Ca.value;
      switch  (Ca.nodeName)
     {
        case   "SELECT":
          value  =  Ca.options[Ca.selectedIndex].value;
          break;
        case   "INPUT":
          switch  (Ca.type)
         {
            case   "checkbox":
              value  =  Ca.checked;
              break;
         }
          break;
     }
      
      return   value;
   },

    Fb:  function(Ca)
   {
      if  (d.R)
        return   Ca.parentTextEdit  !=  null;
      else   if  (d.Q)
        return   Ca.sourceIndex  != -1;
      else 
        return   Ca.offsetParent  !=  null;
   },

    Gb:  function(Hb,  Ib)
   {
      if  (d.R)
        return   Hb.contains(Ib);

      while  (Ib)
     {
        if  (Hb  ==  Ib)
          return   true;
        else 
          Ib  =  Ib.parentNode;
     }

      return   false;
   },
    Jb:  function(Kb,  Lb)
   {
      if  (!Kb  || !Lb  ||  Kb  ==  Lb)
        return   Kb  ||  Lb;

      while  (Kb)
     {
        if  (this.Gb(Kb,  Lb))
          return   Kb;
        Kb  =  Kb.parentNode;
     }
   },
    Mb:  function(Ca)
   {
      return   d.R  ?  Ca.style.cssText  :  Ca.getAttribute("style");
   },
    Nb:  function(Ca,  s)
   {
      if  (d.R)
        Ca.style.cssText  =  s;
      else 
        Ca.setAttribute("style",  s);
   },
    
    Ob:  function()
   {
      this.Pb  =  d.W.scrollTop;
      this.Qb  =  d.W.scrollHeight  -  d.W.clientHeight;
   },
    Rb:  function()
   {
      var   Sb  =  this.Qb  -  this.Pb;
      d.W.scrollTop  = (Sb  <  50  &&  this.Pb  >  100)?d.W.scrollHeight  -  d.W.clientHeight  -  Sb:this.Pb;
   }
};

 d.X(d.za);

 d["HtmlDomUtils"] =  d.za;
 d.za["acquireIdForHtmlElement"] =  d.za.nb;
 
 d.za["getAncestorWithClassName"] =  d.za.Aa;
 d.za["getBoxObjectFor"] =  d.za.getBoxObjectFor;

 
 d.za["_storeScrollState"]   =  d.za.Ob;
 d.za["_restoreScrollState"] =  d.za.Rb;
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 


 d.Ka  = {
    Tb:/\s+/,

    Ub:{},
    Vb:{},
    Wb:[],
    Xb: {},
    Yb:  null,

    Zb:  function(sb,  ma,  Y)
   {
      this.Wb.push({  sb:sb,  ma:ma,  Y:Y});
   },

    _c:  function(sb,  ac,  qa)
   {
      this.Vb[sb] = {
        ac:ac,
        bc:  "(\\b"  +  ac.join("-"  +  sb) +  "-"  +  sb  +  "\\b|\\b"  +  sb  +  "\\b)",
        qa:qa  ||  1.1*d.w 
     };
   },

    cc:  function(sb,  dc)
   {
      this.Xb[sb] =  " "  +  dc  +  " ";

      var   as  = [];
      for  (var   sb   in   this.Xb)
        as.push(sb);
      if  (as.length)
     {
        var   s  =  "(\\s)("  +  as.join("|") +  ")(\\s)";
        this.Yb  =  new   RegExp(s,  "g");
     }
      else 
        this.Yb  =  null;
   },
    ec: {},
    fc:  function(Ca)
   {
      if  (this.Yb)
     {
        var   gc  =  d.za.nb(Ca);
        if  (!this.ec[gc])
       {
          Ca.className  = (" "  +  Ca.className  +  " ").replace(this.Yb,  this.hc);
          this.ec[gc] =  1;
       }
     }
      return   Ca.className;
   },
    hc:  function(a,  b,  sb)
   {
      return   d.Ka.Xb[sb];
   },
   
    contains:  function(Ca,  sb)
   {
      return   this.ic(this.fc(Ca),  sb);
   },
    ic:  function(s,  sb)
   {
      
      return  !!(s  &&  s.match(this.jc(sb)));
   },
    match:  function(Ca,  sb)
   {
      return   this.fc(Ca).match(this.jc(sb));
   },
    add:  function(Ca,  kc,  lc)
   {
      if  (!this.contains(Ca,  kc))
        if  (this.Vb[kc])
          this.mc(Ca,  null,  kc,  0,  lc);
        else 
       {
          var   nc  =  this.fc(Ca);
          var   oc  =  nc  +  d.g  +  kc;
          this.pc(Ca,  nc,  oc,  lc);
       }
   },
    replace:  function(Ca,  qc,  kc,  lc,  rc)
   {
      if  (this.contains(Ca,  qc))
     {
        if  (this.Vb[qc])
          qc  =  this.Vb[qc].bc;

        if  (!rc  &&  this.Vb[kc])
          this.mc(Ca,  qc,  kc,  0,  lc);
        else 
       {
          var   sb  =  this.fc(Ca);
          this.pc(Ca,  sb,  this.sc(sb,  qc,  kc),  lc);
       }
     }
      else 
        this.add(Ca,  kc,  lc);
   },
    sc:  function(s,  tc,  uc)
   {
      var   vc  =  s.replace(this.jc(tc),  uc);
      if  (!vc.match(this.jc(uc)))
        vc  +=  d.g  +  uc;

      return   vc;
   },
    wc:  function(Ca,  sb,  xc,  lc)
   {
      if  (xc)
        this.add(Ca,  sb,  lc);
      else 
        this.remove(Ca,  sb,  lc);
   },
    yc:  function(Ca,  zc,  Ac,  lc,  rc)
   {
      var   Bc  =  this.contains(Ca,  zc);
      this.replace(Ca, (Bc?zc:Ac), (Bc?Ac:zc),  lc,  rc);
   },
    remove:  function(Ca,  qc,  lc)
   {
      if  (this.Vb[qc])
        qc  =  this.Vb[qc].bc;

      var   sb  =  this.fc(Ca);
      this.pc(Ca,  sb,  sb.replace(this.jc(qc),  ""),  lc);
   },
    ga:  function(Ca,  oc,  lc)
   {
      this.pc(Ca,  this.fc(Ca),  oc,  lc);

      var   sb;
      var   Cc  =  oc.split(this.Tb);
      for  (var   i=0;  i<Cc.length;  i++,  sb=Cc[i])
        if  (this.Vb[sb])
       {
          this.mc(Ca,  sb,  sb,  0,  lc);
          return;
       }
   },

    Dc:  new   RegExp("(-[^_-]+)|(_-\\d+)|(_\\w+)",  "g"),
    Ec:{
      "delay":"int",
      "delayOn":"int",
      "delayOff":"int",
      "duration":"int",
      "delta":"int",
      "max":"int",
      "interval":"int",
      "step":"int",
      "onBefore":"function",
      "onFinish":"function",
      "props":"array",
      "classes":"array",
      "limitmorphto":"array",
      "add":"array",
      "replace":"array",
      "target":"array" 
   },
    La:  function(Ca,  Fc,  Gc)
   {
      var   Hc  =  null;
      var   Ic  =  this.jc(Fc  +  "\\b-?([\\w\\-\\_]*)\\b");

      var   matches  =  this.fc(Ca).match(Ic);
      if  (matches)
     {
        Hc  = {};
        if  (Gc)
          for  (var   Jc   in   Gc)
            Hc[Jc] =  Gc[Jc];

        Hc.Kc  =  matches[0].split("-")[0];

        for  (var   Lc=0;  Lc<matches.length;  Lc++)
       {
          var   ca  =  matches[Lc].match(this.Dc);
          if  (ca)
            for  (var   i=0;  i<ca.length;  i++)
           {
              var   eb  =  ca[i].substring(1);
              if  (i<ca.length-1  &&  ca[i+1].charAt(0) ==  "_")
             {
                var   fb  =  ca[i++ +  1].substring(1);
                switch  (this.Ec[eb])
               {
                  case   "function":
                    fb  =  d.ka.Na(fb);
                    break;
                  case   "int":
                    fb  =  parseInt(fb);
                    break;
                  case   "array":
                    fb  =  fb.split("_");
                    break;
               }
                Hc[eb] =  fb;
                if  (!Hc.action)
                  Hc.action  =  eb;
             }
              else 
             {
                Hc[eb] =  true;
                Hc.action  =  eb;
             }
           }
       }
     }

      return   Hc;
   },



    Mc:  null,
    Nc:  function()
   {
      this.Mc  = {
        Oc:null,
        setData:[]
     };
   },
    
    Pc:  function()
   {
      var   Qc  =  this.Mc;

      this.Mc  =  null;

      if  (Qc.setData.length  >  0)
     {
        var   Rc  =  this.Sc(Qc.Tc,  this.fc(Qc.Oc),  false);

        d.sa.ta(d.l,  Qc.Oc,  Rc);

        for  (var   i=0;  i<Qc.setData.length;  i++)
       {
          var   Uc  =  Qc.setData[i];
          this.pc(Uc.Ca,  Uc.nc,  Uc.oc,  d.M,  true);
       }

        this.Vc(Qc.Oc,  Rc);
     }
   },

    Vc:  function(Ca,  Wc)
   {
      if  (Wc.toValue  !=  Wc.fromValue)
     {
        d.sa.ta(d.m,  Ca,  Wc);

        for  (var   i=0;  i<this.Wb.length;  i++)
       {
          var   Xc  =  this.Wb[i];
          if  (Wc.addCNh[Xc.sb])
            Xc.ma.apply(Xc.Y  ||  window, [Wc,  d.Yc.Zc()])
       }
     }
   },

    _d:  function(Ca,  Hc)
   {
      for  (var   name   in   Hc)
     {
        var   ad  =  Hc[name];
        switch  (name)
       {
          case   "add":
            for  (var   i=0;  i<ad.length;  i++)
              this.add(Ca,  ad[i]);
            break;
          case   "remove":
            this.remove(Ca,  ad);
            break;
          case   "replace":
            this.replace(Ca,  ad[0],  ad[1]);
            break;
          case   "set":
            this.ga(Ca,  ad);
            break;
          case   "clear":
          case   "empty":
            this.ga(Ca,  "");
            break;
       }
     }
   },
    jc:  function(sb)
   {
      return   this.Ub[sb] || (this.Ub[sb] =  new   RegExp("(?:^|\\b)"  +  sb  +  "(?:\\b|$)",  "g"));
   },
    pc:  function(Ca,  nc,  oc,  lc,  bd)
   {
      oc  =  oc.replace(/^\s+|\s+$/g,  "");
      if  (oc  !=  nc)
     {
        if  (this.Mc)
       {
          var   cd  =  d.za.Jb(this.Mc.Oc,  Ca);
          if  (cd  !=  this.Mc.Oc)
         {
            this.Mc.Oc  =  cd;
            this.Mc.Tc  =  this.fc(cd);
         }

          this.Mc.setData.push(
           {
              Ca:Ca,
              nc:nc,
              oc:oc 
           }
         );
       }
        else 
       {
          if  (!lc)
         {
            var   Wc  =  this.Sc(nc,  oc,  bd);
            d.sa.ta(d.l,  Ca,  Wc);
         }

          if  (!Ca.__originalClassName)
            Ca.__originalClassName  =  Ca.className;
            
          Ca.className  =  oc;
          if  (!lc)
            this.Vc(Ca,  Wc);

          if  (d.R)
         {
            
            
            
            
            if  (Ca.getAttribute("tabIndex",  2) ==  0)
           {
              Ca.tabIndex  = -1;
              setTimeout(function(){  Ca.tabIndex  =  0; },  0);
           }
         }
       }
     }
   },
    mc:  function(Ca,  qc,  sb,  ed,  lc)
   {
      var   data  =  this.Vb[sb];
      var   ac  =  data.ac;

      var   kc  =  ac[ed] +  "-"  +  sb;

      d.ka.db(Ca,  d.w,  data.qa);

      if  (qc  &&  this.contains(Ca,  qc))
        this.replace(Ca,  qc,  kc,  lc,  true);
      else 
        this.add(Ca,  kc,  lc,  true);

      var   fd  =  this;
      if  (ed  <  ac.length-1)
        d.ka.la(function(){  fd.mc(Ca,  kc,  sb,  ed+1,  lc); },  data.qa);
      else 
        d.ka.la(function(){  if  (fd.contains(Ca,  kc))  fd.replace(Ca,  kc,  sb,  lc,  true); },  data.qa);
   },
    
    Sc:  function(nc,  oc,  bd)
   {
 
      var   gd  =  nc.split(this.Tb);
      var   hd  = {};
      for  (var   i=0;  i<gd.length;  i++)
        hd[gd[i]] =  1;
      
      var   jd    =  oc.split(this.Tb);

      var   addCNs  = [];
      var   addCNh  = {};
      for  (var   i=0;  i<jd.length;  i++)
     {
        if  (!hd[jd[i]])
       {
          addCNs.push(jd[i]);
          addCNh[jd[i]] =  1;
       }
        var   kd  =  jd[i].split(/[-_]/);
        for  (var   ld=0;  ld<kd.length;  ld++)
       {
          addCNs.push(kd[ld]);
          addCNh[kd[ld]] =  1;
       }
     }

 
      var   delCNs  = [];
      for  (var   i=0;  i<gd.length;  i++)
        if  (!addCNs[gd[i]])
          delCNs.push(gd[i]);

      return  {  fromValue:  nc,  toValue:oc,  delCNs:delCNs,  addCNs:addCNs,  addCNh:addCNh,  bd:bd  };
   }
};

 d.X(d.Ka);

 d["ClassNameAbstraction"] =  d.Ka;
 d.Ka["addAfterChangeClassNameListener"] =  d.Ka.Zb;
 d.Ka["addClassNameSequence"] =  d.Ka._c;
 d.Ka["contains"] =  d.Ka.contains;
 d.Ka["add"] =  d.Ka.add;
 d.Ka["replace"] =  d.Ka.replace;
 d.Ka["swap"] =  d.Ka.yc;
 d.Ka["toggle"] =  d.Ka.wc;
 d.Ka["remove"] =  d.Ka.remove;
 d.Ka["set"] =  d.Ka.ga;

 d.Ka["addClassNameAlias"] =  d.Ka.cc;
 
 
 

 
 
 
 
 
 
 
 
 

 
 
 

 
 
 
 
 
 
 

 d.Yc  = {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

    md:  false,
    nd: {},
    od:{},
    pd:[],
    qd:  null,
    
    rd:  function(sd,  ud,  ma,  Y,  tagName,  sb)
   {
      tagName  =  tagName?tagName.toUpperCase():null;
      var   vd  = {ma:ma,  Y:Y,  tagName:tagName,  sb:sb};
      var   wd  =  d.za.nb(sd) +  "-"  +  tagName  +  "-"  +  sb  +  "-"  +  ud;

      var   xd  =  this.nd[wd];
      if  (this.od[wd] ==  sd  &&  xd)
        xd.push(vd);
      else 
     {
        this.od[wd] =  sd;
        xd  =  this.nd[wd] = [vd];

        this.pd.push(sd);
        var   ra  =  this.yd(wd,  this.pd.length-1);

        if  (sd.addEventListener)
          sd.addEventListener(ud,  ra,  false);
        else 
       {
          if  (ud  ==  "DOMMouseScroll")
            ud  =  "mousewheel";
          sd.attachEvent("on"  +  ud,  ra);
       }
     }
   },

    zd:  function(sb,  ud,  ma,  Y)
   {
      this.rd(document.documentElement,  ud,  ma,  Y,  null,  sb);
   },

    Ad:  function(tagName,  ud,  ma,  Y)
   {
      this.rd(document.documentElement,  ud,  ma,  Y,  tagName,  null);
   },

    Zc:  function()
   {
      return   this.qd;
   },
    
    yd:  function(wd,  Bd)
   {
      return   function(Cd)
     {
        
        
        
        
        if  ((typeof(d) !=  "undefined") && (!d.T  ||  document.defaultView))
       {
          d.za.Ob();

          Cd  =  d.Yc.Dd(Cd);

          d.Yc.qd  =  Cd;

          
          d.sa.ta(d.j,  Cd);

          
          
          if  (Cd.type  ==  d.D  &&  d.T  &&  Cd.Ed)
            return   false;

          var   kb  =  undefined;

          var   sd  =  d.Yc.pd[Bd];
          var   xd  =  d.Yc.nd[wd];
          var   na  = [Cd,  sd];
          for  (var   i=0;  i<xd.length;  i++)
         {
            var   vd  =  xd[i];
            
            
            if  (vd.tagName  ||  vd.sb)
           {
              na[1] =  null;
              var   Ca  =  Cd.subject;
              while  (Ca)
             {
                if 
               (
                 (!vd.tagName  ||  Ca.nodeName  ==  vd.tagName)
                 &&
                 (!vd.sb  ||  d.Ka.contains(Ca,  vd.sb))
               )
               {
                  na[1] =  Ca;
                  kb  =  vd.ma.apply(vd.Y  ||  na[1],  na) &&  kb;
               }
                Ca  =  Ca.parentNode;
             }
           }
            else 
           {
              na[1] =  sd;
              kb  =  vd.ma.apply(vd.Y  ||  na[1],  na) &&  kb;
           }
         }

          if  (Cd.Fd  ==  true)
            d.Yc.Gd(Cd);

          
          d.sa.ta(d.k,  Cd);

          d.za.Rb();

          d.Yc.qd  =  null;

          return   kb;
       }
     };
   },

    Hd:  function()
   {
      this.Fd  =  true;
   },
    Gd:  function(Cd)
   {
      Cd.preventDefault();
      Cd.stopPropagation();

      if  (d.V  &&  this.type  ==  d.D)
     {
        var   Ca  =  Cd.subject;
        while  (Ca  &&  Ca.nodeName  !=  "A")
          Ca  =  Ca.parentNode;

        if  (Ca)
       {
          Ca.Id  =  Ca.href;
          Ca.href  =  "javascript://";
          setTimeout(function(){  Ca.href  =  Ca.Id; },  10);
       }
     }
   },
    Jd:  function()
   {
      this.returnValue  =  false;
   },
    Kd:  function()
   {
      this.cancelBubble  =  true;
   },

    Dd:  function(Cd)
   {
 
      if  (d.R)
     {
        Cd.subject  =  Cd.srcElement;
        Cd.preventDefault   =  this.Jd;
        Cd.stopPropagation  =  this.Kd;
     }
      else 
     {
        Cd.subject  =  Cd.target  ||  Cd.currentTarget;
        if  (Cd.subject  &&  Cd.subject.nodeType  ==  3)
          Cd.subject  =  Cd.subject.parentNode;
     }

      Cd.cancel  =  this.Hd;

      switch  (Cd.type)
     {
        case   d.D:
        case   "mousedown":
        case   "mouseup":
        case   "mousemove":
          Cd.Ld   = (d.R||d.U?Cd.button  ==  1:Cd.button  ==  0);
          Cd.Ed  =  Cd.button  ==  2;
          break;
        case   d.F:
        case   "keyup":
        case   d.G:
          if  (d.R  &&  Cd.subject.isContentEditable)
         {
            var   Md  =  document.selection.createRange();
            if  (Md.length)
              Cd.subject  =  Md.item(0);
            else 
              Cd.subject  =  Md.parentElement();
         }

          if  (d.T  &&  Cd.subject  ==  document.documentElement)
            
            
            Cd.subject  =  document.body;
          break;
        case   "mousewheel":
          if  (d.R)
            Cd.detail  = -Cd.wheelDelta/20;
          break;
     }

      return   Cd;
   }
};

 d["DOMEvents"] =  d.Yc;
 d.Yc["attach"] =  d.Yc.rd;
 d.Yc["attachToTagName"] =  d.Yc.Ad;
 d.Yc["attachToClassName"] =  d.Yc.zd;
 d.Yc["getEvent"] =  d.Yc.Zc;
 d.sa  = {
    Nd: {},
    Od:  function(ud,  ma,  Y)
   {
      var   Pd  =  this.Nd[ud] =  this.Nd[ud] || [];

      Pd[Pd.length] = {ma:ma,  Y:Y};
   },
    ta:  function(ud,  subject,  ca)
   {
      var   kb  =  true;

      var   Pd  =  this.Nd[ud];
      if  (Pd)
     {
        var   Cd  =  ca  || {};
        Cd.type  =  ud;
        Cd.subject  =  subject;

        for  (var   i=Pd.length-1;  i>=0;  i--)
          kb  = (Pd[i].ma.apply(Pd[i].Y  ||  subject, [Cd]) !=  false) &&  kb;
     }
    
      return   kb;
   }
};

 d["CustomEvents"] =  d.sa;
 d.sa["listen"] =  d.sa.Od;
 d.sa["fire"] =  d.sa.ta;
 
 
 
 
 
 
 
 
 


 d.Qd  = {
    Z:  function()
   {
      d.sa.Od(d.m,  this.Rd,  this);
      d.sa.Od(d.o,  this.Sd,  this);
      d.Yc.rd(document.documentElement,  "DOMMouseScroll",    this.Td,  this);
   },
    Rd:  function(Cd)
   {
      if  (Cd.addCNs.length  >  0  &&  d.sa.ta(d.r,  Cd.subject))
        this.Ud(Cd.subject,  Cd.addCNs);
   },
    Sd:  function(Cd)
   {
      if  (d.sa.ta(d.r,  Cd.subject))
        this.Ud(Cd.subject, [d.C]);
   },
    Ud:  function(Vd,  Wd,  context)
   {
      var   Xd  =  false;

      
      for  (var   i=0;  i<Wd.length;  i++)
        d.sa.ta("on"  +  Wd[i],  Vd);

      var   Yd  =  "\\bon"  +  Wd.join("\\b|\\bon") +  "\\b";
      for  (var   Zd  =  Vd.firstChild;  Zd;  Zd  =  Zd.nextSibling)
        if  (Zd.nodeName  ==  "A"  &&  d.Ka.contains(Zd,  Yd))
       {
          d.sa.ta(d.v,  Zd, {  context:context  });
          Xd  =  true;
       }

      return   Xd;
   },
    Td:  function(Cd)
   {
      var   _e  =  false;
      var   ud  = ["mousescroll"  + (Cd.detail>0?"down":"up")];
      for  (var   Ca  =  Cd.subject;  Ca;  Ca  =  Ca.parentNode)
        _e  =  _e  ||  this.Ud(Ca,  ud,  null);

      if  (_e)
        Cd.cancel();
   }
};

 d.X(d.Qd);
 
 
 
 
 
 
 
 
 
 
 
 
 

 d.ae  = {
    be:[],
    ce:  null,
    de:{},
    ee:{},
    qd:  null,
    fe:  null,
    ge:  false,
    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.D,    this.he,  this);

      
      
      
      d.Yc.rd(document.documentElement, (d.R?d.F:d.G),  this.he,  this);
   },
    ie:  function(sb,  ma,  Y)
   {
      this.je(sb,  ma,  Y,  true);
   },
    ke:  function(sb,  ma,  Y)
   {
      this.je(sb,  ma,  Y,  false);
      this.ge  =  true;
   },
    je:  function(sb,  ma,  Y,  le)
   {
      this.be[this.be.length] =  sb;
      this.de[sb] = {  ma:ma,  Y:Y  };
      this.ee[sb] =  le;

      this.be  =  this.be.sort().reverse();

      this.ce  =  new   RegExp("(\\b"  +  this.be.join("\\b)|(\\b") +  "\\b)|(\\b[\\w\\-]+\\b|\\s+)",  "g");
   },
    he:  function(Cd)
   {
      this.fe  = (Cd.type  ==  d.D  ||  Cd.keyCode  ==  13  ||  Cd.keyCode  ==  32);

      if  (!this.ge  && !this.fe)
        return;

      this.qd  =  Cd;
      var   qb  = [];

      for  (var   Ca  =  Cd.subject;  Ca  &&  Ca.nodeType  ==  1;  Ca  =  Ca.parentNode)
        qb[qb.length] =  Ca;

      for  (var   i=0;  i<qb.length;  i++)
     {
        this.me  =  qb[i];
        if  (this.me.className)
          this.me.className.replace(this.ce,  this.ne);
     }
   },
    ne:  function()
   {
      if  (!arguments[arguments.length-3])
     {
        var   fd  =  d.ae;
        for  (var   i=1;  i<arguments.length-3;  i++)
          if  (arguments[i])
         {
            var   sb  =  fd.be[i-1];
            if  (fd.fe  || !fd.ee[sb])
           {
              if  (d.sa.ta(d.r,  fd.me))
             {
                var   ma  =  fd.de[sb];
                ma.ma.apply(ma.Y  ||  fd.me, [fd.me,  arguments[i],  fd.qd]);
             }
              return;
           }
         }
     }
   }
};

 d.X(d.ae);
 
 
 


 d.oe  = {
    pe:[],
    qe:"",
    re:{},
    se:{},
    te:[],

    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.D,      this.ue,  this);
      d.Yc.rd(document.documentElement,  "dblclick",      this.ue,  this);
      d.Yc.rd(document.documentElement,  "keyup",   this.ve,  this);
      d.sa.Od(d.v,  this.we,  this);
   },
    xe:  function(ye,  Y)
   {
      this.te.push({ma:ye,  Y:Y});
   },
    ze:  function(sb,  ye,  Y)
   {
      this.Ae([sb], [],  ye,  Y)
   },
    Ae:  function(Be,  Ce,  ye,  Y)
   {
      var   De  =  "("  +  Ce.join("|") +  ")";
      for  (var   i=0;  i<Be.length;  i++)
     {
        var   Fc  =  Be[i];
        this.pe[this.pe.length] =  Fc;
        this.re[Fc] =  De;
        this.se[Fc] = {  ma:ye,  Y:Y};
     }

      this.qe  =  "(\\b"  +  this.pe.join("\\b|\\b") +  "\\b)";
   },
    ue:  function(Cd)
   {
      this.we(Cd);
   },
    ve:  function(Cd)
   {
      if  (Cd.keyCode  ==  32  ||  Cd.keyCode  ==  13)
        this.we(Cd);
   },
    we:  function(Cd)
   {
 
      var   Be;
      var   Ca  =  Cd.subject;

      
      while  (Ca  &&  Ca.nodeType  ==  1)
     {
        
        
        if  (Cd.type  ==  d.G  &&  Ca.nodeName  ==  "A")
          return;

        if  ((Be  =  d.Ka.match(Ca,  this.qe)) &&  d.sa.ta(d.r,  Ca))
       {
          var   Ee  = {};

          for  (var   i=0;  i<Be.length;  i++)
         {
            var   Fc  =  Be[i];
            if  (Fc  && !Ee[Fc])
           {
              var   Fe  =  d.Ka.La(Ca,  Fc);
              if  (
               (!Fe["require"] ||  d.za.Aa(Ca,  Fe["require"]))
               &&
               (!Fe["disallow"] || !d.za.Aa(Ca,  Fe["disallow"]))
             )
             {
                var   Ge  =  this.He(Ca,  Fc,  Cd.context);
                if  (!Ge  || !Ge.Ca  || !d.sa.ta(d.r,  Ge.Ca))
                  continue;

                var   Ie  =  d.Ka.La(Ge.Ca,  Ge.Je);
                if  (
                  Ie 
 
 
 
 
 
               )
                  Ee[Fc] = {
                    Ke:  this.se[Fc],
                    Ge:  Ge,
                    Fe:  Fe,
                    Ie:  Ie 
                 };
           }
           }
         }

          for  (Fc   in   Ee)
         {
            var   Le  =  Ee[Fc];
            d.ka.la(this.Me(Cd,  Ca,  Fc,  Le),  1*Le.Fe.delay||-1);
         }
       }

        if  (Ca.nodeName  ==  "INPUT"  &&  Ca.type  ==  "submit")
          while  (Ca.nodeName  !=  "FORM")
            Ca  =  Ca.parentNode;

        if  (Ca.nodeName  ==  "A"  ||  Ca.nodeName  ==  "FORM")
       {
          for  (var   i=0;  i<this.te.length;  i++)
         {
            var   ma  =  this.te[i];
            ma.ma.apply(ma.Y  ||  Ca, [Ca,  Cd]);
         }
          
          
          if  (Cd.cancel  &&  Be  &&  Be.length  >  0  &&  Ca.getAttribute("href",  2).charAt(0) ==  "#")
            Cd.cancel();
       }

        Ca  =  Ca.parentNode;
     }
   },

    Me:  function(Cd,  Ca,  Fc,  Le)
   {
      return   function()
     {
        Le.Ke.ma.apply(Le.Ke.Y  ||  Ca, [Ca,  Fc,  Le.Ge.Ca,  Le.Ge.Je,  Cd,  Le.Fe,  Le.Ie]);
     };
   },

    He:  function(va,  Fc,  context)
   {
      var   Ne  =  this.Oe(va,  Fc,  context);

      if  (Ne)
     {
        var   Pe  =  d.Ka.match(Ne,  this.re[Fc]);
        return  {  Ca:Ne,  Je:(Pe?Pe[0]:null) };
     }
   },
    Oe:  function(va,  Fc,  context)
   {
      var   xa  =  va.href;
      if  (xa)
        var   ya  =  xa.split("#")[1];
      
      if  (ya)
        return   document.getElementById(ya);

      
      for  (var   Ca  =  context  ||  va;  Ca  !=  document.documentElement;  Ca  =  Ca.parentNode)
        if  (d.Ka.match(Ca,  this.re[Fc]))
          return   Ca;
   }
};

 d.X(d.oe);

 d["ActionManager"] =  d.oe;
 d.oe["addClassNameActionListener"] =  d.oe.ze;
(function(){
 d.Qe  = {
    Re:"exclusive_",
    Se:"allExclusive_",
    Te:"delayExclusive_",
    Ue:"exclusive-reset",

    Ve:1,
    We:{},
    Xe:{},
    Ye:{},
    Ze:{},
    _f:{},
    af:{},
    bf:{},
    cf: {},

    Z:  function()
   {
      d.sa.Od(d.j,  this.df,  this);
      d.sa.Od(d.m,  this.Rd,  this);
   },

    ef:  function(Be,  ff,  gf,  hf,  jf)
   {
      var   id  =  this.Ve++;
      var   kf  =  ff[ff.length  -  1];
      for  (var   i=0;  i<Be.length;  i++)
     {
        var   Fc  =  Be[i];
        var   lf  =  ff[i];

        this.Ye[kf] =  lf;
        this.Ze[lf] =  kf;

        kf  =  lf;

        this.We[Fc] =  lf;
        this.Xe[lf] =  Fc;
        this._f[Fc] =  id;
     }

      if  (gf)
     {
        for  (var   i=0;  i<gf.length;  i++)
       {
          Be[Be.length] =  gf[i];
          this.af[gf[i]] =  true;
          this.We[gf[i]] =  ff[0];
       }
     }
      if  (hf)
     {
        for  (var   i=0;  i<hf.length;  i++)
       {
          Be[Be.length] =  hf[i];
          this.bf[hf[i]] =  true;
          this.We[hf[i]] =  ff[0];
       }
     }

      d.oe.Ae(Be,  ff,  this.mf,  this);

      if  (jf)
        for  (var   i=0;  i<jf.length;  i++)
          this.nf(jf[i],  ff[i]);
   },

    nf:  function(of,  lf)
   {
      d[of] =  function(Ca)
     {
        d.Ka.replace(Ca,  d.Qe.Ze[lf],  lf);
     };
   },

    df:  function()
   {
      this.cf  = {};
   },
    Rd:  function(Cd)
   {
      var   pf  = [];

      for  (var   i=0;  i<Cd.addCNs.length;  i++)
        this.qf(Cd.subject,  Cd.addCNs[i],  pf);

      for  (var   i=pf.length-1;  i>=0;  i--)
        this.rf(pf[i]);
   },
    mf:  function(va,  Fc,  Ne,  sf)
   {
      var   pf  = [];
      this.tf(pf,  Fc,  Ne,  sf);

      d.Ka.Nc();
      for  (var   i=pf.length-1;  i>=0;  i--)
        this.rf(pf[i]);
      d.Ka.Pc();
   },     
    tf:  function(pf,  Fc,  Ne,  sf)
   {
      var   uf  =  this.We[Fc];

      if  (this.af[Fc])
     {
        uf  =  this.Ye[sf];
        Fc  =  this.Xe[uf];
     }
      else   if  (this.bf[Fc])
     {
        uf  =  this.Ze[sf];
        Fc  =  this.Xe[uf];
     }

      if  (!d.Ka.contains(Ne,  uf))
     {
        pf[pf.length] = {
          Fc:Fc,
          Ne:Ne,
          vf:sf,
          uf:uf,
          delay:-1 
       };

        this.qf(Ne,  uf,  pf);
     }
   },

    qf:  function(Ne,  uf,  pf)
   {
      var   wf;
      
      if  (Ne.parentNode  &&  Ne.parentNode.nodeType  ==  1)
     {
        var   xf  =  Ne.parentNode;
        
        if  (!d.Ka.contains(Ne.parentNode,  "has_"  +  uf))
          d.Ka.remove(xf,  "has_\\w+");

        if  (d.Ka.contains(Ne.parentNode,  this.Re  +  uf))
          wf  =  xf.childNodes;
        else   if  (xf  =  d.za.Aa(Ne,  this.Se  +  uf,  this.Ue))
          wf  =  d.za.getElementsByTagName(xf,  d.f);

        if  (wf)
       {
          var   yf  =  this.Ye[uf];
          var   zf  =  this.Xe[yf];

          var   Af  =  false;
          var   Bf  =  wf.length;
          for  (var   i=0;  i<Bf;  i++)
         {
            var   Cf  =  wf[i];

            if  (Cf.nodeType  ==  1)
           {
              var   Df  =  d.Ka.contains(Cf,  uf);
              Af  =  Af  ||  Df;
              if  (Cf  !=  Ne  &&  Df  &&  d.sa.ta(d.r,  Cf))
             {
                if  (pf.length  >  0  &&  pf[pf.length-1].delay  == -1)
                  pf[pf.length-1].delay  =  d.ka.Za(Ne.parentNode,  this.Te, -1);

                this.tf(pf,  zf,  Cf,  uf);
             }
           }
         }

          if  (Af)
            d.Ka.add(xf,  "has_"  +  uf);
          else 
            d.Ka.remove(xf,  "has_"  +  uf);
       }
     }
   },
    
    rf:  function(Ef)
   {
      var   Ff  =  d.za.nb(Ef.Ne) +  "-"  +  this._f[Ef.Fc];
      if  (!this.cf[Ff])
     {
        this.cf[Ff] =  true;
        
        d.ka.la(
          function()
         {
            
            d.Ka.replace(Ef.Ne,  Ef.vf,  Ef.uf,  d.M);
         },
          Ef.delay 
       );
   }
   }
};

 d.X(d.Qe);

 d["Behaviors"] =  d.Qe;
 d.Qe["addStateSequence"] =  d.Qe.ef;

 
 d.Qe.ef(["collapser",  "expander"],    ["collapsed",  "expanded"],   ["expandedToggle",  "expandcollapser"],  null, ["collapse",  "expand"]);
 d.Qe.ef(["opener",     "closer"],      ["open",       "close"],      ["openToggle"],  null, ["open",  "close"]);
 d.Qe.ef(["selector",   "unselector"],  ["selected",   "unselected"], ["selectedToggle"],  null, ["select",  "unselect"]);
 d.Qe.ef(["shower",     "hider"],       ["shown",      "hidden"],     ["shownToggle",  "showswitch"],  null, ["show",  "hide"]);
 d.Qe.ef(["focuser",    "blurrer"],     ["focus",      "blur"],       ["focusToggle"],  null, ["focus",  "blur"]);
 d.Qe.ef(["onswitch",   "offswitch"],   ["on",         "off"],        ["onToggle"],  null, ["turnOn",  "turnOff"]);
 d.Qe.ef(["enabler",    "disabler"],    ["enabled",    "disabled"],   ["enabledToggle"],  null, ["enable",  "disable"]);
 d.Qe.ef(["checker",    "unchecker"],   ["checked",    "unchecked"],  ["checkedToggle"],  null, ["check",  "uncheck"]);
})();
 d.oe.Ae(
   ["classchanger"],
   [],
    function(va,  x,  Ne,  sf,  Cd,  Fe,  Ie)
   {
      d.ka.la(
        function()
       {
          d.Ka._d(Ne,  Fe);
       },
        Fe["delay"]
     );
   }
);
 d.oe.Ae(
   ["execute"],
   [],
    function(va,  Fc,  Ne,  sf,  Cd,  Fe,  Ie)
   {
      var   na  =  Fe[Fe.action];
      na  = (na!=true?na.split("_"):null);
      d.ka.Na(Fe.action)(va,  Ne,  na);
   }
);
 d.Gf  =
{
    Hf:  "activation-inert",
    If:  "delayOn",
    Jf:  "delayOff",
    Kf:  "delaySwitch",
    Lf: [],
    Mf: [],
    Nf:{},
    Of: [],
    Pf: {},
    Qf: {},
    Rf: {},

    Sf: {},
    Tf: {},
    Uf: {},
    Vf: {},
    Wf: {},
    Xf: {},

    Z:  function()
   {
      
      this.Yf("unhover",  "hover");
      this.Yf("mouseout",  "mouseover");
      this.Yf("neverhovered",  "");

      
      this.Zf("inactive",  "active",  "activator",  "inactivator",  "activate",  "inactivate");
      this.Zf("blurred",  "focused",  "focuser",  "blurrer",  "focus",  "blur");

      d.Yc.rd(document.documentElement,  "mouseover",  this._g,  this);

      d.Yc.rd(document.documentElement,  d.D,  this.we,  this);
      d.Yc.rd(document.documentElement,  "contextmenu",  this.we,  this);
      d.Yc.rd(document.documentElement,  "keyup",  this.we,  this);

      d.sa.Od(d.m,  this.Rd,  this);
   },
    Yf:  function(ag,  bg)
   {
      if  (ag)
     {
        this.Lf.push(ag);
        this.Nf[ag] =  bg;
     }
      if  (bg)
     {
        this.Lf.push(bg);
        this.Nf[bg] =  bg;
     }
      this.cg  =  "("  +  this.Lf.join("\\b|\\b") +  ")";
      this.Rf[ag] =  bg;
      this.Rf[bg] =  ag;
      
      if  (ag  &&  bg)
     {
        this.nf(bg,  bg,  ag);
        this.nf(ag,  ag,  bg);
     }
   },

    nf:  function(of,  lf,  dg)
   {
      d[of] =  function(Ca)
     {
        d.Ka.replace(Ca,  dg,  lf);
     };
   },

    Zf:  function(eg,  fg,  gg,  hg,  ig,  jg)
   {
      if  (eg)
        this.Of.push(eg);
      if  (fg)
     {
        this.Nf[fg] =  fg;
        if  (eg)
          this.Nf[eg] =  fg;
        this.Mf.push(fg);
     }
      this.kg  =  "("  +  this.Mf.join("\\b|\\b") +  ")";
      this.lg  =  "("  +  this.Of.join("\\b|\\b") +  ")";
      this.mg  =  "("  +  this.Mf.join("\\b|\\b") +  "\\b|\\b"  +  this.Of.join("\\b|\\b") +  ")";
      this.Rf[eg] =  fg;
      this.Rf[fg] =  eg;

      if  (hg)
        this.Qf[hg] =  hg;
      if  (gg  &&  hg)
     {
        this.Pf[gg] =  gg;
        d.oe.Ae([gg,  hg], [fg,  eg],  this.ng,  this);
     }

      if  (ig)
        this.nf(ig,  fg,  eg);
      if  (jg)
        this.nf(jg,  eg,  fg);
   },

    ng:  function(va,  Fc,  Ne,  sf)
   {
      var   gc  =  d.za.nb(Ne);
      var   Hc  =  d.Ka.La(Ne,  this.mg);
      var   data  = {  Ca:Ne,  Hc:Hc  };

 this.og  = (Fc  ==  "inactivator"  &&  d.Ka.contains(Ne,  "active"));
 
      if  (this.Pf[Fc])
        this.pg(gc,  data,  this.Wf,  this.Vf,  this.Xf);
      else 
     {
        Hc.Kc  =  this.Rf[Hc.Kc];
        this.qg(gc,  data,  this.Wf,  this.Vf,  this.Xf);
     }
   },

    _g:  function(Cd)
   {
      this.rg(Cd,  this.cg,  this.Tf,  this.Sf,  this.Uf);
   },

    we:  function(Cd)
   {
      if  (Cd.type  ==  "keyup"  &&  Cd.keyCode  ==  27)
        Cd.subject  =  document.body;

      var   Ca  =  Cd.subject;
      
      if  (!d.za.Aa(Ca,  this.Hf))
     {
        this.rg(
          Cd,
          this.mg,
          this.Wf,
          this.Vf,
          this.Xf,
          d.za.Aa(Ca,  this.Hf) !=  null,
          Cd.ctrlKey  ||  d.za.Aa(Ca,  this.Hf) !=  null,
          d.za.Aa(Ca,  "activation-box")
       );

        d.sa.ta("afterActivationChange",  Cd.subject);
     }
   },

    Rd:  function(Cd)
   {
      if  (!d.Ka.ic(Cd.fromValue,  this.kg) &&  d.Ka.ic(Cd.toValue,  this.kg))
        
        this.we(Cd);
      else   if  (d.Ka.ic(Cd.fromValue,  this.kg) && !d.Ka.ic(Cd.toValue,  this.kg))
     {
        
        
        
        var   gc  =  d.za.nb(Cd.subject);
        var   fd  =  this;
        setTimeout(function(){
          delete   fd.Sf[gc];
          delete   fd.Vf[gc];
       },  0);
     }
   },

    rg:  function(Cd,  sg,  tg,  ug,  vg,  wg,  xg,  yg)
   {
      
      
      if  (this.og)
     {
        this.og  =  false;
        return;
     }
      this.og  =  false;

      var   zg  = {};

 
 
      var   Ca  =  Cd.subject;
      while  (Ca  &&  Ca.nodeType  ==  1)
     {
        var   Hc  =  d.Ka.La(Ca,  sg);
        if  (
          Hc 
         && (!Hc["require"]  ||   d.za.Aa(Ca,  Hc["require"]))
         && (!Hc["disallow"] || !d.za.Aa(Ca,  Hc["disallow"]))
       )
          zg[d.za.nb(Ca)] = {  Ca:Ca,  Hc:Hc  };

        Ca  =  Ca.parentNode;
     }   

      this.Ag  =  false;

 
 
      if  (!xg)
        for  (var   gc   in   ug)
          if  (!zg[gc] && (!yg  ||  d.za.Gb(yg,  ug[gc].Ca)))
            this.qg(gc,  ug[gc],  tg,  ug,  vg);

      if  (!wg)
        for  (var   gc   in   zg)
          if  (!ug[gc] && (!yg  ||  d.za.Gb(yg,  zg[gc].Ca)))
            this.pg(gc,  zg[gc],  tg,  ug,  vg);
   },
    
    pg:  function(gc,  data,  tg,  ug,  vg)
   {
 
      if  (!ug[gc] &&  d.sa.ta(d.r,  data.Ca))
     {
        if  (vg[gc])
          this.Bg(gc,  vg);
        else 
       {
          var   delay  = (this.Ag?data.Hc[this.Kf]:0) ||  data.Hc[this.If];
          if  (delay)
         {
            tg[gc] =  data;
            data.Cg  =  d.ka.la(this.Dg,  delay,  this, [gc,  data,  tg,  vg]);
         }
          else 
            this.Eg(gc,  data,  vg);
       }
        ug[gc] =  data;
     }
   },
    qg:  function(gc,  data,  tg,  ug,  vg)
   {
 
      if  (ug[gc] &&  d.sa.ta(d.r,  data.Ca))
     {
        if  (tg[gc])
          this.Fg(gc,  tg[gc],  tg,  ug);
        else 
       {
          this.Ag  =  true  &&  data.Hc[this.Kf];
          if  (data.Hc[this.Jf])
         {
            vg[gc] =  data;
            data.Cg  =  d.ka.la(this.Gg,  data.Hc[this.Jf],  this, [gc,  vg]);
         }
          else 
            this.Hg(gc,  data);

          delete   ug[gc];
       }
     }
   },
    Fg:  function(gc,  data,  tg,  ug)
   {
      clearTimeout(data.Cg);
      delete   tg[gc];
      delete   ug[gc];
   },
    Dg:  function(gc,  data,  tg,  vg)
   {
      delete   tg[gc];
      this.Eg(gc,  data,  vg);
   },
    Eg:  function(gc,  data,  vg)
   {
      if  (d.za.Fb(data.Ca))
     {
        d.Ka.replace(data.Ca,  this.Rf[this.Nf[data.Hc.Kc]],  this.Nf[data.Hc.Kc]);

        var   Ig  =  d.za.Aa(data.Ca,  "exclusive"  +  this.Rf[data.Hc.Kc]);
        for  (var   gc   in   vg)
          if  (Ig  &&  d.za.Aa(vg[gc].Ca,  "exclusive"  +  this.Rf[data.Hc.Kc]) ==  Ig)
         {
            this.Hg(gc,  vg[gc]);
            this.Bg(gc,  vg);
         }
       }
     },
    Gg:  function(gc,  vg)
   {
      this.Hg(gc,  vg[gc]);
      delete   vg[gc];
   },
    Bg:  function(gc,  vg)
   {
      clearTimeout(vg[gc].Cg);
      delete   vg[gc];
   },
    Hg:  function(gc,  data)
   {
      if  (d.za.Fb(data.Ca))
        d.Ka.replace(data.Ca,  this.Nf[data.Hc.Kc],  this.Rf[this.Nf[data.Hc.Kc]]);
   }
};

 d.X(d.Gf);

 
 
 
 

 

 d.Jg  = {
    Kg:1,
    Lg:2,
    Mg:3,
    Ng:4,
    Og:5,
    Pg:6,
    Qg:7,
    Rg:8,
    Sg:9,
    Tg:null,
    Z:  function()
   {
      if  (d.R)
     {
        this.Ug  =  this.Vg;
        this.Wg  =  this.Xg;
     }
      d.Jg["getRawComputedStyleProperty"] =  d.Jg.Ug;

      this.Tg  = {
 
 
 
 
 
 
 
 
 
 
 
 
 
 
        "borderWidth":this.Lg,
        "borderTopWidth":this.Lg,
        "borderRightWidth":this.Lg,
        "borderBottomWidth":this.Lg,
        "borderLeftWidth":this.Lg,
        "width":this.Mg,
        "height":this.Mg,
        "scrollTop":this.Ng,
        "scrollLeft":this.Ng,
        "color":this.Og,
        "backgroundColor":this.Og,
        "borderColor":this.Og,
        "borderTopColor":this.Og,
        "borderRightColor":this.Og,
        "borderBottomColor":this.Og,
        "borderLeftColor":this.Og,
        "opacity":this.Pg,
        "zoom":this.Qg,
        "display":this.Rg,
        "float":this.Rg,
        "overflow":this.Rg,
        "position":this.Rg,
        "visibility":this.Rg,
        "zIndex":this.Sg 
     };

      this.Yg  = {};
      this.Yg[this.Kg] =  "px";
      this.Yg[this.Lg] =  "px";
      this.Yg[this.Mg] =  "px";
      this.Yg[this.Ng] =  "px";
      this.Yg[this.Og] =  "";
      this.Yg[this.Pg] =  "%";
      this.Yg[this.Qg] =  "%";
      this.Yg[this.Rg] =  "";
      this.Yg[this.Sg] =  "";
   },
    Zg:{
      "width":["offsetWidth"],
      "height":["offsetHeight"]
   },
    _h:{
      "width":["height",  "offsetHeight"],
      "height":["width",  "offsetWidth"]
   },

    ah:  function(Ca,  eb)
   {
      var   bh  =  this.Ug(Ca,  eb);
      return   this.Wg(Ca,  eb,  bh).value;
   },

    Ug:  function(Ca,  eb,  ch)
   {
      var   dh  =  this.eh(eb);
      var   fh  =  document.defaultView.getComputedStyle(Ca,  "");

      if  (fh)
        switch  (this.gh(eb))
       {
          case   this.Mg:
            if  (d.Q)
           {
              var   hh  =  this.Zg[eb];
              var   fb  =  Ca[hh[0]];
              for  (var   i=1;  i<hh.length;  i++)
                fb  -=  parseInt(Ca.currentStyle[hh[i]]);
              return   Math.max(0,  fb);
           }
          case   this.Lg:
            if  (fh.getPropertyValue(dh.replace(/width/,  "style")) ==  d.h)
              return   0;
          case   this.Sg:
          case   this.Kg:
          case   this.Qg:
          case   this.Pg:
            return   fh.getPropertyValue(dh);
          case   this.Ng:
            return   Ca[eb];
            break;
          case   this.Og:
            if  (
              dh.indexOf("border") != -1 
             &&  fh.getPropertyValue(dh.replace(/color/,  "style")) ==  d.h 
           )
              return   null;
            
          case   this.Rg:
            return   fh.getPropertyValue(dh);
       }

      return   null;
   },
    Wg:  function(Ca,  eb,  bh)
   {
      var   ih  =  this.gh(eb);

      var   Y  = {  value:  bh  };

      switch  (ih)
     {
        case   this.Sg:
        case   this.Kg:
        case   this.Qg:
          var   jh  =  parseInt(bh);
          if  (isNaN(jh))
            switch  (bh)
           {
              case   "auto":  Y.value  =  0;  break;
              default:  Y.value  =  null;
           }
          else 
            Y.kh  = (""  +  bh).replace(/^[-\d]+/,  "") ||  null;
          Y.value  =  jh;
          break;
        case   this.Pg:
          Y.value  =  Math.round(100*bh);
          break;
        case   this.Og:
          Y.value  =  this.lh(bh);
          break;
        case   this.Mg:
        case   this.Ng:
          Y.value  =  parseInt(bh);
     }

      return   Y;
   },


    Vg:  function(Ca,  eb)
   {
      
      if  (!Ca.currentStyle)
        return   null;

      switch  (this.gh(eb))
     {
        case   this.Mg:
 
 
 
            
            
            var   mh  =  Ca[this._h[eb][1]] ==  0;
            if  (mh)
              Ca.runtimeStyle[this._h[eb][0]] =  "1px";

            var   fb  =  Ca[this.Zg[eb]];

 Ca.runtimeStyle[eb] =  fb;
 fb  +=  fb  -  Ca[this.Zg[eb]];
 Ca.runtimeStyle[eb] =  "";

            if  (mh)
              Ca.runtimeStyle[this._h[eb][0]] =  "";
 

          return   fb;
        case   this.Ng:
          return   Ca[eb];
          break;
        case   this.Pg:
          try 
         {
            return   Ca.filters.item(d.K).opacity;
         }
          catch(nh)
         {
            return   100;
         }
          break;
        case   this.Kg:
        case   this.Qg:
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
        default:
          if  (eb  ==  "float")
            eb  =  "styleFloat";

          return   Ca.currentStyle[eb];
     }
   },

    Xg:  function(Ca,  eb,  bh)
   {
      var   ih  =  this.gh(eb);

      var   Y  = {  value:  bh  };
      var   jh  =  null;

      if  (bh  ==  "0px")
        bh  =  "0";

      switch  (ih)
     {
        case   this.Mg:

 jh  =  parseInt(bh);

          Y.kh  = (""  +  bh).replace(/^[-\d\.]+/,  "") ||  null;
          Y.value  =  Math.max(0,  jh);
          break;
        case   this.Og:
          Y.value  =  this.lh(bh);
          break;
        case   this.Lg:
        case   this.Sg:
        case   this.Kg:
        case   this.Qg:
          jh  =  parseInt(bh);
          if  (isNaN(jh))
            switch  (bh)
           {
              case   "auto":  jh  =  0;  break;
              case   "thin":  jh  =  2;  break;
              case   "medium":  jh  =  4;  break;
              case   "thick":jh  =  6;  break;
              default:  jh  =  parseInt(bh);
           }
          else 
            Y.kh  = (""  +  bh).replace(/^[-\d\.]+/,  "") ||  null;

          Y.value  =  jh;
          break;
     }

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

      return   Y;
   },

    oh:  function(Ca,  eb,  fb)
   {
      switch  (this.gh(eb))
     {
        case   this.Og:
          Ca.style[eb] =  "rgb("  +  fb.join(",") +  ")";
          break;
        case   this.Rg:
        case   this.Sg:
          Ca.style[eb] =  fb;
          break;
        case   this.Mg:
        case   this.Qg:
        case   this.Lg:
        case   this.Kg:
          Ca.style[eb] =  fb  +  "px";
          break;
        case   this.Ng:
          Ca[eb] =  fb  +  "px";
          break;
     }
   },

    ph:  function(Ca,  eb)
   {
      Ca.style[eb] =  "";
   },

    gh:  function(eb)
   {
      return   this.Tg[eb] ||  this.Kg;
   },

    eh:  function(eb)
   {
      return   eb.replace(/([A-Z])/g,  function(qh){  return   "-"  +  qh.toLowerCase(); });
   },
    rh: {
      "white":"#FFFFFF",  "black":"#000000","blue":"#0000FF",
      "green":"#008000",  "red":"#FF0000",  "yellow":"#FFFF00",
      "aqua":"#00FFFF","azure":"#F0FFFF","beige":"#F5F5DC",
      "black":"#000000","blue":"#0000FF","brown":"#A52A2A",
      "cyan":"#00FFFF","darkblue":"#00008B","darkcyan":"#008B8B",
      "darkgray":"#A9A9A9","darkgreen":"#006400","darkred":"#8B0000",
      "fuchsia":"#FF00FF","gold":"#FFD700","gray":"#808080",
      "green":"#008000","indigo":"#4B0082","lightblue":"#ADD8E6",
      "lightcyan":"#E0FFFF","lightgreen":"#90EE90","lightgrey":"#D3D3D3",
      "lightyellow":"#FFFFE0","lime":"#00FF00","magenta":"#FF00FF",
      "maroon":"#800000","navy":"#000080","orange":"#FFA500",
      "pink":"#FFC0CB","purple":"#800080","red":"#FF0000",
      "silver":"#C0C0C0","steelblue":"#4682B4","turquoise":"#40E0D0",
      "violet":"#EE82EE","white":"#FFFFFF","yellow":"#FFFF00" 
    },

    lh:  function(c)
   {
      c  =  this.rh[c] ||  c;

      if  (typeof(c) ==  "object")
        return   c;
      if  (c.indexOf("#") ==  0)
     {
        if  (c.length  ==  7)
          return  [
            parseInt(c.substring(1,  3),  16),
            parseInt(c.substring(3,  5),  16),
            parseInt(c.substring(5,  7),  16)
         ];
        else 
          return  [
            17*parseInt(c.substring(1,  2),  16),
            17*parseInt(c.substring(2,  3),  16),
            17*parseInt(c.substring(3,  4),  16)
         ];
     }
      if  (c.indexOf("rgb(") ==  0)
     {
        var   ea  =  c.substring(4,  c.length  -  1).split(",");
        return  [
          parseInt(ea[0]),
          parseInt(ea[1]),
          parseInt(ea[2])
       ];
     }

      return  [255,  255,  255];
   }
};

 d.X(d.Jg);

 d["StyleUtils"] =  d.Jg;
 d.Jg["getComputedStyleProperty"] =  d.Jg.ah;
 
 
 d.Animator  =  _a  = {
    sh:{},
    animate:  function(uh,  vh)
   {
      var   wh  =  uh.length;

 
 
 
 
 
 
 
 
 
 
 
      var   xh  =  10;
      var   yh  =  1  <<  xh;

      var   zh  =  7;
      var   Ah  =  1  <<  zh;

      var   code  = [
        "  Spif.HtmlDomUtils._storeScrollState();\n",
        "  var tPhase = Math.min(1, (t - TSTART)/DURATION);\n",
        "if (tPhase>=0){\n",
        "  var f = ",  _a.Bh[vh.profile],  ";\n",
        "\n" 
     ];

      var   Ch  = [];
      var   Dh  = [];
      var   Eh  = [];

      for  (var   i=0;  i<wh;  i++)
     {
        var   Fh  =  uh[i];
        var   Ca  =  Fh.element;
        var   id  =  d.za.nb(Ca);
        var   Gh  =  Fh.targetState;

 
 

        for  (var   Hh   in   Gh)
       {
          var   Ih  =  Hh;
          if  (!d.R)
            Ih  =  Hh.replace(/([A-Z])/g,  function(qh){  return   "-"  +  qh.toLowerCase(); });

          var   Jh  =  Gh[Hh];

          
          var   Kh  = (Fh.currentState&&typeof(Fh.currentState[Hh])!=d.e)?Fh.currentState[Hh]:d.Jg.ah(Ca,  Hh);

          if  (Hh  ==  "zoom")
         {
            
            Kh  *=  100;
            Jh  *=  10000;
         }

          
          _a[id  +  "el"] =  Ca;
          switch  (d.Jg.gh(Hh))
         {
            case   d.Jg.Ng:
                _a[id  +  "elscroll"] = (Ca  !=  document.body  ||  document.compatMode  ==  "BackCompat")?Ca:document.documentElement;
              break;
            case   d.Jg.Pg:
              if  (d.R)
             {
                _a[id  +  "opacity"] =  Ca.filters.item(d.K);
                break;
             }
              
            default:
              _a[id  +  "elStyle"] =  Ca.style;

              if  (vh.removeAfterwards)
 
                Eh.push("_a[\"",  id,  "elStyle\"]."  +  Hh  +  "='';\n");
         }

          
          if  (d.Jg.gh(Hh) ==  "rgb")
            Jh  =  d.Jg.lh(Jh);

          if  (Jh.constructor  ==  Array)
         {
            var   Lh  = [];
            for  (var   ld=0;  ld<Jh.length;  ld++)
              Lh[ld] =  Math.floor(Jh[ld] -  Kh[ld]);
         }
          else   if  (!isNaN(Jh))
         {
            var   Lh  =  Math.floor(Jh-Kh);
         }

          var   Mh  = (Fh.units  &&  Fh.units[Hh])?" + '"  +  Fh.units[Hh] +  "';\n":_a.Nh;

          
          switch  (d.Jg.gh(Hh))
         {
            case   d.Jg.Og:
              if  (d.R)
             {
                if  (Hh  ==  "borderColor")
                  Dh.push(
                    '_a["',  id,  'elStyle"].',  Hh,  '=["rgb(",',
                    '(',  Math.floor(Ah*(Kh[0]+0.5)),  '+cP*',  Lh[0],  ')>>',  zh,  ',",", ',
                    '(',  Math.floor(Ah*(Kh[1]+0.5)),  '+cP*',  Lh[1],  ')>>',  zh,  ',",", ',
                    '(',  Math.floor(Ah*(Kh[2]+0.5)),  '+cP*',  Lh[2],  ')>>',  zh,  ', ")"].join("");\n' 
                 );
                else 
                  Dh.push(
                    '_a["',  id,  'elStyle"].',  Hh,  '=',
                    '((',  Math.floor(Ah*(Kh[0]+0.5)),  '+cP*',  Lh[0],  ')>>',  zh,  '<<16) | ',
                    '((',  Math.floor(Ah*(Kh[1]+0.5)),  '+cP*',  Lh[1],  ')>>',  zh,  '<<8) | ',
                    '((',  Math.floor(Ah*(Kh[2]+0.5)),  '+cP*',  Lh[2],  ')>>',  zh,  ');\n' 
                 );
             }
              else 
                Dh.push(
                  '_a["',  id,  'elStyle"].',  Hh,  '=["rgb(",',
                  '(',  Math.floor(Ah*(Kh[0]+0.5)),  '+cP*',  Lh[0],  ')>>',  zh,  ',",", ',
                  '(',  Math.floor(Ah*(Kh[1]+0.5)),  '+cP*',  Lh[1],  ')>>',  zh,  ',",", ',
                  '(',  Math.floor(Ah*(Kh[2]+0.5)),  '+cP*',  Lh[2],  ')>>',  zh,  ', ")"].join("");\n' 
               );
              break;
            case   d.Jg.Pg:
              Dh.push('try{_a["',  id, (d.R?'opacity"].opacity=(':'elStyle"].opacity=(('),  Ah*(Kh+0.5),  '+cP*',  Lh,  ')>>',  zh, (d.R?';':')/100;'),  "}catch(e){};\n");
              break;
            case   d.Jg.Ng:
              Ch.push('_a["',  id,  'elscroll"].',  Hh,  '=(',  yh*(Kh+0.5),  '+normalPhase*',  Lh,  ')>>',  xh,  ';\n');
              break;
            case   d.Jg.Qg:
              Ch.push('_a["',  id,  'elStyle"].',  Hh,  '=((',  Math.floor(yh*(Kh+0.5)),  '+normalPhase*',  Lh,  ')>>',  xh,  ')/10000;\n');
            case   d.Jg.Rg:
              switch  (Hh)
             {
                case   "visibility":
                  Ca.style.visibility  =  "visible";
                  break;
                case   "display":
                  Ca.style.display  = (Jh=='none'?Kh:Jh);
                  break;
                case   "overflow":
                  Ca.style.overflow  =  "hidden";
                  break;
 
 
 
 
 
 
             }
              break;
            case   d.Jg.Sg:
              Ch.push('_a["',  id,  'elStyle"].',  Hh,  '=((',  Math.floor(yh*(Kh+0.5)),  '+normalPhase*',  Lh,  ')>>',  xh,  ')\n');
              break;
            default:
              Ch.push('_a["',  id,  'elStyle"].',  Hh,  '=((',  Math.floor(yh*(Kh+0.5)),  '+normalPhase*',  Lh,  ')>>',  xh,  ')', (Hh=='zoom'?'/10000':''),  Mh,  ";\n");
         }

       }
     }

 

      if  (Ch.length  >  0)
     {
        code.push(
          "var normalPhase=Math.round(",  yh,  "*f);\n",
          Ch.join("")
       );
     }
      if  (Dh.length  >  0)
     {
        code.push(
          'var cP=Math.round(',  Ah,  '*f);\n',
         Dh.join("")
       );
     }

 

      if  (vh.repeat)
        code.push(
          "",
          "if(t==TSTOP)",
          "{",
          "}\n");

      if  (vh.removeAfterwards)
        code.push(
          "",
          "if(t==TSTOP)",
          "{",
          Eh.join(""),
          "}\n");

      code.push("}\n\nSpif.HtmlDomUtils._restoreScrollState();");

      _a.Oh(code,  vh.delay,  vh.duration,  uh,  vh.onFinish,  vh.repeat);
   },

    Bh: [
      'tPhase',
      'tPhase*tPhase',
      '(1-Math.pow(1-tPhase, 4))',
      '(1-Math.cos('  +  Math.PI  +  '*tPhase)/2.0)',
      '(tPhase<0.5?Math.exp(3*Math.log(tPhase*2))/2:1-Math.exp(3*Math.log((1-tPhase)*2))/2)',
      '(-Math.cos('  +  4*Math.PI  +  '*tPhase) + 1)/2',
      'tPhase + (1-tPhase)*Math.sin('   +   3*Math.PI   +   '*tPhase)',
      '(1-Math.exp(4*Math.log(1-tPhase)))',
      '(1-Math.sin('  +  5*Math.PI  +  '*tPhase)/(0.0001 + '  +  5*Math.PI  +  '*tPhase))',
      '(1-Math.cos('  +  2*Math.PI  +  '*tPhase))' 
   ],

    Nh: (document.defaultView?" + 'px';\n":";\n"),
    Ph:  0,
    Qh:  null,
    Rh:  1,
    Sh:  0,
    Th:  Infinity,
    Uh:  500,
    Vh:  "",
    Oh:  function(Wh,  delay,  duration,  uh,  onFinish,  repeat)
   {
      _a.Ph++;
      _a.Rh++;

      for  (var   i=0;  i<uh.length;  i++)
        _a.sh[uh[i].element.id] =  _a.Rh++;

      if  (onFinish)
     {
        _a["__onFinish"  +  _a.Rh] =  onFinish;
        _a["__anims"  +  _a.Rh] =  uh;
     }

      Xh  = [
        "/*** ",  _a.Rh,  " ***/\n",
       (repeat?"var t=TSTART+((tNow-TSTART) % DURATION);\n":"var t=Math.min(tNow, TSTOP);\n"),
        "try {",
        Wh.join(""),
        "} catch(e){ t=TSTOP; }",
        "if(t==TSTOP)\n",
        "{\n",
        "_a.__rC(",  _a.Rh,  ");\n",
       (onFinish?("_a.__onFinish"  +  _a.Rh  +  "(_a.__anims"  +  _a.Rh  +  ");"):""),
        "\n}\n",
        "/*** /",  _a.Rh,  " ***/\n"].join("");

      var   Yh  = +new   Date() +  delay  -  _a.Sh;
      var   Zh  =  Yh  +  duration;
      if  (repeat)
        Zh  =  Infinity;
      Xh  =  Xh.replace(/TSTART/g,  Yh);
      Xh  =  Xh.replace(/DURATION/g,  duration);
      Xh  =  Xh.replace(/TSTOP/g,  Zh);
      Xh  =  Xh.replace(/RUNINDEX/g,  _a.Rh);

      if  (_a.Qh)
        _a._i(uh);

      _a.Vh  =  _a.Vh  +  Xh;

 

      _a.ai  =  Function("tNow",  _a.Vh);

 

      if  (!_a.Qh)
     {
        _a.Sh  =  0;
        _a.Th  =  Infinity;

 
 

        _a.Qh  =  setInterval(_a.bi,  1);
 _a.ci  =  true;
        _a.bi();
 _a.ci  =  false;
     }
   },
    bi:  function()
   {
      var   di  = +new   Date() -  _a.Sh;

      var   ei  =  di  -  _a.Th;
      if  (ei  >  _a.Uh)
     {
        _a.Sh  +=  ei;
        di  -=  ei;
     }

      _a.Th  =  di;

 
 

      _a.ai(di);
   },
    "__rC":  function(fi)
   {
      var   gi  =  "/*** "  +  fi  +  " ***/";
      var   hi    =  "/*** /"  +  fi  +  " ***/";
      _a.Vh  =  _a.Vh.substring(0,  _a.Vh.indexOf(gi)) +  _a.Vh.substring(_a.Vh.indexOf(hi) +  hi.length);

      _a.ai  =  Function("tNow",  _a.Vh);

      _a.ii(fi);

      _a.Ph--;
      if  (_a.Ph  ==  0)
     {
        clearInterval(_a.Qh);
        _a.sh  = {};
        _a.Qh  =  null;
     }
   },
    ii:  function(fi)
   {
      for  (var   id   in   _a.sh)
        if  (_a.sh[id] ==  fi)
          delete   _a.sh[id];
   },
   _i:  function(uh)
   {
      var   ji  = [];
      var   wh  =  uh.length;
      for  (var   i=0;  i<wh;  i++)
     {
        var   Fh  =  uh[i];
        var   Ca  =  Fh.element;
        var   id  =  Fh.element.id.replace(/(\W)/g,  "\\$1");
        var   Gh  =  Fh.targetState;

 
 

        for  (var   Hh   in   Gh)
       {
          
          switch  (Hh)
         {
            case   'scrollTop':
            case   'scrollLeft':
              ji.push("|_a\\[\"",  id,  "el\"\\]\\.",  Hh,  "[^;]+;");
              break;
            case   "opacity":
              ji.push("|try{_a\\[\"",  id,  "opacity\"\\][^;]+}catch(e){};");
              break;
            default:
              ji.push("|_a\\[\"",  id,  "elStyle\"\\]\\.",  Hh,  "[^;]+;");
              ji.push("|_a\\[\"",  id,  "elStyle\"\\]\\.",  Hh,  "='';");
         }
       }
     }

      if  (ji.length  >  0)
     {
 
        _a.Vh  =  _a.Vh.replace(new   RegExp(ji.join("").substr(1),  "g"),  "");
 
     }
   },
    ki:  function(mi)
   {
 
 
 
 
 
 
 
 
 
 
 
 
   }
};


 d.Modifiers  =  function  ()
{
    this.delay  =  0;
    this.duration  =  300;
    this.profile  =  7;
    this.removeAfterwards  =  false;
    this.repeat  =  false;
    this.onFinish  =  null;
};

 d.Modifiers.prototype  = {
    "LINEAR":0,
    "ACCELERATING":1,
    "DECELERATING":2,
    "NORMAL":3,
    "SLOWFASTSLOW":4,
    "BLINK":5,
    "HEARTBEAT":6,
    "FAST":7,
    "BOUNCE":8,
    "RETURN":9 
};

 d["Animator"] =  d.Animator;
 d.Animator["disabled"] =  d.Animator.disabled;
 d.Animator["animate"] =  d.Animator.animate;
 
 
 
 
 
 
 
 
 


 
 
 
 
 
 
 
 
 
 
 
 

 
 
 


 



 d.ni  = {
    oi:"display",
    pi:"block",
    qi:"morph",
    ri:"shallow",


    si:  true,
    ti:[
      "display",
      "overflow",
      "backgroundColor",
 
 
 
 
 
      "color",
      "fontSize",
      "height",
      "left",
      "marginTop",
 
 
      "marginLeft",
      "opacity",
 
 
 
 
 
      "top",
 
      "width",
      "zIndex" 
   ],
    ui:{},
    vi:  false,
    wi:  false,
    xi:  {  BODY:1,  DIV:1,  yi:1,  zi:1,  A:1,  IMG:1,  LI:1,  OL:1,  UL:1,  SPAN:1,  TD:1,  TH:1,  TR:1,  TABLE:1,  H1:1,  H2:1,  H3:1  },
    Z:  function()
   {
      d.sa.Od(d.k,  this.Ai,  this);
      d.sa.Od(d.l,  this.Bi,  this);
      d.sa.Od(d.n,  this.Bi,  this);
   },

    Ci:  function()
   {
      this.si  =  true;
   },
    Di:  function()
   {
      this.si  =  false;
   },
    Ei:  function()
   {
      this.wi  =  false;
   },
    Fi:  function(Gi)
   {
      d.w  =  Gi;
   },
    Hi:  function(Ii)
   {
      var   Ji  = {};
      for  (var   i=0;  i<Ii.length;  i++)
        Ji[Ii[i].toUpperCase()] =  1;
      this.xi  =  Ji;
   },
    Ki:  function(Li)
   {
      this.ti  =  Li;
   },
    Bi:  function(Cd)
   {
      if  (d.ni.si  && !Cd.bd)
        this.Mi(Cd.subject);
   },
    Mi:function(Vd)
   {
 
      var   Ni  = {};

      var   Hc  =  d.Ka.La(Vd,  this.qi, {"delay":0,  "duration":d.w});
      if  (!Hc  || (!Hc["not"] && (!Hc["require"] ||  d.Ka.contains(Vd,  Hc["require"]))))
     {
        if  (Hc)
          this.Oi(Ni,  Vd,  Hc);
        else   if  (!this.wi)
          this.Pi(Vd,  Ni);

        if  (this.vi)
       {
          this.Qi(Ni,  true);

          for  (var   gc   in   Ni)
            this.ui[gc] =  Ni[gc];
       }
     }
 
   },

    Oi:  function(mi,  Ca,  Hc)
   {
      var   gc  =  d.za.nb(Ca);
      if  (!this.ui[gc])
     {
        mi[gc] = {
          element:Ca,
          Hc:Hc,
          gb:Hc[this.Ri]||this.ti 
       };

        this.vi  =  true;
     }

      if  (!this.wi  ||  Hc["deep"])
        this.Pi(Ca,  mi);
   },

    Pi:  function(Ca,  Ni)
   {
      for  (var   Zd  =  Ca.firstChild;  Zd;  Zd  =  Zd.nextSibling)
        if  (Zd.nodeType  ==  1)
       {
          var   Hc  =  null;
          var   Si  =  false;
          if  (this.xi[Zd.nodeName])
         {
            Hc  =  d.Ka.La(Zd,  this.qi, {"delay":0,  "duration":d.w});
            if  (Hc  && !Hc["not"])
           {
              this.Oi(Ni,  Zd,  Hc);
              Si  =  true;
           }
         }

          if  (!Si)
         {
            var   Ti  =  d.Jg.Ug(Zd,  "display");
            if  (Ti  !=  d.h  && (!Hc  || !Hc[this.ri]))
              this.Pi(Zd,  Ni);
         }
       }
   },

    Ai:function()
   {
      
      
      
      if  (d.Q)
        document.body.scrollLeft  +=  0;

      if  (this.vi)
     {
        
        
        for  (var   gc   in   this.ui)
          if  (!d.za.Fb(this.ui[gc].element))
         {
            var   Ca  =  document.getElementById(gc);
            if  (Ca)
              this.ui[gc].element  =  document.getElementById(gc);
            else 
              delete   this.ui[gc];
         }

 
        this.Ui(this.ui);
 
        this.Qi(this.ui,  false);
 
        this.Vi(this.ui);
 

        var   Wi  =  this.Xi();
 

        this.vi  =  false;
        this.ui  = {};
 

        this.Yi(Wi);
 

        
        
        
        
        
        
        
        if  (d.T)
          document.body.offsetWidth;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
     }
   },
    Ui:  function(mi)
   {
 
 
 
 
 

      for  (var   gc   in   mi)
        if  (d.Animator.sh[gc])
       {
          var   Zi  =  mi[gc];
          var   Ca  =  Zi.element;

          if  (d.R)
         {
            Zi._j  =  Ca.style.cssText;
            Ca.style.cssText  =  "";
         }
          else 
            for  (var   eb   in   Zi.aj)
           {
              var   fb  =  Ca.style[eb];
              if  (fb)
             {
                Zi.bj[eb] =  fb;
                Ca.style[eb] =  "";
             }
           }
       }
   },
    Vi:  function(mi)
   {
      for  (var   gc   in   mi)
     {
        if  (d.Animator.sh[gc])
       {
          var   Zi  =  mi[gc];
          var   Ca  =  Zi.element;
          if  (d.R)
            Ca.style.cssText  =  Zi._j;
          else 
            for  (var   eb   in   Zi.bj)
              Ca.style[eb] =  Zi.bj[eb];
       }
     }
   },
    Qi:  function(mi,  cj)
   {
      var   dj  = [];
      var   ej  = [];
      var   fj  =  null;

      for  (var   gc   in   mi)
     {
        var   Zi  =  mi[gc];
        var   Ca  =  Zi.element;

 
 
 
 if  (!Ca  || !Ca.parentNode  || (Ca.offsetWidth  ==  0  && (!Ca.parentNode  ||  Ca.parentNode.offsetWidth  ==  0)))
{
    delete   mi[gc];
    continue;
}
        if  (cj)
       {
          Zi.bj  = {};
          Zi.aj  = {};
          Zi.gj  = {};
       }

        
        if  (!cj  &&  fj  &&  d.za.Gb(fj,  Ca) && (fj.style.display  ==  d.h))
       {
          delete   mi[gc];
          continue;
       }

        var   hj  = (cj?Zi.aj:Zi.gj);

        for  (var   i=0;  i<Zi.gb.length;  i++)
       {
          var   eb  =  Zi.gb[i];
 

          hj[eb] =  d.Jg.Ug(Ca,  eb);

          if  (eb  ==  this.oi  &&  hj[eb] ==  d.h)
         {
 
 
 
 
 
            
            if  (!cj  &&  Zi.aj.display  ==  d.h)
           {
              delete   mi[gc];
              break;
           }

            fj  =  Ca;
            dj.push(fj);
            ej.push(fj.style.display);
            fj.style.display  =  this.pi;
         }
       }
     }

      for  (var   i=0;  i<dj.length;  i++)
        dj[i].style.display  =  ej[i];
   },
    Xi:  function()
   {
      var   Wi  = {};
      var   ij  = {};
      for  (var   gc   in   this.ui)
     {
        var   Zi  =  this.ui[gc];
        var   Ca  =  Zi.element;
        var   currentState  = {};
        var   units  = {};
        var   targetState  = {};
        var   jj  =  false;
        for  (var   eb   in   Zi.gj)
       {
          var   kj  =  Zi.aj[eb];
          var   lj  =  Zi.gj[eb];

          if  (lj  !=  null)
         {
            
 
 
 
 
            if  (kj  !=  lj)
           {
              jj  =  true;
              var   mj  =  d.Jg.Wg(Ca,  eb,  kj);
              var   nj    =  d.Jg.Wg(Ca,  eb,  lj);
              currentState[eb] =  mj.value;
              targetState[eb] =  nj.value;
              units[eb] =  mj.kh  ||  nj.kh;
           }
         }
       }

        if  (jj)
       {
          if  (d.Q)
         {
            
            
            
            if  (targetState.top  &&  targetState.marginTop  &&  targetState.top  ==  targetState.marginTop)
              delete   targetState.top;
            if  (targetState.left  &&  targetState.marginLeft  &&  targetState.left  ==  targetState.marginLeft)
              delete   targetState.left;
         }

          var   oj  =  Wi[Zi.Hc["profile"]] =  Wi[Zi.Hc["profile"]] || {};
          var   pj  =  oj[Zi.Hc["delay"]] =  oj[Zi.Hc["delay"]] || {};
          var   uh  =  pj[Zi.Hc["duration"]] =  pj[Zi.Hc["duration"]] || [];

          uh[uh.length] = {
            element:Ca,
            currentState:currentState,
            targetState:targetState,
            units:units 
         };
       }
     }
      return   Wi;
   },
    Yi:  function(Wi)
   {
      for  (var   profile   in   Wi)
     {
        var   qj  =  Wi[profile];
        for  (var   delay   in   qj)
       {
          delay  *=  1;
          for  (var   duration   in   qj[delay])
         {
            duration  *=  1;
            var   uh  =  qj[delay][duration];
            for  (var   i=0;  i<uh.length;  i++)
           {
              var   Fh  =  uh[i];
              var   Ca  =  Fh.element;

 
 
            
              for  (var   eb   in   Fh.currentState)
             {
 
 
                d.Jg.oh(Ca,  eb,  Fh.currentState[eb]);
             }
           }

 
 
 
 
 
 
 
 
 

            var   vh  =  new   d.Modifiers();
            vh.delay  =  delay;
            vh.duration  =  duration;
            vh.profile  =  vh[(profile=="undefined"?"FAST":profile)];
 
 
            vh.removeAfterwards  =  true;

 
 
            d.Animator.animate(uh,  vh);
 
         }
       }
     }
   },
    rj:  function(sj,  tj)
   {
      for  (var   i=0;  i<sj.length;  i++)
        if  (sj[i] !=  tj[i])
          return   false;

      return   true;
   }
};
 d.X(d.ni);

 d["StyleMorpher"] =  d.ni;
 d.ni["enableDeepMorphing"] =  d.ni.Ei;
 d.ni["setMorphDuration"] =  d.ni.Fi;
 d.ni["setMorphableNodeNames"] =  d.ni.Hi;
 d.ni["setMorphableProperties"] =  d.ni.Ki;
 d.ni["enable"] =  d.ni.Ci;
 d.ni["disable"] =  d.ni.Di;

 d.ni["morph"] =  d.ni.Ai;
 d.ni["beforeClassNameChange"] =  d.ni.Bi;
 
 
 
 
 


 d.uj  = {
    vj:  null,
    wj:  null,
    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.H,  this.xj,  this);
      d.Yc.rd(document.documentElement,  d.I,  this.yj,  this);
      d.Yc.rd(document.documentElement,  d.J,    this.zj,  this);
      d.Yc.rd(document.documentElement,  "DOMMouseScroll",    this.Td,  this);

      d.sa.Od("persist-pos",  this.Aj,  this);
   },
    
    Aj:  function(Cd)
   {
      var   Ca  =  Cd.subject;
      if  (d.Ka.contains(Ca,  "movable"))
     {
        var   Bj  = {  x:  parseInt(Ca.style.left),  y:  parseInt(Ca.style.top) };
        if  (!isNaN(Bj.x) || !isNaN(Bj.y))
       {
          var   Ma  =  d.Ka.La(Ca,  "movable");
          if  (Ma[d.N])
            Ma[d.N](Ca,  Bj);
       }
     }
   },

    xj:  function(Cd)
   {
      this.zj();

      this.Cj  =  d.ka.Ba(Cd.subject,  "mover",  "movable");
      if  (this.Cj.object)
     {
        this.Cj.box  =  this.Cj.object.offsetParent  ||  d.W;

        this.Dj  =  d.W.scrollTop;
        this.Ej  =  this.Cj.object.offsetLeft  -  Cd.clientX  -  d.Jg.ah(this.Cj.object,  "marginLeft");
        this.Fj  =  this.Cj.object.offsetTop  -  Cd.clientY  -  d.Jg.ah(this.Cj.object,  "marginTop");

        this.Gj();

        this.Hj  =  false;

        
        
        Cd.cancel();
     }
      else 
        this.Cj  =  null;
   },
    yj:  function(Cd)
   {
      this.wj  =  Cd.clientY;

      if  (this.Cj)
        if  (Cd.Ld)
       {
          if  (!this.Hj)
         {
            d.Yc.md  =  true;

            if  (d.R)
              this.Cj.Ia.setCapture();

            d.Ka.replace(this.Cj.box,  "notMoving",  "moving");
            d.Ka.replace(this.Cj.object,  "notMoving",  "moving");
            d.Ka.replace(this.Cj.Ia,  "notMoving",  "moving");

            this.vj  =  d.ka.pa(this.Ij,  15,  this);

 this.Jj  =  document.body.style.MozUserSelect;
 document.body.style.MozUserSelect  =  "none";

            this.Hj  =  true;
         }

          this.Kj  = {  x:  this.Ej  +  Cd.clientX,  y:  this.Fj  +  Cd.clientY  +  d.W.scrollTop  -  this.Dj  };
          this.Lj();

          if  (this.Cj.Ma[d.N])
         {
            this.Cj.Ma[d.N](this.Cj.object,  this.Kj);
            this.Lj();
         }

          if  (this.Cj.Ja.dir  !=  "vertical")
            d.Jg.oh(this.Cj.object,  "left",  this.Kj.x);
          if  (this.Cj.Ja.dir  !=  "horizontal")
            d.Jg.oh(this.Cj.object,  "top",   this.Kj.y);
       }
        else 
          this.zj();
   },
    Td:  function(Cd)
   {
      this.zj();

      var   Mj  =  d.za.Aa(Cd.subject,  "move");
      if  (Mj)
     {
        var   Hc  =  d.Ka.La(Mj,  "move");

        if  (Hc["onMouseScroll"])
       {
          if  (this.Nj)
            clearTimeout(this.Nj);

          var   Oj  =  document.getElementById(Hc["onMouseScroll"]);
          this.Cj  = {
            box:  Oj.offsetParent  ||  d.W,
            object:  Oj,
            Ma:  d.Ka.La(Oj,  "movable")
         };
          
          this.Gj();

          var   Pj  =  this.Cj.object.offsetTop;

          var   Qj  =  Hc["delta"] ||  Math.abs(Cd.detail);

          this.Kj  = {  x:0,  y:Pj  +  Qj  *  Cd.detail  /  Math.abs(Cd.detail) };
          this.Lj();

          if  (this.Cj.Ma[d.N])
         {
            this.Cj.Ma[d.N](this.Cj.object,  this.Kj);
            this.Lj();
         }

          d.Jg.oh(this.Cj.object,  "top",   this.Kj.y);

          var   Rj  =  d.uj.Cj.Ma[d.O];
          if  (this.Cj.Ma[d.O])
         {
            var   Y  =  d.uj.Cj.object;
            var   Bj  =  d.uj.Kj;
            this.Nj  =  d.ka.la(function() {  Rj(Y,  Bj); },  500);
         }

          this.zj();
          
          Cd.cancel();
       }
     }
   },

    Gj:  function()
   {
      
      
      
      var   Sj   = -1;
      var   Tj  = -1;
      var   Uj  =  this.Cj.box;
      while  (Sj  <=  1  ||  Tj  <=  1)
     {
        Sj  = (document.compatMode  !=  "BackCompat"  ||  Uj  !=  d.W)?Uj.offsetWidth:Uj.clientWidth;
        Tj  =  Uj.offsetHeight;
        Uj  =  Uj.offsetParent  ||  d.W;
     }
      

      if  (this.Cj.Ma["restricted"])
     {
        this.Vj  =  Sj   -  d.Jg.ah(this.Cj.object,  "width") -  d.Jg.ah(this.Cj.object,  "marginRight") - (Uj  ==  d.W?2:0);
        this.Wj  =  Tj  -  d.Jg.ah(this.Cj.object,  "height") -  d.Jg.ah(this.Cj.object,  "marginBottom");
     }
   },

    Lj:  function()
   {
      if  (this.Cj.Ma["restricted"])
     {
        this.Kj.x  =  Math.max(0,  Math.min(this.Kj.x,  this.Vj)),
        this.Kj.y  =  Math.max(0,  Math.min(this.Kj.y,  this.Wj))
     }
   },
    zj:  function()
   {
      if  (this.Cj)
     {
        if  (this.Hj)
       {
          document.body.style.MozUserSelect  =  this.Jj;

          if  (this.Cj.box)
            d.Ka.replace(this.Cj.box,  "moving",  "notMoving");
          if  (this.Cj.object)
            d.Ka.replace(this.Cj.object,  "moving",  "notMoving");
          if  (this.Cj.Ia)
            d.Ka.replace(this.Cj.Ia,  "moving",  "notMoving");

          if  (this.Cj.Ma[d.O])
            this.Cj.Ma[d.O](this.Cj.object,  this.Kj);

          d.Yc.md  =  false;

          if  (d.R)
            this.Cj.Ia.releaseCapture();

          this.wj  =  null;
          clearTimeout(this.vj);
          this.vj  =  null;
       }

        this.Cj  =  null;
     }

      this.Xj  =  d.W.scrollHeight  -  d.W.offsetHeight;
   },
    Ij:  function()
   {
      if  (this.Kj  &&  this.Cj.Ja.dir  !=  "horizontal")
     {
        var   Yj  =  d.W.scrollTop;
      
        if  (this.wj  <  50)
          d.W.scrollTop  -=  Math.round(10  -  this.wj/5);

        if  (this.wj  >  d.W.offsetHeight  -  50)
          d.W.scrollTop  =  Math.min(d.W.scrollTop  +  Math.round(10  - (d.W.offsetHeight  -  this.wj)/5),  this.Xj);

        if  (d.W.scrollTop  !=  Yj)
       {
          this.Kj.y  +=  d.W.scrollTop  -  Yj;
          this.Lj();

          if  (this.Cj.Ma[d.N])
         {
            this.Cj.Ma[d.N](this.Cj.object,  this.Kj);
            this.Lj();
         }
          d.Jg.oh(this.Cj.object,  "top",   this.Kj.y);
       }
     }
   }
};

 d.X(d.uj);
 d.Zj  = {
    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.H,  this.xj,  this);
      d.Yc.rd(document.documentElement,  d.I,  this.yj,  this);
      d.Yc.rd(document.documentElement,  d.J,    this.zj,  this);

      d.sa.Od("persist-dim",  this.Aj,  this);
   },

    Aj:  function(Cd)
   {
      var   Ca  =  Cd.subject;
      if  (d.Ka.contains(Ca,  "resizable"))
     {
        var   _k  = {  width:  parseInt(Ca.style.width),  height:  parseInt(Ca.style.height) };
        if  (!isNaN(_k.width) || !isNaN(_k.height))
       {
          var   Ma  =  d.Ka.La(Ca,  "resizable");
          if  (Ma[d.N])
            Ma[d.N](Ca,  _k);
       }
     }
   },

    
    ak:  function(Cd)
   {
      Cd.cancel();
   },
    xj:  function(Cd)
   {
 
      
      this.zj();

      this.bk  =  d.ka.Ba(Cd.subject,  "resizer",  "resizable");
      if  (this.bk.object)
     {
        var   ma  =  this.bk.Ia;

        
        if  (ma.nodeName  ==  "A")
          if  (d.R)
            d.Yc.rd(ma,  "dragstart",  this.ak,  this);
          else 
            Cd.cancel();

        
        this.ck  =  d.Jg.ah(this.bk.object,  "width");
        this.dk  =  d.Jg.ah(this.bk.object,  "minWidth") ||  0;
        this.ek  =  d.Jg.ah(this.bk.object,  "maxWidth") ||  Infinity;

        this.fk  =  d.Jg.ah(this.bk.object,  "height");
        this.gk  =  d.Jg.ah(this.bk.object,  "minHeight") ||  0;
        this.hk  =  d.Jg.ah(this.bk.object,  "maxHeight") ||  Infinity;

        this.Ej  =  Cd.clientX;
        this.Fj  =  Cd.clientY;

        this.ik  =  false;
     }
      else 
        this.bk  =  null;
   },
    
    yj:  function(Cd)
   {
      if  (this.bk)
        if  (Cd.Ld)
       {
          if  (!this.ik)
         {
            d.Yc.md  =  true;

            if  (d.R)
              this.bk.Ia.setCapture();

            d.Ka.replace(this.bk.object,  "notResizing",  "resizing");
            d.Ka.replace(this.bk.Ia,  "notResizing",  "resizing");
            this.ik  =  true;
         }

          this.jk  = {
            width:this.ck  +  Cd.clientX  -  this.Ej,
            height:this.fk  +  Cd.clientY  -  this.Fj 
         };
          this.Lj();

          if  (this.bk.Ma[d.N])
         {
            this.bk.Ma[d.N](this.bk.object,  this.jk);
            this.Lj();
         }

          if  (this.bk.Ja.kk  !=  "height")
            this.bk.object.style.width   =  this.jk.width   +  "px";
          if  (this.bk.Ja.kk  !=  "width")
            this.bk.object.style.height  =  this.jk.height  +  "px";
       }
        else 
          this.zj();
   },
    Lj:  function()
   {
      this.jk.width   =  Math.max(this.dk,  Math.min(this.ek,  this.jk.width));
      this.jk.height  =  Math.max(this.gk,  Math.min(this.hk,  this.jk.height));
   },

    zj:  function()
   {
      if  (this.bk)
     {
        if  (this.ik)
       {
          d.Ka.replace(this.bk.object,  "resizing",  "notResizing");
          d.Ka.replace(this.bk.Ia,  "resizing",  "notResizing");

          if  (this.bk.Ma[d.O])
            this.bk.Ma[d.O](this.bk.object,  this.jk);

          d.Yc.md  =  false;

          if  (d.R)
            this.bk.Ia.releaseCapture();
       }

        this.bk  =  null;
     }
   }
};

 d.Zj.Z();
 d.wk  = {
    xk:"dragging",
    yk:"notDragging",
    zk:"dropping",
    Ak:"notDropping",
    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.H,  this.xj,  this);
      d.Yc.rd(document.documentElement,  d.I,  this.yj,  this);
      d.Yc.rd(document.documentElement,  d.J,    this.Bk,  this);
   },
    
    xj:  function(Cd)
   {
      
      this.zj();

      
      var   Ck  =  d.za.Aa(Cd.subject,  "dragger");
      if  (Ck)
     {
        
        var   Dk  =  d.za.Aa(Cd.subject,  "draggable");

        
        if  (Dk)
       {
          
          if  (!d.za.Aa(Cd.subject,  "dragging-disabled"))
            
            this.Ek(Dk,  Ck);

          
          
          Cd.cancel();
       }
     }
   },
    
    yj:  function(Cd)
   {
      this.wj  =  Cd.clientY;

      if  (this.Fk)
        if  (Cd.Ld)
       {
          this.Gk();

          
          Cd.cancel();

          
          this.Hk.style.left  = (d.W.scrollLeft  +  Cd.clientX) +  "px";
          this.Hk.style.top  = (d.W.scrollTop  +  5  +  this.wj) +  "px";

          
          
          
          var   Dk  =  d.za.Aa(Cd.subject,  "draggable");
          if  (Dk  !=  this.Hk)
         {
            
            var   Ik  =  d.za.Aa(Cd.subject,  "dropBox");
            if  (Ik  &&  Ik  !=  this.Jk)
           {
              
              var   Kk  =  d.ka.Wa(Ik,  "dropType",  "",  true);
              for  (var   i=0;  i<Kk.length;  i++)
                if  (!isNaN(this.Lk[Kk[i]]))
                  break;
              
              if  (i  >=  Kk.length)
                Ik  =  null;
           }

            var   Mk  =  null;

            if  (
              d.za.Aa(Cd.subject,  "noDrop",  "dropBox")
             ||
             (Ik  &&  d.za.Gb(this.Fk,  Ik))
           )
              Ik  =  null;

            if  (Ik)
           {
              var   Nk  =  d.R?Cd.clientX:(Cd.clientX  +  d.W.scrollLeft);
              if  (d.Q)
             {
                Nk  =  Cd.offsetX;
                var   Ca  =  Cd.subject;
                while  (Ca  !=  Ik)
               {
                  Nk  +=  Ca.offsetLeft;
                  Ca  =  Ca.offsetParent  ||  d.W;
               }
             }
              var   Ok  =  d.R?Cd.clientY:(Cd.clientY  +  d.W.scrollTop);
              if  (d.Q)
             {
                Ok  =  Cd.offsetY;
                var   Ca  =  Cd.subject;
                while  (Ca  !=  Ik)
               {
                  Ok  +=  Ca.offsetTop;
                  Ca  =  Ca.offsetParent  ||  d.W;
               }
             }

 this.Pk.style.display  =  "none";
              for  (var   i=0; !Mk  &&  i<Ik.childNodes.length;  i++)
             {
                var   Db  =  Ik.childNodes[i];

                if  (Db  ==  this.Pk  ||  Db  ==  this.Hk  ||  d.Ka.contains(Db,  "noDropBefore"))
                  continue;
                else   if  (Db.nodeType  ==  1)
               {
                  var   Cb  =  d.za.getBoxObjectFor(Db);
                  if  (Ok  <=  Cb.y  +  Cb.height  &&  Nk  <=  Cb.x  +  Cb.width)
                    Mk  =  Db;
               }
             }
 this.Pk.style.display  =  "";
           }
            this.Qk(Ik,  Mk);
         }
       }
        else 
          this.Bk();
   },

 wj:  null,
 Rk:  null,
 Sk:  null,
        
    Ek:  function(Dk,  Ck)
   {
      this.Tk  =  Ck;
      this.Fk  =  Dk;
      this.Uk  =  Dk.parentNode;
      this.Vk  =  Dk.nextSibling;

      
      this.Wk  =  d.ka.Wa(this.Fk,  "dragType",  "",  true);
      this.Lk  =  d.ka.bb(this.Wk);

      this.Xk  =  false;

      
      d.Ka.add(document.body,  "dragging-"  +  this.Wk.join(" dragging-"));
   },


    Gk:  function()
   {
      if  (this.Xk)
        return;

      this.Xk  =  true;

      d.Yc.md  =  true;

      if  (d.R)
        this.Tk.setCapture();

      
      var   Yk  =  d.za.ub(this.Fk,  "dragPlaceholder");
      if  (Yk)
        this.Hk  =  Yk.cloneNode(true);
      else 
     {
        this.Hk  =  this.Fk.cloneNode(true);
        this.Hk.style.width  =  this.Fk.offsetWidth  +  "px";
     }

      d.Ka.add(this.Hk,  "dragPlaceholder");
      d.Ka.replace(this.Hk,  this.yk,  this.xk);
      this.Fk.parentNode.insertBefore(this.Hk,  this.Fk);

      this.Hk.style.position  =  "absolute";
      this.Hk.style.zIndex  =  Math.pow(2,  15);
      document.body.appendChild(this.Hk);

      
      var   Zk  =  d.za.ub(this.Fk,  "dropPlaceholder");
      if  (Zk)
        this.Pk  =  Zk.cloneNode(true);
      else 
     {
        this.Pk  =  this.Fk.cloneNode(true);
 
     }
      d.Ka.add(this.Pk,  "dropPlaceholder");
      d.Ka.remove(this.Pk,  this.yk);

      
      d.Ka.replace(this.Fk,  this.yk,  this.xk);

      this.vj  =  d.ka.pa(this.Ij,  15,  this);
   },
    Qk:  function(Ik,  Mk)
   {
      if  (Ik  !=  this.Jk  ||  Mk  !=  this._l)
     {
        
        if  (this.Jk  &&  Ik  !=  this.Jk)
          d.Ka.replace(this.Jk,  this.zk,  this.Ak);

        
        this.Jk  =  Ik;
        this._l  =  Mk;

        if  (!Ik)
          this.Pk.parentNode.removeChild(this.Pk);
        else 
       {
          d.Ka.replace(Ik,  this.Ak,  this.zk);
          Ik.insertBefore(this.Pk,  Mk  ||  null);
       }
     }
   },

    Bk:  function()
   {
      if  (this.Fk)
     {
        var   al  =  d.Ka.La(this.Fk,  "draggable");
        if  (al[d.O])
          al[d.O](this.Fk);

        if  (this.Jk)
       {
          var   Dk  =  this.Fk;
          var   bl  =  this.Pk.parentNode;
          var   cl  =  this.Pk.nextSibling;

          this.zj();

          var   el  =  d.Ka.contains(this.Uk,  "clone-box") &&  bl  !=  this.Uk;
          if  (bl  !=  this.Uk  ||  cl  !=  this.Vk)
         {
            var   Mk  =  el?Dk.cloneNode(true):Dk;

            bl.insertBefore(Mk,  cl);

            var   fl  =  d.Ka.La(bl,  "dropBox");
            if  (fl[d.O])
              if  (fl[d.O](Mk,  this.Uk,  this.Vk,  bl,  cl) ==  false)
                this.Uk.insertBefore(Mk,  this.Vk);
         }
       }
     }

      this.zj();
   },

    zj:  function()
   {
      if  (this.Fk)
     {
        d.Ka.remove(document.body,  "dragging-"  +  this.Wk.join(" dragging-"));

        if  (this.Xk)
       {
          d.Ka.replace(this.Fk.parentNode,  this.xk,  this.yk);
          d.Ka.replace(this.Fk,  this.xk,  this.yk);
          if  (this.Jk)
            d.Ka.replace(this.Jk,  this.zk,  this.Ak);

          
          this.Hk.parentNode.removeChild(this.Hk);
          if  (this.Pk.parentNode)
            this.Pk.parentNode.removeChild(this.Pk);
       }

        d.Yc.md  =  false;

        if  (d.R)
          this.Tk.releaseCapture();

        this.Tk  =  null;
        this.Fk  =  null;
        this.Jk  =  null;
        this.wj  =  null;
        clearTimeout(this.vj);
        this.vj  =  null;
     }
      this.Xj  =  d.W.scrollHeight  -  d.W.offsetHeight;
   },
    
    Ij:  function()
   {
      var   Yj  =  d.W.scrollTop;
      
      if  (this.wj  <  50)
        d.W.scrollTop  -=  Math.round(10  -  this.wj/5);

      if  (this.wj  >  d.W.offsetHeight  -  50)
        d.W.scrollTop  =  Math.min(d.W.scrollTop  +  Math.round(10  - (d.W.offsetHeight  -  this.wj)/5),  this.Xj);

      if  (d.W.scrollTop  !=  Yj)
        this.Hk.style.top  = (d.W.scrollTop  +  5  +  this.wj) +  "px";
   }
};

 d.X(d.wk);


 
 
 
 
 
 
 
 
 d.Xm  = {
    Z:  function()
   {
      d.Yc.rd(document.documentElement,  d.D,  this.he,  this);
      d.Yc.rd(document.documentElement,  "keyup",  this.he,  this);
   },
    
    he:  function(Cd)
   {
      var   Ca  =  Cd.subject;
      if  (Ca.name  &&  d.Ka.contains(Ca,  "reflectable"))
     {
        var   value  =  d.za.Eb(Ca);

        if  (value  ||  Ca.Ym)
       {
          var   Zm  =  Ca.Ym?document.getElementById(Ca.Ym):d.za.Aa(Ca,  "reflector");

          if  (Zm)
         {
            if  (!Ca.Ym)
           {
              Ca.Ym  =  d.za.nb(Zm);
              d.Yc.rd(Ca,  "paste",  this._n,  this);
           }

            d.Ka.replace(Zm,  Ca.name  +  "-[^\\s]*",  Ca.name  +  "-"  +  value.replace(/[^\w\d-_]/g,  "_"));
         }
       }
     }
   },
    
    _n:  function(Cd)
   {
      d.ka.la(this.he,  0,  this, [Cd])
   }
};

 d.X(d.Xm);
 
 
 d.Ka.add(document.documentElement,  "spiffy "  +  d.ka.platform,  d.L);

 d.Yc.rd(
    window,
    d.C,
    function()
   {
      if  (document.compatMode  ==  "BackCompat"  ||  d.V)
        d.W  =  document.body;

 
 
 
 
 
 
 

      d.Ka.replace(document.body,  d.B,  d.z);

      d.sa.ta(d.o,  document.body);
   }
);

 if  (d.R)
{
    
    
    
 

 
 

    
    
    
    

    
    if  (!d.S)
   {
      try 
     {
        document.execCommand("BackgroundImageCache",  false,  true);
     }
      catch(nh){}
   }
}

 d.sa.ta("spifLoaded");

 d["documentScrollElement"] =  d.W;

