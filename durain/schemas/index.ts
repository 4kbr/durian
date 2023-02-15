import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import product from './product'
import category from './category'

export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  product,
  category,

  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
