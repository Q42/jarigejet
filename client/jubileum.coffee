
Router.route '/',
  waitOn: ->
    qureapi.subscribe('ez_employees', null, {
      fields: {_id: 1, name: 1, birthdate: 1, dateStarted:1}
    }, {
      onError: (err,res) -> console.error(err);
    });
  data: -> Employees.find({}, sort: birthdate: 1)
  template: 'jubileum'

Template.jubileum.helpers
  timeUntil42: ->
    moment(@birthdate).add(42,'years').from(moment())
  nextAnniversary: ->
    for num in [0..10]
      anniv = moment(@dateStarted).add(num*5,'years')
      if anniv.isAfter(moment())
        return num*5 + ' years ' + anniv.from(moment());