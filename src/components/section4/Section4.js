import React, {Component} from "react";
  
export default class Section4 extends Component{
  render(){
      return (
        <div>
            <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title is-2">Related Links</h2>
                To be added.
                </div>
                </div>
            </section>

          <section className="section">
                <div className="container is-max-desktop">
                <div className="container is-max-desktop content">
                <h2 className="title">BibTeX</h2>
                <pre><code>
                    {'@article{,\
                    \n author = {},\
                    \n title = {Diffusion Posterior Sampling for General Noisy Inverse Problems},\
                    \n journal = {},\
                    \n year      = {2022},\
                    \n}'}
                </code></pre>
                </div>
                </div>
          </section>
          </div>
    );
  }
}
