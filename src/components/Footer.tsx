import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import skyseer from '@/images/logos/skyseer2.png'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
        <Link href="#" aria-label="Home">
              <img src={skyseer.src} alt="Skyseer Logo" className="mx-auto h-10 w-auto" />
            </Link>

          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#features">About</NavLink>
              <NavLink href="#testimonials">Team</NavLink>
              <NavLink href="#CallToAction">Contact Us</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">

          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Skyseer. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
