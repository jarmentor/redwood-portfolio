import { db } from 'src/lib/db'

export const contactForms = () => {
  return db.contactForm.findMany()
}

export const createContactForm = ({ input }) => {
  return db.contactForm.create({ data: input })
}
