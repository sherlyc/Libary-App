import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    messageIsLongEnough: Ember.computed.gte('textMessage.length', 5),
    isEnabled: Ember.computed.and('isValid', 'messageIsLongEnough'),

    actions: {
        saveMessage() {
            alert(`Received email:${this.get('emailAddress')} and your message ${this.get('textMessage')}`),
            this.set('responseMessage', `We got your message and we'll get in touch soon`),
            this.set('emailAddress', ''),
            this.set('textMessage', '')

        }
    }

})