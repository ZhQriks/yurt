import React from "react";

export function Logomark(props: React.ComponentPropsWithoutRef<'img'>) {
  return (
      <img src="https://i.imgur.com/sEWqxrn.png" alt="logo" width={40} height={40} />
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
      <div className='flex items-center'>
        <img src="https://i.imgur.com/sEWqxrn.png" alt="logo" width={60} height={60} />
        <h2 className='font-semibold text-blue-600 text-lg'>Yurt</h2>
      </div>
  )
}
