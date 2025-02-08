"use client"

import { Button } from "@/components/ui/button"
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./navigation-menu";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant={"secondary"}><TiThMenu/></Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="text-start font-extrabold text-xl">Shop.co</SheetTitle>
              
            </SheetHeader>
            <ul>
          <li className=' grid grid-cols-1 space-y-4 mt-2'>
          <Link href={"/"}><NavigationMenuDemo/></Link>
          <Link className="ml-3"href={"/"}>On Sale</Link>   
          <Link className="ml-3"href={"/"}>New Arrivals</Link>
          <Link className="ml-3"href={"/"}>Brands</Link>
          </li>
         </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
