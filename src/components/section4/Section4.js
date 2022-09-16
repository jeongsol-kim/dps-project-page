import React, {Component} from "react";
  
export default class Section4 extends Component{
  render(){
      return (
        <div>
            <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title">Related Links</h2>
                To be added.
                </div>
                </div>
            </section>

          <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title">BibTeX</h2>
                <pre><code>
                    {'@article{park2021nerfies,\
                    \n author = {Park, Keunhong and Sinha, Utkarsh and Barron, Jonathan T. and Bouaziz, Sofien and Goldman, Dan B and Seitz, Steven M. and Martin-Brualla, Ricardo},\
                    \n title = {Nerfies: Deformable Neural Radiance Fields},\
                    \n journal = {ICCV},\
                    \n year      = {2021},\
                    \n}'}
                </code></pre>
                </div>
                </div>
          </section>
          </div>
    );
  }
}
