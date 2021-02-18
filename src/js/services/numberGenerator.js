


const numberGenerator = (lower=0,upper=0) => {
    const numList=[]
    for (let i=lower;i<=upper;++i) numList.push(i)
    return numList;
}


export const randomArray = (lowerLimit=0,upperLimit=0) => {
  const numList= numberGenerator(lowerLimit,upperLimit);
   var tmp, current, top = numList.length;
   if(top) while(--top) {
     current = Math.floor(Math.random() * (top + 1));
     tmp = numList[current];
     numList[current] = numList[top];
     numList[top] = tmp;
   }
   return numList;
}