import React from 'react'
import './props.css'
const Props = () => {
  return (
    <div className='OuterContainer'>
      <table>
        <tbody>
          <tr>
            <th>Name of the Prop</th>
            <th>Type of the prop</th>
            <th>Default</th>
            <th>Usage</th>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-1'>options</a>
            </td>
            <td>Array</td>
            <td />
            <td>Renders options in the Filter component</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-1'>placeholder</a>
            </td>
            <td>String</td>
            <td />
            <td>Sets the placeholder for the Filter component</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-2'>hoverColor</a>
            </td>
            <td>String</td>
            <td>#0d66d6</td>
            <td>Changes the highlighted colour of the selected option</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-2'>className</a>
            </td>
            <td>String</td>
            <td />
            <td>Class-name for filter field container.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-2'>inputClassName</a>
            </td>
            <td>String</td>
            <td />
            <td>Class-name for the input element.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-2'>dropdownListClassName</a>
            </td>
            <td>String</td>
            <td />
            <td>Class-name for the dropdown list.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-3'>onSubmit</a>
            </td>
            <td>Function</td>
            <td />
            <td>
              This is callback function which provides the filtered values when
              the filter component is submitted.
            </td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-4'>optionsListMaxHeight</a>
            </td>
            <td>number</td>
            <td>200</td>
            <td>Sets the maximum height of the options list container.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-5'>style</a>
            </td>
            <td>CSS Properties</td>
            <td />
            <td>This prop is used to style the Filter component.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-5'>customFilterIcon</a>
            </td>
            <td>ReactNode</td>
            <td />
            <td>
              This prop enables you to set custom filter-icon in the left side
              of the filter component.
            </td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-5'>customClearIcon</a>
            </td>
            <td>ReactNode</td>
            <td />
            <td>This prop enables you to set custom clear-icon.</td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-6'>editable</a>
            </td>
            <td>Boolean</td>
            <td>true</td>
            <td>
              You can make the filter field as non-editable by setting this prop
              to false.
            </td>
          </tr>
          <tr>
            <td>
              <a href='/docs-props/#example-3'>onClear</a>
            </td>
            <td>Function</td>
            <td />
            <td>
              This is callback function which is called when the filters are
              cleared.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Props
