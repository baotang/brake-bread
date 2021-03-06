var coverUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493919377490&di=b126dea7baf0fc123ed9a3bf2bd7822d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F67%2F45%2F42B58PICbzp_1024.jpg';
Page({
    data:{
        loading: true,
        scrollViewHeight: 100,
        filterItem: 'all',
        coverImage: '',
        list:[]
    },
    selectFilter: function (event) {
        let item = event.currentTarget.dataset.item;
        this.setData({
            filterItem: item,
            list:[],
            coverImage:'',
            loading: true,
        });
        this.getList(item);
    },
    className:function () {
        return 'filter-item item-active'
    },
    getList: function(item){
        this.setData({
            loading: true,
        });
      switch (item){
        case 'all':
          break;
        case 'category1':
          break;
        case 'category2':
          break;
        case 'category3':
          break;
      }
      let arr = this.data.list;
      for(let i = 0; i< 10; i++){
        let obj = {
          name: `小烘焙${i+1}`,
          price: '315.00',
          sales: 15,
          picUrl:'https://img.alicdn.com/imgextra/i3/2091172013/TB2KX0omC8mpuFjSZFMXXaxpVXa_!!2091172013.jpg_430x430q90.jpg'
        };
        arr.push(obj);
      }
      setTimeout(()=>{
        this.setData({
          coverImage: coverUrl,
          list: arr,
          loading: false
        });
      },1000)
    },
    loadMore: function(){
        this.getList(this.data.filterItem);
    },
    goDetail: function(event){
        let itemId = event.currentTarget.dataset.itemId;
        wx.pro.navigateTo({
            url: `/pages/bake-detail/bake?itemId=${itemId}`
        });
    },
    onLoad: function(){
        this.getList('all');
        let sysInfo = wx.getSystemInfoSync();
        console.log( sysInfo)
        this.setData({
            scrollViewHeight: sysInfo.windowHeight - 40
        })
    }
});
