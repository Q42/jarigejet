Accounts.ui.config requestOfflineToken: google: true

Router.configure
  layoutTemplate: "layout"
  loadingTemplate: "loading"

Router.onBeforeAction ->
  unless Meteor.user()
    @render "login"
  else
    @next()
  return