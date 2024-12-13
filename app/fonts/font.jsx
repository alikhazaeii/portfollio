import { Inconsolata , EB_Garamond } from 'next/font/google'



export const inconsolata = Inconsolata({
  subsets:['latin'],
  weight:['300'],
})

export const eb = EB_Garamond({
  subsets:['latin'],
  weight:['500'],
  style:['italic']
})