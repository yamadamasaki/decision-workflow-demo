import React from 'react'
import JSONSchemaBridge from 'uniforms-bridge-json-schema'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {AutoForm} from 'uniforms-bootstrap5'
import 例題 from '../schemata/例題'
import 備品購入 from '../schemata/備品購入'

const ajv = new Ajv({allErrors: true, useDefaults: true})
addFormats(ajv)

const schema = 備品購入
//const schema = 例題

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
