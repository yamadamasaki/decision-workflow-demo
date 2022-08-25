const schema = {
  title: '接待',
  type: 'object',
  properties: {
    件名: {type: 'string'},
    目的: {type: 'string'},
    金額: {type: 'number'},
    接待場所: {type: 'string'},
    招待予定日: {type: 'string', format: 'date'},
    接待理由: {type: 'string'},
  },
  required: ['件名', '目的', '金額', '接待場所', '招待予定日', '接待理由'],
}

export default schema
