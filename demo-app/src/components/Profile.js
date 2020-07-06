import React from 'react';

export const Profile = () => {

  return (
    <div className="layout">
      
      <header id="page-header">
        <h1>Profile</h1>
      </header>
      
      <aside id="sidebar">
        <ul>
          <li>Name: Eric Greene</li>
          <li>Hometown: Amherst, VA</li>
          <li>Birth Month: August</li>
          <li>Occupation: Trainer and Software Developer</li>
        </ul>
      </aside>

      <section id="content">

        <ol>
          <li>Pepperoni & Mushroom Pizza</li>
          <li>Fried Chicken</li>
          <li>Salads</li>
        </ol>

        <p>
          Hello, my name is Eric! I have been teaching classes for
          6.5 years! I have been teaching the bootcamp for 5 years.
          My favorite topic to teach is JavaScript and React.
        </p>

        <p>Here is some more info about me...</p>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Activity</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Canoeing</td>
              <td>
                  I enjoy canoeing the late spring, summer and
                  early fall. Generally, I go canoeing on lakes.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Reading</td>
              <td>
                  I like to read interesting books.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Walking</td>
              <td>
                  I like to go walking around where I live
                  in the evening after class is over.
              </td>
            </tr>
          </tbody>
        </table>

      </section>

      <footer id="page-footer">
        <small>&copy; 2020, My Profile, Inc.</small>
      </footer>

    </div>
  );

};