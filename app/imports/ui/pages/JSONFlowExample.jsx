import React, {useState} from 'react'
import {person} from '@jsonforms/examples'
import {materialCells, materialRenderers} from '@jsonforms/material-renderers'
import {JsonForms} from '@jsonforms/react/src/JsonForms'

const schema = person.schema
const uischema = person.uischema
const initialData = person.data

const JSONFlowExample = () => {
  const [data, setData] = useState(initialData)
  return (
      <>
        <h1>JSONFlowExample</h1>
        <JsonForms
            schema={schema}
            uischema={uischema}
            data={data}
            renderers={materialRenderers}
            cells={materialCells}
            onChange={({data, _errors}) => setData(data)}
        />
      </>
  )
}

export default JSONFlowExample
