import { graphql } from "gatsby"
import React from "react"
import { FaCalendar } from "react-icons/fa"
import { FaOpenIcon } from "react-icons/fa"

import { rhythm } from "../utils/typography"

export default ({ node, className = `` }) => (
  <div css={{ marginTop: rhythm(-1 / 2) }} className={className}>
    <span style={{ marginRight: rhythm(1) }}>
      <FaCalendar size={14} style={{ position: `relative`, bottom: 1 }} />
      {` `}
      {node.date}
    </span>
    {node.categories &&
      node.categories.map(category => (
        <span style={{ marginRight: rhythm(1) }} key={category.name}>
          <FaOpenIcon size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {category.name}
        </span>
      ))}
    {node.tags &&
      node.tags.map(tag => (
        <span key={tag.name}>
          <FaOpenIcon size={14} style={{ position: `relative`, bottom: 1 }} />
          {` `}
          {tag.name}
        </span>
      ))}
  </div>
)

export const query = graphql`
query {
  allWordpressPage {
    edges {
      node {
        id
        title
        excerpt
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
  
}
`

