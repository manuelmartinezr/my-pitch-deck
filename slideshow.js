let plot_index = 0
const plots = document.getElementsByClassName('plot-slide')
function showPlot(n){
    for (let i = 0; i<plots.length; i++){
        plots[i].style.display = "none"
    }
    plots[n].style.display ="block"
}
function plusPlot(n){
    plot_index = (plot_index + n + plots.length) % plots.length
    showPlot(plot_index)
}
showPlot(plot_index)