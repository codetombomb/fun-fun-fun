const colors = {
    wt: "#FFFFFF",
    rd: "#FF0000", // Luigi - #0B770D
    yw: "#FFFF00",
    bu: "#0000FF",
    ph: "#FFC896",
    bn: "#643200",
    bg: "#171717"
}

const mario = [
    'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg', 'bg',
    'bg', 'bg', 'bg', 'bg', 'rd', 'rd', 'rd', 'rd', 'rd', 'bg', 'bg', 'bg', 'bg', 'bg',
    'bg', 'bg', 'bg', 'rd', 'rd', 'rd', 'rd', 'rd', 'rd', 'rd', 'rd', 'rd', 'bg', 'bg',
    'bg', 'bg', 'bg', 'bn', 'bn', 'bn', 'ph', 'ph', 'bn', 'ph', 'bg', 'bg', 'bg', 'bg',
    'bg', 'bg', 'bn', 'ph', 'bn', 'ph', 'ph', 'ph', 'bn', 'ph', 'ph', 'ph', 'bg', 'bg',
    'bg', 'bg', 'bn', 'ph', 'bn', 'bn', 'ph', 'ph', 'ph', 'bn', 'ph', 'ph', 'bn', 'bg',
    'bg', 'bg', 'bn', 'bn', 'ph', 'ph', 'ph', 'ph', 'bn', 'bn', 'bn', 'bn', 'bg', 'bg',
    'bg', 'bg', 'bg', 'bg', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph', 'ph', 'bg', 'bg', 'bg',
    'bg', 'bg', 'bg', 'rd', 'rd', 'bu', 'rd', 'rd', 'rd', 'rd', 'bg', 'bg', 'bg', 'bg',
    'bg', 'bg', 'rd', 'rd', 'rd', 'bu', 'rd', 'rd', 'bu', 'rd', 'rd', 'rd', 'bg', 'bg',
    'bg', 'rd', 'rd', 'rd', 'rd', 'bu', 'bu', 'bu', 'bu', 'rd', 'rd', 'rd', 'rd', 'bg',
    'bg', 'wt', 'wt', 'rd', 'bu', 'yw', 'bu', 'bu', 'yw', 'bu', 'rd', 'wt', 'wt', 'bg',
    'bg', 'wt', 'wt', 'wt', 'bu', 'bu', 'bu', 'bu', 'bu', 'bu', 'wt', 'wt', 'wt', 'bg',
    'bg', 'wt', 'wt', 'bu', 'bu', 'bu', 'bu', 'bu', 'bu', 'bu', 'bu', 'wt', 'wt', 'bg',
    'bg', 'bg', 'bg', 'bu', 'bu', 'bu', 'bg', 'bg', 'bu', 'bu', 'bu', 'bg', 'bg', 'bg',
    'bg', 'bg', 'bn', 'bn', 'bn', 'bg', 'bg', 'bg', 'bg', 'bn', 'bn', 'bn', 'bg', 'bg',
    'bg', 'bn', 'bn', 'bn', 'bn', 'bg', 'bg', 'bg', 'bg', 'bn', 'bn', 'bn', 'bn', 'bg',
]

mario.forEach(value => {
    const div = document.createElement('div')
    div.className = value
    div.style.backgroundColor = colors[value]
    document.getElementsByClassName("container")[0].append(div)
})
