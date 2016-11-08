import Mock from 'mockjs'
import moment from 'moment'
const Random = Mock.Random

Mock.mock(/\/membermessage$/, () => {
  var today = moment()
  var msg = new Array(Random.integer(1, 5)).fill(0).map(() => {
    let currDate = today.add(-Random.integer(1, 3), 'd')
    return {
      date: currDate,
      hiDate: {
        year: currDate.year(),
        month: +currDate.month() + 1,
        day: currDate.date(),
        week: '周' + Random.character('一二三四五六日')
      },
      userMessageDataList: new Array(Random.integer(1, 3)).fill(0).map(() => ({
        messageId: Random.character('number', 11),
        msgContent: Random.cword(5, 12),
        readState: Random.boolean(),
        type: Random.character('SQYWBDXZGRVX'),
        createTime: +Random.date('T')
      }))
    }
  })

  return {
    code: '0',
    data: {
      noMessage: Random.boolean() ? '亲~您还没有任何消息哟~' : '',
      msg: msg
    }
  }
})
