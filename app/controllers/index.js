import Ember from 'ember';

export default Ember.Controller.extend({
  
  headerMessage: 'Coming soon',
  responseMessage: '',
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),

  actions: {
      saveInvitation() {
          console.log("pressed request invitation")
          const email = this.get('emailAddress');
          const newInvitation = this.store.createRecord('invitation', { email: email });
          newInvitation.save().then((response) => {
            this.set('responseMessage', `Thank you! We've just saved your email address with the following id: ${response.get('id')}`);
            this.set('emailAddress', '');
          });
     }
 }
});