import Glide from '@glidejs/glide'

export const initialGlider = (id, options) => new Glide(`#${id}`, options).mount()
