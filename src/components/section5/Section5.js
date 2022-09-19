import React, { Component, useState } from "react"
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

function getImagePath(value, task){
    let idx = 0;
    if (value==0){
        idx = 990;
    }else{
        idx = 990 - (value-1) * 10
    }
    
    const path_xt = process.env.PUBLIC_URL + "/imgs/progress/{0}/xt/x_{1}.png".format(task, idx.toString().padStart(4,"0"));
    const path_x0 = process.env.PUBLIC_URL + "/imgs/progress/{0}/x0/x0_{1}.png".format(task, idx.toString().padStart(4,"0"));
    return {progress_img: path_xt, progress_x0: path_x0};
};


function ProgressImage (task) {
    const input_img = process.env.PUBLIC_URL + '/imgs/progress/{0}/input/input.png'.format(task);
    const label_img = process.env.PUBLIC_URL + '/imgs/progress/{0}/label/label.png'.format(task);

    const [imgs, setImgs] = useState(
        getImagePath(0, task)
    )
    
    return (
    <div className="generate-progress">
                    
        <Grid container spacing={2}>
            <Grid item xs>
                <h4>Measurement</h4>
                <img src={input_img} alt="input image" width={256} height={256}></img>
            </Grid>
            <Grid item xs>
                <h4><MathJax>{"$x_t$"}</MathJax></h4>
                <img src={imgs.progress_img} alt="test image"></img>
            </Grid>
            <Grid item xs>
                <h4><MathJax>{"$\\hat{x}_0$"}</MathJax></h4>
                <img src={imgs.progress_x0} alt="test image"></img>
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
                    <Slider step={5} onChange={setImgs(getImagePath(5, task))}/>
                </Grid>
            </Grid>
        </div>
    </div>
    );
}


export default class Section5 extends Component{

    state = {imgs: [getImagePath(0, "motion_deblur"), 
                    getImagePath(0, "super_resolution")]};

    ProgressImages = (props) => (
    <div className="generate-progress">
                    
        <Grid container spacing={2}>
            <Grid item xs>
                <h4>Measurement</h4>
                <img src={props.input} alt="input image" width={256} height={256}></img>
            </Grid>
            <Grid item xs>
                <h4><MathJax>{"$x_t$"}</MathJax></h4>
                <img src={props.progress_img} alt="test image"></img>
            </Grid>
            <Grid item xs>
                <h4><MathJax>{"$\\hat{x}_0$"}</MathJax></h4>
                <img src={props.progress_x0} alt="test image"></img>
            </Grid>
            <Grid item xs>
                <h4>Label</h4>
                <img src={props.label} alt='label image'></img>
            </Grid>
        </Grid>
        <div className="container column">
            <Grid container spacing={2} alignItems="center">
                <Grid item >
                    <AiOutlineClockCircle />
                </Grid>
                <Grid item xs>
                    <Slider step={5} onChange={this.OnChangeSlider}/>
                </Grid>
            </Grid>
        </div>
    </div>
)
    OnChangeSlider = (e) => {
        this.setState({
            imgs: [getImagePath(e.target.value, "motion_deblur"),
                   getImagePath(e.target.value, "super_resolution")]
        })
    };

    render(){
        const inputs = [
            process.env.PUBLIC_URL + '/imgs/progress/motion_deblur/input/input.png',
            process.env.PUBLIC_URL + '/imgs/progress/super_resolution/input/input.png'
        ];
        const labels = [
            process.env.PUBLIC_URL + '/imgs/progress/motion_deblur/label/label.png',
            process.env.PUBLIC_URL + '/imgs/progress/super_resolution/label/label.png'
        ];

        const imgs = this.state.imgs;
        return (
            <section className="section">
                <div className="container">
                    <h2 className="title is-2">Solve Inverse Problem with Poisson Noise</h2>
                    {/* {ProgressImage('motion_deblur')} */}
                    {this.ProgressImages({"input": inputs[0], 
                                          "progress_img": imgs[0].progress_img,
                                          "progress_x0": imgs[0].progress_x0,
                                          "label": labels[0]})}
                    {this.ProgressImages({"input": inputs[1], 
                                          "progress_img": imgs[1].progress_img,
                                          "progress_x0": imgs[1].progress_x0,
                                          "label": labels[1]})}
                </div>
            </section>
        )
    }
}