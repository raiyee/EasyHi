import {REQUIRED_BOOLEAN, REQUIRED_NUMBER, REQUIRED_STRING, getDatetime, getWeekday} from 'utils'

/**
 * 排期存在 4 种状态
 * 0 -> 无课
 * 1 -> 正常
 * 2 -> 订满
 * 3 -> 有课但已过期
 */
const statusText = (status, date) => {
  switch (status) {
    case (0):
      return '无课'
    case (2):
      return '订满'
  }
  return getWeekday(date, true)
}

export default require('./calendar-item.pug')({
  name: 'calendar-item',
  props: {
    active: REQUIRED_BOOLEAN,
    date: REQUIRED_STRING,
    status: REQUIRED_NUMBER
  },
  computed: {
    disabled() {
      return [0, 3].includes(this.status)
    },
    day() {
      return getDatetime(this.date, 'date')
    },
    statusText() {
      return statusText(this.status, this.date)
    }
  },
  methods: {
    toggleActive() {
      this.active || this.disabled || this.$emit('toggleActive')
    }
  }
})
