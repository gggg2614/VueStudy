"use strict";

const Shop = {
  name: 'Shop',
  template: " <table border=\"1\">\n                <template v-for=\"(good,index) in goods\">\n                    <thead>\n                        <tr>\n                            <th>\u5546\u54C1\u7F16\u53F7</th>\n                            <th>\u5546\u54C1\u59D3\u540D</th>\n                            <th>\u5546\u54C1\u4EF7\u683C</th>\n                            <th>\u5546\u54C1\u4ECB\u7ECD</th>\n                            <th>\u5546\u54C1\u6570\u91CF</th>\n                            <th>\u64CD\u4F5C</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <th>{{index+1}}</th>\n                            <th>{{good.name}}</th>\n                            <th>{{good.price}}</th>\n                            <th>{{good.intro}}</th>\n                            <th>{{good.num}}</th>\n                            <th>\n                                <input type=\"button\" value=\"\u6DFB\u52A0\u8D2D\u7269\u8F66\">\n                            </th>\n                        </tr>\n                    </tbody>\n                </template>\n            </table>",

  data() {
    return {
      goods: [{
        id: 1,
        name: '1',
        price: '1',
        intro: '1',
        num: '1'
      }, {
        id: 2,
        name: '2',
        price: '2',
        intro: '2',
        num: '2'
      }]
    };
  }

};