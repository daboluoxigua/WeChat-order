<template>
  <div class="orderInfo">
    <div class="orderInfoCent" ref="orderInfo">
      <div>
        <div class="order-info">
          <div class="header">订单信息</div>
          <p>单号：{{orderid}}</p>
          <p>终端单号: {{showData.content.refOrderId}}</p>
          <p>就餐方式: {{showData.content.orderTypeStr}}</p>
          <p>下单时间：{{showData.content.createdAtStr}}</p>
          <p>支付方式：<span v-for="(item,index) in showData.content.paymentList" :key="index">{{item.payName}}{{showData.content.paymentList.length-1 > index ? ',':''}}</span></p>
        </div>
        <div class="order-info">
          <p v-for="(itemList,index) in showData.content.itemList" :key="index">
            <span>{{itemList.dishName}}：</span>
            <span>￥{{showData.content.orderTypeStr !== '堂食' ? (itemList.cost-itemList.takeFee).toFixed(2) : itemList.cost}}&nbsp;&nbsp;&nbsp;&nbsp;<del v-if="itemList.price !== itemList.cost" style='color:#999'>原价￥{{itemList.price}}</del></span>
            <span style='float: right;'>&nbsp;&nbsp;x{{itemList.quantity}}</span>
          </p>
          <p v-if="showData.content.takeoutFee > 0 && showData.content.orderTypeStr !== '堂食'">
            <span>打包费：</span>
            <span>￥{{showData.content.takeoutFee}}</span>
          </p>
          
          <p v-if="showData.content.marketDetailStr > 0">
            <span>优惠金额：</span>
            <span>￥{{showData.content.marketDetailStr}}</span>
          </p>
          <p>
            <span>总价：</span>
            <span>￥{{showData.content.total}}</span>
          </p>
          <p>
            <span>实付：</span>
            <span>￥{{showData.content.cost}}</span>
          </p>
        </div>
        <div class="order-info" v-if="showData.content.deliverCustomerInfo">
          <p>
            <span>收货人：</span>
            <span>{{showData.content.deliverCustomerInfo.customer}}</span>
          </p>
          <p>
            <span>联系电话：</span>
            <span>{{showData.content.deliverCustomerInfo.phone}}</span>
          </p>
          <p>
            <span>地址：</span>
            <span>{{showData.content.deliverCustomerInfo.address + showData.content.deliverCustomerInfo.detail}}</span>
          </p>
        </div>
      </div>
    </div>
    <button class="btn" @click="again">再来一单</button>
    <loading v-if="loading"></loading>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import loading from "../loading/loading.vue"; //加载中
import BScroll from "better-scroll";
export default {
  data() {
    return {
      loading: false,
      title: window.localStorage.getItem("welcomeSname"),
      iscomplete: true,
      orderid: this.$route.query.orderid,
      showData: {
        model: false,
        content: {
          callNumber: "",
          tableNames: "",
          paymentList: [{ payName: "" }]
        }
      }
    };
  },
  activated() {
    this.init();
  },
  methods: {
    init() {
      this.iscomplete = true;
      this.showData = {
        model: false,
        content: {
          callNumber: "",
          tableNames: "",
          paymentList: [{ payName: "" }]
        }
      };
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.orderInfo, {
            click: true
          });
        } else {
          this.scroll.refresh();
        }
      });
      this.componentDidMount();
    },
    componentDidMount() {
      this.loading = true;
      let dataList = {
        appid: window.localStorage.getItem("appid"),
        storeid: window.localStorage.getItem("storeid"),
        orderid: this.orderid
      };
      axios.post("../../wx/getOrderByOrderID", qs.stringify(dataList)).then(d => {
        const req = d.data;
        if (req.result == 0) {
          this.showData.content = req.content;
          this.getStoreModel();
        } else {
          alert(req.errmsg);
        }
      });
    },
    getStoreModel() {
      axios
        .post(
          "../../wx/getStoreConfiguration",
          qs.stringify({
            appid: window.localStorage.getItem("appid"),
            storeid: window.localStorage.getItem("storeid"),
            brandid: window.localStorage.getItem("brandid")
          })
        )
        .then(d => {
          const req = d.data;
          if (req.result == 0) {
            this.loading = false;
            this.showData.model = req.data.callNumberMode;
          } else {
            alert(req.errmsg);
          }
        });
    },
    again() {
      this.$router.push({ path: "/goods",query:{'time':new Date().getTime()}});
    }
  },
  components: {
    loading
  }
};
</script>
<style lang="less" scoped>
.orderInfo {
  background: #f6f6f6;
  padding: 0 20px;
  .orderInfoCent {
    margin-top: 20px;
    max-height: calc(100% - 180px);
    padding-bottom: 5px;
    overflow: hidden;
  }
  .order-info {
    background: #fff;
    text-align: left;
    margin: 20px 0 0;
    padding: 20px;
    line-height: 60px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    .header {
      font-size: 32px;
      border-bottom: 1px solid #ddd;
    }
  }
  .order-info:nth-child(2) {
    margin-top: 20px;
  }
  button {
    margin: 40px 0 0;
  }
}
</style>
