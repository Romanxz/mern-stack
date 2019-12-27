import React from 'react'
import Text from '../text-fx/variants/text'

const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map((fieldName, id) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <Text color="red" key={id} uppercase bold size={18}>
            {fieldName} {formErrors[fieldName]}
          </Text>
        )
      } else {
        return ''
      }
    })}
  </div>
)

export default FormErrors
