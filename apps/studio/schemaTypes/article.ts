import { BookIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity'

export const article = defineType({
    name: 'article',
    title: 'Article',
    type: 'document',
    icon: BookIcon,
    fieldsets: [
        { name: 'dates', title: 'Dates', options: { columns: 2 } },
    ],
    fields: [
        defineField({ name: 'publishedAt', type: 'datetime', fieldset: 'dates' }),
        defineField({ name: 'updatedAt', type: 'datetime', fieldset: 'dates' }),
    ],
});