const Shop = {
    name: 'Shop',
    template: ` <table border="1">
                <template v-for="(good,index) in goods">
                    <thead>
                        <tr>
                            <th>商品编号</th>
                            <th>商品姓名</th>
                            <th>商品价格</th>
                            <th>商品介绍</th>
                            <th>商品数量</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{{index+1}}</th>
                            <th>{{good.name}}</th>
                            <th>{{good.price}}</th>
                            <th>{{good.intro}}</th>
                            <th>{{good.num}}</th>
                            <th>
                                <input type="button" value="添加购物车">
                            </th>
                        </tr>
                    </tbody>
                </template>
            </table>`,
    data() {
        return {
            goods: [
                { id: 1, name: '1', price: '1', intro: '1', num: '1' },
                { id: 2, name: '2', price: '2', intro: '2', num: '2' },
            ]
        }
    }

}