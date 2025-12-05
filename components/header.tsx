"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Phone, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none rounded-md p-3 text-base leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="font-medium text-gray-800">{title}</div>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

export const Header = ({
  setIsCallbackFormOpen,
  setIsPhoneChoiceOpen,
}: {
  setIsCallbackFormOpen?: (isOpen: boolean) => void
  setIsPhoneChoiceOpen?: (isOpen: boolean) => void
}) => {
  const [hidden, setHidden] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  const navLinks = [
    { href: "/", text: "Головна" },
    {
      text: "Напрямки",
      href: "/directions",
      subLinks: [
        { href: "/directions/freedom-from-addiction", title: "Звільнення від залежностей" },
        { href: "/directions/spiritual-growth", title: "Духовне зростання" },
        { href: "/directions/knowing-god", title: "Пізнання Бога" },
      ],
    },
    { href: "/about", text: "Про нас" },
    { href: "/conditions", text: "Умови навчання" },
    { href: "/contacts", text: "Контакти" },
  ]

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-lg shadow-sm">
            <Image src="/images/logo.png" alt="Логотип центру Перемога" width={32} height={32} className="rounded" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-800">Перемога</span>
            <span className="text-xs text-gray-500">Навчально-духовний центр</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link, index) =>
                link.subLinks ? (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuTrigger
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname.startsWith(link.href || "") && "bg-accent text-accent-foreground",
                      )}
                    >
                      {link.text}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white">
                      <ul className="grid w-[280px] gap-2 p-2">
                        {link.subLinks.map((subLink) => (
                          <ListItem key={subLink.title} href={subLink.href} title={subLink.title} />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={index}>
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          pathname === link.href && "bg-accent text-accent-foreground",
                        )}
                      >
                        {link.text}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Button onClick={() => setIsCallbackFormOpen?.(true)}>
            <Phone className="mr-2 h-4 w-4" />
            Зателефонувати
          </Button>
        </div>

        {/* Mobile Burger Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden border-2 border-gray-400 rounded-md bg-transparent"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation Dialog */}
      <Dialog open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
          <DialogHeader className="w-full">
            <DialogTitle className="text-2xl font-bold text-gray-800">Навігація</DialogTitle>
            <DialogDescription className="text-gray-600">Оберіть розділ або зв'яжіться з нами.</DialogDescription>
          </DialogHeader>
          <nav className="flex flex-col gap-4 w-full mt-6">
            {navLinks.map((link) => (
              <React.Fragment key={link.href}>
                {link.subLinks ? (
                  <div className="block text-lg py-3 px-4 text-gray-800 font-medium cursor-default">{link.text}</div>
                ) : (
                  <Link
                    href={link.href}
                    className="block text-lg py-3 px-4 rounded-md hover:bg-blue-50 transition-colors text-gray-800 font-medium"
                    onClick={closeMobileNav}
                  >
                    {link.text}
                  </Link>
                )}
                {link.subLinks &&
                  link.subLinks.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="block text-base py-2 px-4 rounded-md hover:bg-blue-50 transition-colors text-gray-700 pl-8"
                      onClick={closeMobileNav}
                    >
                      {subLink.title}
                    </Link>
                  ))}
              </React.Fragment>
            ))}
            <div className="mt-4 w-full">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  setIsCallbackFormOpen?.(true)
                  closeMobileNav()
                }}
              >
                <Phone className="mr-2 h-5 w-5" />
                Зателефонувати
              </Button>
            </div>
          </nav>
        </DialogContent>
      </Dialog>
    </motion.header>
  )
}
