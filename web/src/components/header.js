import React from "react";
import { StaticQuery, graphql } from "gatsby"
import { cn } from "../lib/helpers";
import Icon from "./icon";

import * as styles from "./header.module.css";

const query = graphql`
  query NavbarQuery {
    navbar: allSanityNavbar {
      nodes {
        URL
        Text
      }
    }
  }
`;

const Header = () => {
  return(
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <nav className={cn(styles.nav)}>
          <ul>
            <StaticQuery
                query={query}
                render={data => {
                  if (!data.navbar) {
                    throw new Error(
                      'Missing "Navbar". Open the studio at http://localhost:3333 and add "Site navbar links" data'
                    );
                  }      
                  return (
                    <>
                      {data.navbar.nodes.map((value) => (
                        <li key={value.Text}>
                          <a href={value.URL}>{value.Text}</a>
                        </li>
                      ))}
                    </>
                  ); 
                }}
              />
            <li className={`${styles.navicon} ${styles.navicon_margin_left}`}>
              <a href="#">
                {/* <Icon symbol="translate" /> */}
              </a>
            </li>
            <li className={styles.navicon}>
              <a href="#">
                {/* <Icon symbol="darkmode" /> */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
};

export default Header;
