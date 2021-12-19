const { Select } = require('./select');
const { Field } = require('./field');
const { Checkbox } = require('./checkbox');
const { Textarea } = require('./textarea');

const model = [
    { name: 'plan', type: Select, selector: '#plan' },
    { name: 'years', type: Field, selector: '#years' },
    { name: 'user', type: Select, selector: '#user' },
    { name: 'description', type: Textarea, selector: '#description' },
    { name: 'suspend', type: Checkbox, selector: '#suspend' }
]
module.exports = { model };
