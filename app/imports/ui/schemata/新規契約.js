const schema = {
  title: '接待',
  type: 'object',
  properties: {
    件名: {type: 'string'},
    取引先: {type: 'string'},
    資本金: {type: 'number'},
    社員数: {type: 'number'},
    内容: {type: 'string'},
    理由: {type: 'string'},
  },
  required: ['件名', '取引先', '資本金', '社員数', '内容', '理由'],
}

export default schema
