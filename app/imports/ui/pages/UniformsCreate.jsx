import React from 'react'
import JSONSchemaBridge from 'uniforms-bridge-json-schema'
import Ajv from 'ajv'
import {AutoForm} from 'uniforms-bootstrap5'

const ajv = new Ajv({allErrors: true, useDefaults: true})

const schema = {
  title: 'Person',
  type: 'object',
  properties: {
    firstName: {type: 'string'},
    lastName: {type: 'string'},
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0,
    },
  },
  required: ['firstName', 'lastName'],
}
const createValidator = schema => {
  const validator = ajv.compile(schema)

  return model => {
    validator(model)
    return validator.errors?.length ? {details: validator.errors} : null
  }
}
const schemaValidator = createValidator(schema)
const bridge = new JSONSchemaBridge(schema, schemaValidator)

const UniformsCreate = () => {
  return (
      <AutoForm schema={bridge} onSubmit={console.log}/>
  )
}

export default UniformsCreate
