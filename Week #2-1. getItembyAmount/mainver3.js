// 상품 데이터
const data = [
    { name: '밀크초콜렛', price: 2000 },
    { name: '초콜렛', price: 2000 },
    { name: '다크초콜렛', price: 2000 },
    { name: '카라멜초콜렛', price: 2000 },
    { name: '아이스크림', price: 1000 },
    { name: '컵라면', price: 1600 },
    { name: '볼펜', price: 2500 },
    { name: '연필', price: 2500 },
    { name: '아메리카노', price: 4000 },
    { name: '과자', price: 3000 },
    { name: '탄산수', price: 1200 },
    { name: '떡볶이', price: 3500 },
    { name: '노트', price: 1500 },
    { name: '껌', price: 500 }
  ];
  
  // 사용자 입력 받기
  const line = prompt('최대 금액을 입력해주세요.');
  const amount = parseInt(line);
  
  // 주어진 금액으로 살 수 있는 가장 비싼 상품을 구함
  const item = getItemByAmount(data, amount);
  
  const msg = item ? `${amount}원으로 살 수 있는 가장 비싼 상품은 [${item.name}]이고, 가격은 ${item.price}원입니다.` : '살 수 있는 상품이 없습니다.';
  
  // 결과 출력
  alert(msg);
  
  // 아래에 getItemByAmount 함수를 작성하세요.
  function getItemByAmount(data, amount) {
    if (isNaN(amount) == false) { //isNsN으로 입력값이 숫자인지 판별
      const buyable = data.filter(a=> a.price <= amount); //가격이 입력값 이하인것만 추리기
      const sorted = buyable.sort(function(a,b) { //추린 리스트를 가격 오름차순으로 정리하기
        return  a.price - b.price ;
      })
      const samePrice = sorted.filter(a=>a.price == sorted[sorted.length-1].price); 
      if (samePrice.length > 1) { //같은가격의 상품이 두개이상 있을때 전부 여기 집어넣는다.
        const tempNames = []; //임시로 사용할 변수를 놓고
        for (let i in samePrice) { //samePrice리스트에서 모든 name만 뽑아 tempNames로 집어넣는다.
          tempNames.push(samePrice[i].name);
        }
        const finalList ={name:'', price:''};//이름을 전부 합친 것과 가격을 담을 배열 준비
        finalList.name = tempNames; //final List 에 name에 준비한 이름을 전부 넣는다.
        finalList.price = sorted[sorted.length-1].price; //finalList에 가격을 하나만 넣는다.
        return finalList;
      }
      else {
        return sorted[sorted.length-1];
      }    
    }
    else {    
      alert('숫자만 입력하세요');
      window.alert = null;
      window.location.reload();//여기를 지나고 최소금액 이하를 입력하면 다시 창이 열리지 않음
    }
  }