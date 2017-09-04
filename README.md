# react-router-training

### npm install
### npm start


#### 这是一个react-router关于路由前进后退时候lifecycle的测试
测试结果为，从homePage跳转到infoPage，homePage被销毁。
再从infoPage返回homePage时，不管props改不改变，homePage都会rerender调用componentWillMount、componentDidMount(componentWillReceiveProps)，并且infoPage自身组件被销毁调用componentWillUnmount。

##### 总结来说就是：  
1. push的时候组件会被销毁，goBack的时候，goBack的那一方组件也会被销毁。
2. 无论props发不发生改变，push或者goBack都会使组件rerender。

#### react-navigation VS  react-router
本人做过rn开发和react开发，发现这两者的路由机制有点不同，写了两个demo做下对比。可以看下上个repo，关于react-navigation的测试，两者对比下来有以下区别：
1. rn当中pop回某个页面时，只有props发生改变，组件才会rerender，react则是不管props发不发生改变都会rerender。
2. rn当中A页面push到B，B页面pop回A，props发生改变时，componentWillReceiveProps是在A页面中被调用，而react-router同样的场景下，A页面却不会调用componentWillReceiveProps，A页面相当于是拿到了最新的数据初始render，这一点和rn很不一样。


#### 以上描述的可能会有些不清楚，感兴趣的朋友可以clone项目跑一遍，看控制台输出就容易明白多了。
