$(function(){
    new WOW().init();
    //流程插件
    var stepBar = getStepBar();
    stepBar.init("stepBar", {
        step : 5,
        change : true,
        animation : true
    });

    var stepBar2 = getStepBar();
    stepBar2.init("stepBar2", {
        step : 5,
        change : true,
        animation : true
    });
});