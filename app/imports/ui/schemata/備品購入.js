const schema = {
  title: '備品購入',
  type: 'object',
  properties: {
    件名: {type: 'string'},
    目的: {type: 'string'},
    発注先: {type: 'string'},
    金額: {type: 'number'},
    数量: {type: 'number'},
    導入予定日: {type: 'string', format: 'date'},
    導入理由: {type: 'string'},
  },
  required: ['件名', '目的', '発注先', '金額', '数量', '導入予定日', '導入理由'],
}

export default schema
