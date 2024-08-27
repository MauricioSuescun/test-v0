/**
 * v0 by Vercel.
 * @see https://v0.dev/t/zHIk7bW2BaR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <div className="relative flex-1">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Shop
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <HeartIcon className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <img
              src="/placeholder.svg"
              width={36}
              height={36}
              alt="Avatar"
              className="overflow-hidden rounded-full"
              style={{ aspectRatio: "36/36", objectFit: "cover" }}
            />
            <span className="sr-only">Account</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="hidden sm:block">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="category"
            >
              <AccordionItem value="category">
                <AccordionTrigger className="text-base">
                  Categories
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-2">
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <ShirtIcon className="h-5 w-5" />
                      Clothing
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <FootprintsIcon className="h-5 w-5" />
                      Shoes
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <ShoppingBagIcon className="h-5 w-5" />
                      Bags
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <WatchIcon className="h-5 w-5" />
                      Accessories
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-2 rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                      prefetch={false}
                    >
                      <CircuitBoardIcon className="h-5 w-5" />
                      Electronics
                    </Link>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="grid gap-6 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold tracking-tight">
                Recent Products
              </h1>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <FilterIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <ListOrderedIcon className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Sort</span>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
              <Skeleton className="rounded-lg bg-muted/60 h-[300px]" />
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Men
            </Link>
            <Link href="#" prefetch={false}>
              Women
            </Link>
            <Link href="#" prefetch={false}>
              Kids
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Community
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Press
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CircuitBoardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  );
}

function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function ListOrderedIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ShirtIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  );
}

function ShoppingBagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function WatchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  );
}
