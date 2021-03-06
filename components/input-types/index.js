import Select from 'components/input-types/Select'
import Header from 'components/input-types/Header'
import Text from 'components/input-types/Text'
import Checkbox from 'components/input-types/Checkbox'
import Textarea from 'components/input-types/Textarea'
import Range from 'components/input-types/Range'
import Radio from 'components/input-types/Radio'

const schemaToInputTypesMap = {
  'header': Header,
  'text': Text,
  'select': Select,
  'checkbox': Checkbox,
  'textarea': Textarea,
  'range': Range,
  'radio': Radio
}

export default schemaToInputTypesMap
