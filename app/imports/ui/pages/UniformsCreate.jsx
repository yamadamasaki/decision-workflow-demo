import React, {useState} from 'react'
import JSONSchemaBridge from 'uniforms-bridge-json-schema'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import {AutoForm} from 'uniforms-bootstrap5'
import schemata from '../schemata'
import Dropdown from 'react-bootstrap/Dropdown'

const ajv = new Ajv({allErrors: true, useDefaults: true})
addFormats(ajv)

const SelectSchema = ({setSchema}) => (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">種類選択</Dropdown.Toggle>
      <Dropdown.Menu>
        {
          Object.entries(schemata).map(
              ([k, v]) => (<Dropdown.Item key={k} onClick={() => setSchema(v)}>{k}</Dropdown.Item>),
          )
        }
      </Dropdown.Menu>
    </Dropdown>
)

const createValidator = schema => {
  const validator = ajv.compile(schema)

  return model => {
    validator(model)
    return validator.errors?.length ? {details: validator.errors} : null
  }
}

const UniformsCreate = () => {
  const [schema, setSchema] = useState({})
  const schemaValidator = createValidator(schema)
  const bridge = new JSONSchemaBridge(schema, schemaValidator)

  return (
      <>
        <SelectSchema setSchema={setSchema}/>
        <AutoForm schema={bridge} onSubmit={console.log}/>
      </>
  )
}

export default UniformsCreate
