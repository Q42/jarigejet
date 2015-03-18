
Session.setDefault('sort','birthdate');

Accounts.config restrictCreationByEmailDomain: 'q42.nl'
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
    return Employees.find({}, sort: birthdate: 1)
  onBeforeAction: ->
    if not Meteor.userId()
      @render('Login');
    else
      @next();
  template: 'jubileum'

Router.route '/login',
  template: 'login'

Template.jubileum.helpers
  sort: (items) ->
    if Session.get('sort') is 'birthdate'
      return items
    _.sortBy items.fetch(), (el) ->
      for num in [0..10]
        anniv = moment(el.dateStarted).add(num*5,'years')
        if anniv.isAfter(moment())
          return anniv - moment();
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