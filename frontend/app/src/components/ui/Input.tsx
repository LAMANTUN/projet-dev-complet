import type { InputHTMLAttributes } from 'react'
export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
  {...props}
  className={`w-full px-3 py-2 border border-gray-300 rounded 
              bg-white text-gray-900
              dark:bg-gray-700 dark:border-gray-600 dark:text-white 
              placeholder-gray-400 dark:placeholder-gray-300
              ${props.className || ''}`}
/>

  )
}
