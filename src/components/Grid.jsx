import { useEffect } from 'react';
import gsap from 'gsap';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import './Grid.css';

const Grid = () => {
  useEffect(() => {
    document.querySelector('.grid-component').classList.add('js');
    document.addEventListener('DOMContentLoaded', function() {
      document.querySelector('.grid-component').classList.remove('loading');
    });

    const cards = [...document.querySelectorAll('.card:not(.card--empty)')];
    cards.forEach(card => new Card1(card));
  }, []);

  return (
    <main id="roadmap" className="grid-component" style={{backgroundColor: 'black', color: 'white'}}>
      <h1 className="roadmap-title">Penta AI Roadmap</h1>
      
      <div className="grid-container">
        <div className="grid" data-effect="hover-1">
          <h2 className="grid__title">Quarter <br/>01</h2>
          <div className="quarter-description">
            <p>Foundation Phase</p>
            <p>Website Launch</p>
            <p>Community Development</p>            
            <p>Pre Launch Marketing</p>
            
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/20459347.webp)"}}></div>
              <div className="card__box card__box--c">
                  <span className="card__box-number">01</span>
                  <span className="card__box-tags">#core #foundation</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Base AI Architecture</span>
              </div>
          </div>
          <div className="card card--empty"></div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/nn.webp)"}}></div>
              <div className="card__box card__box--a">
                  <span className="card__box-number">02</span>
                  <span className="card__box-tags">#NLP #understanding</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Language Processing</span>
              </div>
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/prompthero-prompt-797c4f9bc51.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">03</span>
                  <span className="card__box-tags">#testing #beta</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Platform Testing</span>
              </div>
          </div>
          <div className="card card--empty"></div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/16.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">04</span>
                  <span className="card__box-tags">#deployment #launch</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Beta Launch</span>
              </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid" data-effect="hover-2">
          <h2 className="grid__title">Quarter <br/>02</h2>
          <div className="quarter-description">
            <p>$PENTA Token Launch</p>
            <p>Community Growth</p>
            <p>Strategic Marketing</p>
            <p>Aetheris Release</p>
          </div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/51.webp)"}}></div>
              <div className="card__box card__box--a">
                  <span className="card__box-number">04</span>
                  <span className="card__box-tags">#learning #training</span>
              </div>
              <div className="card__box card__box--b">
                  <span className="card__box-category">Neural Network Training</span>
              </div>
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/robo4.webp)"}}></div>
              <div className="card__box card__box--a">
                  <span className="card__box-number">05</span>
                  <span className="card__box-tags">#token #launch</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">$PENTA Token</span>
              </div>
          </div>
          
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/9.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">06</span>
                  <span className="card__box-tags">#credit #system</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Credit Implementation</span>
              </div>
          </div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/1.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">16</span>
                  <span className="card__box-tags">#platform #public</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Public Access</span>
              </div>
          </div>

        </div>
      </div>

      <div className="grid-container">
        <div className="grid" data-effect="hover-3">
          <h2 className="grid__title">Quarter <br/>03</h2>
          <div className="quarter-description">
            <p>Nexor & Luminxex Release</p>
            <p>Ecosystem Growth</p>
            <p>Developer Partnerships</p>
            <p>Beta Platform Release</p>
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/61.webp)"}}></div>
              <div className="card__box card__box--c">
                  <span className="card__box-number">08</span>
                  <span className="card__box-tags">#agents #AI</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Advanced Agents</span>
              </div>
          </div>
          
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/rr.webp)"}}></div>
              <div className="card__box card__box--a">
                  <span className="card__box-number">09</span>
                  <span className="card__box-tags">#crosschain #blockchain</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Cross-Chain Integration</span>
              </div>
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/aa.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">17</span>
                  <span className="card__box-tags">#feedback #improvement</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">User Feedback</span>
              </div>
          </div>
          <div className="card card--empty"></div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/1373.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">18</span>
                  <span className="card__box-tags">#tuning #performance</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Performance Tuning</span>
              </div>
          </div>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid" data-effect="hover-3">
          <h2 className="grid__title">Quarter <br/>04</h2>
          <div className="quarter-description">
            <p>Xypher & Virex Release</p>
            <p>Blockchain Collaborations</p>
            <p>Public Platform Release</p>
            <p>Credit System Implementation</p>
          </div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/17.webp)"}}></div>
              <div className="card__box card__box--c">
                  <span className="card__box-number">12</span>
                  <span className="card__box-tags">#final #release</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Final Release</span>
              </div>
          </div>
          <div className="card card--empty"></div>
          
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/31.webp)"}}></div>
              <div className="card__box card__box--a">
                  <span className="card__box-number">13</span>
                  <span className="card__box-tags">#scaling #operations</span>
              </div>
              <div className="card__box card__box--d">
                  <span className="card__box-category">Scale Operations</span>
              </div>
          </div>
          <div className="card card--empty"></div>
          <div className="card">
              <div className="card__img" style={{backgroundImage: "url(/img/41.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">14</span>
                  <span className="card__box-tags">#multichain #deployment</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Multi-Chain Deployment</span>
              </div>
          </div>
          <div className="card card--alt">
              <div className="card__img" style={{backgroundImage: "url(/img/42.webp)"}}></div>
              <div className="card__box card__box--b">
                  <span className="card__box-number">15</span>
                  <span className="card__box-tags">#global #scalability</span>
              </div>
              <div className="card__box card__box--c">
                  <span className="card__box-category">Global Scalability</span>
              </div>
          </div>
        </div>
      </div>
    </main>
  );
};

class CardBox {
    DOM = {
        el: null,
        number: null,
        numberChars: null,
        tags: null,
        category: null,
        categoryChars: null,
    };

    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.number = this.DOM.el.querySelector('.card__box-number');
        this.DOM.tags = this.DOM.el.querySelector('.card__box-tags');
        this.DOM.category = this.DOM.el.querySelector('.card__box-category');

        if (this.DOM.number) {
            this.DOM.number.dataset.splitting = '';
        }
        if (this.DOM.category) {
            this.DOM.category.dataset.splitting = '';
        }

        Splitting();

        if (this.DOM.number) {
            this.DOM.numberChars = this.DOM.number.querySelectorAll('.char');
        }
        if (this.DOM.category) {
            this.DOM.categoryChars = this.DOM.category.querySelectorAll('.char');
        }
    }
}

class Card1 {
    DOM = {
        el: null,
        img: null,
        boxes: null
    };
    cardBoxesArr = [];

    constructor(DOM_el) {
        this.DOM.el = DOM_el;
        this.DOM.img = this.DOM.el.querySelector('.card__img');
        this.boxes = [...this.DOM.el.querySelectorAll('.card__box')];
        
        this.boxes.forEach(boxEl => this.cardBoxesArr.push(new CardBox(boxEl)));
        this.initEvents();
    }

    get cardBoxElements() {
        return this.cardBoxesArr.map(box => box.DOM.el);
    }

    get cardBoxNumberChars() {
        return this.cardBoxesArr.map(box => box.DOM.numberChars);
    }

    get cardBoxCategoryChars() {
        return this.cardBoxesArr.map(box => box.DOM.categoryChars)
            .filter(chars => chars !== null);
    }

    initEvents() {
        this.DOM.el.addEventListener('mouseenter', () => this.enter());
        this.DOM.el.addEventListener('mouseleave', () => this.leave());
    }

    enter() {
        if (this.leaveTimeline) {
            this.leaveTimeline.kill();
        }

        this.enterTimeline = gsap
            .timeline({
                defaults: {
                    duration: 0.5,
                    ease: 'expo'
                }
            })
            .addLabel('start', 0)
            .fromTo(this.DOM.img, {
                filter: 'saturate(100%) brightness(100%)',
            }, {
                scale: 0.85,
                filter: 'saturate(200%) brightness(70%)'
            }, 'start')
            .fromTo(this.cardBoxElements, {
                opacity: 0,
                xPercent: (_, target) => {
                    if (target.classList.contains('card__box--a')) return -100;
                    if (target.classList.contains('card__box--b')) return 100;
                    if (target.classList.contains('card__box--c')) return -100;
                    if (target.classList.contains('card__box--d')) return 100;
                    return 0;
                },
                yPercent: (_, target) => {
                    if (target.classList.contains('card__box--a')) return -100;
                    if (target.classList.contains('card__box--b')) return -100;
                    if (target.classList.contains('card__box--c')) return 100;
                    if (target.classList.contains('card__box--d')) return 100;
                    return 0;
                }
            }, {
                opacity: 1,
                xPercent: 0,
                yPercent: 0,
            }, 'start')
            .fromTo(this.cardBoxNumberChars, {
                opacity: 0,
            }, {
                duration: 0.3,
                opacity: 1,
                stagger: 0.1,
            }, 'start+=.2')
            .fromTo(this.cardBoxCategoryChars, {
                opacity: 0
            }, {
                duration: 0.1,
                opacity: 1,
                stagger: {
                    from: 'random',
                    each: 0.05
                },
            }, 'start+=.2');
    }

    leave() {
        if (this.enterTimeline) {
            this.enterTimeline.kill();
        }

        this.leaveTimeline = gsap
            .timeline({
                defaults: {
                    duration: 0.8,
                    ease: 'expo'
                }
            })
            .addLabel('start', 0)
            .to(this.DOM.img, {
                scale: 1,
                filter: 'saturate(100%) brightness(100%)'
            }, 'start')
            .to(this.cardBoxElements, {
                opacity: 0,
                xPercent: (_, target) => {
                    if (target.classList.contains('card__box--a')) return -100;
                    if (target.classList.contains('card__box--b')) return 100;
                    if (target.classList.contains('card__box--c')) return -100;
                    if (target.classList.contains('card__box--d')) return 100;
                    return 0;
                },
                yPercent: (_, target) => {
                    if (target.classList.contains('card__box--a')) return -100;
                    if (target.classList.contains('card__box--b')) return -100;
                    if (target.classList.contains('card__box--c')) return 100;
                    if (target.classList.contains('card__box--d')) return 100;
                    return 0;
                }
            }, 'start');
    }
}

export default Grid; 