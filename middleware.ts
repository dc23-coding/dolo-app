import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  matcher: [
    /*
     * Protect these routes with Clerk:
     */
    '/dashboard(.*)',
    '/loadboard(.*)',
    '/profile(.*)',
  ],
}
