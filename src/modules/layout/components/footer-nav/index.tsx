"use client"

import clsx from "clsx"
import { useCollections, useProductCategories } from "medusa-react"
import Link from "next/link"
// import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()
  // const { product_categories } = useProductCategories()

  return (
    <div className="flex flex-col pt-16 content-container gap-y-8">
      <div className="flex flex-col items-start justify-between gap-y-6 xsmall:flex-row">
        <div>
          <Link href="/" className="uppercase text-xl-semi">
            Orgotel
          </Link>
        </div>
        <div className="grid w-full max-w-lg grid-cols-2 text-small-regular gap-x-10 md:gap-x-16">
          <>
          </>
          {/* {product_categories && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Categories</span>
              <ul className="grid grid-cols-1 gap-2">
                {product_categories?.slice(0, 6).map((c) => {
                  if (c.parent_category) {
                    return
                  }

                  const children =
                    c.category_children?.map((child) => ({
                      name: child.name,
                      handle: child.handle,
                      id: child.id,
                    })) || null

                  return (
                    <li className="flex flex-col gap-2" key={c.id}>
                      <Link
                        className={clsx(children && "text-small-semi")}
                        href={`/${c.handle}`}
                      >
                        {c.name}
                      </Link>
                      {children && (
                        <ul className="grid grid-cols-1 gap-2 ml-3">
                          {children &&
                            children.map((child) => (
                              <li key={child.id}>
                                <Link href={`/${child.handle}`}>
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )} */}
          {collections && (
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Products</span>
              <ul
                className={clsx("grid grid-cols-1 gap-2", {
                  "grid-cols-2": (collections?.length || 0) > 3,
                })}
              >
                {collections?.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <Link href={`/collections/${c.handle}`}>{c.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col text-right gap-y-2">
            <span className="text-base-semi">Other</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-center gap-y-4 xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-center text-gray-500 text-xsmall-regular md:text-left">
          © Copyright 2023 Orgotel
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end space-x-3 justify-between">
          <a href="/terms-conditions" className="text-xs text-gray-500">Terms & conditions</a>
          <a href="/terms-conditions" className="text-xs text-gray-500">Privacy Policy</a>
          <a href="/terms-conditions" className="text-xs text-gray-500">Refund & Return Policy</a>
          
          {/* <CountrySelect /> */}
        </div>
      </div>
    </div>
  )
}

export default FooterNav
