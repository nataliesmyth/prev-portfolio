console.log('sanity check')

// let readout = document.querySelector('.readout');

// let count = 0

// let text = ["Software Engineer", "Programmer", "Handstand Efficianato", "Full Stack Web Developer", "George R.R. Martin fan girl", "CSS enthusiast" ];
// setInterval(e => {
//   let randomNumber = Math.floor(Math.random()*11);
//   count = (count + randomNumber) % text.length;
//   var newText = text[count];
//   readout.innerHTML = `<b>${newText}</b>`
// }, 2000);

$(function() {
    function e(){
        Highcharts.chart("container",{
            chart:{
                type:"bar",backgroundColor:"transparent",marginLeft:0,marginRight:0,marginBottom:0,marginTop:50,events:{
                    click:function(e){
                        console.log(e),console.log(this)
                    }
                }
            },title:{
                text:null,style:{
                    color:"#E91E63",fontSize:"30px"
                },align:"left",x:-10
            },credits:{
                enabled:!1
            },subtitle:{
                text:""
            },xAxis:{
                type:"category",endOnTick:!1,gridLineColor:"#E91E63",lineColor:null,lineWidth:0,tickColor:null,labels:{
                    enabled:!0,style:a,useHTML:!0,align:"left",reserveSpace:!1,x:20
                }},yAxis:{
                    title:{
                        text:""
                    },gridLineColor:null,labels:{
                        enabled:!1
                    }},legend:{
                        enabled:!1
                    },plotOptions:{
                        bar:{
                            stacking:"normal",groupPadding:-.1
                        },series:{
                            borderWidth:0,minPointLength:3,className:"skillsData",dataLabels:{
                                enabled:!1,shadow:!0,useHTML:!0,formatter:function(){
                                    var e=this.key;return e
                                },style:a
                            }}},tooltip:
                            {enabled:!1,headerFormat:'<span style="font-size:21px;">{series.name}</span><br>',pointFormat:'<span style="font-size:21px;color:{point.color};"><b>{point.y}</b> {point.name}</span> '},series:[{name:"Skills",colorByPoint:!0,data:[{name:t[0].category,y:t[0].skills.length,drilldown:t[0].category},{name:t[1].category,y:t[1].skills.length,drilldown:t[1].category},{name:t[2].category,y:t[2].skills.length,drilldown:t[2].category},{name:t[3].category,y:t[3].skills.length,drilldown:t[3].category},{name:t[4].category,y:t[4].skills.length,drilldown:t[4].category}]}],drilldown:{series:[{name:t[0].category,id:t[0].category,data:t[0].skills},{name:t[1].category,id:t[1].category,data:t[1].skills},{name:t[2].category,id:t[2].category,data:t[2].skills},{name:t[3].category,id:t[3].category,data:t[3].skills},{name:t[4].category,id:t[4].category,data:t[4].skills}],drillUpButton:{relativeTo:"spacingBox",verticalAlign:"center",position:{y:0,x:0},theme:{fill:"white","stroke-width":1,stroke:"silver",stroke:null,r:0,states:{hover:{stroke:null,fill:null},select:{stroke:null,fill:null}}}},activeAxisLabelStyle:a}})}$(".button-collapse").sideNav({menuWidth:300,edge:"left",closeOnClick:!0,draggable:!0}),$(".scrollspy").scrollSpy({scrollOffset:65}),$(".parallax").parallax(),$(function(){function e(){t.slideUp(),t.eq(t.parent().data("visible")).slideDown(),t.parent().data("visible")>=l?t.parent().data("visible",0):t.parent().data("visible",t.parent().data("visible")+1)}var t=$("#scrolling-text span"),l=t.length-1,a=$("#nick_name");setInterval(e,2500),t.slideUp()}),$("body").data("chartScrolled",!1),$(window).scroll(function(){$(".cardSection").removeClass("active"),$($("#wide-menu .active").attr("href")).addClass("active"),$("#talking_text").text($("#wide-menu .active").data().talking),"#skills"===$("#wide-menu .active").attr("href")&&$("body").data().chartScrolled===!1&&(e(),$("body").data("chartScrolled",!0))});var t=[],l=$(".skills");l.each(function(){var e={category:"title",skills:[]},l=$(this).find("li");e.category=$(this).prev().text(),l.each(function(){var t=[$(this).text(),$(this).data().percent];e.skills.push(t)}),t.push(e)}),Highcharts.getOptions().plotOptions.bar.colors=function(){var e=[],t="#E91E63",l;for(l=0;l<10;l+=1)e.push(Highcharts.Color(t).brighten((l-.5)/10).get());return e}(),Highcharts.setOptions({chart:{style:{fontFamily:'"Roboto", sans-serif'}}});var a={cursor:"pointer",color:"#ffffff",fontSize:"14px",fontWeight:"200",textDecoration:"none"};$("body").removeClass("scroll-lock")});