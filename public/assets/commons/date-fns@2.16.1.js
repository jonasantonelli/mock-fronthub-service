define('date-fns@2.16.1', [], function () {
  return (function (t) {
    var e = {}
    function n(r) {
      if (e[r]) return e[r].exports
      var a = (e[r] = { i: r, l: !1, exports: {} })
      return t[r].call(a.exports, a, a.exports, n), (a.l = !0), a.exports
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t
        var r = Object.create(null)
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
          2 & e && 'string' != typeof t)
        )
          for (var a in t)
            n.d(
              r,
              a,
              function (e) {
                return t[e]
              }.bind(null, a),
            )
        return r
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default
              }
            : function () {
                return t
              }
        return n.d(e, 'a', e), e
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
      }),
      (n.p = ''),
      n((n.s = 67))
    )
  })({
    67: function (t, e, n) {
      'use strict'
      function r(t) {
        if (null === t || !0 === t || !1 === t) return NaN
        var e = Number(t)
        return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e)
      }
      function a(t, e) {
        if (e.length < t)
          throw new TypeError(
            t +
              ' argument' +
              (t > 1 ? 's' : '') +
              ' required, but only ' +
              e.length +
              ' present',
          )
      }
      function i(t) {
        a(1, arguments)
        var e = Object.prototype.toString.call(t)
        return t instanceof Date ||
          ('object' == typeof t && '[object Date]' === e)
          ? new Date(t.getTime())
          : 'number' == typeof t || '[object Number]' === e
          ? new Date(t)
          : (('string' != typeof t && '[object String]' !== e) ||
              'undefined' == typeof console ||
              (console.warn(
                "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule",
              ),
              console.warn(new Error().stack)),
            new Date(NaN))
      }
      function o(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return isNaN(o)
          ? new Date(NaN)
          : o
          ? (n.setDate(n.getDate() + o), n)
          : n
      }
      function u(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        if (isNaN(o)) return new Date(NaN)
        if (!o) return n
        var u = n.getDate(),
          s = new Date(n.getTime())
        s.setMonth(n.getMonth() + o + 1, 0)
        var c = s.getDate()
        return u >= c ? s : (n.setFullYear(s.getFullYear(), s.getMonth(), u), n)
      }
      function s(t, e) {
        if ((a(2, arguments), !e || 'object' != typeof e)) return new Date(NaN)
        var n = 'years' in e ? r(e.years) : 0,
          s = 'months' in e ? r(e.months) : 0,
          c = 'weeks' in e ? r(e.weeks) : 0,
          f = 'days' in e ? r(e.days) : 0,
          d = 'hours' in e ? r(e.hours) : 0,
          l = 'minutes' in e ? r(e.minutes) : 0,
          h = 'seconds' in e ? r(e.seconds) : 0,
          g = i(t),
          m = s || n ? u(g, s + 12 * n) : g,
          w = f || c ? o(m, f + 7 * c) : m,
          v = l + 60 * d,
          y = h + 60 * v,
          T = 1e3 * y,
          b = new Date(w.getTime() + T)
        return b
      }
      function c(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getDay()
        return 0 === n || 6 === n
      }
      function f(t) {
        return a(1, arguments), 0 === i(t).getDay()
      }
      function d(t) {
        return a(1, arguments), 6 === i(t).getDay()
      }
      function l(t, e) {
        a(2, arguments)
        var n = i(t),
          o = c(n),
          u = r(e)
        if (isNaN(u)) return new Date(NaN)
        var s = n.getHours(),
          l = u < 0 ? -1 : 1,
          h = r(u / 5)
        n.setDate(n.getDate() + 7 * h)
        for (var g = Math.abs(u % 5); g > 0; )
          n.setDate(n.getDate() + l), c(n) || (g -= 1)
        return (
          o &&
            c(n) &&
            0 !== u &&
            (d(n) && n.setDate(n.getDate() + (l < 0 ? 2 : -1)),
            f(n) && n.setDate(n.getDate() + (l < 0 ? 1 : -2))),
          n.setHours(s),
          n
        )
      }
      function h(t, e) {
        a(2, arguments)
        var n = i(t).getTime(),
          o = r(e)
        return new Date(n + o)
      }
      n.r(e),
        n.d(e, 'add', function () {
          return s
        }),
        n.d(e, 'addBusinessDays', function () {
          return l
        }),
        n.d(e, 'addDays', function () {
          return o
        }),
        n.d(e, 'addHours', function () {
          return g
        }),
        n.d(e, 'addISOWeekYears', function () {
          return k
        }),
        n.d(e, 'addMilliseconds', function () {
          return h
        }),
        n.d(e, 'addMinutes', function () {
          return x
        }),
        n.d(e, 'addMonths', function () {
          return u
        }),
        n.d(e, 'addQuarters', function () {
          return C
        }),
        n.d(e, 'addSeconds', function () {
          return S
        }),
        n.d(e, 'addWeeks', function () {
          return Y
        }),
        n.d(e, 'addYears', function () {
          return N
        }),
        n.d(e, 'areIntervalsOverlapping', function () {
          return O
        }),
        n.d(e, 'closestIndexTo', function () {
          return U
        }),
        n.d(e, 'closestTo', function () {
          return E
        }),
        n.d(e, 'compareAsc', function () {
          return H
        }),
        n.d(e, 'compareDesc', function () {
          return F
        }),
        n.d(e, 'differenceInBusinessDays', function () {
          return P
        }),
        n.d(e, 'differenceInCalendarDays', function () {
          return D
        }),
        n.d(e, 'differenceInCalendarISOWeekYears', function () {
          return R
        }),
        n.d(e, 'differenceInCalendarISOWeeks', function () {
          return q
        }),
        n.d(e, 'differenceInCalendarMonths', function () {
          return Q
        }),
        n.d(e, 'differenceInCalendarQuarters', function () {
          return X
        }),
        n.d(e, 'differenceInCalendarWeeks', function () {
          return j
        }),
        n.d(e, 'differenceInCalendarYears', function () {
          return B
        }),
        n.d(e, 'differenceInDays', function () {
          return G
        }),
        n.d(e, 'differenceInHours', function () {
          return Z
        }),
        n.d(e, 'differenceInISOWeekYears', function () {
          return $
        }),
        n.d(e, 'differenceInMilliseconds', function () {
          return A
        }),
        n.d(e, 'differenceInMinutes', function () {
          return _
        }),
        n.d(e, 'differenceInMonths', function () {
          return K
        }),
        n.d(e, 'differenceInQuarters', function () {
          return V
        }),
        n.d(e, 'differenceInSeconds', function () {
          return tt
        }),
        n.d(e, 'differenceInWeeks', function () {
          return et
        }),
        n.d(e, 'differenceInYears', function () {
          return nt
        }),
        n.d(e, 'eachDayOfInterval', function () {
          return rt
        }),
        n.d(e, 'eachHourOfInterval', function () {
          return at
        }),
        n.d(e, 'eachMonthOfInterval', function () {
          return it
        }),
        n.d(e, 'eachQuarterOfInterval', function () {
          return ut
        }),
        n.d(e, 'eachWeekOfInterval', function () {
          return st
        }),
        n.d(e, 'eachWeekendOfInterval', function () {
          return ct
        }),
        n.d(e, 'eachWeekendOfMonth', function () {
          return lt
        }),
        n.d(e, 'eachWeekendOfYear', function () {
          return mt
        }),
        n.d(e, 'eachYearOfInterval', function () {
          return wt
        }),
        n.d(e, 'endOfDay', function () {
          return vt
        }),
        n.d(e, 'endOfDecade', function () {
          return yt
        }),
        n.d(e, 'endOfHour', function () {
          return Tt
        }),
        n.d(e, 'endOfISOWeek', function () {
          return pt
        }),
        n.d(e, 'endOfISOWeekYear', function () {
          return Dt
        }),
        n.d(e, 'endOfMinute', function () {
          return Mt
        }),
        n.d(e, 'endOfMonth', function () {
          return dt
        }),
        n.d(e, 'endOfQuarter', function () {
          return kt
        }),
        n.d(e, 'endOfSecond', function () {
          return xt
        }),
        n.d(e, 'endOfToday', function () {
          return Ct
        }),
        n.d(e, 'endOfTomorrow', function () {
          return St
        }),
        n.d(e, 'endOfWeek', function () {
          return bt
        }),
        n.d(e, 'endOfYear', function () {
          return gt
        }),
        n.d(e, 'endOfYesterday', function () {
          return Yt
        }),
        n.d(e, 'format', function () {
          return ve
        }),
        n.d(e, 'formatDistance', function () {
          return pe
        }),
        n.d(e, 'formatDistanceStrict', function () {
          return De
        }),
        n.d(e, 'formatDistanceToNow', function () {
          return Me
        }),
        n.d(e, 'formatDistanceToNowStrict', function () {
          return ke
        }),
        n.d(e, 'formatDuration', function () {
          return Ce
        }),
        n.d(e, 'formatISO', function () {
          return Se
        }),
        n.d(e, 'formatISO9075', function () {
          return Ye
        }),
        n.d(e, 'formatISODuration', function () {
          return Ne
        }),
        n.d(e, 'formatRFC3339', function () {
          return Oe
        }),
        n.d(e, 'formatRFC7231', function () {
          return He
        }),
        n.d(e, 'formatRelative', function () {
          return Fe
        }),
        n.d(e, 'fromUnixTime', function () {
          return We
        }),
        n.d(e, 'getDate', function () {
          return Ie
        }),
        n.d(e, 'getDay', function () {
          return Pe
        }),
        n.d(e, 'getDayOfYear', function () {
          return Re
        }),
        n.d(e, 'getDaysInMonth', function () {
          return qe
        }),
        n.d(e, 'getDaysInYear', function () {
          return Le
        }),
        n.d(e, 'getDecade', function () {
          return Xe
        }),
        n.d(e, 'getHours', function () {
          return je
        }),
        n.d(e, 'getISODay', function () {
          return Be
        }),
        n.d(e, 'getISOWeek', function () {
          return ze
        }),
        n.d(e, 'getISOWeekYear', function () {
          return v
        }),
        n.d(e, 'getISOWeeksInYear', function () {
          return Ge
        }),
        n.d(e, 'getMilliseconds', function () {
          return Ae
        }),
        n.d(e, 'getMinutes', function () {
          return Ze
        }),
        n.d(e, 'getMonth', function () {
          return Je
        }),
        n.d(e, 'getOverlappingDaysInIntervals', function () {
          return $e
        }),
        n.d(e, 'getQuarter', function () {
          return L
        }),
        n.d(e, 'getSeconds', function () {
          return _e
        }),
        n.d(e, 'getTime', function () {
          return Ke
        }),
        n.d(e, 'getUnixTime', function () {
          return Ve
        }),
        n.d(e, 'getWeek', function () {
          return nn
        }),
        n.d(e, 'getWeekOfMonth', function () {
          return rn
        }),
        n.d(e, 'getWeekYear', function () {
          return tn
        }),
        n.d(e, 'getWeeksInMonth', function () {
          return on
        }),
        n.d(e, 'getYear', function () {
          return un
        }),
        n.d(e, 'intervalToDuration', function () {
          return dn
        }),
        n.d(e, 'isAfter', function () {
          return ln
        }),
        n.d(e, 'isBefore', function () {
          return hn
        }),
        n.d(e, 'isDate', function () {
          return gn
        }),
        n.d(e, 'isEqual', function () {
          return mn
        }),
        n.d(e, 'isExists', function () {
          return wn
        }),
        n.d(e, 'isFirstDayOfMonth', function () {
          return vn
        }),
        n.d(e, 'isFriday', function () {
          return yn
        }),
        n.d(e, 'isFuture', function () {
          return Tn
        }),
        n.d(e, 'isLastDayOfMonth', function () {
          return bn
        }),
        n.d(e, 'isLeapYear', function () {
          return Qe
        }),
        n.d(e, 'isMatch', function () {
          return lr
        }),
        n.d(e, 'isMonday', function () {
          return hr
        }),
        n.d(e, 'isPast', function () {
          return gr
        }),
        n.d(e, 'isSameDay', function () {
          return I
        }),
        n.d(e, 'isSameHour', function () {
          return wr
        }),
        n.d(e, 'isSameISOWeek', function () {
          return yr
        }),
        n.d(e, 'isSameISOWeekYear', function () {
          return Tr
        }),
        n.d(e, 'isSameMinute', function () {
          return pr
        }),
        n.d(e, 'isSameMonth', function () {
          return Dr
        }),
        n.d(e, 'isSameQuarter', function () {
          return Mr
        }),
        n.d(e, 'isSameSecond', function () {
          return xr
        }),
        n.d(e, 'isSameWeek', function () {
          return vr
        }),
        n.d(e, 'isSameYear', function () {
          return Cr
        }),
        n.d(e, 'isSaturday', function () {
          return d
        }),
        n.d(e, 'isSunday', function () {
          return f
        }),
        n.d(e, 'isThisHour', function () {
          return Sr
        }),
        n.d(e, 'isThisISOWeek', function () {
          return Yr
        }),
        n.d(e, 'isThisMinute', function () {
          return Nr
        }),
        n.d(e, 'isThisMonth', function () {
          return Or
        }),
        n.d(e, 'isThisQuarter', function () {
          return Ur
        }),
        n.d(e, 'isThisSecond', function () {
          return Er
        }),
        n.d(e, 'isThisWeek', function () {
          return Hr
        }),
        n.d(e, 'isThisYear', function () {
          return Fr
        }),
        n.d(e, 'isThursday', function () {
          return Wr
        }),
        n.d(e, 'isToday', function () {
          return Ir
        }),
        n.d(e, 'isTomorrow', function () {
          return Pr
        }),
        n.d(e, 'isTuesday', function () {
          return Rr
        }),
        n.d(e, 'isValid', function () {
          return W
        }),
        n.d(e, 'isWednesday', function () {
          return qr
        }),
        n.d(e, 'isWeekend', function () {
          return c
        }),
        n.d(e, 'isWithinInterval', function () {
          return Qr
        }),
        n.d(e, 'isYesterday', function () {
          return Lr
        }),
        n.d(e, 'lastDayOfDecade', function () {
          return Xr
        }),
        n.d(e, 'lastDayOfISOWeek', function () {
          return Br
        }),
        n.d(e, 'lastDayOfISOWeekYear', function () {
          return zr
        }),
        n.d(e, 'lastDayOfMonth', function () {
          return an
        }),
        n.d(e, 'lastDayOfQuarter', function () {
          return Gr
        }),
        n.d(e, 'lastDayOfWeek', function () {
          return jr
        }),
        n.d(e, 'lastDayOfYear', function () {
          return Ar
        }),
        n.d(e, 'lightFormat', function () {
          return Kr
        }),
        n.d(e, 'max', function () {
          return ta
        }),
        n.d(e, 'min', function () {
          return ea
        }),
        n.d(e, 'parse', function () {
          return cr
        }),
        n.d(e, 'parseISO', function () {
          return oa
        }),
        n.d(e, 'parseJSON', function () {
          return wa
        }),
        n.d(e, 'roundToNearestMinutes', function () {
          return va
        }),
        n.d(e, 'set', function () {
          return Ta
        }),
        n.d(e, 'setDate', function () {
          return ba
        }),
        n.d(e, 'setDay', function () {
          return pa
        }),
        n.d(e, 'setDayOfYear', function () {
          return Da
        }),
        n.d(e, 'setHours', function () {
          return Ma
        }),
        n.d(e, 'setISODay', function () {
          return ka
        }),
        n.d(e, 'setISOWeek', function () {
          return xa
        }),
        n.d(e, 'setISOWeekYear', function () {
          return M
        }),
        n.d(e, 'setMilliseconds', function () {
          return Ca
        }),
        n.d(e, 'setMinutes', function () {
          return Sa
        }),
        n.d(e, 'setMonth', function () {
          return ya
        }),
        n.d(e, 'setQuarter', function () {
          return Ya
        }),
        n.d(e, 'setSeconds', function () {
          return Na
        }),
        n.d(e, 'setWeek', function () {
          return Oa
        }),
        n.d(e, 'setWeekYear', function () {
          return Ua
        }),
        n.d(e, 'setYear', function () {
          return Ea
        }),
        n.d(e, 'startOfDay', function () {
          return p
        }),
        n.d(e, 'startOfDecade', function () {
          return Ha
        }),
        n.d(e, 'startOfHour', function () {
          return mr
        }),
        n.d(e, 'startOfISOWeek', function () {
          return w
        }),
        n.d(e, 'startOfISOWeekYear', function () {
          return y
        }),
        n.d(e, 'startOfMinute', function () {
          return br
        }),
        n.d(e, 'startOfMonth', function () {
          return ft
        }),
        n.d(e, 'startOfQuarter', function () {
          return ot
        }),
        n.d(e, 'startOfSecond', function () {
          return kr
        }),
        n.d(e, 'startOfToday', function () {
          return Fa
        }),
        n.d(e, 'startOfTomorrow', function () {
          return Wa
        }),
        n.d(e, 'startOfWeek', function () {
          return m
        }),
        n.d(e, 'startOfWeekYear', function () {
          return en
        }),
        n.d(e, 'startOfYear', function () {
          return ht
        }),
        n.d(e, 'startOfYesterday', function () {
          return Ia
        }),
        n.d(e, 'sub', function () {
          return fn
        }),
        n.d(e, 'subBusinessDays', function () {
          return Pa
        }),
        n.d(e, 'subDays', function () {
          return sn
        }),
        n.d(e, 'subHours', function () {
          return Ra
        }),
        n.d(e, 'subISOWeekYears', function () {
          return J
        }),
        n.d(e, 'subMilliseconds', function () {
          return Pt
        }),
        n.d(e, 'subMinutes', function () {
          return qa
        }),
        n.d(e, 'subMonths', function () {
          return cn
        }),
        n.d(e, 'subQuarters', function () {
          return Qa
        }),
        n.d(e, 'subSeconds', function () {
          return La
        }),
        n.d(e, 'subWeeks', function () {
          return Xa
        }),
        n.d(e, 'subYears', function () {
          return ja
        }),
        n.d(e, 'toDate', function () {
          return i
        }),
        n.d(e, 'maxTime', function () {
          return Ba
        }),
        n.d(e, 'minTime', function () {
          return za
        })
      function g(t, e) {
        a(2, arguments)
        var n = r(e)
        return h(t, 36e5 * n)
      }
      function m(t, e) {
        a(1, arguments)
        var n = e || {},
          o = n.locale,
          u = o && o.options && o.options.weekStartsOn,
          s = null == u ? 0 : r(u),
          c = null == n.weekStartsOn ? s : r(n.weekStartsOn)
        if (!(c >= 0 && c <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var f = i(t),
          d = f.getDay(),
          l = (d < c ? 7 : 0) + d - c
        return f.setDate(f.getDate() - l), f.setHours(0, 0, 0, 0), f
      }
      function w(t) {
        return a(1, arguments), m(t, { weekStartsOn: 1 })
      }
      function v(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = new Date(0)
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0)
        var o = w(r),
          u = new Date(0)
        u.setFullYear(n, 0, 4), u.setHours(0, 0, 0, 0)
        var s = w(u)
        return e.getTime() >= o.getTime()
          ? n + 1
          : e.getTime() >= s.getTime()
          ? n
          : n - 1
      }
      function y(t) {
        a(1, arguments)
        var e = v(t),
          n = new Date(0)
        n.setFullYear(e, 0, 4), n.setHours(0, 0, 0, 0)
        var r = w(n)
        return r
      }
      function T(t) {
        return t.getTime() % 6e4
      }
      function b(t) {
        var e = new Date(t.getTime()),
          n = Math.ceil(e.getTimezoneOffset())
        return e.setSeconds(0, 0), 6e4 * n + (n > 0 ? (6e4 + T(e)) % 6e4 : T(e))
      }
      function p(t) {
        a(1, arguments)
        var e = i(t)
        return e.setHours(0, 0, 0, 0), e
      }
      function D(t, e) {
        a(2, arguments)
        var n = p(t),
          r = p(e),
          i = n.getTime() - b(n),
          o = r.getTime() - b(r)
        return Math.round((i - o) / 864e5)
      }
      function M(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e),
          u = D(n, y(n)),
          s = new Date(0)
        return (
          s.setFullYear(o, 0, 4),
          s.setHours(0, 0, 0, 0),
          (n = y(s)).setDate(n.getDate() + u),
          n
        )
      }
      function k(t, e) {
        a(2, arguments)
        var n = r(e)
        return M(t, v(t) + n)
      }
      function x(t, e) {
        a(2, arguments)
        var n = r(e)
        return h(t, 6e4 * n)
      }
      function C(t, e) {
        a(2, arguments)
        var n = r(e),
          i = 3 * n
        return u(t, i)
      }
      function S(t, e) {
        a(2, arguments)
        var n = r(e)
        return h(t, 1e3 * n)
      }
      function Y(t, e) {
        a(2, arguments)
        var n = r(e),
          i = 7 * n
        return o(t, i)
      }
      function N(t, e) {
        a(2, arguments)
        var n = r(e)
        return u(t, 12 * n)
      }
      function O(t, e) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
        a(2, arguments)
        var r = t || {},
          o = e || {},
          u = i(r.start).getTime(),
          s = i(r.end).getTime(),
          c = i(o.start).getTime(),
          f = i(o.end).getTime()
        if (!(u <= s && c <= f)) throw new RangeError('Invalid interval')
        return n.inclusive ? u <= f && c <= s : u < f && c < s
      }
      function U(t, e) {
        a(2, arguments)
        var n = i(t)
        if (isNaN(n)) return NaN
        var r,
          o,
          u = n.getTime()
        return (
          (null == e
            ? []
            : 'function' == typeof e.forEach
            ? e
            : Array.prototype.slice.call(e)
          ).forEach(function (t, e) {
            var n = i(t)
            if (isNaN(n)) return (r = NaN), void (o = NaN)
            var a = Math.abs(u - n.getTime())
            ;(null == r || a < o) && ((r = e), (o = a))
          }),
          r
        )
      }
      function E(t, e) {
        a(2, arguments)
        var n = i(t)
        if (isNaN(n)) return new Date(NaN)
        var r,
          o,
          u = n.getTime()
        return (
          (null == e
            ? []
            : 'function' == typeof e.forEach
            ? e
            : Array.prototype.slice.call(e)
          ).forEach(function (t) {
            var e = i(t)
            if (isNaN(e)) return (r = new Date(NaN)), void (o = NaN)
            var n = Math.abs(u - e.getTime())
            ;(null == r || n < o) && ((r = e), (o = n))
          }),
          r
        )
      }
      function H(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = n.getTime() - r.getTime()
        return o < 0 ? -1 : o > 0 ? 1 : o
      }
      function F(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = n.getTime() - r.getTime()
        return o > 0 ? -1 : o < 0 ? 1 : o
      }
      function W(t) {
        a(1, arguments)
        var e = i(t)
        return !isNaN(e)
      }
      function I(t, e) {
        a(2, arguments)
        var n = p(t),
          r = p(e)
        return n.getTime() === r.getTime()
      }
      function P(t, e) {
        a(2, arguments)
        var n = i(t),
          u = i(e)
        if (!W(n) || !W(u)) return new Date(NaN)
        var s = D(n, u),
          f = s < 0 ? -1 : 1,
          d = r(s / 7),
          l = 5 * d
        for (u = o(u, 7 * d); !I(n, u); ) (l += c(u) ? 0 : f), (u = o(u, f))
        return 0 === l ? 0 : l
      }
      function R(t, e) {
        return a(2, arguments), v(t) - v(e)
      }
      function q(t, e) {
        a(2, arguments)
        var n = w(t),
          r = w(e),
          i = n.getTime() - b(n),
          o = r.getTime() - b(r)
        return Math.round((i - o) / 6048e5)
      }
      function Q(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = n.getFullYear() - r.getFullYear(),
          u = n.getMonth() - r.getMonth()
        return 12 * o + u
      }
      function L(t) {
        a(1, arguments)
        var e = i(t),
          n = Math.floor(e.getMonth() / 3) + 1
        return n
      }
      function X(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = n.getFullYear() - r.getFullYear(),
          u = L(n) - L(r)
        return 4 * o + u
      }
      function j(t, e, n) {
        a(2, arguments)
        var r = m(t, n),
          i = m(e, n),
          o = r.getTime() - b(r),
          u = i.getTime() - b(i)
        return Math.round((o - u) / 6048e5)
      }
      function B(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getFullYear() - r.getFullYear()
      }
      function z(t, e) {
        var n =
          t.getFullYear() - e.getFullYear() ||
          t.getMonth() - e.getMonth() ||
          t.getDate() - e.getDate() ||
          t.getHours() - e.getHours() ||
          t.getMinutes() - e.getMinutes() ||
          t.getSeconds() - e.getSeconds() ||
          t.getMilliseconds() - e.getMilliseconds()
        return n < 0 ? -1 : n > 0 ? 1 : n
      }
      function G(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = z(n, r),
          u = Math.abs(D(n, r))
        n.setDate(n.getDate() - o * u)
        var s = z(n, r) === -o,
          c = o * (u - s)
        return 0 === c ? 0 : c
      }
      function A(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getTime() - r.getTime()
      }
      function Z(t, e) {
        a(2, arguments)
        var n = A(t, e) / 36e5
        return n > 0 ? Math.floor(n) : Math.ceil(n)
      }
      function J(t, e) {
        a(2, arguments)
        var n = r(e)
        return k(t, -n)
      }
      function $(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = H(n, r),
          u = Math.abs(R(n, r)),
          s = H((n = J(n, o * u)), r) === -o,
          c = o * (u - s)
        return 0 === c ? 0 : c
      }
      function _(t, e) {
        a(2, arguments)
        var n = A(t, e) / 6e4
        return n > 0 ? Math.floor(n) : Math.ceil(n)
      }
      function K(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = H(n, r),
          u = Math.abs(Q(n, r))
        n.setMonth(n.getMonth() - o * u)
        var s = H(n, r) === -o,
          c = o * (u - s)
        return 0 === c ? 0 : c
      }
      function V(t, e) {
        a(2, arguments)
        var n = K(t, e) / 3
        return n > 0 ? Math.floor(n) : Math.ceil(n)
      }
      function tt(t, e) {
        a(2, arguments)
        var n = A(t, e) / 1e3
        return n > 0 ? Math.floor(n) : Math.ceil(n)
      }
      function et(t, e) {
        a(2, arguments)
        var n = G(t, e) / 7
        return n > 0 ? Math.floor(n) : Math.ceil(n)
      }
      function nt(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e),
          o = H(n, r),
          u = Math.abs(B(n, r))
        n.setFullYear('1584'), r.setFullYear('1584')
        var s = H(n, r) === -o,
          c = o * (u - s)
        return 0 === c ? 0 : c
      }
      function rt(t, e) {
        a(1, arguments)
        var n = t || {},
          r = i(n.start),
          o = i(n.end),
          u = o.getTime()
        if (!(r.getTime() <= u)) throw new RangeError('Invalid interval')
        var s = [],
          c = r
        c.setHours(0, 0, 0, 0)
        var f = e && 'step' in e ? Number(e.step) : 1
        if (f < 1 || isNaN(f))
          throw new RangeError('`options.step` must be a number greater than 1')
        for (; c.getTime() <= u; )
          s.push(i(c)), c.setDate(c.getDate() + f), c.setHours(0, 0, 0, 0)
        return s
      }
      function at(t, e) {
        a(1, arguments)
        var n = t || {},
          r = i(n.start),
          o = i(n.end),
          u = r.getTime(),
          s = o.getTime()
        if (!(u <= s)) throw new RangeError('Invalid interval')
        var c = [],
          f = r
        f.setMinutes(0, 0, 0)
        var d = e && 'step' in e ? Number(e.step) : 1
        if (d < 1 || isNaN(d))
          throw new RangeError('`options.step` must be a number greater than 1')
        for (; f.getTime() <= s; ) c.push(i(f)), (f = g(f, d))
        return c
      }
      function it(t) {
        a(1, arguments)
        var e = t || {},
          n = i(e.start),
          r = i(e.end),
          o = r.getTime()
        if (!(n.getTime() <= o)) throw new RangeError('Invalid interval')
        var u = [],
          s = n
        for (s.setHours(0, 0, 0, 0), s.setDate(1); s.getTime() <= o; )
          u.push(i(s)), s.setMonth(s.getMonth() + 1)
        return u
      }
      function ot(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth(),
          r = n - (n % 3)
        return e.setMonth(r, 1), e.setHours(0, 0, 0, 0), e
      }
      function ut(t) {
        a(1, arguments)
        var e = t || {},
          n = i(e.start),
          r = i(e.end),
          o = r.getTime()
        if (!(n.getTime() <= o)) throw new RangeError('Invalid interval')
        var u = ot(n),
          s = ot(r)
        o = s.getTime()
        for (var c = [], f = u; f.getTime() <= o; ) c.push(i(f)), (f = C(f, 1))
        return c
      }
      function st(t, e) {
        a(1, arguments)
        var n = t || {},
          r = i(n.start),
          o = i(n.end),
          u = o.getTime()
        if (!(r.getTime() <= u)) throw new RangeError('Invalid interval')
        var s = m(r, e),
          c = m(o, e)
        s.setHours(15), c.setHours(15), (u = c.getTime())
        for (var f = [], d = s; d.getTime() <= u; )
          d.setHours(0), f.push(i(d)), (d = Y(d, 1)).setHours(15)
        return f
      }
      function ct(t) {
        a(1, arguments)
        for (var e = rt(t), n = [], r = 0; r < e.length; ) {
          var i = e[r++]
          c(i) && (n.push(i), f(i) && (r += 5))
        }
        return n
      }
      function ft(t) {
        a(1, arguments)
        var e = i(t)
        return e.setDate(1), e.setHours(0, 0, 0, 0), e
      }
      function dt(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth()
        return (
          e.setFullYear(e.getFullYear(), n + 1, 0),
          e.setHours(23, 59, 59, 999),
          e
        )
      }
      function lt(t) {
        a(1, arguments)
        var e = ft(t)
        if (isNaN(e)) throw new RangeError('The passed date is invalid')
        var n = dt(t)
        return ct({ start: e, end: n })
      }
      function ht(t) {
        a(1, arguments)
        var e = i(t),
          n = new Date(0)
        return n.setFullYear(e.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n
      }
      function gt(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear()
        return e.setFullYear(n + 1, 0, 0), e.setHours(23, 59, 59, 999), e
      }
      function mt(t) {
        a(1, arguments)
        var e = ht(t)
        if (isNaN(e)) throw new RangeError('The passed date is invalid')
        var n = gt(t)
        return ct({ start: e, end: n })
      }
      function wt(t) {
        a(1, arguments)
        var e = t || {},
          n = i(e.start),
          r = i(e.end),
          o = r.getTime()
        if (!(n.getTime() <= o)) throw new RangeError('Invalid interval')
        var u = [],
          s = n
        for (s.setHours(0, 0, 0, 0), s.setMonth(0, 1); s.getTime() <= o; )
          u.push(i(s)), s.setFullYear(s.getFullYear() + 1)
        return u
      }
      function vt(t) {
        a(1, arguments)
        var e = i(t)
        return e.setHours(23, 59, 59, 999), e
      }
      function yt(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = 9 + 10 * Math.floor(n / 10)
        return e.setFullYear(r, 11, 31), e.setHours(23, 59, 59, 999), e
      }
      function Tt(t) {
        a(1, arguments)
        var e = i(t)
        return e.setMinutes(59, 59, 999), e
      }
      function bt(t, e) {
        a(1, arguments)
        var n = e || {},
          o = n.locale,
          u = o && o.options && o.options.weekStartsOn,
          s = null == u ? 0 : r(u),
          c = null == n.weekStartsOn ? s : r(n.weekStartsOn)
        if (!(c >= 0 && c <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var f = i(t),
          d = f.getDay(),
          l = 6 + (d < c ? -7 : 0) - (d - c)
        return f.setDate(f.getDate() + l), f.setHours(23, 59, 59, 999), f
      }
      function pt(t) {
        return a(1, arguments), bt(t, { weekStartsOn: 1 })
      }
      function Dt(t) {
        a(1, arguments)
        var e = v(t),
          n = new Date(0)
        n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0)
        var r = w(n)
        return r.setMilliseconds(r.getMilliseconds() - 1), r
      }
      function Mt(t) {
        a(1, arguments)
        var e = i(t)
        return e.setSeconds(59, 999), e
      }
      function kt(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth(),
          r = n - (n % 3) + 3
        return e.setMonth(r, 0), e.setHours(23, 59, 59, 999), e
      }
      function xt(t) {
        a(1, arguments)
        var e = i(t)
        return e.setMilliseconds(999), e
      }
      function Ct() {
        return vt(Date.now())
      }
      function St() {
        var t = new Date(),
          e = t.getFullYear(),
          n = t.getMonth(),
          r = t.getDate(),
          a = new Date(0)
        return a.setFullYear(e, n, r + 1), a.setHours(23, 59, 59, 999), a
      }
      function Yt() {
        var t = new Date(),
          e = t.getFullYear(),
          n = t.getMonth(),
          r = t.getDate(),
          a = new Date(0)
        return a.setFullYear(e, n, r - 1), a.setHours(23, 59, 59, 999), a
      }
      var Nt = {
        lessThanXSeconds: {
          one: 'less than a second',
          other: 'less than {{count}} seconds',
        },
        xSeconds: { one: '1 second', other: '{{count}} seconds' },
        halfAMinute: 'half a minute',
        lessThanXMinutes: {
          one: 'less than a minute',
          other: 'less than {{count}} minutes',
        },
        xMinutes: { one: '1 minute', other: '{{count}} minutes' },
        aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
        xHours: { one: '1 hour', other: '{{count}} hours' },
        xDays: { one: '1 day', other: '{{count}} days' },
        aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
        xWeeks: { one: '1 week', other: '{{count}} weeks' },
        aboutXMonths: { one: 'about 1 month', other: 'about {{count}} months' },
        xMonths: { one: '1 month', other: '{{count}} months' },
        aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
        xYears: { one: '1 year', other: '{{count}} years' },
        overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
        almostXYears: { one: 'almost 1 year', other: 'almost {{count}} years' },
      }
      function Ot(t) {
        return function (e) {
          var n = e || {},
            r = n.width ? String(n.width) : t.defaultWidth
          return t.formats[r] || t.formats[t.defaultWidth]
        }
      }
      var Ut = {
          date: Ot({
            formats: {
              full: 'EEEE, MMMM do, y',
              long: 'MMMM do, y',
              medium: 'MMM d, y',
              short: 'MM/dd/yyyy',
            },
            defaultWidth: 'full',
          }),
          time: Ot({
            formats: {
              full: 'h:mm:ss a zzzz',
              long: 'h:mm:ss a z',
              medium: 'h:mm:ss a',
              short: 'h:mm a',
            },
            defaultWidth: 'full',
          }),
          dateTime: Ot({
            formats: {
              full: "{{date}} 'at' {{time}}",
              long: "{{date}} 'at' {{time}}",
              medium: '{{date}}, {{time}}',
              short: '{{date}}, {{time}}',
            },
            defaultWidth: 'full',
          }),
        },
        Et = {
          lastWeek: "'last' eeee 'at' p",
          yesterday: "'yesterday at' p",
          today: "'today at' p",
          tomorrow: "'tomorrow at' p",
          nextWeek: "eeee 'at' p",
          other: 'P',
        }
      function Ht(t) {
        return function (e, n) {
          var r,
            a = n || {}
          if (
            'formatting' === (a.context ? String(a.context) : 'standalone') &&
            t.formattingValues
          ) {
            var i = t.defaultFormattingWidth || t.defaultWidth,
              o = a.width ? String(a.width) : i
            r = t.formattingValues[o] || t.formattingValues[i]
          } else {
            var u = t.defaultWidth,
              s = a.width ? String(a.width) : t.defaultWidth
            r = t.values[s] || t.values[u]
          }
          return r[t.argumentCallback ? t.argumentCallback(e) : e]
        }
      }
      function Ft(t) {
        return function (e, n) {
          var r = String(e),
            a = n || {},
            i = a.width,
            o =
              (i && t.matchPatterns[i]) || t.matchPatterns[t.defaultMatchWidth],
            u = r.match(o)
          if (!u) return null
          var s,
            c = u[0],
            f =
              (i && t.parsePatterns[i]) || t.parsePatterns[t.defaultParseWidth]
          return (
            (s =
              '[object Array]' === Object.prototype.toString.call(f)
                ? (function (t, e) {
                    for (var n = 0; n < t.length; n++) if (e(t[n])) return n
                  })(f, function (t) {
                    return t.test(c)
                  })
                : (function (t, e) {
                    for (var n in t)
                      if (t.hasOwnProperty(n) && e(t[n])) return n
                  })(f, function (t) {
                    return t.test(c)
                  })),
            (s = t.valueCallback ? t.valueCallback(s) : s),
            {
              value: (s = a.valueCallback ? a.valueCallback(s) : s),
              rest: r.slice(c.length),
            }
          )
        }
      }
      var Wt,
        It = {
          code: 'en-US',
          formatDistance: function (t, e, n) {
            var r
            return (
              (n = n || {}),
              (r =
                'string' == typeof Nt[t]
                  ? Nt[t]
                  : 1 === e
                  ? Nt[t].one
                  : Nt[t].other.replace('{{count}}', e)),
              n.addSuffix ? (n.comparison > 0 ? 'in ' + r : r + ' ago') : r
            )
          },
          formatLong: Ut,
          formatRelative: function (t, e, n, r) {
            return Et[t]
          },
          localize: {
            ordinalNumber: function (t, e) {
              var n = Number(t),
                r = n % 100
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + 'st'
                  case 2:
                    return n + 'nd'
                  case 3:
                    return n + 'rd'
                }
              return n + 'th'
            },
            era: Ht({
              values: {
                narrow: ['B', 'A'],
                abbreviated: ['BC', 'AD'],
                wide: ['Before Christ', 'Anno Domini'],
              },
              defaultWidth: 'wide',
            }),
            quarter: Ht({
              values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: [
                  '1st quarter',
                  '2nd quarter',
                  '3rd quarter',
                  '4th quarter',
                ],
              },
              defaultWidth: 'wide',
              argumentCallback: function (t) {
                return Number(t) - 1
              },
            }),
            month: Ht({
              values: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                abbreviated: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                wide: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              defaultWidth: 'wide',
            }),
            day: Ht({
              values: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                wide: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              defaultWidth: 'wide',
            }),
            dayPeriod: Ht({
              values: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
              },
              defaultWidth: 'wide',
              formattingValues: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
              },
              defaultFormattingWidth: 'wide',
            }),
          },
          match: {
            ordinalNumber:
              ((Wt = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (t) {
                  return parseInt(t, 10)
                },
              }),
              function (t, e) {
                var n = String(t),
                  r = e || {},
                  a = n.match(Wt.matchPattern)
                if (!a) return null
                var i = a[0],
                  o = n.match(Wt.parsePattern)
                if (!o) return null
                var u = Wt.valueCallback ? Wt.valueCallback(o[0]) : o[0]
                return {
                  value: (u = r.valueCallback ? r.valueCallback(u) : u),
                  rest: n.slice(i.length),
                }
              }),
            era: Ft({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: 'any',
            }),
            quarter: Ft({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: 'any',
              valueCallback: function (t) {
                return t + 1
              },
            }),
            month: Ft({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: 'any',
            }),
            day: Ft({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: 'any',
            }),
            dayPeriod: Ft({
              matchPatterns: {
                narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: 'any',
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: 'any',
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        }
      function Pt(t, e) {
        a(2, arguments)
        var n = r(e)
        return h(t, -n)
      }
      function Rt(t, e) {
        for (
          var n = t < 0 ? '-' : '', r = Math.abs(t).toString();
          r.length < e;

        )
          r = '0' + r
        return n + r
      }
      var qt = {
        y: function (t, e) {
          var n = t.getUTCFullYear(),
            r = n > 0 ? n : 1 - n
          return Rt('yy' === e ? r % 100 : r, e.length)
        },
        M: function (t, e) {
          var n = t.getUTCMonth()
          return 'M' === e ? String(n + 1) : Rt(n + 1, 2)
        },
        d: function (t, e) {
          return Rt(t.getUTCDate(), e.length)
        },
        a: function (t, e) {
          var n = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
          switch (e) {
            case 'a':
            case 'aa':
            case 'aaa':
              return n.toUpperCase()
            case 'aaaaa':
              return n[0]
            case 'aaaa':
            default:
              return 'am' === n ? 'a.m.' : 'p.m.'
          }
        },
        h: function (t, e) {
          return Rt(t.getUTCHours() % 12 || 12, e.length)
        },
        H: function (t, e) {
          return Rt(t.getUTCHours(), e.length)
        },
        m: function (t, e) {
          return Rt(t.getUTCMinutes(), e.length)
        },
        s: function (t, e) {
          return Rt(t.getUTCSeconds(), e.length)
        },
        S: function (t, e) {
          var n = e.length,
            r = t.getUTCMilliseconds()
          return Rt(Math.floor(r * Math.pow(10, n - 3)), e.length)
        },
      }
      function Qt(t) {
        a(1, arguments)
        var e = 1,
          n = i(t),
          r = n.getUTCDay(),
          o = (r < e ? 7 : 0) + r - e
        return n.setUTCDate(n.getUTCDate() - o), n.setUTCHours(0, 0, 0, 0), n
      }
      function Lt(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getUTCFullYear(),
          r = new Date(0)
        r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0)
        var o = Qt(r),
          u = new Date(0)
        u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0)
        var s = Qt(u)
        return e.getTime() >= o.getTime()
          ? n + 1
          : e.getTime() >= s.getTime()
          ? n
          : n - 1
      }
      function Xt(t) {
        a(1, arguments)
        var e = Lt(t),
          n = new Date(0)
        n.setUTCFullYear(e, 0, 4), n.setUTCHours(0, 0, 0, 0)
        var r = Qt(n)
        return r
      }
      function jt(t) {
        a(1, arguments)
        var e = i(t),
          n = Qt(e).getTime() - Xt(e).getTime()
        return Math.round(n / 6048e5) + 1
      }
      function Bt(t, e) {
        a(1, arguments)
        var n = e || {},
          o = n.locale,
          u = o && o.options && o.options.weekStartsOn,
          s = null == u ? 0 : r(u),
          c = null == n.weekStartsOn ? s : r(n.weekStartsOn)
        if (!(c >= 0 && c <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var f = i(t),
          d = f.getUTCDay(),
          l = (d < c ? 7 : 0) + d - c
        return f.setUTCDate(f.getUTCDate() - l), f.setUTCHours(0, 0, 0, 0), f
      }
      function zt(t, e) {
        a(1, arguments)
        var n = i(t, e),
          o = n.getUTCFullYear(),
          u = e || {},
          s = u.locale,
          c = s && s.options && s.options.firstWeekContainsDate,
          f = null == c ? 1 : r(c),
          d = null == u.firstWeekContainsDate ? f : r(u.firstWeekContainsDate)
        if (!(d >= 1 && d <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively',
          )
        var l = new Date(0)
        l.setUTCFullYear(o + 1, 0, d), l.setUTCHours(0, 0, 0, 0)
        var h = Bt(l, e),
          g = new Date(0)
        g.setUTCFullYear(o, 0, d), g.setUTCHours(0, 0, 0, 0)
        var m = Bt(g, e)
        return n.getTime() >= h.getTime()
          ? o + 1
          : n.getTime() >= m.getTime()
          ? o
          : o - 1
      }
      function Gt(t, e) {
        a(1, arguments)
        var n = e || {},
          i = n.locale,
          o = i && i.options && i.options.firstWeekContainsDate,
          u = null == o ? 1 : r(o),
          s = null == n.firstWeekContainsDate ? u : r(n.firstWeekContainsDate),
          c = zt(t, e),
          f = new Date(0)
        f.setUTCFullYear(c, 0, s), f.setUTCHours(0, 0, 0, 0)
        var d = Bt(f, e)
        return d
      }
      function At(t, e) {
        a(1, arguments)
        var n = i(t),
          r = Bt(n, e).getTime() - Gt(n, e).getTime()
        return Math.round(r / 6048e5) + 1
      }
      var Zt = 'midnight',
        Jt = 'noon',
        $t = 'morning',
        _t = 'afternoon',
        Kt = 'evening',
        Vt = 'night'
      function te(t, e) {
        var n = t > 0 ? '-' : '+',
          r = Math.abs(t),
          a = Math.floor(r / 60),
          i = r % 60
        if (0 === i) return n + String(a)
        var o = e || ''
        return n + String(a) + o + Rt(i, 2)
      }
      function ee(t, e) {
        return t % 60 == 0
          ? (t > 0 ? '-' : '+') + Rt(Math.abs(t) / 60, 2)
          : ne(t, e)
      }
      function ne(t, e) {
        var n = e || '',
          r = t > 0 ? '-' : '+',
          a = Math.abs(t)
        return r + Rt(Math.floor(a / 60), 2) + n + Rt(a % 60, 2)
      }
      var re = {
        G: function (t, e, n) {
          var r = t.getUTCFullYear() > 0 ? 1 : 0
          switch (e) {
            case 'G':
            case 'GG':
            case 'GGG':
              return n.era(r, { width: 'abbreviated' })
            case 'GGGGG':
              return n.era(r, { width: 'narrow' })
            case 'GGGG':
            default:
              return n.era(r, { width: 'wide' })
          }
        },
        y: function (t, e, n) {
          if ('yo' === e) {
            var r = t.getUTCFullYear(),
              a = r > 0 ? r : 1 - r
            return n.ordinalNumber(a, { unit: 'year' })
          }
          return qt.y(t, e)
        },
        Y: function (t, e, n, r) {
          var a = zt(t, r),
            i = a > 0 ? a : 1 - a
          return 'YY' === e
            ? Rt(i % 100, 2)
            : 'Yo' === e
            ? n.ordinalNumber(i, { unit: 'year' })
            : Rt(i, e.length)
        },
        R: function (t, e) {
          return Rt(Lt(t), e.length)
        },
        u: function (t, e) {
          return Rt(t.getUTCFullYear(), e.length)
        },
        Q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3)
          switch (e) {
            case 'Q':
              return String(r)
            case 'QQ':
              return Rt(r, 2)
            case 'Qo':
              return n.ordinalNumber(r, { unit: 'quarter' })
            case 'QQQ':
              return n.quarter(r, {
                width: 'abbreviated',
                context: 'formatting',
              })
            case 'QQQQQ':
              return n.quarter(r, { width: 'narrow', context: 'formatting' })
            case 'QQQQ':
            default:
              return n.quarter(r, { width: 'wide', context: 'formatting' })
          }
        },
        q: function (t, e, n) {
          var r = Math.ceil((t.getUTCMonth() + 1) / 3)
          switch (e) {
            case 'q':
              return String(r)
            case 'qq':
              return Rt(r, 2)
            case 'qo':
              return n.ordinalNumber(r, { unit: 'quarter' })
            case 'qqq':
              return n.quarter(r, {
                width: 'abbreviated',
                context: 'standalone',
              })
            case 'qqqqq':
              return n.quarter(r, { width: 'narrow', context: 'standalone' })
            case 'qqqq':
            default:
              return n.quarter(r, { width: 'wide', context: 'standalone' })
          }
        },
        M: function (t, e, n) {
          var r = t.getUTCMonth()
          switch (e) {
            case 'M':
            case 'MM':
              return qt.M(t, e)
            case 'Mo':
              return n.ordinalNumber(r + 1, { unit: 'month' })
            case 'MMM':
              return n.month(r, { width: 'abbreviated', context: 'formatting' })
            case 'MMMMM':
              return n.month(r, { width: 'narrow', context: 'formatting' })
            case 'MMMM':
            default:
              return n.month(r, { width: 'wide', context: 'formatting' })
          }
        },
        L: function (t, e, n) {
          var r = t.getUTCMonth()
          switch (e) {
            case 'L':
              return String(r + 1)
            case 'LL':
              return Rt(r + 1, 2)
            case 'Lo':
              return n.ordinalNumber(r + 1, { unit: 'month' })
            case 'LLL':
              return n.month(r, { width: 'abbreviated', context: 'standalone' })
            case 'LLLLL':
              return n.month(r, { width: 'narrow', context: 'standalone' })
            case 'LLLL':
            default:
              return n.month(r, { width: 'wide', context: 'standalone' })
          }
        },
        w: function (t, e, n, r) {
          var a = At(t, r)
          return 'wo' === e
            ? n.ordinalNumber(a, { unit: 'week' })
            : Rt(a, e.length)
        },
        I: function (t, e, n) {
          var r = jt(t)
          return 'Io' === e
            ? n.ordinalNumber(r, { unit: 'week' })
            : Rt(r, e.length)
        },
        d: function (t, e, n) {
          return 'do' === e
            ? n.ordinalNumber(t.getUTCDate(), { unit: 'date' })
            : qt.d(t, e)
        },
        D: function (t, e, n) {
          var r = (function (t) {
            a(1, arguments)
            var e = i(t),
              n = e.getTime()
            e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0)
            var r = e.getTime(),
              o = n - r
            return Math.floor(o / 864e5) + 1
          })(t)
          return 'Do' === e
            ? n.ordinalNumber(r, { unit: 'dayOfYear' })
            : Rt(r, e.length)
        },
        E: function (t, e, n) {
          var r = t.getUTCDay()
          switch (e) {
            case 'E':
            case 'EE':
            case 'EEE':
              return n.day(r, { width: 'abbreviated', context: 'formatting' })
            case 'EEEEE':
              return n.day(r, { width: 'narrow', context: 'formatting' })
            case 'EEEEEE':
              return n.day(r, { width: 'short', context: 'formatting' })
            case 'EEEE':
            default:
              return n.day(r, { width: 'wide', context: 'formatting' })
          }
        },
        e: function (t, e, n, r) {
          var a = t.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7
          switch (e) {
            case 'e':
              return String(i)
            case 'ee':
              return Rt(i, 2)
            case 'eo':
              return n.ordinalNumber(i, { unit: 'day' })
            case 'eee':
              return n.day(a, { width: 'abbreviated', context: 'formatting' })
            case 'eeeee':
              return n.day(a, { width: 'narrow', context: 'formatting' })
            case 'eeeeee':
              return n.day(a, { width: 'short', context: 'formatting' })
            case 'eeee':
            default:
              return n.day(a, { width: 'wide', context: 'formatting' })
          }
        },
        c: function (t, e, n, r) {
          var a = t.getUTCDay(),
            i = (a - r.weekStartsOn + 8) % 7 || 7
          switch (e) {
            case 'c':
              return String(i)
            case 'cc':
              return Rt(i, e.length)
            case 'co':
              return n.ordinalNumber(i, { unit: 'day' })
            case 'ccc':
              return n.day(a, { width: 'abbreviated', context: 'standalone' })
            case 'ccccc':
              return n.day(a, { width: 'narrow', context: 'standalone' })
            case 'cccccc':
              return n.day(a, { width: 'short', context: 'standalone' })
            case 'cccc':
            default:
              return n.day(a, { width: 'wide', context: 'standalone' })
          }
        },
        i: function (t, e, n) {
          var r = t.getUTCDay(),
            a = 0 === r ? 7 : r
          switch (e) {
            case 'i':
              return String(a)
            case 'ii':
              return Rt(a, e.length)
            case 'io':
              return n.ordinalNumber(a, { unit: 'day' })
            case 'iii':
              return n.day(r, { width: 'abbreviated', context: 'formatting' })
            case 'iiiii':
              return n.day(r, { width: 'narrow', context: 'formatting' })
            case 'iiiiii':
              return n.day(r, { width: 'short', context: 'formatting' })
            case 'iiii':
            default:
              return n.day(r, { width: 'wide', context: 'formatting' })
          }
        },
        a: function (t, e, n) {
          var r = t.getUTCHours() / 12 >= 1 ? 'pm' : 'am'
          switch (e) {
            case 'a':
            case 'aa':
            case 'aaa':
              return n.dayPeriod(r, {
                width: 'abbreviated',
                context: 'formatting',
              })
            case 'aaaaa':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'aaaa':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        b: function (t, e, n) {
          var r,
            a = t.getUTCHours()
          switch (
            ((r = 12 === a ? Jt : 0 === a ? Zt : a / 12 >= 1 ? 'pm' : 'am'), e)
          ) {
            case 'b':
            case 'bb':
            case 'bbb':
              return n.dayPeriod(r, {
                width: 'abbreviated',
                context: 'formatting',
              })
            case 'bbbbb':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'bbbb':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        B: function (t, e, n) {
          var r,
            a = t.getUTCHours()
          switch (((r = a >= 17 ? Kt : a >= 12 ? _t : a >= 4 ? $t : Vt), e)) {
            case 'B':
            case 'BB':
            case 'BBB':
              return n.dayPeriod(r, {
                width: 'abbreviated',
                context: 'formatting',
              })
            case 'BBBBB':
              return n.dayPeriod(r, { width: 'narrow', context: 'formatting' })
            case 'BBBB':
            default:
              return n.dayPeriod(r, { width: 'wide', context: 'formatting' })
          }
        },
        h: function (t, e, n) {
          if ('ho' === e) {
            var r = t.getUTCHours() % 12
            return 0 === r && (r = 12), n.ordinalNumber(r, { unit: 'hour' })
          }
          return qt.h(t, e)
        },
        H: function (t, e, n) {
          return 'Ho' === e
            ? n.ordinalNumber(t.getUTCHours(), { unit: 'hour' })
            : qt.H(t, e)
        },
        K: function (t, e, n) {
          var r = t.getUTCHours() % 12
          return 'Ko' === e
            ? n.ordinalNumber(r, { unit: 'hour' })
            : Rt(r, e.length)
        },
        k: function (t, e, n) {
          var r = t.getUTCHours()
          return (
            0 === r && (r = 24),
            'ko' === e ? n.ordinalNumber(r, { unit: 'hour' }) : Rt(r, e.length)
          )
        },
        m: function (t, e, n) {
          return 'mo' === e
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: 'minute' })
            : qt.m(t, e)
        },
        s: function (t, e, n) {
          return 'so' === e
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: 'second' })
            : qt.s(t, e)
        },
        S: function (t, e) {
          return qt.S(t, e)
        },
        X: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset()
          if (0 === a) return 'Z'
          switch (e) {
            case 'X':
              return ee(a)
            case 'XXXX':
            case 'XX':
              return ne(a)
            case 'XXXXX':
            case 'XXX':
            default:
              return ne(a, ':')
          }
        },
        x: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset()
          switch (e) {
            case 'x':
              return ee(a)
            case 'xxxx':
            case 'xx':
              return ne(a)
            case 'xxxxx':
            case 'xxx':
            default:
              return ne(a, ':')
          }
        },
        O: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset()
          switch (e) {
            case 'O':
            case 'OO':
            case 'OOO':
              return 'GMT' + te(a, ':')
            case 'OOOO':
            default:
              return 'GMT' + ne(a, ':')
          }
        },
        z: function (t, e, n, r) {
          var a = (r._originalDate || t).getTimezoneOffset()
          switch (e) {
            case 'z':
            case 'zz':
            case 'zzz':
              return 'GMT' + te(a, ':')
            case 'zzzz':
            default:
              return 'GMT' + ne(a, ':')
          }
        },
        t: function (t, e, n, r) {
          var a = r._originalDate || t
          return Rt(Math.floor(a.getTime() / 1e3), e.length)
        },
        T: function (t, e, n, r) {
          return Rt((r._originalDate || t).getTime(), e.length)
        },
      }
      function ae(t, e) {
        switch (t) {
          case 'P':
            return e.date({ width: 'short' })
          case 'PP':
            return e.date({ width: 'medium' })
          case 'PPP':
            return e.date({ width: 'long' })
          case 'PPPP':
          default:
            return e.date({ width: 'full' })
        }
      }
      function ie(t, e) {
        switch (t) {
          case 'p':
            return e.time({ width: 'short' })
          case 'pp':
            return e.time({ width: 'medium' })
          case 'ppp':
            return e.time({ width: 'long' })
          case 'pppp':
          default:
            return e.time({ width: 'full' })
        }
      }
      var oe = {
          p: ie,
          P: function (t, e) {
            var n,
              r = t.match(/(P+)(p+)?/),
              a = r[1],
              i = r[2]
            if (!i) return ae(t, e)
            switch (a) {
              case 'P':
                n = e.dateTime({ width: 'short' })
                break
              case 'PP':
                n = e.dateTime({ width: 'medium' })
                break
              case 'PPP':
                n = e.dateTime({ width: 'long' })
                break
              case 'PPPP':
              default:
                n = e.dateTime({ width: 'full' })
            }
            return n.replace('{{date}}', ae(a, e)).replace('{{time}}', ie(i, e))
          },
        },
        ue = ['D', 'DD'],
        se = ['YY', 'YYYY']
      function ce(t) {
        return -1 !== ue.indexOf(t)
      }
      function fe(t) {
        return -1 !== se.indexOf(t)
      }
      function de(t, e, n) {
        if ('YYYY' === t)
          throw new RangeError(
            'Use `yyyy` instead of `YYYY` (in `'
              .concat(e, '`) for formatting years to the input `')
              .concat(n, '`; see: https://git.io/fxCyr'),
          )
        if ('YY' === t)
          throw new RangeError(
            'Use `yy` instead of `YY` (in `'
              .concat(e, '`) for formatting years to the input `')
              .concat(n, '`; see: https://git.io/fxCyr'),
          )
        if ('D' === t)
          throw new RangeError(
            'Use `d` instead of `D` (in `'
              .concat(e, '`) for formatting days of the month to the input `')
              .concat(n, '`; see: https://git.io/fxCyr'),
          )
        if ('DD' === t)
          throw new RangeError(
            'Use `dd` instead of `DD` (in `'
              .concat(e, '`) for formatting days of the month to the input `')
              .concat(n, '`; see: https://git.io/fxCyr'),
          )
      }
      var le = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        he = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ge = /^'([^]*?)'?$/,
        me = /''/g,
        we = /[a-zA-Z]/
      function ve(t, e, n) {
        a(2, arguments)
        var o = String(e),
          u = n || {},
          s = u.locale || It,
          c = s.options && s.options.firstWeekContainsDate,
          f = null == c ? 1 : r(c),
          d = null == u.firstWeekContainsDate ? f : r(u.firstWeekContainsDate)
        if (!(d >= 1 && d <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively',
          )
        var l = s.options && s.options.weekStartsOn,
          h = null == l ? 0 : r(l),
          g = null == u.weekStartsOn ? h : r(u.weekStartsOn)
        if (!(g >= 0 && g <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        if (!s.localize)
          throw new RangeError('locale must contain localize property')
        if (!s.formatLong)
          throw new RangeError('locale must contain formatLong property')
        var m = i(t)
        if (!W(m)) throw new RangeError('Invalid time value')
        var w = b(m),
          v = Pt(m, w),
          y = {
            firstWeekContainsDate: d,
            weekStartsOn: g,
            locale: s,
            _originalDate: m,
          },
          T = o
            .match(he)
            .map(function (t) {
              var e = t[0]
              return 'p' === e || 'P' === e ? (0, oe[e])(t, s.formatLong, y) : t
            })
            .join('')
            .match(le)
            .map(function (n) {
              if ("''" === n) return "'"
              var r = n[0]
              if ("'" === r) return ye(n)
              var a = re[r]
              if (a)
                return (
                  !u.useAdditionalWeekYearTokens && fe(n) && de(n, e, t),
                  !u.useAdditionalDayOfYearTokens && ce(n) && de(n, e, t),
                  a(v, n, s.localize, y)
                )
              if (r.match(we))
                throw new RangeError(
                  'Format string contains an unescaped latin alphabet character `' +
                    r +
                    '`',
                )
              return n
            })
            .join('')
        return T
      }
      function ye(t) {
        return t.match(ge)[1].replace(me, "'")
      }
      function Te(t, e) {
        if (null == t)
          throw new TypeError(
            'assign requires that input parameter not be null or undefined',
          )
        for (var n in (e = e || {})) e.hasOwnProperty(n) && (t[n] = e[n])
        return t
      }
      function be(t) {
        return Te({}, t)
      }
      function pe(t, e, n) {
        a(2, arguments)
        var r = n || {},
          o = r.locale || It
        if (!o.formatDistance)
          throw new RangeError('locale must contain formatDistance property')
        var u = H(t, e)
        if (isNaN(u)) throw new RangeError('Invalid time value')
        var s,
          c,
          f = be(r)
        ;(f.addSuffix = Boolean(r.addSuffix)),
          (f.comparison = u),
          u > 0 ? ((s = i(e)), (c = i(t))) : ((s = i(t)), (c = i(e)))
        var d,
          l = tt(c, s),
          h = (b(c) - b(s)) / 1e3,
          g = Math.round((l - h) / 60)
        if (g < 2)
          return r.includeSeconds
            ? l < 5
              ? o.formatDistance('lessThanXSeconds', 5, f)
              : l < 10
              ? o.formatDistance('lessThanXSeconds', 10, f)
              : l < 20
              ? o.formatDistance('lessThanXSeconds', 20, f)
              : l < 40
              ? o.formatDistance('halfAMinute', null, f)
              : l < 60
              ? o.formatDistance('lessThanXMinutes', 1, f)
              : o.formatDistance('xMinutes', 1, f)
            : 0 === g
            ? o.formatDistance('lessThanXMinutes', 1, f)
            : o.formatDistance('xMinutes', g, f)
        if (g < 45) return o.formatDistance('xMinutes', g, f)
        if (g < 90) return o.formatDistance('aboutXHours', 1, f)
        if (g < 1440) {
          var m = Math.round(g / 60)
          return o.formatDistance('aboutXHours', m, f)
        }
        if (g < 2520) return o.formatDistance('xDays', 1, f)
        if (g < 43200) {
          var w = Math.round(g / 1440)
          return o.formatDistance('xDays', w, f)
        }
        if (g < 86400)
          return (
            (d = Math.round(g / 43200)), o.formatDistance('aboutXMonths', d, f)
          )
        if ((d = K(c, s)) < 12) {
          var v = Math.round(g / 43200)
          return o.formatDistance('xMonths', v, f)
        }
        var y = d % 12,
          T = Math.floor(d / 12)
        return y < 3
          ? o.formatDistance('aboutXYears', T, f)
          : y < 9
          ? o.formatDistance('overXYears', T, f)
          : o.formatDistance('almostXYears', T + 1, f)
      }
      function De(t, e, n) {
        a(2, arguments)
        var r = n || {},
          o = r.locale || It
        if (!o.formatDistance)
          throw new RangeError(
            'locale must contain localize.formatDistance property',
          )
        var u = H(t, e)
        if (isNaN(u)) throw new RangeError('Invalid time value')
        var s,
          c,
          f = be(r)
        ;(f.addSuffix = Boolean(r.addSuffix)),
          (f.comparison = u),
          u > 0 ? ((s = i(e)), (c = i(t))) : ((s = i(t)), (c = i(e)))
        var d,
          l = null == r.roundingMethod ? 'round' : String(r.roundingMethod)
        if ('floor' === l) d = Math.floor
        else if ('ceil' === l) d = Math.ceil
        else {
          if ('round' !== l)
            throw new RangeError(
              "roundingMethod must be 'floor', 'ceil' or 'round'",
            )
          d = Math.round
        }
        var h,
          g = tt(c, s),
          m = (b(c) - b(s)) / 1e3,
          w = d((g - m) / 60)
        if (
          'second' ===
          (h =
            null == r.unit
              ? w < 1
                ? 'second'
                : w < 60
                ? 'minute'
                : w < 1440
                ? 'hour'
                : w < 43200
                ? 'day'
                : w < 525600
                ? 'month'
                : 'year'
              : String(r.unit))
        )
          return o.formatDistance('xSeconds', g, f)
        if ('minute' === h) return o.formatDistance('xMinutes', w, f)
        if ('hour' === h) {
          var v = d(w / 60)
          return o.formatDistance('xHours', v, f)
        }
        if ('day' === h) {
          var y = d(w / 1440)
          return o.formatDistance('xDays', y, f)
        }
        if ('month' === h) {
          var T = d(w / 43200)
          return o.formatDistance('xMonths', T, f)
        }
        if ('year' === h) {
          var p = d(w / 525600)
          return o.formatDistance('xYears', p, f)
        }
        throw new RangeError(
          "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'",
        )
      }
      function Me(t, e) {
        return a(1, arguments), pe(t, Date.now(), e)
      }
      function ke(t, e) {
        return a(1, arguments), De(t, Date.now(), e)
      }
      var xe = [
        'years',
        'months',
        'weeks',
        'days',
        'hours',
        'minutes',
        'seconds',
      ]
      function Ce(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
        if (arguments.length < 1)
          throw new TypeError(
            '1 argument required, but only '.concat(
              arguments.length,
              ' present',
            ),
          )
        var n = e.format || xe,
          r = e.locale || It,
          a = e.zero || !1,
          i = e.delimiter || ' ',
          o = n
            .reduce(function (e, n) {
              var i = 'x'.concat(
                n.replace(/(^.)/, function (t) {
                  return t.toUpperCase()
                }),
              )
              return 'number' == typeof t[n] && (a || t[n])
                ? e.concat(r.formatDistance(i, t[n]))
                : e
            }, [])
            .join(i)
        return o
      }
      function Se(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            '1 argument required, but only '.concat(
              arguments.length,
              ' present',
            ),
          )
        var n = i(t)
        if (!W(n)) throw new RangeError('Invalid time value')
        var r = e || {},
          a = null == r.format ? 'extended' : String(r.format),
          o = null == r.representation ? 'complete' : String(r.representation)
        if ('extended' !== a && 'basic' !== a)
          throw new RangeError("format must be 'extended' or 'basic'")
        if ('date' !== o && 'time' !== o && 'complete' !== o)
          throw new RangeError(
            "representation must be 'date', 'time', or 'complete'",
          )
        var u = '',
          s = '',
          c = 'extended' === a ? '-' : '',
          f = 'extended' === a ? ':' : ''
        if ('time' !== o) {
          var d = Rt(n.getDate(), 2),
            l = Rt(n.getMonth() + 1, 2),
            h = Rt(n.getFullYear(), 4)
          u = ''.concat(h).concat(c).concat(l).concat(c).concat(d)
        }
        if ('date' !== o) {
          var g = n.getTimezoneOffset()
          if (0 !== g) {
            var m = Math.abs(g),
              w = Rt(Math.floor(m / 60), 2),
              v = Rt(m % 60, 2),
              y = g < 0 ? '+' : '-'
            s = ''.concat(y).concat(w, ':').concat(v)
          } else s = 'Z'
          var T = Rt(n.getHours(), 2),
            b = Rt(n.getMinutes(), 2),
            p = Rt(n.getSeconds(), 2),
            D = '' === u ? '' : 'T',
            M = [T, b, p].join(f)
          u = ''.concat(u).concat(D).concat(M).concat(s)
        }
        return u
      }
      function Ye(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            '1 argument required, but only '.concat(
              arguments.length,
              ' present',
            ),
          )
        var n = i(t)
        if (!W(n)) throw new RangeError('Invalid time value')
        var r = e || {},
          a = null == r.format ? 'extended' : String(r.format),
          o = null == r.representation ? 'complete' : String(r.representation)
        if ('extended' !== a && 'basic' !== a)
          throw new RangeError("format must be 'extended' or 'basic'")
        if ('date' !== o && 'time' !== o && 'complete' !== o)
          throw new RangeError(
            "representation must be 'date', 'time', or 'complete'",
          )
        var u = '',
          s = 'extended' === a ? '-' : '',
          c = 'extended' === a ? ':' : ''
        if ('time' !== o) {
          var f = Rt(n.getDate(), 2),
            d = Rt(n.getMonth() + 1, 2),
            l = Rt(n.getFullYear(), 4)
          u = ''.concat(l).concat(s).concat(d).concat(s).concat(f)
        }
        if ('date' !== o) {
          var h = Rt(n.getHours(), 2),
            g = Rt(n.getMinutes(), 2),
            m = Rt(n.getSeconds(), 2),
            w = '' === u ? '' : ' '
          u = ''
            .concat(u)
            .concat(w)
            .concat(h)
            .concat(c)
            .concat(g)
            .concat(c)
            .concat(m)
        }
        return u
      }
      function Ne(t) {
        if ((a(1, arguments), 'object' != typeof t))
          throw new Error('Duration must be an object')
        var e = t.years,
          n = void 0 === e ? 0 : e,
          r = t.months,
          i = void 0 === r ? 0 : r,
          o = t.days,
          u = void 0 === o ? 0 : o,
          s = t.hours,
          c = void 0 === s ? 0 : s,
          f = t.minutes,
          d = void 0 === f ? 0 : f,
          l = t.seconds,
          h = void 0 === l ? 0 : l
        return 'P'
          .concat(n, 'Y')
          .concat(i, 'M')
          .concat(u, 'DT')
          .concat(c, 'H')
          .concat(d, 'M')
          .concat(h, 'S')
      }
      function Oe(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            '1 arguments required, but only '.concat(
              arguments.length,
              ' present',
            ),
          )
        var n = i(t)
        if (!W(n)) throw new RangeError('Invalid time value')
        var a = e || {},
          o = null == a.fractionDigits ? 0 : r(a.fractionDigits)
        if (!(o >= 0 && o <= 3))
          throw new RangeError(
            'fractionDigits must be between 0 and 3 inclusively',
          )
        var u = Rt(n.getDate(), 2),
          s = Rt(n.getMonth() + 1, 2),
          c = n.getFullYear(),
          f = Rt(n.getHours(), 2),
          d = Rt(n.getMinutes(), 2),
          l = Rt(n.getSeconds(), 2),
          h = ''
        if (o > 0) {
          var g = n.getMilliseconds(),
            m = Math.floor(g * Math.pow(10, o - 3))
          h = '.' + Rt(m, o)
        }
        var w = '',
          v = n.getTimezoneOffset()
        if (0 !== v) {
          var y = Math.abs(v),
            T = Rt(r(y / 60), 2),
            b = Rt(y % 60, 2),
            p = v < 0 ? '+' : '-'
          w = ''.concat(p).concat(T, ':').concat(b)
        } else w = 'Z'
        return ''
          .concat(c, '-')
          .concat(s, '-')
          .concat(u, 'T')
          .concat(f, ':')
          .concat(d, ':')
          .concat(l)
          .concat(h)
          .concat(w)
      }
      var Ue = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        Ee = [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]
      function He(t) {
        if (arguments.length < 1)
          throw new TypeError(
            '1 arguments required, but only '.concat(
              arguments.length,
              ' present',
            ),
          )
        var e = i(t)
        if (!W(e)) throw new RangeError('Invalid time value')
        var n = Ue[e.getUTCDay()],
          r = Rt(e.getUTCDate(), 2),
          a = Ee[e.getUTCMonth()],
          o = e.getUTCFullYear(),
          u = Rt(e.getUTCHours(), 2),
          s = Rt(e.getUTCMinutes(), 2),
          c = Rt(e.getUTCSeconds(), 2)
        return ''
          .concat(n, ', ')
          .concat(r, ' ')
          .concat(a, ' ')
          .concat(o, ' ')
          .concat(u, ':')
          .concat(s, ':')
          .concat(c, ' GMT')
      }
      function Fe(t, e, n) {
        a(2, arguments)
        var r = i(t),
          o = i(e),
          u = n || {},
          s = u.locale || It
        if (!s.localize)
          throw new RangeError('locale must contain localize property')
        if (!s.formatLong)
          throw new RangeError('locale must contain formatLong property')
        if (!s.formatRelative)
          throw new RangeError('locale must contain formatRelative property')
        var c,
          f = D(r, o)
        if (isNaN(f)) throw new RangeError('Invalid time value')
        c =
          f < -6
            ? 'other'
            : f < -1
            ? 'lastWeek'
            : f < 0
            ? 'yesterday'
            : f < 1
            ? 'today'
            : f < 2
            ? 'tomorrow'
            : f < 7
            ? 'nextWeek'
            : 'other'
        var d = Pt(r, b(r)),
          l = Pt(o, b(o)),
          h = s.formatRelative(c, d, l, u)
        return ve(r, h, u)
      }
      function We(t) {
        a(1, arguments)
        var e = r(t)
        return i(1e3 * e)
      }
      function Ie(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getDate()
        return n
      }
      function Pe(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getDay()
        return n
      }
      function Re(t) {
        a(1, arguments)
        var e = i(t),
          n = D(e, ht(e)),
          r = n + 1
        return r
      }
      function qe(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = e.getMonth(),
          o = new Date(0)
        return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate()
      }
      function Qe(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear()
        return n % 400 == 0 || (n % 4 == 0 && n % 100 != 0)
      }
      function Le(t) {
        a(1, arguments)
        var e = i(t)
        return isNaN(e) ? NaN : Qe(e) ? 366 : 365
      }
      function Xe(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = 10 * Math.floor(n / 10)
        return r
      }
      function je(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getHours()
        return n
      }
      function Be(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getDay()
        return 0 === n && (n = 7), n
      }
      function ze(t) {
        a(1, arguments)
        var e = i(t),
          n = w(e).getTime() - y(e).getTime()
        return Math.round(n / 6048e5) + 1
      }
      function Ge(t) {
        a(1, arguments)
        var e = y(t),
          n = y(Y(e, 60)),
          r = n.valueOf() - e.valueOf()
        return Math.round(r / 6048e5)
      }
      function Ae(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMilliseconds()
        return n
      }
      function Ze(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMinutes()
        return n
      }
      function Je(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth()
        return n
      }
      function $e(t, e) {
        a(2, arguments)
        var n = t || {},
          r = e || {},
          o = i(n.start).getTime(),
          u = i(n.end).getTime(),
          s = i(r.start).getTime(),
          c = i(r.end).getTime()
        if (!(o <= u && s <= c)) throw new RangeError('Invalid interval')
        var f = o < c && s < u
        if (!f) return 0
        var d = s < o ? o : s,
          l = c > u ? u : c,
          h = l - d
        return Math.ceil(h / 864e5)
      }
      function _e(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getSeconds()
        return n
      }
      function Ke(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getTime()
        return n
      }
      function Ve(t) {
        return a(1, arguments), Math.floor(Ke(t) / 1e3)
      }
      function tn(t, e) {
        a(1, arguments)
        var n = i(t),
          o = n.getFullYear(),
          u = e || {},
          s = u.locale,
          c = s && s.options && s.options.firstWeekContainsDate,
          f = null == c ? 1 : r(c),
          d = null == u.firstWeekContainsDate ? f : r(u.firstWeekContainsDate)
        if (!(d >= 1 && d <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively',
          )
        var l = new Date(0)
        l.setFullYear(o + 1, 0, d), l.setHours(0, 0, 0, 0)
        var h = m(l, e),
          g = new Date(0)
        g.setFullYear(o, 0, d), g.setHours(0, 0, 0, 0)
        var w = m(g, e)
        return n.getTime() >= h.getTime()
          ? o + 1
          : n.getTime() >= w.getTime()
          ? o
          : o - 1
      }
      function en(t, e) {
        a(1, arguments)
        var n = e || {},
          i = n.locale,
          o = i && i.options && i.options.firstWeekContainsDate,
          u = null == o ? 1 : r(o),
          s = null == n.firstWeekContainsDate ? u : r(n.firstWeekContainsDate),
          c = tn(t, e),
          f = new Date(0)
        f.setFullYear(c, 0, s), f.setHours(0, 0, 0, 0)
        var d = m(f, e)
        return d
      }
      function nn(t, e) {
        a(1, arguments)
        var n = i(t),
          r = m(n, e).getTime() - en(n, e).getTime()
        return Math.round(r / 6048e5) + 1
      }
      function rn(t, e) {
        a(1, arguments)
        var n = e || {},
          i = n.locale,
          o = i && i.options && i.options.weekStartsOn,
          u = null == o ? 0 : r(o),
          s = null == n.weekStartsOn ? u : r(n.weekStartsOn)
        if (!(s >= 0 && s <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var c = Ie(t)
        if (isNaN(c)) return c
        var f = Pe(ft(t)),
          d = 0,
          l = 1
        if (c > (d = f >= s ? s + 7 - f : s - f)) {
          var h = c - d
          l += Math.ceil(h / 7)
        }
        return l
      }
      function an(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth()
        return (
          e.setFullYear(e.getFullYear(), n + 1, 0), e.setHours(0, 0, 0, 0), e
        )
      }
      function on(t, e) {
        return a(1, arguments), j(an(t), ft(t), e) + 1
      }
      function un(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear()
        return n
      }
      function sn(t, e) {
        a(2, arguments)
        var n = r(e)
        return o(t, -n)
      }
      function cn(t, e) {
        a(2, arguments)
        var n = r(e)
        return u(t, -n)
      }
      function fn(t, e) {
        if ((a(2, arguments), !e || 'object' != typeof e)) return new Date(NaN)
        var n = 'years' in e ? r(e.years) : 0,
          o = 'months' in e ? r(e.months) : 0,
          u = 'weeks' in e ? r(e.weeks) : 0,
          s = 'days' in e ? r(e.days) : 0,
          c = 'hours' in e ? r(e.hours) : 0,
          f = 'minutes' in e ? r(e.minutes) : 0,
          d = 'seconds' in e ? r(e.seconds) : 0,
          l = cn(i(t), o + 12 * n),
          h = sn(l, s + 7 * u),
          g = f + 60 * c,
          m = d + 60 * g,
          w = 1e3 * m,
          v = new Date(h.getTime() - w)
        return v
      }
      function dn(t) {
        var e = t.start,
          n = t.end
        a(1, arguments)
        var r = i(e),
          o = i(n)
        if (!W(r)) throw new RangeError('Start Date is invalid')
        if (!W(o)) throw new RangeError('End Date is invalid')
        var u = {
            years: 0,
            months: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          },
          s = H(r, o)
        u.years = Math.abs(nt(r, o))
        var c = fn(r, { years: s * u.years })
        u.months = Math.abs(K(c, o))
        var f = fn(c, { months: s * u.months })
        u.days = Math.abs(G(f, o))
        var d = fn(f, { days: s * u.days })
        u.hours = Math.abs(Z(d, o))
        var l = fn(d, { hours: s * u.hours })
        u.minutes = Math.abs(_(l, o))
        var h = fn(l, { minutes: s * u.minutes })
        return (u.seconds = Math.abs(tt(h, o))), u
      }
      function ln(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getTime() > r.getTime()
      }
      function hn(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getTime() < r.getTime()
      }
      function gn(t) {
        return (
          a(1, arguments),
          t instanceof Date ||
            ('object' == typeof t &&
              '[object Date]' === Object.prototype.toString.call(t))
        )
      }
      function mn(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getTime() === r.getTime()
      }
      function wn(t, e, n) {
        if (arguments.length < 3)
          throw new TypeError(
            '3 argument required, but only ' + arguments.length + ' present',
          )
        var r = new Date(t, e, n)
        return r.getFullYear() === t && r.getMonth() === e && r.getDate() === n
      }
      function vn(t) {
        return a(1, arguments), 1 === i(t).getDate()
      }
      function yn(t) {
        return a(1, arguments), 5 === i(t).getDay()
      }
      function Tn(t) {
        return a(1, arguments), i(t).getTime() > Date.now()
      }
      function bn(t) {
        a(1, arguments)
        var e = i(t)
        return vt(e).getTime() === dt(e).getTime()
      }
      function pn(t, e, n) {
        a(2, arguments)
        var o = n || {},
          u = o.locale,
          s = u && u.options && u.options.weekStartsOn,
          c = null == s ? 0 : r(s),
          f = null == o.weekStartsOn ? c : r(o.weekStartsOn)
        if (!(f >= 0 && f <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var d = i(t),
          l = r(e),
          h = d.getUTCDay(),
          g = l % 7,
          m = (g + 7) % 7,
          w = (m < f ? 7 : 0) + l - h
        return d.setUTCDate(d.getUTCDate() + w), d
      }
      var Dn = /^(1[0-2]|0?\d)/,
        Mn = /^(3[0-1]|[0-2]?\d)/,
        kn = /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        xn = /^(5[0-3]|[0-4]?\d)/,
        Cn = /^(2[0-3]|[0-1]?\d)/,
        Sn = /^(2[0-4]|[0-1]?\d)/,
        Yn = /^(1[0-1]|0?\d)/,
        Nn = /^(1[0-2]|0?\d)/,
        On = /^[0-5]?\d/,
        Un = /^[0-5]?\d/,
        En = /^\d/,
        Hn = /^\d{1,2}/,
        Fn = /^\d{1,3}/,
        Wn = /^\d{1,4}/,
        In = /^-?\d+/,
        Pn = /^-?\d/,
        Rn = /^-?\d{1,2}/,
        qn = /^-?\d{1,3}/,
        Qn = /^-?\d{1,4}/,
        Ln = /^([+-])(\d{2})(\d{2})?|Z/,
        Xn = /^([+-])(\d{2})(\d{2})|Z/,
        jn = /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        Bn = /^([+-])(\d{2}):(\d{2})|Z/,
        zn = /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
      function Gn(t, e, n) {
        var r = e.match(t)
        if (!r) return null
        var a = parseInt(r[0], 10)
        return { value: n ? n(a) : a, rest: e.slice(r[0].length) }
      }
      function An(t, e) {
        var n = e.match(t)
        return n
          ? 'Z' === n[0]
            ? { value: 0, rest: e.slice(1) }
            : {
                value:
                  ('+' === n[1] ? 1 : -1) *
                  (36e5 * (n[2] ? parseInt(n[2], 10) : 0) +
                    6e4 * (n[3] ? parseInt(n[3], 10) : 0) +
                    1e3 * (n[5] ? parseInt(n[5], 10) : 0)),
                rest: e.slice(n[0].length),
              }
          : null
      }
      function Zn(t, e) {
        return Gn(In, t, e)
      }
      function Jn(t, e, n) {
        switch (t) {
          case 1:
            return Gn(En, e, n)
          case 2:
            return Gn(Hn, e, n)
          case 3:
            return Gn(Fn, e, n)
          case 4:
            return Gn(Wn, e, n)
          default:
            return Gn(new RegExp('^\\d{1,' + t + '}'), e, n)
        }
      }
      function $n(t, e, n) {
        switch (t) {
          case 1:
            return Gn(Pn, e, n)
          case 2:
            return Gn(Rn, e, n)
          case 3:
            return Gn(qn, e, n)
          case 4:
            return Gn(Qn, e, n)
          default:
            return Gn(new RegExp('^-?\\d{1,' + t + '}'), e, n)
        }
      }
      function _n(t) {
        switch (t) {
          case 'morning':
            return 4
          case 'evening':
            return 17
          case 'pm':
          case 'noon':
          case 'afternoon':
            return 12
          case 'am':
          case 'midnight':
          case 'night':
          default:
            return 0
        }
      }
      function Kn(t, e) {
        var n,
          r = e > 0,
          a = r ? e : 1 - e
        if (a <= 50) n = t || 100
        else {
          var i = a + 50
          n = t + 100 * Math.floor(i / 100) - (t >= i % 100 ? 100 : 0)
        }
        return r ? n : 1 - n
      }
      var Vn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        tr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      function er(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100 != 0)
      }
      var nr = {
          G: {
            priority: 140,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'G':
                case 'GG':
                case 'GGG':
                  return (
                    n.era(t, { width: 'abbreviated' }) ||
                    n.era(t, { width: 'narrow' })
                  )
                case 'GGGGG':
                  return n.era(t, { width: 'narrow' })
                case 'GGGG':
                default:
                  return (
                    n.era(t, { width: 'wide' }) ||
                    n.era(t, { width: 'abbreviated' }) ||
                    n.era(t, { width: 'narrow' })
                  )
              }
            },
            set: function (t, e, n, r) {
              return (
                (e.era = n),
                t.setUTCFullYear(n, 0, 1),
                t.setUTCHours(0, 0, 0, 0),
                t
              )
            },
            incompatibleTokens: ['R', 'u', 't', 'T'],
          },
          y: {
            priority: 130,
            parse: function (t, e, n, r) {
              var a = function (t) {
                return { year: t, isTwoDigitYear: 'yy' === e }
              }
              switch (e) {
                case 'y':
                  return Jn(4, t, a)
                case 'yo':
                  return n.ordinalNumber(t, { unit: 'year', valueCallback: a })
                default:
                  return Jn(e.length, t, a)
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0
            },
            set: function (t, e, n, r) {
              var a = t.getUTCFullYear()
              if (n.isTwoDigitYear) {
                var i = Kn(n.year, a)
                return t.setUTCFullYear(i, 0, 1), t.setUTCHours(0, 0, 0, 0), t
              }
              var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
              return t.setUTCFullYear(o, 0, 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'u',
              'w',
              'I',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          Y: {
            priority: 130,
            parse: function (t, e, n, r) {
              var a = function (t) {
                return { year: t, isTwoDigitYear: 'YY' === e }
              }
              switch (e) {
                case 'Y':
                  return Jn(4, t, a)
                case 'Yo':
                  return n.ordinalNumber(t, { unit: 'year', valueCallback: a })
                default:
                  return Jn(e.length, t, a)
              }
            },
            validate: function (t, e, n) {
              return e.isTwoDigitYear || e.year > 0
            },
            set: function (t, e, n, r) {
              var a = zt(t, r)
              if (n.isTwoDigitYear) {
                var i = Kn(n.year, a)
                return (
                  t.setUTCFullYear(i, 0, r.firstWeekContainsDate),
                  t.setUTCHours(0, 0, 0, 0),
                  Bt(t, r)
                )
              }
              var o = 'era' in e && 1 !== e.era ? 1 - n.year : n.year
              return (
                t.setUTCFullYear(o, 0, r.firstWeekContainsDate),
                t.setUTCHours(0, 0, 0, 0),
                Bt(t, r)
              )
            },
            incompatibleTokens: [
              'y',
              'R',
              'u',
              'Q',
              'q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ],
          },
          R: {
            priority: 130,
            parse: function (t, e, n, r) {
              return $n('R' === e ? 4 : e.length, t)
            },
            set: function (t, e, n, r) {
              var a = new Date(0)
              return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), Qt(a)
            },
            incompatibleTokens: [
              'G',
              'y',
              'Y',
              'u',
              'Q',
              'q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'e',
              'c',
              't',
              'T',
            ],
          },
          u: {
            priority: 130,
            parse: function (t, e, n, r) {
              return $n('u' === e ? 4 : e.length, t)
            },
            set: function (t, e, n, r) {
              return t.setUTCFullYear(n, 0, 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'G',
              'y',
              'Y',
              'R',
              'w',
              'I',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          Q: {
            priority: 120,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'Q':
                case 'QQ':
                  return Jn(e.length, t)
                case 'Qo':
                  return n.ordinalNumber(t, { unit: 'quarter' })
                case 'QQQ':
                  return (
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'QQQQQ':
                  return n.quarter(t, {
                    width: 'narrow',
                    context: 'formatting',
                  })
                case 'QQQQ':
                default:
                  return (
                    n.quarter(t, { width: 'wide', context: 'formatting' }) ||
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4
            },
            set: function (t, e, n, r) {
              return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          q: {
            priority: 120,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'q':
                case 'qq':
                  return Jn(e.length, t)
                case 'qo':
                  return n.ordinalNumber(t, { unit: 'quarter' })
                case 'qqq':
                  return (
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'standalone' })
                  )
                case 'qqqqq':
                  return n.quarter(t, {
                    width: 'narrow',
                    context: 'standalone',
                  })
                case 'qqqq':
                default:
                  return (
                    n.quarter(t, { width: 'wide', context: 'standalone' }) ||
                    n.quarter(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.quarter(t, { width: 'narrow', context: 'standalone' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 4
            },
            set: function (t, e, n, r) {
              return t.setUTCMonth(3 * (n - 1), 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'Q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          M: {
            priority: 110,
            parse: function (t, e, n, r) {
              var a = function (t) {
                return t - 1
              }
              switch (e) {
                case 'M':
                  return Gn(Dn, t, a)
                case 'MM':
                  return Jn(2, t, a)
                case 'Mo':
                  return n.ordinalNumber(t, { unit: 'month', valueCallback: a })
                case 'MMM':
                  return (
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) || n.month(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'MMMMM':
                  return n.month(t, { width: 'narrow', context: 'formatting' })
                case 'MMMM':
                default:
                  return (
                    n.month(t, { width: 'wide', context: 'formatting' }) ||
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.month(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11
            },
            set: function (t, e, n, r) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'q',
              'Q',
              'L',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          L: {
            priority: 110,
            parse: function (t, e, n, r) {
              var a = function (t) {
                return t - 1
              }
              switch (e) {
                case 'L':
                  return Gn(Dn, t, a)
                case 'LL':
                  return Jn(2, t, a)
                case 'Lo':
                  return n.ordinalNumber(t, { unit: 'month', valueCallback: a })
                case 'LLL':
                  return (
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) || n.month(t, { width: 'narrow', context: 'standalone' })
                  )
                case 'LLLLL':
                  return n.month(t, { width: 'narrow', context: 'standalone' })
                case 'LLLL':
                default:
                  return (
                    n.month(t, { width: 'wide', context: 'standalone' }) ||
                    n.month(t, {
                      width: 'abbreviated',
                      context: 'standalone',
                    }) ||
                    n.month(t, { width: 'narrow', context: 'standalone' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11
            },
            set: function (t, e, n, r) {
              return t.setUTCMonth(n, 1), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'q',
              'Q',
              'M',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          w: {
            priority: 100,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'w':
                  return Gn(xn, t)
                case 'wo':
                  return n.ordinalNumber(t, { unit: 'week' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53
            },
            set: function (t, e, n, o) {
              return Bt(
                (function (t, e, n) {
                  a(2, arguments)
                  var o = i(t),
                    u = r(e),
                    s = At(o, n) - u
                  return o.setUTCDate(o.getUTCDate() - 7 * s), o
                })(t, n, o),
                o,
              )
            },
            incompatibleTokens: [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'i',
              't',
              'T',
            ],
          },
          I: {
            priority: 100,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'I':
                  return Gn(xn, t)
                case 'Io':
                  return n.ordinalNumber(t, { unit: 'week' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 53
            },
            set: function (t, e, n, o) {
              return Qt(
                (function (t, e) {
                  a(2, arguments)
                  var n = i(t),
                    o = r(e),
                    u = jt(n) - o
                  return n.setUTCDate(n.getUTCDate() - 7 * u), n
                })(t, n, o),
                o,
              )
            },
            incompatibleTokens: [
              'y',
              'Y',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'e',
              'c',
              't',
              'T',
            ],
          },
          d: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'd':
                  return Gn(Mn, t)
                case 'do':
                  return n.ordinalNumber(t, { unit: 'date' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              var r = er(t.getUTCFullYear()),
                a = t.getUTCMonth()
              return r ? e >= 1 && e <= tr[a] : e >= 1 && e <= Vn[a]
            },
            set: function (t, e, n, r) {
              return t.setUTCDate(n), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'q',
              'Q',
              'w',
              'I',
              'D',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          D: {
            priority: 90,
            subPriority: 1,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'D':
                case 'DD':
                  return Gn(kn, t)
                case 'Do':
                  return n.ordinalNumber(t, { unit: 'date' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return er(t.getUTCFullYear())
                ? e >= 1 && e <= 366
                : e >= 1 && e <= 365
            },
            set: function (t, e, n, r) {
              return t.setUTCMonth(0, n), t.setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'Y',
              'R',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'I',
              'd',
              'E',
              'i',
              'e',
              'c',
              't',
              'T',
            ],
          },
          E: {
            priority: 90,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'E':
                case 'EE':
                case 'EEE':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'EEEEE':
                  return n.day(t, { width: 'narrow', context: 'formatting' })
                case 'EEEEEE':
                  return (
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'EEEE':
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'formatting' }) ||
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6
            },
            set: function (t, e, n, r) {
              return (t = pn(t, n, r)).setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T'],
          },
          e: {
            priority: 90,
            parse: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7)
                return ((t + r.weekStartsOn + 6) % 7) + e
              }
              switch (e) {
                case 'e':
                case 'ee':
                  return Jn(e.length, t, a)
                case 'eo':
                  return n.ordinalNumber(t, { unit: 'day', valueCallback: a })
                case 'eee':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'eeeee':
                  return n.day(t, { width: 'narrow', context: 'formatting' })
                case 'eeeeee':
                  return (
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'eeee':
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'formatting' }) ||
                    n.day(t, { width: 'abbreviated', context: 'formatting' }) ||
                    n.day(t, { width: 'short', context: 'formatting' }) ||
                    n.day(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6
            },
            set: function (t, e, n, r) {
              return (t = pn(t, n, r)).setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'E',
              'i',
              'c',
              't',
              'T',
            ],
          },
          c: {
            priority: 90,
            parse: function (t, e, n, r) {
              var a = function (t) {
                var e = 7 * Math.floor((t - 1) / 7)
                return ((t + r.weekStartsOn + 6) % 7) + e
              }
              switch (e) {
                case 'c':
                case 'cc':
                  return Jn(e.length, t, a)
                case 'co':
                  return n.ordinalNumber(t, { unit: 'day', valueCallback: a })
                case 'ccc':
                  return (
                    n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  )
                case 'ccccc':
                  return n.day(t, { width: 'narrow', context: 'standalone' })
                case 'cccccc':
                  return (
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  )
                case 'cccc':
                default:
                  return (
                    n.day(t, { width: 'wide', context: 'standalone' }) ||
                    n.day(t, { width: 'abbreviated', context: 'standalone' }) ||
                    n.day(t, { width: 'short', context: 'standalone' }) ||
                    n.day(t, { width: 'narrow', context: 'standalone' })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 6
            },
            set: function (t, e, n, r) {
              return (t = pn(t, n, r)).setUTCHours(0, 0, 0, 0), t
            },
            incompatibleTokens: [
              'y',
              'R',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'I',
              'd',
              'D',
              'E',
              'i',
              'e',
              't',
              'T',
            ],
          },
          i: {
            priority: 90,
            parse: function (t, e, n, r) {
              var a = function (t) {
                return 0 === t ? 7 : t
              }
              switch (e) {
                case 'i':
                case 'ii':
                  return Jn(e.length, t)
                case 'io':
                  return n.ordinalNumber(t, { unit: 'day' })
                case 'iii':
                  return (
                    n.day(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'short',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'narrow',
                      context: 'formatting',
                      valueCallback: a,
                    })
                  )
                case 'iiiii':
                  return n.day(t, {
                    width: 'narrow',
                    context: 'formatting',
                    valueCallback: a,
                  })
                case 'iiiiii':
                  return (
                    n.day(t, {
                      width: 'short',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'narrow',
                      context: 'formatting',
                      valueCallback: a,
                    })
                  )
                case 'iiii':
                default:
                  return (
                    n.day(t, {
                      width: 'wide',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'short',
                      context: 'formatting',
                      valueCallback: a,
                    }) ||
                    n.day(t, {
                      width: 'narrow',
                      context: 'formatting',
                      valueCallback: a,
                    })
                  )
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 7
            },
            set: function (t, e, n, o) {
              return (
                (t = (function (t, e) {
                  a(2, arguments)
                  var n = r(e)
                  n % 7 == 0 && (n -= 7)
                  var o = 1,
                    u = i(t),
                    s = u.getUTCDay(),
                    c = n % 7,
                    f = (c + 7) % 7,
                    d = (f < o ? 7 : 0) + n - s
                  return u.setUTCDate(u.getUTCDate() + d), u
                })(t, n, o)).setUTCHours(0, 0, 0, 0),
                t
              )
            },
            incompatibleTokens: [
              'y',
              'Y',
              'u',
              'q',
              'Q',
              'M',
              'L',
              'w',
              'd',
              'D',
              'E',
              'e',
              'c',
              't',
              'T',
            ],
          },
          a: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'a':
                case 'aa':
                case 'aaa':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'aaaaa':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  })
                case 'aaaa':
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            set: function (t, e, n, r) {
              return t.setUTCHours(_n(n), 0, 0, 0), t
            },
            incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T'],
          },
          b: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'b':
                case 'bb':
                case 'bbb':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'bbbbb':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  })
                case 'bbbb':
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            set: function (t, e, n, r) {
              return t.setUTCHours(_n(n), 0, 0, 0), t
            },
            incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T'],
          },
          B: {
            priority: 80,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'B':
                case 'BB':
                case 'BBB':
                  return (
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
                case 'BBBBB':
                  return n.dayPeriod(t, {
                    width: 'narrow',
                    context: 'formatting',
                  })
                case 'BBBB':
                default:
                  return (
                    n.dayPeriod(t, { width: 'wide', context: 'formatting' }) ||
                    n.dayPeriod(t, {
                      width: 'abbreviated',
                      context: 'formatting',
                    }) ||
                    n.dayPeriod(t, { width: 'narrow', context: 'formatting' })
                  )
              }
            },
            set: function (t, e, n, r) {
              return t.setUTCHours(_n(n), 0, 0, 0), t
            },
            incompatibleTokens: ['a', 'b', 't', 'T'],
          },
          h: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'h':
                  return Gn(Nn, t)
                case 'ho':
                  return n.ordinalNumber(t, { unit: 'hour' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 12
            },
            set: function (t, e, n, r) {
              var a = t.getUTCHours() >= 12
              return (
                a && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : a || 12 !== n
                  ? t.setUTCHours(n, 0, 0, 0)
                  : t.setUTCHours(0, 0, 0, 0),
                t
              )
            },
            incompatibleTokens: ['H', 'K', 'k', 't', 'T'],
          },
          H: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'H':
                  return Gn(Cn, t)
                case 'Ho':
                  return n.ordinalNumber(t, { unit: 'hour' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 23
            },
            set: function (t, e, n, r) {
              return t.setUTCHours(n, 0, 0, 0), t
            },
            incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T'],
          },
          K: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'K':
                  return Gn(Yn, t)
                case 'Ko':
                  return n.ordinalNumber(t, { unit: 'hour' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 11
            },
            set: function (t, e, n, r) {
              return (
                t.getUTCHours() >= 12 && n < 12
                  ? t.setUTCHours(n + 12, 0, 0, 0)
                  : t.setUTCHours(n, 0, 0, 0),
                t
              )
            },
            incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T'],
          },
          k: {
            priority: 70,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'k':
                  return Gn(Sn, t)
                case 'ko':
                  return n.ordinalNumber(t, { unit: 'hour' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 1 && e <= 24
            },
            set: function (t, e, n, r) {
              var a = n <= 24 ? n % 24 : n
              return t.setUTCHours(a, 0, 0, 0), t
            },
            incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T'],
          },
          m: {
            priority: 60,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'm':
                  return Gn(On, t)
                case 'mo':
                  return n.ordinalNumber(t, { unit: 'minute' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59
            },
            set: function (t, e, n, r) {
              return t.setUTCMinutes(n, 0, 0), t
            },
            incompatibleTokens: ['t', 'T'],
          },
          s: {
            priority: 50,
            parse: function (t, e, n, r) {
              switch (e) {
                case 's':
                  return Gn(Un, t)
                case 'so':
                  return n.ordinalNumber(t, { unit: 'second' })
                default:
                  return Jn(e.length, t)
              }
            },
            validate: function (t, e, n) {
              return e >= 0 && e <= 59
            },
            set: function (t, e, n, r) {
              return t.setUTCSeconds(n, 0), t
            },
            incompatibleTokens: ['t', 'T'],
          },
          S: {
            priority: 30,
            parse: function (t, e, n, r) {
              return Jn(e.length, t, function (t) {
                return Math.floor(t * Math.pow(10, 3 - e.length))
              })
            },
            set: function (t, e, n, r) {
              return t.setUTCMilliseconds(n), t
            },
            incompatibleTokens: ['t', 'T'],
          },
          X: {
            priority: 10,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'X':
                  return An(Ln, t)
                case 'XX':
                  return An(Xn, t)
                case 'XXXX':
                  return An(jn, t)
                case 'XXXXX':
                  return An(zn, t)
                case 'XXX':
                default:
                  return An(Bn, t)
              }
            },
            set: function (t, e, n, r) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n)
            },
            incompatibleTokens: ['t', 'T', 'x'],
          },
          x: {
            priority: 10,
            parse: function (t, e, n, r) {
              switch (e) {
                case 'x':
                  return An(Ln, t)
                case 'xx':
                  return An(Xn, t)
                case 'xxxx':
                  return An(jn, t)
                case 'xxxxx':
                  return An(zn, t)
                case 'xxx':
                default:
                  return An(Bn, t)
              }
            },
            set: function (t, e, n, r) {
              return e.timestampIsSet ? t : new Date(t.getTime() - n)
            },
            incompatibleTokens: ['t', 'T', 'X'],
          },
          t: {
            priority: 40,
            parse: function (t, e, n, r) {
              return Zn(t)
            },
            set: function (t, e, n, r) {
              return [new Date(1e3 * n), { timestampIsSet: !0 }]
            },
            incompatibleTokens: '*',
          },
          T: {
            priority: 20,
            parse: function (t, e, n, r) {
              return Zn(t)
            },
            set: function (t, e, n, r) {
              return [new Date(n), { timestampIsSet: !0 }]
            },
            incompatibleTokens: '*',
          },
        },
        rr = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        ar = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        ir = /^'([^]*?)'?$/,
        or = /''/g,
        ur = /\S/,
        sr = /[a-zA-Z]/
      function cr(t, e, n, o) {
        a(3, arguments)
        var u = String(t),
          s = String(e),
          c = o || {},
          f = c.locale || It
        if (!f.match) throw new RangeError('locale must contain match property')
        var d = f.options && f.options.firstWeekContainsDate,
          l = null == d ? 1 : r(d),
          h = null == c.firstWeekContainsDate ? l : r(c.firstWeekContainsDate)
        if (!(h >= 1 && h <= 7))
          throw new RangeError(
            'firstWeekContainsDate must be between 1 and 7 inclusively',
          )
        var g = f.options && f.options.weekStartsOn,
          m = null == g ? 0 : r(g),
          w = null == c.weekStartsOn ? m : r(c.weekStartsOn)
        if (!(w >= 0 && w <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        if ('' === s) return '' === u ? i(n) : new Date(NaN)
        var v,
          y = { firstWeekContainsDate: h, weekStartsOn: w, locale: f },
          T = [{ priority: 10, subPriority: -1, set: fr, index: 0 }],
          p = s
            .match(ar)
            .map(function (t) {
              var e = t[0]
              return 'p' === e || 'P' === e ? (0, oe[e])(t, f.formatLong, y) : t
            })
            .join('')
            .match(rr),
          D = []
        for (v = 0; v < p.length; v++) {
          var M = p[v]
          !c.useAdditionalWeekYearTokens && fe(M) && de(M, s, t),
            !c.useAdditionalDayOfYearTokens && ce(M) && de(M, s, t)
          var k = M[0],
            x = nr[k]
          if (x) {
            var C = x.incompatibleTokens
            if (Array.isArray(C)) {
              for (var S = void 0, Y = 0; Y < D.length; Y++) {
                var N = D[Y].token
                if (-1 !== C.indexOf(N) || N === k) {
                  S = D[Y]
                  break
                }
              }
              if (S)
                throw new RangeError(
                  "The format string mustn't contain `"
                    .concat(S.fullToken, '` and `')
                    .concat(M, '` at the same time'),
                )
            } else if ('*' === x.incompatibleTokens && D.length)
              throw new RangeError(
                "The format string mustn't contain `".concat(
                  M,
                  '` and any other token at the same time',
                ),
              )
            D.push({ token: k, fullToken: M })
            var O = x.parse(u, M, f.match, y)
            if (!O) return new Date(NaN)
            T.push({
              priority: x.priority,
              subPriority: x.subPriority || 0,
              set: x.set,
              validate: x.validate,
              value: O.value,
              index: T.length,
            }),
              (u = O.rest)
          } else {
            if (k.match(sr))
              throw new RangeError(
                'Format string contains an unescaped latin alphabet character `' +
                  k +
                  '`',
              )
            if (
              ("''" === M ? (M = "'") : "'" === k && (M = dr(M)),
              0 !== u.indexOf(M))
            )
              return new Date(NaN)
            u = u.slice(M.length)
          }
        }
        if (u.length > 0 && ur.test(u)) return new Date(NaN)
        var U = T.map(function (t) {
            return t.priority
          })
            .sort(function (t, e) {
              return e - t
            })
            .filter(function (t, e, n) {
              return n.indexOf(t) === e
            })
            .map(function (t) {
              return T.filter(function (e) {
                return e.priority === t
              }).sort(function (t, e) {
                return e.subPriority - t.subPriority
              })
            })
            .map(function (t) {
              return t[0]
            }),
          E = i(n)
        if (isNaN(E)) return new Date(NaN)
        var H = Pt(E, b(E)),
          F = {}
        for (v = 0; v < U.length; v++) {
          var W = U[v]
          if (W.validate && !W.validate(H, W.value, y)) return new Date(NaN)
          var I = W.set(H, F, W.value, y)
          I[0] ? ((H = I[0]), Te(F, I[1])) : (H = I)
        }
        return H
      }
      function fr(t, e) {
        if (e.timestampIsSet) return t
        var n = new Date(0)
        return (
          n.setFullYear(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()),
          n.setHours(
            t.getUTCHours(),
            t.getUTCMinutes(),
            t.getUTCSeconds(),
            t.getUTCMilliseconds(),
          ),
          n
        )
      }
      function dr(t) {
        return t.match(ir)[1].replace(or, "'")
      }
      function lr(t, e, n) {
        return a(2, arguments), W(cr(t, e, new Date(), n))
      }
      function hr(t) {
        return a(1, arguments), 1 === i(t).getDay()
      }
      function gr(t) {
        return a(1, arguments), i(t).getTime() < Date.now()
      }
      function mr(t) {
        a(1, arguments)
        var e = i(t)
        return e.setMinutes(0, 0, 0), e
      }
      function wr(t, e) {
        a(2, arguments)
        var n = mr(t),
          r = mr(e)
        return n.getTime() === r.getTime()
      }
      function vr(t, e, n) {
        a(2, arguments)
        var r = m(t, n),
          i = m(e, n)
        return r.getTime() === i.getTime()
      }
      function yr(t, e) {
        return a(2, arguments), vr(t, e, { weekStartsOn: 1 })
      }
      function Tr(t, e) {
        a(2, arguments)
        var n = y(t),
          r = y(e)
        return n.getTime() === r.getTime()
      }
      function br(t) {
        a(1, arguments)
        var e = i(t)
        return e.setSeconds(0, 0), e
      }
      function pr(t, e) {
        a(2, arguments)
        var n = br(t),
          r = br(e)
        return n.getTime() === r.getTime()
      }
      function Dr(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return (
          n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth()
        )
      }
      function Mr(t, e) {
        a(2, arguments)
        var n = ot(t),
          r = ot(e)
        return n.getTime() === r.getTime()
      }
      function kr(t) {
        a(1, arguments)
        var e = i(t)
        return e.setMilliseconds(0), e
      }
      function xr(t, e) {
        a(2, arguments)
        var n = kr(t),
          r = kr(e)
        return n.getTime() === r.getTime()
      }
      function Cr(t, e) {
        a(2, arguments)
        var n = i(t),
          r = i(e)
        return n.getFullYear() === r.getFullYear()
      }
      function Sr(t) {
        return a(1, arguments), wr(Date.now(), t)
      }
      function Yr(t) {
        return a(1, arguments), yr(t, Date.now())
      }
      function Nr(t) {
        return a(1, arguments), pr(Date.now(), t)
      }
      function Or(t) {
        return a(1, arguments), Dr(Date.now(), t)
      }
      function Ur(t) {
        return a(1, arguments), Mr(Date.now(), t)
      }
      function Er(t) {
        return a(1, arguments), xr(Date.now(), t)
      }
      function Hr(t, e) {
        return a(1, arguments), vr(t, Date.now(), e)
      }
      function Fr(t) {
        return a(1, arguments), Cr(t, Date.now())
      }
      function Wr(t) {
        return a(1, arguments), 4 === i(t).getDay()
      }
      function Ir(t) {
        return a(1, arguments), I(t, Date.now())
      }
      function Pr(t) {
        return a(1, arguments), I(t, o(Date.now(), 1))
      }
      function Rr(t) {
        return a(1, arguments), 2 === i(t).getDay()
      }
      function qr(t) {
        return a(1, arguments), 3 === i(t).getDay()
      }
      function Qr(t, e) {
        a(2, arguments)
        var n = e || {},
          r = i(t).getTime(),
          o = i(n.start).getTime(),
          u = i(n.end).getTime()
        if (!(o <= u)) throw new RangeError('Invalid interval')
        return r >= o && r <= u
      }
      function Lr(t) {
        return a(1, arguments), I(t, sn(Date.now(), 1))
      }
      function Xr(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = 9 + 10 * Math.floor(n / 10)
        return e.setFullYear(r + 1, 0, 0), e.setHours(0, 0, 0, 0), e
      }
      function jr(t, e) {
        a(1, arguments)
        var n = e || {},
          o = n.locale,
          u = o && o.options && o.options.weekStartsOn,
          s = null == u ? 0 : r(u),
          c = null == n.weekStartsOn ? s : r(n.weekStartsOn)
        if (!(c >= 0 && c <= 6))
          throw new RangeError('weekStartsOn must be between 0 and 6')
        var f = i(t),
          d = f.getDay(),
          l = 6 + (d < c ? -7 : 0) - (d - c)
        return f.setHours(0, 0, 0, 0), f.setDate(f.getDate() + l), f
      }
      function Br(t) {
        return a(1, arguments), jr(t, { weekStartsOn: 1 })
      }
      function zr(t) {
        a(1, arguments)
        var e = v(t),
          n = new Date(0)
        n.setFullYear(e + 1, 0, 4), n.setHours(0, 0, 0, 0)
        var r = w(n)
        return r.setDate(r.getDate() - 1), r
      }
      function Gr(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getMonth(),
          r = n - (n % 3) + 3
        return e.setMonth(r, 0), e.setHours(0, 0, 0, 0), e
      }
      function Ar(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear()
        return e.setFullYear(n + 1, 0, 0), e.setHours(0, 0, 0, 0), e
      }
      var Zr = /(\w)\1*|''|'(''|[^'])+('|$)|./g,
        Jr = /^'([^]*?)'?$/,
        $r = /''/g,
        _r = /[a-zA-Z]/
      function Kr(t, e) {
        a(2, arguments)
        var n = String(e),
          r = i(t)
        if (!W(r)) throw new RangeError('Invalid time value')
        var o = b(r),
          u = Pt(r, o),
          s = n
            .match(Zr)
            .map(function (t) {
              if ("''" === t) return "'"
              var e = t[0]
              if ("'" === e) return Vr(t)
              var n = qt[e]
              if (n) return n(u, t, null, {})
              if (e.match(_r))
                throw new RangeError(
                  'Format string contains an unescaped latin alphabet character `' +
                    e +
                    '`',
                )
              return t
            })
            .join('')
        return s
      }
      function Vr(t) {
        return t.match(Jr)[1].replace($r, "'")
      }
      function ta(t) {
        var e, n
        if ((a(1, arguments), t && 'function' == typeof t.forEach)) e = t
        else {
          if ('object' != typeof t || null === t) return new Date(NaN)
          e = Array.prototype.slice.call(t)
        }
        return (
          e.forEach(function (t) {
            var e = i(t)
            ;(void 0 === n || n < e || isNaN(e)) && (n = e)
          }),
          n || new Date(NaN)
        )
      }
      function ea(t) {
        var e, n
        if ((a(1, arguments), t && 'function' == typeof t.forEach)) e = t
        else {
          if ('object' != typeof t || null === t) return new Date(NaN)
          e = Array.prototype.slice.call(t)
        }
        return (
          e.forEach(function (t) {
            var e = i(t)
            ;(void 0 === n || n > e || isNaN(e)) && (n = e)
          }),
          n || new Date(NaN)
        )
      }
      var na = {
          dateTimeDelimiter: /[T ]/,
          timeZoneDelimiter: /[Z ]/i,
          timezone: /([Z+-].*)$/,
        },
        ra = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
        aa = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
        ia = /^([+-])(\d{2})(?::?(\d{2}))?$/
      function oa(t, e) {
        a(1, arguments)
        var n = e || {},
          i = null == n.additionalDigits ? 2 : r(n.additionalDigits)
        if (2 !== i && 1 !== i && 0 !== i)
          throw new RangeError('additionalDigits must be 0, 1 or 2')
        if (
          'string' != typeof t &&
          '[object String]' !== Object.prototype.toString.call(t)
        )
          return new Date(NaN)
        var o,
          u = ua(t)
        if (u.date) {
          var s = sa(u.date, i)
          o = ca(s.restDateString, s.year)
        }
        if (isNaN(o) || !o) return new Date(NaN)
        var c,
          f = o.getTime(),
          d = 0
        if (u.time && ((d = da(u.time)), isNaN(d) || null === d))
          return new Date(NaN)
        if (!u.timezone) {
          var l = new Date(f + d),
            h = new Date(
              l.getUTCFullYear(),
              l.getUTCMonth(),
              l.getUTCDate(),
              l.getUTCHours(),
              l.getUTCMinutes(),
              l.getUTCSeconds(),
              l.getUTCMilliseconds(),
            )
          return h.setFullYear(l.getUTCFullYear()), h
        }
        return (
          (c = ha(u.timezone)), isNaN(c) ? new Date(NaN) : new Date(f + d + c)
        )
      }
      function ua(t) {
        var e,
          n = {},
          r = t.split(na.dateTimeDelimiter)
        if (r.length > 2) return n
        if (
          (/:/.test(r[0])
            ? ((n.date = null), (e = r[0]))
            : ((n.date = r[0]),
              (e = r[1]),
              na.timeZoneDelimiter.test(n.date) &&
                ((n.date = t.split(na.timeZoneDelimiter)[0]),
                (e = t.substr(n.date.length, t.length)))),
          e)
        ) {
          var a = na.timezone.exec(e)
          a
            ? ((n.time = e.replace(a[1], '')), (n.timezone = a[1]))
            : (n.time = e)
        }
        return n
      }
      function sa(t, e) {
        var n = new RegExp(
            '^(?:(\\d{4}|[+-]\\d{' +
              (4 + e) +
              '})|(\\d{2}|[+-]\\d{' +
              (2 + e) +
              '})$)',
          ),
          r = t.match(n)
        if (!r) return { year: null }
        var a = r[1] && parseInt(r[1]),
          i = r[2] && parseInt(r[2])
        return {
          year: null == i ? a : 100 * i,
          restDateString: t.slice((r[1] || r[2]).length),
        }
      }
      function ca(t, e) {
        if (null === e) return null
        var n = t.match(ra)
        if (!n) return null
        var r = !!n[4],
          a = fa(n[1]),
          i = fa(n[2]) - 1,
          o = fa(n[3]),
          u = fa(n[4]),
          s = fa(n[5]) - 1
        if (r)
          return (function (t, e, n) {
            return e >= 1 && e <= 53 && n >= 0 && n <= 6
          })(0, u, s)
            ? (function (t, e, n) {
                var r = new Date(0)
                r.setUTCFullYear(t, 0, 4)
                var a = r.getUTCDay() || 7,
                  i = 7 * (e - 1) + n + 1 - a
                return r.setUTCDate(r.getUTCDate() + i), r
              })(e, u, s)
            : new Date(NaN)
        var c = new Date(0)
        return (function (t, e, n) {
          return (
            e >= 0 && e <= 11 && n >= 1 && n <= (ga[e] || (ma(t) ? 29 : 28))
          )
        })(e, i, o) &&
          (function (t, e) {
            return e >= 1 && e <= (ma(t) ? 366 : 365)
          })(e, a)
          ? (c.setUTCFullYear(e, i, Math.max(a, o)), c)
          : new Date(NaN)
      }
      function fa(t) {
        return t ? parseInt(t) : 1
      }
      function da(t) {
        var e = t.match(aa)
        if (!e) return null
        var n = la(e[1]),
          r = la(e[2]),
          a = la(e[3])
        return (function (t, e, n) {
          if (24 === t) return 0 === e && 0 === n
          return n >= 0 && n < 60 && e >= 0 && e < 60 && t >= 0 && t < 25
        })(n, r, a)
          ? 36e5 * n + 6e4 * r + 1e3 * a
          : NaN
      }
      function la(t) {
        return (t && parseFloat(t.replace(',', '.'))) || 0
      }
      function ha(t) {
        if ('Z' === t) return 0
        var e = t.match(ia)
        if (!e) return 0
        var n = '+' === e[1] ? -1 : 1,
          r = parseInt(e[2]),
          a = (e[3] && parseInt(e[3])) || 0
        return (function (t, e) {
          return e >= 0 && e <= 59
        })(0, a)
          ? n * (36e5 * r + 6e4 * a)
          : NaN
      }
      var ga = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
      function ma(t) {
        return t % 400 == 0 || (t % 4 == 0 && t % 100)
      }
      function wa(t) {
        if ((a(1, arguments), 'string' == typeof t)) {
          var e = t.match(
            /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|\+00:?00)?/,
          )
          return e
            ? new Date(
                Date.UTC(
                  +e[1],
                  e[2] - 1,
                  +e[3],
                  +e[4],
                  +e[5],
                  +e[6],
                  +((e[7] || '0') + '00').substring(0, 3),
                ),
              )
            : new Date(NaN)
        }
        return i(t)
      }
      function va(t, e) {
        if (arguments.length < 1)
          throw new TypeError(
            '1 argument required, but only none provided present',
          )
        var n = e && 'nearestTo' in e ? r(e.nearestTo) : 1
        if (n < 1 || n > 30)
          throw new RangeError('`options.nearestTo` must be between 1 and 30')
        var a = i(t),
          o = a.getSeconds(),
          u = a.getMinutes() + o / 60,
          s = Math.floor(u / n) * n,
          c = u % n,
          f = Math.round(c / n) * n
        return new Date(
          a.getFullYear(),
          a.getMonth(),
          a.getDate(),
          a.getHours(),
          s + f,
        )
      }
      function ya(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e),
          u = n.getFullYear(),
          s = n.getDate(),
          c = new Date(0)
        c.setFullYear(u, o, 15), c.setHours(0, 0, 0, 0)
        var f = qe(c)
        return n.setMonth(o, Math.min(s, f)), n
      }
      function Ta(t, e) {
        if ((a(2, arguments), 'object' != typeof e || null === e))
          throw new RangeError('values parameter must be an object')
        var n = i(t)
        return isNaN(n)
          ? new Date(NaN)
          : (null != e.year && n.setFullYear(e.year),
            null != e.month && (n = ya(n, e.month)),
            null != e.date && n.setDate(r(e.date)),
            null != e.hours && n.setHours(r(e.hours)),
            null != e.minutes && n.setMinutes(r(e.minutes)),
            null != e.seconds && n.setSeconds(r(e.seconds)),
            null != e.milliseconds && n.setMilliseconds(r(e.milliseconds)),
            n)
      }
      function ba(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setDate(o), n
      }
      function pa(t, e, n) {
        a(2, arguments)
        var u = n || {},
          s = u.locale,
          c = s && s.options && s.options.weekStartsOn,
          f = null == c ? 0 : r(c),
          d = null == u.weekStartsOn ? f : r(u.weekStartsOn)
        if (!(d >= 0 && d <= 6))
          throw new RangeError(
            'weekStartsOn must be between 0 and 6 inclusively',
          )
        var l = i(t, u),
          h = r(e),
          g = l.getDay(),
          m = h % 7,
          w = (m + 7) % 7,
          v = 7 - d,
          y = h < 0 || h > 6 ? h - ((g + v) % 7) : ((w + v) % 7) - ((g + v) % 7)
        return o(l, y, u)
      }
      function Da(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setMonth(0), n.setDate(o), n
      }
      function Ma(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setHours(o), n
      }
      function ka(t, e) {
        a(2, arguments)
        var n = i(t),
          u = r(e),
          s = Be(n),
          c = u - s
        return o(n, c)
      }
      function xa(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e),
          u = ze(n) - o
        return n.setDate(n.getDate() - 7 * u), n
      }
      function Ca(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setMilliseconds(o), n
      }
      function Sa(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setMinutes(o), n
      }
      function Ya(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e),
          u = Math.floor(n.getMonth() / 3) + 1,
          s = o - u
        return ya(n, n.getMonth() + 3 * s)
      }
      function Na(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return n.setSeconds(o), n
      }
      function Oa(t, e, n) {
        a(2, arguments)
        var o = i(t),
          u = r(e),
          s = nn(o, n) - u
        return o.setDate(o.getDate() - 7 * s), o
      }
      function Ua(t, e, n) {
        a(2, arguments)
        var o = n || {},
          u = o.locale,
          s = u && u.options && u.options.firstWeekContainsDate,
          c = null == s ? 1 : r(s),
          f = null == o.firstWeekContainsDate ? c : r(o.firstWeekContainsDate),
          d = i(t),
          l = r(e),
          h = D(d, en(d, n)),
          g = new Date(0)
        return (
          g.setFullYear(l, 0, f),
          g.setHours(0, 0, 0, 0),
          (d = en(g, n)).setDate(d.getDate() + h),
          d
        )
      }
      function Ea(t, e) {
        a(2, arguments)
        var n = i(t),
          o = r(e)
        return isNaN(n) ? new Date(NaN) : (n.setFullYear(o), n)
      }
      function Ha(t) {
        a(1, arguments)
        var e = i(t),
          n = e.getFullYear(),
          r = 10 * Math.floor(n / 10)
        return e.setFullYear(r, 0, 1), e.setHours(0, 0, 0, 0), e
      }
      function Fa() {
        return p(Date.now())
      }
      function Wa() {
        var t = new Date(),
          e = t.getFullYear(),
          n = t.getMonth(),
          r = t.getDate(),
          a = new Date(0)
        return a.setFullYear(e, n, r + 1), a.setHours(0, 0, 0, 0), a
      }
      function Ia() {
        var t = new Date(),
          e = t.getFullYear(),
          n = t.getMonth(),
          r = t.getDate(),
          a = new Date(0)
        return a.setFullYear(e, n, r - 1), a.setHours(0, 0, 0, 0), a
      }
      function Pa(t, e) {
        a(2, arguments)
        var n = r(e)
        return l(t, -n)
      }
      function Ra(t, e) {
        a(2, arguments)
        var n = r(e)
        return g(t, -n)
      }
      function qa(t, e) {
        a(2, arguments)
        var n = r(e)
        return x(t, -n)
      }
      function Qa(t, e) {
        a(2, arguments)
        var n = r(e)
        return C(t, -n)
      }
      function La(t, e) {
        a(2, arguments)
        var n = r(e)
        return S(t, -n)
      }
      function Xa(t, e) {
        a(2, arguments)
        var n = r(e)
        return Y(t, -n)
      }
      function ja(t, e) {
        a(2, arguments)
        var n = r(e)
        return N(t, -n)
      }
      var Ba = 24 * Math.pow(10, 8) * 60 * 60 * 1e3,
        za = -Ba
    },
  })
})
//# sourceMappingURL=date-fns@2.16.1.js.map
