const remSize = 16
const exceptions = [
  'flex',
  'fontWeight',
  'opacity',
  'zIndex',
]

const rem = (e) => {
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
        s[k] = `${v / remSize}rem`
      } else if (v && v.includes('px')) {
        const p = []
        const ps = v.split(' ')
        ps.forEach((x) => {
          if (x.includes('px')) {
            const n = Number(x.replace('px', ''))
            if (n) p.push(`${n / remSize}rem`)
          } else if (Number(x)) {
            p.push(`${Number(x) / remSize}rem`)
          } else {
            p.push(x)
          }
        })
        s[k] = p.toString().split(',').join(' ')
      }
    }
  }
  return s
}

export default rem
