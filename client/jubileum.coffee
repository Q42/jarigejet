
Session.setDefault('sort','birthdate');

Accounts.ui.config requestOfflineToken: google: true

Router.configure
  layoutTemplate: "layout"
  loadingTemplate: "loading"

Router.route '/',
  waitOn: ->
    qureapi.subscribe('ez_employees', null, {
      fields: {_id: 1, name: 1, birthdate: 1, dateStarted:1}
    }, {
      onError: (err,res) -> console.error(err);
    });
    # lolwut zonder deze comment laadt de pagina niet als je uitgelogd bent
    console.log('finished loading data');
  data: ->
    if (Session.get('sort') == 'birthdate')
      return Employees.find({}, sort: birthdate: 1)
    return Employees.find({}, sort: dateStarted: 1)
  onBeforeAction: ->
    if not Meteor.userId()
      @render('Login');
    else
      @next();
  template: 'jubileum'

Router.route '/login',
  template: 'login'

Template.jubileum.helpers
  dateTurns42: ->
    moment(@birthdate).add(42,'years')
  timeUntil42: ->
    moment(@birthdate).add(42,'years').from(moment())
  dateNextAnniversary: ->
    for num in [0..10]
      anniv = moment(@dateStarted).add(num*5,'years')
      if anniv.isAfter(moment())
        return anniv;
  nextAnniversary: ->
    for num in [0..10]
      anniv = moment(@dateStarted).add(num*5,'years')
      if anniv.isAfter(moment())
        return num*5 + ' years ';
  untilAnniversary: ->
    for num in [0..10]
      anniv = moment(@dateStarted).add(num*5,'years')
      if anniv.isAfter(moment())
        return anniv.from(moment());

Template.jubileum.events
  'click [data-sort]': (el) ->
    sort = $(el.target).data('sort')
    Session.set('sort', sort)