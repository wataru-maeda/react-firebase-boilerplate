const remSize = 16
const exceptions = ['flex', 'fontWeight', 'opacity', 'zIndex', 'boxShadow']

const min = x => {
  const v = x / remSize
  const m = 1 / remSize
  if (x < 0) return `${v}rem`
  return v > m ? `${v}rem` : '1px' // minimum 1px
}

const px2rem = ps => {
  const p = []
  ps.forEach(x => {
    if (x.includes('px')) {
      const n = Number(x.replace('px', ''))
      if (n) p.push(min(n))
    } else if (Number(x)) {
      p.push(min(Number(x)))
    } else {
      p.push(x)
    }
  })
  return p
}

const rem = e => {
  const s = { ...e }
  const ks = Object.keys(e)
  const c = ks.length
  for (let i = 0; i < c; i += 1) {
    const k = ks[i]
    const v = e[k]
    if (!exceptions.includes(k)) {
      if (v && typeof v === 'object') {
        s[k] = rem(v)
      } else if (v && typeof v === 'number') {
        s[k] = min(v)
      } else if (v && v.includes('px') && v.includes('calc')) {
        const vc = v.match(/\(([^)]+)\)/)
        if (vc && vc.length > 0) {
          const ps = vc[1].split(' ')
          const p = px2rem(ps)
          const r = p
            .toString()
            .split(',')
            .join(' ')
          s[k] = `calc(${r})`
        }
      } else if (v && v.includes('px')) {
        const ps = v.split(' ')
        const p = px2rem(ps)
        s[k] = p
          .toString()
          .split(',')
          .join(' ')
      }
    }
  }
  return s
}

export default rem
