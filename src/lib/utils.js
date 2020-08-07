/*
 * 工具库
 **/
// localStorage
const Storage = {
    storage: window.localStorage,

    set(item, value) {
        return this.storage.setItem(item, JSON.stringify(value));
    },
    get(item) {
        const itemStr = this.storage.getItem(item);
        if (itemStr) {
            return JSON.parse(itemStr);
        } else {
            return null;
        }
    },
    remove(item) {
        return this.storage.removeItem(item);
    },
    clear() {
        return this.storage.clear();
    },
    keys() {
        let arr = [];
        for (let i = 0; i < window.localStorage.length; i++) {
            arr.push(window.localStorage.key(i));
        }
        return arr;
    }
};

// 正则
const Exp = {
    password:/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/,
    //工信部发文2017年第10批
    mobile: /^134[0-8]\d{7}$|^13[^4]\d{8}$|^14[5-9]\d{8}$|^15[^4]\d{8}$|^16[6]\d{8}$|^17[0-8]\d{8}$|^18[\d]{9}$|^19[8,9]\d{8}$/,
    email:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    //身份证
    idCard: /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/
};

// 函数节流
const Throttle = function(func, wait) {
    var context, args, timeout, result;
    var previous = 0;
    var later = function() {
        previous = new Date();
        timeout = null;
        result = func.apply(context, args);
    };
    return function() {
        var now = new Date();
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};

// 函数防抖
const Debounce = function(func, wait, immediate) {
    var timeout, result;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) result = func.apply(context, args);
        return result;
    };
};

//数组随机重新排布，underscore升级到 Fisher–Yates算法
const Shuffle = function(arr) {
    let m = arr.length;
    while (m > 1){
        let index = Math.floor(Math.random() * m--);
        [arr[m] , arr[index]] = [arr[index] , arr[m]]
    }
    return arr;
}


const deepClone = function(obj) {
    let objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                //判断ojb子元素是否为对象，如果是，递归复制
                if (obj[key] && typeof obj[key] === "object") {
                    objClone[key] = deepClone(obj[key]);
                } else {
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
};

const DuplicateArr=function(arr,type){
    var newArr = [];
    var tArr = [];
    if(arr.length == 0){
      return arr;
    }else{
      if(type){
        for(var i = 0; i < arr.length;i++){
          if(!tArr[arr[i][type]]){
            newArr.push(arr[i]);
            tArr[arr[i][type]] = true;
          }
        }
        return newArr;
      }else{
        for(var i = 0; i < arr.length;i++){
          if(!tArr[arr[i]]){
            newArr.push(arr[i]);
            tArr[arr[i]] = true;
          }
        }
        return newArr;
      }
    }
  }
export {
    Storage,
    Exp,
    Throttle,
    Debounce,
    Shuffle,
    deepClone,
    DuplicateArr
}
