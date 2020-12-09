export interface Drawing
  extends Readonly<{
    id: string // year + number, e.g. 2000.123
    year: number
    number: number // sequence index for that year
    date: string // e.g. 2000-01-01
    title: string // display text
    slug: string // for file and url
    image: string // path relative to image root, may have subdirectory
  }> {}

export interface YearDrawingSets
  extends Readonly<{
    [year: number]: Drawing[]
  }> {}
