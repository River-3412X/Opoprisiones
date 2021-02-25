var quienes_somos=0;
var suscripciones=0;
var precios_especiales=0;
var ranking=0;
var contacto = 0;
var eventos1=0;
var eventos2=0;
var eventos3=0;
window.onload=function(){
        gsap.timeline().staggerFrom(".title",0.01,{
            opacity:0
        },0.1)
        .from(".subtitle",1,{
            y:100,
            display:"none"
        })
        .from(".text",1,{
            x:100,
            display:"none"
        })
        .from(".registro",1,{
            opacity:0
        });
        if($("#navbar").offset().top!= 0 ){
            $("#navbar").addClass("nav-down");
            $("#navbar").addClass("shadow");
            $("#logo").addClass("navbar-brand-down");
        }
        else{
            $("#navbar").removeClass("nav-down");
            $("#navbar").removeClass("shadow");
            $("#logo").removeClass("navbar-brand-down");
        }
        const ioQquienes_s= new IntersectionObserver(animqs,{});
        ioQquienes_s.observe(document.getElementById("quienes_somos"));
        
        const ioSus= new IntersectionObserver(anim_sus,{});
        ioSus.observe(document.getElementById("suscripciones"));
        
        const ioPree= new IntersectionObserver(anim_pree,{});
        ioPree.observe(document.getElementById("precios_especiales"));
        
        const ioRanking= new IntersectionObserver(anim_ranking,{});
        ioRanking.observe(document.getElementById("ranking"));

        const iocontacto= new IntersectionObserver(anim_contacto,{});
        iocontacto.observe(document.getElementById("contacto"));
        
        const ioenventos1= new IntersectionObserver(anim_eventos1,{});
        ioenventos1.observe(document.getElementById("eventos1"));

        const ioenventos2= new IntersectionObserver(anim_eventos2,{});
        ioenventos2.observe(document.getElementById("eventos2"));

        const ioenventos3= new IntersectionObserver(anim_eventos3,{});
        ioenventos3.observe(document.getElementById("eventos3"));
        

        $(window).scroll(function(){
            if($("#navbar").offset().top!= 0 ){
                $("#navbar").addClass("nav-down");
                $("#navbar").addClass("shadow");
                $("#logo").addClass("navbar-brand-down");
                
            }
            else{
                $("#navbar").removeClass("nav-down");
                $("#navbar").removeClass("shadow");
                $("#logo").removeClass("navbar-brand-down");
            }
        });
}
function animqs(entries,observer){
    if(entries[0].isIntersecting && quienes_somos==0){
        gsap.timeline().to("#quienes_somos",0.2,{ opacity:1})
        .from(".qs_title",1.5,{
            opacity:0, y:-100
        },"-=0.2").from(".qs p",1.5,{
            opacity:0,ease:"back",scale:0.5
        },"-=1")
        .from(".one",1.5,{
            x:-100,opacity:0
        },"-=1.5")
        .from(".two",1.5,{
            y:100,opacity:0
        },"-=1.5")
        .from(".three",1.5,{
            x:100,opacity:0
        },"-=1.5");
        quienes_somos++;
    }
}
function anim_sus(entries,observer){
    if(entries[0].isIntersecting && suscripciones==0){
        gsap.timeline().to("#suscripciones",0.2,{opacity:1})
        .staggerFrom(".suscripciones",2,{
            opacity:0,scale:"0.5"
        },"0.5");
        suscripciones++;
    }
}
function anim_pree(entries,observer){
    if(entries[0].isIntersecting && precios_especiales==0){
        gsap.timeline().to("#precios_especiales",0.2,{opacity:1})
        .from(".pree_title",1.5,{
            opacity:0,y:-100,
        },"-=0.2")
        .from(".pree_text",1.5,{
            opacity:0,x:100
        },"-=1");
        precios_especiales++;
    }
}
function anim_ranking(entries,observer){
    if(entries[0].isIntersecting && ranking==0){
        gsap.timeline().to("#ranking",0.2,{opacity:1})
        .from(".ranking-item-content",2.5,{
            opacity:0,scale:1.2,ease:"back"
        },"-=0.2");
        ranking++;
    }
}
function anim_contacto(entries,observer){
    if(entries[0].isIntersecting && contacto==0){
        gsap.timeline().to("#contacto",0.2,{opacity:1})
        .from(".contacto-title",1.5,{
            opacity:0,y:-100,
        },"-=0.2")
        .from(".contacto-item",1.5,{
            opacity:0,x:100
        },"-=1");
        contacto++;
    }
}
function anim_eventos1(entries,observer){
    if(entries[0].isIntersecting && eventos1==0){
        gsap.timeline().to(".item-e-u",0.2,{opacity:1})
        .from(".ev1-title",1.5,{
            opacity:0,y:-100,
        },"-=0.2")
        .from(".ev1-text",1.5,{
            opacity:0,x:100
        },"-=1")
        .from(".ev1-img",1.5,{
            opacity:0,x:100
        },"-=1");
        eventos1++;
    }
}
function anim_eventos2(entries,observer){
    if(entries[0].isIntersecting && eventos2==0){
        gsap.timeline().to(".item-e-d",0.2,{opacity:1})
        .from(".ev2-title",1.5,{
            opacity:0,y:-100,
        },"-=0.2")
        .from(".ev2-img",1.5,{
            opacity:0,x:100
        },"-=1");
        eventos2++;
    }
}
function anim_eventos3(entries,observer){
    if(entries[0].isIntersecting && eventos3==0){
        gsap.timeline().to(".item-e-t",0.2,{opacity:1})
        .from(".ev1-title",1.5,{
            opacity:0,y:-100,
        },"-=0.2")
        .from(".slider-container",1.5,{
            opacity:0,x:100
        },"-=1");
        eventos3++;
    }
}