import React, { Component } from "react"
import { Grid, Slider } from "@mui/material"
import { MathJax } from 'better-react-mathjax'
import { AiOutlineClockCircle } from "react-icons/ai"

String.prototype.format = function() {
    var formatted = this;
    for( var arg in arguments ) {
        formatted = formatted.replace("{" + arg + "}", arguments[arg]);
    }
    return formatted;
};

function getImagePath(value){
    let idx = 0;
    if (value==0){
        idx = 990;
    }else{
        idx = 990 - (value-1) * 10
    }
    
    const path_xt = process.env.PUBLIC_URL + "/imgs/progress/motion_deblur/xt/x_{0}.png".format(idx.toString().padStart(4,"0"));
    const path_x0 = process.env.PUBLIC_URL + "/imgs/progress/motion_deblur/x0/x0_{0}.png".format(idx.toString().padStart(4,"0"));
    return {progress_img: path_xt, progress_x0: path_x0};
};


export default class Section5 extends Component{

    state = getImagePath(0);

    OnChangeSlider = (e) => {
        this.setState(getImagePath(e.target.value))
    };

    render(){
        const input_img = process.env.PUBLIC_URL + '/imgs/progress/motion_deblur/input/input.png'
        const label_img = process.env.PUBLIC_URL + '/imgs/progress/motion_deblur/label/label.png'
        const {progress_img, progress_x0} = this.state;
        return (
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Solve Inverse Problem with Poisson Noise</h2>
                    <div className="generate-progress">
                        <Grid container spacing={2}>
                            <Grid item xs>
                                <h4>Measurement</h4>
                                <img src={input_img} alt="input image"></img>
                            </Grid>
                            <Grid item xs>
                                <h4><MathJax>{"$x_t$"}</MathJax></h4>
                                <img src={progress_img} alt="test image"></img>
                            </Grid>
                            <Grid item xs>
                                <h4><MathJax>{"$\\hat{x}_0$"}</MathJax></h4>
                                <img src={progress_x0} alt="test image"></img>
                            </Grid>
                            <Grid item xs>
                                <h4>Label</h4>
                                <img src={label_img} alt='label image'></img>
                            </Grid>
                        </Grid>
                        <div className="container column">
                            <Grid container spacing={2} alignItems="center">
                                <Grid item >
                                    <AiOutlineClockCircle />
                                </Grid>
                                <Grid item xs>
                                    <Slider onChange={this.OnChangeSlider}/>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}