import React from 'react'
import Counter from '../../Counter'
import ExpandCollapse from '../../ExpandCollapse'
import Header from '../../Header'
import ToggleButton from '../../shared-components/ToggleButton'
import { useRouteProtector } from '../../use-route-protector'

export default function About() {

  useRouteProtector();

  return (
    <div>
      <Counter />
    </div>
  )
}
