'use client'
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

type DrawerContextType = {
  open: boolean
  openMobile: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  setOpenMobile: Dispatch<SetStateAction<boolean>>
}

export const DrawerContext = createContext({} as DrawerContextType)

type DrawerProviderProps = {
  children: ReactNode
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(true)
  const [openMobile, setOpenMobile] = useState(true)

  return (
    <DrawerContext.Provider
      value={{
        open,
        setOpen,
        openMobile,
        setOpenMobile,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}