export interface YearDrawingSets
  extends Readonly<{
    [year: number]: Drawing[]
  }> {}

export interface Drawing
  extends Readonly<{
    id: string
    date: string
    title: string
    slug: string
    image: string
  }> {}
