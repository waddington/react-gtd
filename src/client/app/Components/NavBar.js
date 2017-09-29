import React from 'react';

export class NavBar extends React.Component {
    render () {
        const pages = [['Home'], ['In-tray', 'Add "In" Item', 'View "In" Items'], ['Actions', 'Add Actionable Item', 'View Actionable Items']];
        const pagesMenu = pages.map((pageName, i) => {
            const pageHasChildren = pageName.length > 1 ? true : false;
            if (!pageHasChildren) {
                return <li key={'li-'+i}><a href="#">{pageName[0]}</a></li>;
            } else {
                const currentLevelAllPages = pageName.concat().slice(1);
                console.log(currentLevelAllPages);
                return (
                    <li key={'li-'+i} className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{pageName[0]}  <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            {currentLevelAllPages.map((childPageName, j) => {
                                return <li key={'cli-'+j}><a href="#">{childPageName}</a></li>
                            })}
                        </ul>
                    </li>
                );
            }
        });

        return (
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Brand</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav">
                    {pagesMenu}
                  </ul>

                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        );
    }
}