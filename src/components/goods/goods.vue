<template>
  <div class="goods">
    <div class="goodsbox">
      <div class="banner" ref="banner">
        <mt-swipe :auto="4000" class="banner">
          <mt-swipe-item v-for="(item, index) in banner" :key="index">
            <img v-lazy="item">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="wrapper" ref="wrapper">
        <div class="menu-wrapper" ref="menuWrapper">
          <ul>
            <li
              v-for="(item, index) in data"
              :key="index"
              class="menu-item"
              :class="{'current':currentIndex===index}"
              @click="selectMenu(index,$event)"
              ref="menuList"
            >
              <span class="text">{{item.kindName}}</span>
              <span class="num" v-if="item.count && item.count>0">{{item.count}}</span>
            </li>
          </ul>
        </div>
        <div class="foods-wrapper" ref="foodsWrapper">
          <ul>
            <li v-for="(item, index) in data" :key="index" class="food-list" ref="foodList">
              <h1 class="title">{{item.kindName}}</h1>
              <ul>
                <li
                  @tap="selectFood(food,$event)"
                  v-for="(food, index) in item.dishData"
                  :key="index"
                  class="food-item"
                >
                  <div class="icon">
                    <img v-if="food.imageName" v-lazy="food.imageName">
                    <img v-else src="../../common/images/no.png">
                  </div>
                  <div class="content">
                    <h2 class="name">{{food.dishName}}</h2>
                    <div class="extra">
                      <span class="count">销量{{food.salesCount}}份</span>
                      <span v-if="food.memberPrice && showMemberPrice == 'true'&& !food.abandonPrice">会员价￥{{food.memberPrice}}</span>
                      <span class='old' v-if="food.abandonPrice"><del>原价￥{{food.abandonPrice}}</del></span>
                    </div>
                    <div class="price">
                      <span class="now">￥{{food.cost}}</span>
                    </div>
                    <div class="cartcontrol-wrapper">
                      <cartcontrol
                        @addFood="addFoodList(arguments)"
                        @DeletFood="DeletFood"
                        :food="food"
                      ></cartcontrol>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 购物车 -->
    <shopcart ref="shopcart" :data="data" :selectFoods="optionList" @getReco="recommendedGo"></shopcart>
    <!-- 套餐 -->
    <setCourese
      :selectFoods="foodItems"
      :target="target"
      @addCustom="addCustom(arguments)"
      ref="setCourese"
    ></setCourese>
    <!-- 定制项 -->
    <foodcustom
      :selectFoods="foodItems"
      :target="target"
      @addCustom="addCustom(arguments)"
      ref="foodcustom"
    ></foodcustom>
    <!-- 菜品详情 -->
    <food
      @addFood="addFoodList(arguments)"
      @DeletFood="DeletFood"
      :food="selectedFood"
      :data="data"
      ref="food"
    ></food>
    <!-- 推荐 -->
    <recommended
      ref="recommended"
      :data="data"
      @addFood="addFoodList(arguments)"
      @DeletFood="DeletFood"
    ></recommended>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import Vue from "vue";
import $ from "jquery";
import axios from "axios";
import qs from "qs";
import { Swipe, SwipeItem, Lazyload,Toast } from "mint-ui";
import BScroll from "better-scroll";
import cartcontrol from "../cartcontrol/cartcontrol.vue"; //购物车
import shopcart from "../shopcart/shopcart.vue";
import food from "../food/food.vue";
import setCourese from "../setCourese/setCourese.vue"; //套餐选择
import foodcustom from "../foodcustom/foodcustom.vue"; //定制项
import recommended from "../recommended/recommended.vue"; //推荐
import loading from "../loading/loading.vue"; //加载中
import utils from "../../common/js/utils.js";
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  data() {
    return {
      title: window.localStorage.getItem("welcomeSname"),
      showMemberPrice: window.localStorage.getItem("showMemberPrice"),
      data: [],
      goods: [],
      listHeight: [],
      scrollY: 0,
      selectedFood: {},
      banner: [],
      animate: true,
      foodItems: {},
      foodList: [], //套餐内单品列表
      optionList: [], //定制项
      target: "",
      drop: true,
      loading: false
    };
  },
  mounted(){
      this.init()
  },
  computed: {
    currentIndex() {
      //下拉联动
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    },
  },
  // watch: {
  //   // data: {
  //   //   handler(newValue, oldValue) {
  //   //     for (let i = 0; i < newValue.length; i++) {
  //   //       if (newValue[i].dishData) {
  //   //         let count = 0;
  //   //         for (let j = 0; j < newValue[i].dishData.length; j++) {
  //   //           count += newValue[i].dishData[j].quantity
  //   //             ? newValue[i].dishData[j].quantity
  //   //             : 0;
  //   //         }
  //   //         newValue[i].count = count;
  //   //       }
  //   //     }
  //   //     this.$forceUpdate();
  //   //   },
  //   //   deep: true
  //   // }
  // },
  methods: {
    init(){
      //初始化状态
      this.optionList = []
      this.banner= []

      let getDish = {
        appid: utils.getUrlKey("appid"),
        brandid: utils.getUrlKey("brandid"),
        storeid: utils.getUrlKey("storeid"),
        dishtype: utils.getUrlKey("dishtype"),
        sourcetype:2,
        openid: window.sessionStorage.getItem('openid')
      };
      if(window.sessionStorage.getItem("phoneNum")){
        getDish.phone = window.sessionStorage.getItem("phoneNum");
      }
      
      this.loading = true;

      //获取菜品
      axios.post("../../wx/getDish", qs.stringify(getDish)).then(res => {
        this.loading = false;
        if (res.data.result == 1057) {
          Toast({className: 'toasts',
            message:'该时段无菜品出售'
          });
        } else {
          window.localStorage.setItem("userIsMember", res.data.content.appMember);
          this.data = res.data.content.dish;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
      //获取banner图
      axios.post("../../api/terminal/getOtherfiles", qs.stringify(getDish)).then(res => {
        this.loading = false;
        let data = res.data
        if(data.result == 0){
          data.files.forEach(item =>{
            if(item.filetypeKey == 'AD_IMAGE'){
              this.banner.push(item.filename)
            }
          })
          if(!this.banner.length>0){
            console.log(this.$refs.banner.style.height)
            this.$refs.banner.style.height = 0;
            this.$refs.wrapper.style.top = 0;
          }
        }else{
          Toast({className: 'toasts',
            message:data.errmsg
          });
        }
      });

    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      let foodList = this.$refs.foodList;
      let el = foodList[index];
      this.foodsScroll.scrollToElement(el, 300);
      this.foodsScroll.refresh();
      this.meunScroll.refresh();
    },
    selectFood(food, event) {
      this.selectedFood = food;
      this.$refs.food.show();
    },
    addFood(target) {
      this._drop(target);
    },
    _drop(target) {},
    _initScroll() {
      //设置滚动
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true,
        probeType: 3
      });

      this.meunScroll.on("scroll", () => {
        this._bannerHS(this.meunScroll);
      });

      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        tap: true,
        probeType: 3
      });

      this.foodsScroll.on("scroll", pos => {
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }

        this._bannerHS(this.foodsScroll);
      });
    },
    _bannerHS(el) {
      //banner设置以及上滑隐藏
      if (el.y > 0) {
        if (this.animate) {
          $(this.$refs.banner)
            .stop()
            .animate({ top: "0" }, 500);
          $(this.$refs.wrapper)
            .stop()
            .animate({ top: $(this.$refs.banner).height() }, 500, () => {
              this.animate = true;
              el.refresh();
            });
          this.animate = false;
        }
      } else if (el.y < -10) {
        if (this.animate) {
          $(this.$refs.banner)
            .stop()
            .animate({ top: "-" + $(this.$refs.banner).height() }, 500);
          $(this.$refs.wrapper)
            .stop()
            .animate({ top: "0" }, 500, () => {
              this.animate = true;
              el.refresh();
            });
          this.animate = false;
        }
      }
    },
    _calculateHeight() {
      let foodList = this.$refs.foodList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    _followScroll(index) {
      let menuList = this.$refs.menuList;
      let el = menuList[index];
      this.meunScroll.scrollToElement(el, 300, 0, -100);
    },
    addFoodList(el) {
      if (el.length > 0) {
        var e = el[0];
        var target = el[1];
        this.target = target;
      } else {
        var e = el;
      }

      this.foodItems = e;

      //判断显示套餐内容
      if (e.packageItems !== undefined && e.isPackage == 1) {
        this.$refs.setCourese.show();
        return false;
      }

      //判断显示定制项
      if (e.optionCategoryList.length > 0) {
        this.$refs.foodcustom.show();
        return false;
      }

      // 体验优化,异步执行下落动画
      this.$nextTick(() => {
        this.$refs.shopcart.drop(target);
      });

      if (!e.quantity) {
        Vue.set(e, "quantity", 1);
      } else {
        let num = e.quantity + 1;
        Vue.set(e, "quantity", num);
      }
      //不显示就直接数量增加
      let list = {
        dishKind: e.dishKind,
        imageName: e.imageName,
        dishID: e.dishID,
        dishName: e.dishName,
        price: e.abandonPrice ? e.abandonPrice:e.price,
        takeFee:e.waiDai_cost,//打包费
        waimaiPrice: e.waimaiPrice, //外卖费
        marketPrice: e.price,
        marketPriceCost: e.price, //价格可能设置错了
        cost:e.cost, //如果是会员，并且会员价大于零
        quantity: e.quantity,
        comment: e.comment,
        gift: e.gift,
        dishUnit: e.dishUnit,
        subItemList: [],
        marketList: [],
        optionList: [],
        seq: 0
      };
      this.addCustom(list);
    },
    addCustom(el) {
      var e = el;
      if (el.length > 0) {
        var e = el[0];
        var target = el[1];
        // 体验优化,异步执行下落动画
        this.$nextTick(() => {
          this.$refs.shopcart.drop(target);
        });
      }

      e.add = true;
      let addPush,
        addPush2,
        addPush3,
        addPush4,
        addPush5,
        addPush6 = false;
      let index,
        index2,
        index3,
        index5 = 0;

      //遍历原始数据和新增数据，
      if (this.optionList.length > 0) {
        addPush = false;

        for (let i = 0; i < this.optionList.length; i++) {
          if (this.optionList[i].dishID == e.dishID) {
            console.log("dishID相同");
            index2 = i;
            addPush2 = true;

            if (
              this.optionList[i].subItemList.length > 0 &&
              e.subItemList.length > 0
            ) {
              addPush6 = true;
            } else {
              if(e.optionList.length>0){
                console.log("定制项长度不相同");
                addPush3 = true;
                index3 = i;
                if (this.optionList[i].optionList.length == e.optionList.length) {
                  console.log("定制项长度相同");
                  addPush4 = true;

                  for (let j = 0; j < e.optionList.length; j++) {
                    if (
                      e.optionList[j].id == this.optionList[i].optionList[j].id
                    ) {
                      addPush5 = true;
                      index5 = i;
                      console.log("id相同");
                    }
                  }
                }
              }

            }
          }
        }
      } else {
        addPush = true; //第一次直接添加
      }

      if (addPush) {
        this.optionList.push(e);
      } else {
        //套餐直接push
        if (addPush6) {
          e.seq = this.optionList.length;
          this.optionList.push(e);
          return;
        }

        //id相同
        if (addPush5) {
          this.optionList[index5].quantity =
            this.optionList[index5].quantity + 1;
          return;
        }

        //定制项长度相同
        if (addPush4) {
          e.seq = this.optionList.length;
          this.optionList.push(e);

          // this.optionList[index2].quantity =
          //   this.optionList[index2].quantity + 1;
          return;
        }

        //定制项长度大于零
        if (addPush3) {
          e.seq = this.optionList.length;
          this.optionList.push(e);
          return;
        }

        //dishID相同
        if (addPush2) {
          this.optionList[index2].quantity =
            this.optionList[index2].quantity + 1;
          return;
        }
        this.optionList.push(e);
      }
    },
    DeletFood(e) {
      let index;
      this.optionList.forEach((itme, i) => {
        if (itme.dishID == e.dishID) {
          index = i; //获得相同数组的最后一个索引
        }
      });

      //同步原始数据
      this.data.forEach(item => {
        item.dishData.forEach((item2) => {
          if (item2.dishID == e.dishID) {
            let num = item2.quantity - 1;
            Vue.set(item2, "quantity", num);
          }
        });
      });

      //如果最后一个数组的数量大于0，数量减减，否则就删除数组
      if (this.optionList[index].quantity > 0) {
        let num = this.optionList[index].quantity - 1;
        Vue.set(this.optionList[index], "quantity", num);
      }

      //减到0时从购物车删除
      this.optionList.forEach((item, i) => {
        if (!item.quantity > 0) {
          this.optionList.splice(i, 1);
        }
      });
    },
    recommendedGo() {
      this.$refs.recommended.show();
    }
  },
  components: {
    loading,
    cartcontrol,
    shopcart,
    food,
    setCourese,
    foodcustom,
    recommended
  }
};


</script>

<style scoped lang="less">
@import "../../common/css/common.less";
.goods {
  display:block;
  overflow: hidden;
  flex-direction:column;
  .menu-wrapper {
    flex: 0 0 80 * 2 * @rem;
    width: 80 * 2 * @rem;
    background: #f3f5f7;
    .menu-item {
      display: table;
      height: 54 * 2 * @rem;
      width: 100%;
      padding: 0 12 * 2 * @rem;
      line-height: 28 * @rem;
      position: relative;
      &.current{
          position: relative;
          z-index: 10;
          margin-top: -1px;
          background: #fff;
          }
      .text {
        display: table-cell;
        width: 56 * 2 * @rem;
        vertical-align: middle;
        font-size: 28 * @rem;
        text-align: center;
      }
      .num{
        text-align:center;
        position:absolute;
        background: rgb(240, 20, 20);
        top: 5px;
        right: 5px;
        padding:0 5px;
        border-radius: 30px;
        height: 30px;
        min-width: 30px;
        line-height: 30px;
        display: inline-block;
        color: #fff;
        font-size: 24px
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    .title {
      padding-left: 14 * 2 * @rem;
      height: 26 * 2 * @rem;
      line-height: 26 * 2 * @rem;
      border-left: 2 * 2 * @rem solid #d9dde1;
      font-size: 12 * 2 * @rem;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: 18 * 2 * @rem;
      padding-bottom: 18 * 2 * @rem;
      border-bottom: 1px solid rgba(7, 17, 27, 0.1);
      position: relative;
      &:last-child {
        border: none;
      }
      .icon {
        flex: 0 0 57 * 2 * @rem;
        margin-right: 10 * 2 * @rem;
        img {
          max-width: 120 * @rem;
          max-height: 120 * @rem;
        }
      }
      .content {
        flex: 1;
        position: relative;
        .name {
          padding-right: 15*@rem;
          width: 100%;
          margin: 2 * 2 * @rem 0 8 * 2 * @rem 0;
          line-height: 14 * 2 * @rem;
          font-size: 14 * 2 * @rem;
          color: rgb(7, 17, 27);
        }
        .desc, .extra{
            line-height: 10 * 2 * @rem;
            font-size: 12 * 2 * @rem;
            color: rgb(147, 153, 159);
            }
          .desc{
            line-height: 12 * 2 * @rem;
            margin-bottom: 8 * 2 * @rem;
            }
          .extra{
            .count{
              margin-right: 12 * 2 * @rem}
              }
          .price{
            font-weight: 700;
            line-height: 24 * 2 * @rem;
            .now{
              margin-right: 8 * 2 * @rem;
              font-size: 14 * 2 * @rem;
              color: rgb(240, 20, 20);}
            .old{
              text-decoration: line-through;
              font-size: 10 * 2 * @rem;
              color: rgb(147, 153, 159);font-weight: normal}
              }
          .cartcontrol-wrapper{
            position: absolute;
            right: 0;
            bottom: -5px}
      }
    }
  }
  .banner{width: 100%;height: 223*@rem; overflow:hidden;position: relative;
    img{width: 100%;height: 223*@rem;display: inline-block;}
  }
  .goodsbox{overflow: hidden;width: 100%; height: 100%; position: relative;}
  .wrapper{display: flex; overflow: hidden; position: absolute;bottom: 0;top:223*@rem;bottom: 96*@rem; width: 100%;margin-top:20*@rem}
}

</style>
